import React from 'react';

import { Outer, Items, Item } from './styles';

export default class TinyBasketInner extends React.Component {
  render() {
    const { items, incrementQuantityItem, decrementQuantityItem } = this.props;

    if (!items.length) {
      return (
        <Outer>
          <Items>
            <Item>No items in basket</Item>
          </Items>
        </Outer>
      );
    }

    return (
      <Outer>
        <Items>
          {items.map(item => (
            <Item key={item.id}>
              {item.name}
              <button onClick={() => decrementQuantityItem(item)}>-</button>
              {item.quantity}
              <button onClick={() => incrementQuantityItem(item)}>+</button>
            </Item>
          ))}
        </Items>
      </Outer>
    );
  }
}
