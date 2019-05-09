import React, { createContext } from 'react';
import uuid from 'uuid/v1';

import * as helpers from './helpers';
import { retrieveBasketFromCache, persistBasketToCache } from './cache';

export const { createBasketItem, getSupportedOptionsFromProps } = helpers;

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

  static defaultProps = {
    t: p => p
  };

  state = {
    ready: false,
    items: [],
    options: {},
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
    function ensureProperties(names) {
      names.forEach(name => {
        if (!(name in item)) {
          throw new Error(
            `Basket item validation error: missing property "${name}" for`,
            item
          );
        }
      });
    }

    // const { t } = this.props;

    ensureProperties(['sku']);

    // let subscriptionName;
    // let subscriptionInitialInfo;
    // let subscriptionRenewalInfo;
    // if (item.subscription) {
    //   /* eslint-disable */
    //   item.subscription.initial_price_display =
    //     item.subscription.initial_price * (item.quantity || 1);
    //   item.subscription.renewal_price_display =
    //     item.subscription.renewal_price * (item.quantity || 1);
    //   /* eslint-enable */

    //   subscriptionName = t('basket:subscriptionItemName', item);

    //   subscriptionInitialInfo = t(
    //     'basket:subscriptionInitialInfo',
    //     item.subscription
    //   );

    //   subscriptionRenewalInfo = t(
    //     'basket:subscriptionRenewalInfo',
    //     item.subscription
    //   );
    // }

    let newBasketId = item.sku;
    if (this.subscription) {
      newBasketId = `${item.sku}-subscr-${this.subscription.variationplan_id}`;
    }

    return {
      basketId: newBasketId,
      quantity: 1,
      ...item
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

        if (this.state.options.onAddToBasket) {
          this.state.options.onAddToBasket([{ ...item, quantity: 1 }]);
        }
      }
    });

  findItemIndex = item => {
    const parsed = this.parseBasketItem(item);
    return this.state.items.findIndex(i => i.basketId === parsed.basketId);
  };

  pulsateItemInBasket = animItem => {
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
        discount: null
      })
    );

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
    const { children, t } = this.props;

    return (
      <BasketContext.Provider
        value={{
          state: {
            ...state
          },
          t,
          options,
          actions: {
            empty: this.empty,
            reset: this.reset,
            addItem: this.addItem,
            setItems: this.setItems,
            pulsateItemInBasket: this.pulsateItemInBasket,
            removeItem: this.removeItem,
            incrementQuantityItem: this.incrementQuantityItem,
            decrementQuantityItem: this.decrementQuantityItem,
            parseBasketItem: this.parseBasketItem,
            setDiscount: this.setDiscount,
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
