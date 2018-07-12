import React, { createContext } from 'react';
import uuid from 'uuid/v1';

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
    const newState = {
      options: {
        ...prevState.options,
        ...getSupportedOptionsFromProps(nextProps)
      }
    };

    if (!prevState.shipping && nextProps.defaultShipping) {
      newState.shipping = BasketProvider.createShippingBasketItem(
        nextProps.defaultShipping
      );
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

  onReady = fn => {
    if (this.state.ready) {
      fn();
    } else {
      this.onReadyQueue.push(fn);
    }
  };

  getCachedBasket = async () => {
    const id = uuid();
    const basket = await retrieveBasketFromCache();
    if (basket) {
      this.setState({ id, ...basket });
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
    const totalPrice = items.reduce(
      (acc, i) => acc + i.quantity * i.unit_price,
      0
    );

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
    if (!this.state.coupon && !this.state.options.alwaysValidate) {
      return;
    }

    this.setValidating(true);

    clearTimeout(this.validateBasketDelayedTimeout);
    this.validateBasketDelayedTimeout = setTimeout(async () => {
      const { items, coupon, options, shipping } = this.state;
      const { validateEndpoint } = options;

      try {
        let itemsToValidate = [...items];
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
            this.setDiscount(discount);
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
    const index = items.findIndex(i => i.sku === item.sku);
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
      const item = parseBasketItem(itemRaw);

      // Try to increment by one. If not, add new product to basket
      if (!this.changeItemQuantity({ item, num: 1 })) {
        this.setState({
          items: [...this.state.items, item]
        });

        this.validateBasketDelayed();

        if (this.state.options.onAddToBasket) {
          this.state.options.onAddToBasket([{ ...item, quantity: 1 }]);
        }
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
        id: uuid(),
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
            reset: this.reset,
            addItem: this.addItem,
            setItems: this.setItems,
            animateItem: this.animateItem,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem,
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
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
