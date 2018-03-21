import React from 'react';

import {
  Outer,
  Items,
  Item,
  ItemInfo,
  ItemImage,
  ItemQuantityChanger,
  ItemQuantity,
  EmptyTheBasket,
  BasketIsEmpty,
  Totals,
  TotalsRow,
  ItemDelete
} from './styles';

export default class TinyBasketInner extends React.Component {
  render() {
    const {
      items,
      totalPrice,
      incrementQuantityItem,
      decrementQuantityItem,
      removeItem
    } = this.props;

    if (!items.length) {
      return (
        <Outer>
          <BasketIsEmpty>No items in basket</BasketIsEmpty>
        </Outer>
      );
    }

    return (
      <Outer>
        <Items>
          {items.map(item => (
            <Item key={item.id}>
              <ItemInfo>
                <ItemImage src={item.product_image_resized} alt={item.name} />
                <div>
                  {item.name}
                  <br />
                  {item.price},-
                </div>
              </ItemInfo>
              <ItemQuantityChanger>
                <button onClick={() => decrementQuantityItem(item)}>-</button>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <button onClick={() => incrementQuantityItem(item)}>+</button>
              </ItemQuantityChanger>
              <ItemDelete onClick={() => removeItem(item)}>x</ItemDelete>
            </Item>
          ))}
        </Items>
        <Totals>
          <TotalsRow>
            <span>Total price:</span>
            <span>{totalPrice},-</span>
          </TotalsRow>
        </Totals>
        <EmptyTheBasket>
          <button onClick={this.props.empty}>Empty basket</button>
        </EmptyTheBasket>
      </Outer>
    );
  }
}
