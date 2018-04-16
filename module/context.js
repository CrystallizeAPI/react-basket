import React, { createContext } from 'react';
import { setTranslations } from '@crystallize/translations';

import * as helpers from './helpers';
import { retrieveBasketFromCache, persistBasketToCache } from './cache';

export const {
  parseBasketItem,
  createBasketItem,
  getSupportedOptionsFromProps,
  validateBasket
} = helpers;

const BasketContext = createContext();

export class BasketProvider extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const tr = nextProps.translations || nextProps.tr;
    if (tr) {
      setTranslations(tr);
    }

    const newState = {
      options: {
        ...prevState.options,
        ...getSupportedOptionsFromProps(nextProps)
      }
    };

    if (!newState.shipping && nextProps.defaultShipping) {
      newState.shipping = nextProps.defaultShipping;
    }

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
      unit_price: 0,
      discount_rate: 0,
      quantity: 1,
      tax_rate: 0,
      total_price_excluding_tax: 0,
      total_price_including_tax: 0,
      total_tax_amount: 0,
      type: 'shipping_fee',
      ...shipping
    };
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
    metadata: null
  };

  onReadyQueue = [];
  itemAnimationTimeouts = [];

  componentDidMount() {
    this.getCachedBasket();
  }

  componentDidUpdate() {
    persistBasketToCache(this.state);
  }

  onReady = fn => {
    if (this.state.ready) {
      fn();
    } else {
      this.onReadyQueue.push(fn);
    }
  };

  getCachedBasket = async () => {
    const basket = await retrieveBasketFromCache();
    if (basket) {
      this.setState({ ...basket });
    }

    this.setState({ ready: true });

    this.onReadyQueue.forEach(fn => fn());
    this.onReadyQueue.length = 0;
  };

  calculateExtraBasketState = () => {
    const { items, discount = 0, options, shipping } = this.state;
    const { freeShippingMinimumPurchaseAmount = -1 } = options;

    const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);
    const totalPrice = items.reduce(
      (acc, i) => acc + i.quantity * i.unit_price,
      0
    );

    const totalPriceMinusDiscount = totalPrice - Math.abs(discount);

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

    return {
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay: totalPriceMinusDiscount + (freeShipping ? 0 : shippingCost),
      totalQuantity,
      freeShipping,
      remainingUntilFreeShippingApplies,
      items
    };
  };

  validateBasketDelayed = () => {
    // No coupon -> no validation needed
    if (!this.state.coupon) {
      return;
    }

    this.setValidating(true);

    clearTimeout(this.validateBasketDelayedTimeout);
    this.validateBasketDelayedTimeout = setTimeout(async () => {
      const { items, coupon, options } = this.state;
      const { validateEndpoint } = options;

      try {
        const result = await validateBasket({
          items,
          coupon,
          validateEndpoint
        });

        if (!result.error) {
          this.setItems(result.items);
          this.setDiscount(result.discount);
        }
      } catch (error) {
        console.error(error); // eslint-disable-line
      }

      this.setValidating(false);
    }, 250);
  };

  changeItemQuantity = ({ item, num, quantity }) => {
    const { items } = this.state;
    const index = items.findIndex(i => i.sku === item.sku);
    const itemInBasket = items[index];

    if (itemInBasket) {
      if (typeof quantity === 'number') {
        itemInBasket.quantity = quantity;
      } else if (typeof num === 'number') {
        itemInBasket.quantity += num;
      }

      if (itemInBasket.quantity === 0) {
        items.splice(index, 1);
      }

      this.setState({
        items: [...items]
      });

      this.validateBasketDelayed();

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
      const item = parseBasketItem(itemRaw);

      // Try to increment by one. If not, add new product to basket
      if (!this.changeItemQuantity({ item, num: 1 })) {
        this.setState({
          items: [...this.state.items, item]
        });
      }
    });

  animateItem = animItem => {
    return new Promise(async mainResolve => {
      // Remove queded animation
      const removeQueuedAnimation = async queueItem => {
        const index = this.itemAnimationTimeouts.findIndex(
          i => i.item.sku === animItem.sku
        );
        if (index >= 0) {
          clearTimeout(this.itemAnimationTimeouts[index].timeout);
          this.itemAnimationTimeouts.splice(index, 1);
          await updateStateItem(animItem, false);
        }
      };

      const updateStateItem = (stateItem, animate) => {
        return new Promise(resolve => {
          this.setState(
            {
              items: this.state.items.map(item => {
                if (item.sku === stateItem.sku) {
                  item.animate = animate;
                }
                return item;
              })
            },
            resolve
          );
        });
      };

      await removeQueuedAnimation(animItem);

      await updateStateItem(animItem, true);

      this.itemAnimationTimeouts.push({
        item: animItem,
        timeout: setTimeout(async () => {
          await removeQueuedAnimation(animItem);
          mainResolve();
        }, helpers.animationSpeedMs)
      });
    });
  };

  removeItem = item =>
    this.onReady(() => this.changeItemQuantity({ item, quantity: 0 }));

  empty = () =>
    this.onReady(() =>
      this.setState({
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

  setDiscount = discount => this.onReady(() => this.setState({ discount }));

  setMetadata = metadata => this.onReady(() => this.setState({ metadata }));

  setShipping = shipping =>
    this.onReady(() =>
      this.setState({
        shipping: BasketProvider.createShippingBasketItem(shipping)
      })
    );

  render() {
    const { options, ...state } = this.state;
    const calculatedState = this.calculateExtraBasketState();

    return (
      <BasketContext.Provider
        value={{
          state: {
            ...state,
            ...calculatedState
          },
          options,
          actions: {
            empty: this.empty,
            addItem: this.addItem,
            animateItem: this.animateItem,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem,
            setValidating: this.setValidating,
            setValidatingNewCoupon: this.setValidatingNewCoupon,
            setCoupon: this.setCoupon,
            setItems: this.setItems,
            setDiscount: this.setDiscount,
            setShipping: this.setShipping,
            setMetadata: this.setMetadata,
            onReady: this.onReady
          }
        }}
      >
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
