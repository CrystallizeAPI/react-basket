import React, { createContext } from 'react';

import * as helpers from './helpers';
import { retrieveBasketFromCache, persistBasketToCache } from './cache';

export const { parseBasketItem, createBasketItem } = helpers;

const BasketContext = createContext();

export class BasketProvider extends React.Component {
  constructor(props) {
    super(props);

    // Extract the supported options
    const { freeShippingMinimumPurchaseAmount = -1, shippingCost = -1 } = props;

    this.state = {
      ...this.getBasketState({ items: [] }),
      options: {
        shippingCost,
        freeShippingMinimumPurchaseAmount
      }
    };
  }

  componentDidMount() {
    this.getCachedBasket();
  }

  componentDidUpdate() {
    persistBasketToCache(this.state);
  }

  getCachedBasket = async () => {
    const basket = await retrieveBasketFromCache();
    if (basket) {
      this.setState(this.getBasketState(basket));
    }
  };

  getBasketState = ({ items, ...rest }) => {
    const { discount = 0, options } = this.state || {};
    const { freeShippingMinimumPurchaseAmount = -1, shippingCost = -1 } =
      options || {};

    const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);
    const totalPrice = items.reduce((acc, i) => acc + i.quantity * i.price, 0);

    const totalPriceMinusDiscount = totalPrice - discount;

    // Determine shipping related variables
    let freeShipping = false;
    let remainingUntilFreeShippingApplies = 0;
    if (
      freeShippingMinimumPurchaseAmount &&
      freeShippingMinimumPurchaseAmount !== -1
    ) {
      remainingUntilFreeShippingApplies =
        freeShippingMinimumPurchaseAmount - totalPriceMinusDiscount;
      if (remainingUntilFreeShippingApplies <= 0) {
        remainingUntilFreeShippingApplies = 0;
        freeShipping = true;
      }
    }

    return {
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay: totalPriceMinusDiscount + (freeShipping ? 0 : shippingCost),
      totalQuantity,
      freeShipping,
      remainingUntilFreeShippingApplies,
      items,
      ...rest
    };
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

      this.setState(
        this.getBasketState({
          items: [...items]
        })
      );

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
      this.setState(
        this.getBasketState({
          items: [...this.state.items, item]
        })
      );
    }
  };

  removeItem = item => this.changeItemQuantity({ item, quantity: 0 });

  empty = () => {
    this.setState(
      this.getBasketState({
        items: []
      })
    );
  };

  render() {
    const { options, ...state } = this.state;

    return (
      <BasketContext.Provider
        value={{
          state,
          options,
          actions: {
            empty: this.empty,
            addItem: this.addItem,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem
          }
        }}
      >
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
