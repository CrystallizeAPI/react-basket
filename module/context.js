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

    if (!newState.shipping && nextProps.shipping) {
      newState.shipping = nextProps.shipping;
    }

    return newState;
  }

  /* eslint-disable */
  static createShippingBasketItem(shipping) {
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
    shipping: null
  };

  componentDidMount() {
    this.getCachedBasket();
  }

  componentDidUpdate() {
    persistBasketToCache(this.state);
  }

  getCachedBasket = async () => {
    const basket = await retrieveBasketFromCache();
    if (basket) {
      this.setState({ ...basket, ready: true });
    }
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

    // Create the checkout model. It will include the shipping as well as the items
    const checkoutItems = [...items];
    if (shipping) {
      checkoutItems.push(BasketProvider.createShippingBasketItem(shipping));
    }

    const shippingCost = shipping ? shipping.unit_price : 0;

    return {
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay: totalPriceMinusDiscount + shippingCost,
      totalQuantity,
      freeShipping,
      remainingUntilFreeShippingApplies,
      items,
      checkoutItems
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

  incrementQuantityItem = item => {
    this.changeItemQuantity({ item, num: 1 });
  };

  decrementQuantityItem = item => {
    this.changeItemQuantity({ item, num: -1 });
  };

  addItem = itemRaw => {
    const item = parseBasketItem(itemRaw);

    // Try to increment by one. If not, add new product to basket
    if (!this.changeItemQuantity({ item, num: 1 })) {
      this.setState({
        items: [...this.state.items, item]
      });
    }
  };

  removeItem = item => this.changeItemQuantity({ item, quantity: 0 });

  empty = () => {
    this.setState({
      items: []
    });
  };

  setValidating = validating => this.setState({ validating });
  setValidatingNewCoupon = validatingNewCoupon =>
    this.setState({ validatingNewCoupon });

  setCoupon = coupon => this.setState({ coupon });

  setItems = items => this.setState({ items });

  setDiscount = discount => this.setState({ discount });

  setShipping = shipping => this.setState({ shipping });

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
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem,
            setValidating: this.setValidating,
            setValidatingNewCoupon: this.setValidatingNewCoupon,
            setCoupon: this.setCoupon,
            setItems: this.setItems,
            setDiscount: this.setDiscount
          }
        }}
      >
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
