import React, { Fragment } from 'react';
import { translate } from 'react-i18next';

import { BasketConsumer } from '../context';
import { Coupon } from '../coupon';
import DefaultSpinner from '../spinner';

import { Outer, Row, StrikeThrough, TotalsSpinner, Rows } from './styles';

export default class TotalsInner extends React.Component {
  state = {};

  render() {
    const {
      t,
      state,
      SpinnerCmp = DefaultSpinner,
      hideCoupon = false
    } = this.props;

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
            <span>
              {totalPrice}
              ,-
            </span>
          </Row>
          {discount && (
            <Fragment>
              <Row hideValue={validating} modifier="discount">
                <span>{t('basket:discount', state)}:</span>
                <span>
                  {discount}
                  ,-
                </span>
              </Row>
              <Row hideValue={validating} modifier="total-after-discount">
                <span>{t('basket:totalAfterDiscount', state)}:</span>
                <span>
                  {totalPriceMinusDiscount}
                  ,-
                </span>
              </Row>
            </Fragment>
          )}
          <Row hideValue={validating} modifier="shipping">
            <span>{t('basket:shipping', state)}:</span>
            {freeShipping ? (
              <span>
                {shipping &&
                  shipping.unit_price > 0 && (
                    <StrikeThrough>
                      {shipping.unit_price}
                      ,-
                    </StrikeThrough>
                  )}{' '}
                0,-
              </span>
            ) : (
              <span>
                {shipping ? shipping.unit_price : 0}
                ,-
              </span>
            )}
          </Row>
          <Row hideValue={validating} modifier="to-pay">
            <span>{t('basket:amountToPay', state)}:</span>
            <span>
              {totalToPay}
              ,-
            </span>
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

export const Totals = translate(['common', 'basket'])(outerProps => (
  <BasketConsumer>
    {props => <TotalsInner {...props} {...outerProps} />}
  </BasketConsumer>
));
