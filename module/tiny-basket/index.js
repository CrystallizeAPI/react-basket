import React, { Fragment } from 'react';
import { tr } from '@crystallize/translations';

import { BasketConsumer } from '../context';
import { Coupon } from '../coupon';

import TinyBasketItem from './item';
import DefaultSpinner from '../spinner';

import {
  Outer,
  Items,
  BasketIsEmpty,
  Totals,
  TotalsRow,
  RemainingUntilFreeShipping,
  StrikeThrough,
  TotalsSpinner,
  TotalsRows
} from './styles';

class TinyBasketInner extends React.Component {
  render() {
    const {
      state,
      actions,
      Spinner = DefaultSpinner,
      ItemCmp = TinyBasketItem
    } = this.props;

    const {
      items,
      discount,
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay,
      shipping,
      freeShipping,
      validating,
      remainingUntilFreeShippingApplies
    } = state;

    if (!items.length) {
      return (
        <Outer>
          <BasketIsEmpty>{tr('basket.basketIsEmpty')}</BasketIsEmpty>
        </Outer>
      );
    }

    return (
      <Outer>
        <Items>
          {items.map(item => (
            <ItemCmp actions={actions} key={item.reference} item={item} />
          ))}
        </Items>
        <Totals>
          <TotalsRows>
            <TotalsRow hideValue={validating} modifier="total-price">
              <span>{tr('basket.totalPrice')}:</span>
              <span>{totalPrice},-</span>
            </TotalsRow>
            {discount && (
              <Fragment>
                <TotalsRow hideValue={validating} modifier="discount">
                  <span>{tr('basket.discount')}:</span>
                  <span>{discount},-</span>
                </TotalsRow>
                <TotalsRow
                  hideValue={validating}
                  modifier="total-after-discount"
                >
                  <span>{tr('basket.totalAfterDiscount')}:</span>
                  <span>{totalPriceMinusDiscount},-</span>
                </TotalsRow>
              </Fragment>
            )}
            <TotalsRow hideValue={validating} modifier="shipping">
              <span>{tr('basket.shipping')}:</span>
              {freeShipping ? (
                <span>
                  {shipping && (
                    <StrikeThrough>{shipping.unit_price},-</StrikeThrough>
                  )}{' '}
                  0,-
                </span>
              ) : (
                <span>{shipping ? shipping.unit_price : 0},-</span>
              )}
            </TotalsRow>
            <TotalsRow hideValue={validating} modifier="to-pay">
              <span>{tr('basket.amountToPay')}:</span>
              <span>{totalToPay},-</span>
            </TotalsRow>
            {validating && (
              <TotalsSpinner>
                <Spinner size="25" />
              </TotalsSpinner>
            )}
          </TotalsRows>
          <Coupon Spinner={Spinner} />
        </Totals>

        {!validating &&
          !freeShipping &&
          remainingUntilFreeShippingApplies > 0 && (
            <RemainingUntilFreeShipping>
              {tr('basket.remainingUntilFreeShippingApplies', {
                remainingUntilFreeShippingApplies
              })}
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
