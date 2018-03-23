import React, { Fragment } from 'react';

import {
  Outer,
  Items,
  Item,
  ItemInfo,
  ItemImage,
  ItemQuantityChanger,
  ItemQuantity,
  BasketIsEmpty,
  Totals,
  TotalsRow,
  ItemDelete,
  RemainingUntilFreeShipping
} from './styles';

export default class TinyBasketInner extends React.Component {
  render() {
    const {
      items,
      discount,
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay,
      incrementQuantityItem,
      decrementQuantityItem,
      removeItem,
      freeShipping,
      remainingUntilFreeShippingApplies,
      options
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
            <Item key={item.sku}>
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
          <TotalsRow modifier="total-price">
            <span>Total price:</span>
            <span>{totalPrice},-</span>
          </TotalsRow>
          {discount && (
            <Fragment>
              <TotalsRow modifier="discount">
                <span>Discount:</span>
                <span>{discount},-</span>
              </TotalsRow>
              <TotalsRow modifier="total-after-discount">
                <span>Total after discount:</span>
                <span>{totalPriceMinusDiscount},-</span>
              </TotalsRow>
            </Fragment>
          )}
          <TotalsRow modifier="shipping">
            <span>Shipping:</span>
            <span>{freeShipping ? '0,-' : `${options.shippingCost},-`}</span>
          </TotalsRow>
          <TotalsRow modifier="to-pay">
            <span>To pay:</span>
            <span>{totalToPay},-</span>
          </TotalsRow>
        </Totals>

        {!freeShipping &&
          remainingUntilFreeShippingApplies > 0 && (
            <RemainingUntilFreeShipping>
              Du mangler {remainingUntilFreeShippingApplies},- for fri frakt
            </RemainingUntilFreeShipping>
          )}
      </Outer>
    );
  }
}
