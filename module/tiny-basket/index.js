import React, { Fragment } from 'react';
import styled from 'styled-components';

import { BasketConsumer } from '../context';
import TinyBasketItem from './item';

const Outer = styled.div.attrs({
  className: 'crystallize-basket crystallize-basket--tiny'
})`
  padding-bottom: 15px;
`;

const Items = styled.ul.attrs({
  className: 'crystallize-basket__items'
})`
  flex: 1 1 auto;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
`;

const BasketIsEmpty = styled.div.attrs({
  className: 'crystallize-basket__basket-is-empty'
})`
  text-align: center;
  margin: 25px;
`;

const Totals = styled.div.attrs({
  className: 'crystallize-basket__totals'
})`
  padding: 15px;
  flex: 0 0 auto;
`;

const TotalsRow = styled.div.attrs({
  className: p =>
    `crystallize-basket__totals-row crystallize-basket__totals-row--${
      p.modifier
    }`
})`
  display: grid;
  grid-template-columns: 2fr 1fr;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  > :last-child {
    text-align: right;
  }
`;

const RemainingUntilFreeShipping = styled.div.attrs({
  className: 'crystallize-basket__remaining-until-free-shipping'
})`
  text-align: center;
`;

const StrikeThrough = styled.span.attrs({
  className: 'crystallize-basket__strike-through'
})`
  text-decoration: line-through;
`;

class TinyBasketInner extends React.Component {
  render() {
    const { state, actions, options } = this.props;

    const {
      items,
      discount,
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay,
      freeShipping,
      remainingUntilFreeShippingApplies
    } = state;

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
            <TinyBasketItem actions={actions} key={item.sku} item={item} />
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
            {freeShipping ? (
              <span>
                <StrikeThrough>{options.shippingCost},-</StrikeThrough> 0,-
              </span>
            ) : (
              <span>
                {options.shippingCost <= 0 ? 0 : options.shippingCost},-
              </span>
            )}
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

export const TinyBasket = outerProps => (
  <BasketConsumer>
    {props => <TinyBasketInner {...props} {...outerProps} />}
  </BasketConsumer>
);
