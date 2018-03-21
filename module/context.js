import React, { createContext } from 'react';
import localforage from 'localforage';

const localCacheKey = 'crystallize-basket';

async function retrieveBasketFromCache() {
  try {
    const basket = await localforage.getItem(localCacheKey);
    const parsed = JSON.parse(basket);
    parsed.items.forEach(normalizeBasketItem);
    return parsed;
  } catch (error) {
    console.warn('The basket was not retrieved', error);
  }
  return null;
}

async function persistBasketToCache(basket) {
  try {
    await localforage.setItem(localCacheKey, JSON.stringify(basket));
  } catch (error) {
    console.warn('The basket was not persisted', error);
  }
}

export function normalizeBasketItem(item) {
  return {
    name: 'No name',
    image: '/static/404.png',
    quantity: 1,
    ...item
  };
}

const BasketContext = createContext();

export class BasketProvider extends React.Component {
  state = {
    items: [],
    coupon: null
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
      this.setState(basket);
    }
  };

  changeItemQuantity = ({ item, num, remove }) => {
    const { items } = this.state;
    const index = items.findIndex(i => i.id === item.id && i.sku === item.sku);
    const itemInBasket = items[index];

    if (itemInBasket) {
      itemInBasket.quantity += num;

      if (itemInBasket.quantity === 0 || remove) {
        items.splice(index, 1);
      }

      this.setState({
        items: [...items]
      });
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
    const item = normalizeBasketItem(itemRaw);

    // Try to increment by one. If not, add new product to basket
    if (!this.changeItemQuantity({ item, num: 1 })) {
      this.setState({
        items: [...this.state.items, item]
      });
    }
  };

  removeItem = item => this.changeItemQuantity({ item, remove: true });

  render() {
    return (
      <BasketContext.Provider
        value={{
          state: this.state,
          actions: {
            addItem: this.addItem,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem
          }
        }}
      >
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}

export const BasketConsumer = BasketContext.Consumer;
