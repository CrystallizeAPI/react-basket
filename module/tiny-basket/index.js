import React from 'react';
import { translate } from 'react-i18next';

import { BasketConsumer } from '../context';
import { Totals } from '../totals';

import DefaultSpinner from '../spinner';
import TinyBasketItem from './item';

import {
  Outer,
  Items,
  BasketIsEmpty,
  RemainingUntilFreeShipping
} from './styles';

class TinyBasketInner extends React.Component {
  render() {
    const {
      t,
      state,
      actions,
      SpinnerCmp = DefaultSpinner,
      ItemCmp = TinyBasketItem,
      hideTotals = false,
      hideCoupon = false,
      hideRemainingUntilFreeShipping = false,
      itemImageSizes
    } = this.props;

    const {
      items,
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
            <ItemCmp
              actions={actions}
              key={item.basketId}
              item={item}
              t={t}
              itemImageSizes={itemImageSizes}
            />
          ))}
        </Items>

        {!hideTotals && (
          <Totals SpinnerCmp={SpinnerCmp} hideCoupon={hideCoupon} />
        )}

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
