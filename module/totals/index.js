import React, { Fragment } from 'react';

import { BasketContext } from '../context';
import { Coupon } from '../coupon';
import DefaultSpinner from '../spinner';

import { Outer, Row, StrikeThrough, TotalsSpinner, Rows } from './styles';

export class Totals extends React.Component {
  static contextType = BasketContext;

  state = {};

  render() {
    const { SpinnerCmp = DefaultSpinner, hideCoupon = false } = this.props;

    const { state, t } = this.context;

    const {
      discount,
      totalPrice,
      totalPriceMinusDiscount,
      totalToPay,
      shipping,
      freeShipping,
      validating
    } = state;

    return (
      <Outer>
        <Rows>
          <Row hideValue={validating} modifier="total-price">
            <span>{t('basket:totalPrice', state)}:</span>
            <span>{t('currency', { amount: totalPrice })}</span>
          </Row>
          {discount && (
            <Fragment>
              <Row hideValue={validating} modifier="discount">
                <span>{t('basket:discount', state)}:</span>
                <span>{t('currency', { amount: discount })}</span>
              </Row>
              <Row hideValue={validating} modifier="total-after-discount">
                <span>{t('basket:totalAfterDiscount', state)}:</span>
                <span>
                  {t('currency', { amount: totalPriceMinusDiscount })}
                </span>
              </Row>
            </Fragment>
          )}
          <Row hideValue={validating} modifier="shipping">
            <span>{t('basket:shipping', state)}:</span>
            {freeShipping ? (
              <span>
                {shipping && shipping.unit_price > 0 && (
                  <StrikeThrough>
                    {t('currency', { amount: shipping.unit_price })}
                  </StrikeThrough>
                )}{' '}
                {t('currency', { amount: 0 })}
              </span>
            ) : (
              <span>
                {t('currency', { amount: shipping ? shipping.unit_price : 0 })}
              </span>
            )}
          </Row>
          <Row hideValue={validating} modifier="to-pay">
            <span>{t('basket:amountToPay', state)}:</span>
            <span>{t('currency', { amount: totalToPay })}</span>
          </Row>
          {validating && (
            <TotalsSpinner>
              <SpinnerCmp size="25" />
            </TotalsSpinner>
          )}
        </Rows>
        {!hideCoupon && <Coupon SpinnerCmp={SpinnerCmp} />}
      </Outer>
    );
  }
}
