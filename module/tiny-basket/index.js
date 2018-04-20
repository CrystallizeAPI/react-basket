import React, { Fragment } from 'react';
import { translate } from 'react-i18next';

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
      t,
      state,
      actions,
      Spinner = DefaultSpinner,
      ItemCmp = TinyBasketItem,
      hideCoupon = false,
      hideRemainingUntilFreeShipping = false
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
          <BasketIsEmpty>{t('basket:empty', state)}</BasketIsEmpty>
        </Outer>
      );
    }

    return (
      <Outer>
        <Items>
          {items.map(item => (
            <ItemCmp actions={actions} key={item.reference} item={item} t={t} />
          ))}
        </Items>
        <Totals>
          <TotalsRows>
            <TotalsRow hideValue={validating} modifier="total-price">
              <span>{t('basket:totalPrice', state)}:</span>
              <span>{totalPrice},-</span>
            </TotalsRow>
            {discount && (
              <Fragment>
                <TotalsRow hideValue={validating} modifier="discount">
                  <span>{t('basket:discount', state)}:</span>
                  <span>{discount},-</span>
                </TotalsRow>
                <TotalsRow
                  hideValue={validating}
                  modifier="total-after-discount"
                >
                  <span>{t('basket:totalAfterDiscount', state)}:</span>
                  <span>{totalPriceMinusDiscount},-</span>
                </TotalsRow>
              </Fragment>
            )}
            <TotalsRow hideValue={validating} modifier="shipping">
              <span>{t('basket:shipping', state)}:</span>
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
              <span>{t('basket:amountToPay', state)}:</span>
              <span>{totalToPay},-</span>
            </TotalsRow>
            {validating && (
              <TotalsSpinner>
                <Spinner size="25" />
              </TotalsSpinner>
            )}
          </TotalsRows>
          {!hideCoupon && <Coupon Spinner={Spinner} />}
        </Totals>

        {!hideRemainingUntilFreeShipping &&
          !validating &&
          !freeShipping &&
          remainingUntilFreeShippingApplies > 0 && (
            <RemainingUntilFreeShipping>
              {t('basket:remainingUntilFreeShippingApplies', state)}
            </RemainingUntilFreeShipping>
          )}
      </Outer>
    );
  }
}

export const TinyBasket = translate(['common', 'basket'])(outerProps => (
  <BasketConsumer>
    {props => <TinyBasketInner {...props} {...outerProps} />}
  </BasketConsumer>
));
