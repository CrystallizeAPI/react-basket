import React from 'react';
import { translate } from 'react-i18next';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import { BasketContext } from '../context';
import { Totals } from '../totals';

import DefaultSpinner from '../spinner';
import TinyBasketItem from './item';

import {
  Outer,
  Items,
  BasketIsEmpty,
  RemainingUntilFreeShipping
} from './styles';

const PosedItem = posed.li({
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }
});

const StyledPosedItem = styled(PosedItem).attrs(p => ({
  className: `crystallize-basket__item${
    p.subscription ? ' crystallize-basket__item--has-subscription' : ''
  }`
}))`
  display: block;
  margin: 0;
`;

class TinyBasketInner extends React.Component {
  static contextType = BasketContext;

  render() {
    const {
      t,
      SpinnerCmp = DefaultSpinner,
      ItemCmp = TinyBasketItem,
      hideTotals = false,
      hideCoupon = false,
      hideRemainingUntilFreeShipping = false,
      itemImageSizes
    } = this.props;

    const { state, actions } = this.context;

    if (!state) {
      return null;
    }

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
          <PoseGroup>
            {items.map(item => (
              <StyledPosedItem key={item.basketId} item={item}>
                <ItemCmp
                  actions={actions}
                  item={item}
                  t={t}
                  itemImageSizes={itemImageSizes}
                />
              </StyledPosedItem>
            ))}
          </PoseGroup>
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

export const TinyBasket = translate(['common', 'basket'])(props => (
  <TinyBasketInner {...props} />
));
