import React, { createContext } from 'react';
import uuid from 'uuid/v1';

import * as helpers from './helpers';
import { retrieveBasketFromCache, persistBasketToCache } from './cache';

export const {
  createBasketItem,
  getSupportedOptionsFromProps,
  validateBasket
} = helpers;

export const BasketContext = createContext();

function createId() {
  return `${Date.now()}-${uuid()}`;
}

export class BasketProvider extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const newState = {
      options: {
        ...prevState.options,
        ...getSupportedOptionsFromProps(nextProps)
      }
    };

    return newState;
  }

  /* eslint-disable */
  static createShippingBasketItem(shipping) {
    if (!shipping) {
      return shipping;
    }

    return {
      name: 'Shipping',
      reference: 'not-set',
      discount_rate: 0,
      quantity: 1,
      tax_rate: 0,
      total_price_excluding_tax: 0,
      total_price_including_tax: 0,
      total_tax_amount: 0,
      type: 'shipping_fee',
      unit_price: shipping.price || 0,
      ...shipping
    };
  }

  static defaultProps = {
    t: p => p
  };

  constructor(props) {
    super(props);

    if (props.defaultShipping) {
      this.state.shipping = BasketProvider.createShippingBasketItem(
        props.defaultShipping
      );
    }
  }

  state = {
    ready: false,
    items: [],
    options: {},
    validating: false,
    validatingNewCoupon: false,
    coupon: null,
    discount: null,
    shipping: null,
    metadata: {}
  };

  onReadyQueue = [];
  itemAnimationTimeouts = [];

  componentDidMount() {
    this.getCachedBasket();
  }

  componentDidUpdate() {
    persistBasketToCache(this.state);
  }

  parseBasketItem = ({ basketId, ...item }) => {
    function ensureProperty(name, fallbackValue) {
      if (typeof item[name] === 'undefined') {
        /* eslint-disable */
        console.warn(
          `Basket item validation error: missing property "${name}" for`,
          item
        );
        /* eslint-enable */

        return fallbackValue;
      }
      return item[name];
    }

    const { t } = this.props;

    const sku = ensureProperty('sku', item.variation_sku);
    const name = ensureProperty('name', 'No name');

    let subscriptionName;
    let subscriptionInitialInfo;
    let subscriptionRenewalInfo;
    if (item.subscription) {
      /* eslint-disable */
      item.subscription.initial_price_display =
        item.subscription.initial_price * (item.quantity || 1);
      item.subscription.renewal_price_display =
        item.subscription.renewal_price * (item.quantity || 1);
      /* eslint-enable */

      subscriptionName = t('basket:subscriptionItemName', item);

      subscriptionInitialInfo = t(
        'basket:subscriptionInitialInfo',
        item.subscription
      );

      subscriptionRenewalInfo = t(
        'basket:subscriptionRenewalInfo',
        item.subscription
      );
    }

    return {
      get basketId() {
        if (this.subscription) {
          return `${item.sku}-subscr-${this.subscription.variationplan_id}`;
        }
        return item.sku;
      },
      name,
      unit_price: ensureProperty('unit_price', item.price_ex_vat || 0),
      reference: sku,
      sku,
      quantity: 1,
      ...item,
      subscriptionName,
      subscriptionInitialInfo,
      subscriptionRenewalInfo
    };
  };

  onReady = fn => {
    if (this.state.ready) {
      fn();
    } else {
      this.onReadyQueue.push(fn);
    }
  };

  getCachedBasket = async () => {
    const id = createId();
    const basket = await retrieveBasketFromCache({
      parseBasketItem: this.parseBasketItem
    });
    if (basket) {
      const { items, ...rest } = basket;

      this.setState({
        id,
        ...rest,
        items: items.map(this.parseBasketItem)
      });
    } else {
      this.setState({ id });
    }

    this.setState({ ready: true });

    this.onReadyQueue.forEach(fn => fn());
    this.onReadyQueue.length = 0;
  };

  calculateExtraBasketState = () => {
    const { items, discount, options, shipping } = this.state;
    const { freeShippingMinimumPurchaseAmount = -1 } = options;

    const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);

    const totalPrice = items.reduce((acc, i) => {
      const p =
        i.quantity *
        (i.subscription ? i.subscription.initial_price : i.unit_price);
      return acc + p;
    }, 0);

    const totalPriceMinusDiscount = totalPrice - Math.abs(discount || 0);

    // Determine shipping related variables
    let freeShipping = false;
    let remainingUntilFreeShippingApplies = 0;
    if (
      freeShippingMinimumPurchaseAmount &&
      freeShippingMinimumPurchaseAmount > 0
    ) {
      remainingUntilFreeShippingApplies =
        freeShippingMinimumPurchaseAmount - totalPriceMinusDiscount;
      if (remainingUntilFreeShippingApplies <= 0) {
        remainingUntilFreeShippingApplies = 0;
        freeShipping = true;
      }
    }

    const shippingCost = shipping ? shipping.unit_price : 0;

    let totalToPay = totalPriceMinusDiscount;
    if (!freeShipping && shippingCost) {
      totalToPay += shippingCost;
    }

    return {
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay,
      totalQuantity,
      freeShipping,
      remainingUntilFreeShippingApplies,
      items
    };
  };

  validateBasketDelayed = () => {
    // No coupon -> no validation needed
    if (!this.state.coupon && !this.state.options.alwaysValidate) {
      return;
    }

    this.setValidating(true);

    clearTimeout(this.validateBasketDelayedTimeout);
    this.validateBasketDelayedTimeout = setTimeout(async () => {
      const { items, coupon, options, shipping } = this.state;
      const { validateEndpoint } = options;

      try {
        const itemsToValidate = [...items];
        if (shipping) {
          itemsToValidate.push(shipping);
        }

        const result = await validateBasket({
          items: itemsToValidate,
          coupon,
          validateEndpoint
        });

        if (!result.error && result.status !== 'INVALID') {
          const shippingItem = result.items.find(
            i => i.type === 'shipping_fee'
          );
          if (shippingItem) {
            this.setShipping(shippingItem);
          }

          const basketItems = result.items.filter(
            i => i.type !== 'shipping_fee'
          );
          this.setItems(basketItems);

          let { discount } = result;
          if (!discount) {
            discount = 0;
            basketItems.forEach(item => {
              discount -= item.discount_value;
            });
          }

          if (discount) {
            this.setDiscount(discount, false);
          }
        }
      } catch (error) {
        console.error(error); // eslint-disable-line
      }

      this.setValidating(false);
    }, 250);
  };

  changeItemQuantity = ({ item, num, quantity }) => {
    const { items } = this.state;
    const index = this.findItemIndex(item);
    const itemInBasket = items[index];

    if (itemInBasket) {
      const itemInBasketOldQuantity = itemInBasket.quantity;

      if (typeof quantity === 'number') {
        itemInBasket.quantity = quantity;
      } else if (typeof num === 'number') {
        itemInBasket.quantity += num;
      }

      if (itemInBasket.quantity === 0) {
        items.splice(index, 1);
      } else {
        items[index] = this.parseBasketItem(itemInBasket);
      }

      this.setState({
        items: [...items]
      });

      this.validateBasketDelayed();

      const quantityChange = itemInBasket.quantity - itemInBasketOldQuantity;
      if (quantityChange > 0) {
        if (this.state.options.onAddToBasket) {
          this.state.options.onAddToBasket([
            {
              ...item,
              quantity: quantityChange
            }
          ]);
        }
      } else if (quantityChange < 0) {
        if (this.state.options.onRemoveFromBasket) {
          this.state.options.onRemoveFromBasket([
            {
              ...item,
              quantity: Math.abs(quantityChange)
            }
          ]);
        }
      }

      return true;
    }
    return false;
  };

  incrementQuantityItem = item =>
    this.onReady(() => {
      this.changeItemQuantity({ item, num: 1 });
    });

  decrementQuantityItem = item =>
    this.onReady(() => {
      this.changeItemQuantity({ item, num: -1 });
    });

  addItem = itemRaw =>
    this.onReady(() => {
      const item = this.parseBasketItem(itemRaw);

      // Try to increment by one. If not, add new product to basket
      if (!this.changeItemQuantity({ item, num: 1 })) {
        this.setState(s => ({
          items: [...s.items, item]
        }));

        this.validateBasketDelayed();

        if (this.state.options.onAddToBasket) {
          this.state.options.onAddToBasket([{ ...item, quantity: 1 }]);
        }
      }
    });

  findItemIndex = item => {
    const parsed = this.parseBasketItem(item);
    return this.state.items.findIndex(i => i.basketId === parsed.basketId);
  };

  animateItem = animItem => {
    const parsedItem = this.parseBasketItem(animItem);

    return new Promise(async mainResolve => {
      const updateStateItem = (stateItem, animate) =>
        new Promise(resolve => {
          this.setState(
            s => ({
              items: s.items.map(item => {
                if (item.basketId === stateItem.basketId) {
                  return {
                    ...item,
                    animate
                  };
                }
                return item;
              })
            }),
            resolve
          );
        });

      // Remove queued animation
      const removeQueuedAnimation = async () => {
        const index = this.itemAnimationTimeouts.findIndex(
          i => i.item.basketId === parsedItem.basketId
        );
        if (index >= 0) {
          clearTimeout(this.itemAnimationTimeouts[index].timeout);
          this.itemAnimationTimeouts.splice(index, 1);
          await updateStateItem(parsedItem, false);
        }
      };

      await removeQueuedAnimation(parsedItem);

      await updateStateItem(parsedItem, true);

      this.itemAnimationTimeouts.push({
        item: parsedItem,
        timeout: setTimeout(async () => {
          await removeQueuedAnimation(parsedItem);
          mainResolve();
        }, helpers.animationSpeedMs)
      });
    });
  };

  removeItem = item =>
    this.onReady(() => this.changeItemQuantity({ item, quantity: 0 }));

  empty = () =>
    this.onReady(() => {
      if (this.state.options.onRemoveFromBasket) {
        this.state.options.onRemoveFromBasket(this.state.items);
      }
      this.setState({
        items: []
      });
    });

  reset = () =>
    this.onReady(() =>
      this.setState({
        id: createId(),
        items: [],
        metadata: null,
        coupon: null,
        discount: null
      })
    );

  setValidating = validating =>
    this.onReady(() => this.setState({ validating }));

  setValidatingNewCoupon = validatingNewCoupon =>
    this.onReady(() => this.setState({ validatingNewCoupon }));

  setCoupon = coupon => this.onReady(() => this.setState({ coupon }));

  setItems = items => this.onReady(() => this.setState({ items }));

  setDiscount = (discount, doValidateBasket = true) =>
    this.onReady(() =>
      this.setState({ discount }, () => {
        if (doValidateBasket) {
          this.validateBasketDelayed();
        }
      })
    );

  setMetadata = metadata => this.onReady(() => this.setState({ metadata }));

  setShipping = shipping =>
    this.onReady(() =>
      this.setState({
        shipping: BasketProvider.createShippingBasketItem(shipping)
      })
    );

  render() {
    const { options, ...state } = this.state;
    const { children, t } = this.props;
    const calculatedState = this.calculateExtraBasketState();

    return (
      <BasketContext.Provider
        value={{
          state: {
            ...state,
            ...calculatedState
          },
          t,
          options,
          actions: {
            empty: this.empty,
            reset: this.reset,
            addItem: this.addItem,
            setItems: this.setItems,
            animateItem: this.animateItem,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem: this.parseBasketItem,
            setValidating: this.setValidating,
            setValidatingNewCoupon: this.setValidatingNewCoupon,
            setCoupon: this.setCoupon,
            setDiscount: this.setDiscount,
            setShipping: this.setShipping,
            setMetadata: this.setMetadata,
            onReady: this.onReady
          }
        }}
      >
        {children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
