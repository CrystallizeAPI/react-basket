import styled from 'styled-components';

export const Outer = styled.div.attrs({
  className: 'crystallize-basket crystallize-basket--tiny'
})`
  padding-bottom: 15px;
`;

export const Items = styled.ul.attrs({
  className: 'crystallize-basket__items'
})`
  flex: 1 1 auto;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
`;

export const BasketIsEmpty = styled.div.attrs({
  className: 'crystallize-basket__basket-is-empty'
})`
  text-align: center;
  margin: 25px;
`;

export const Totals = styled.div.attrs({
  className: 'crystallize-basket__totals'
})`
  padding: 15px;
  flex: 0 0 auto;
`;

export const TotalsRows = styled.div`
  position: relative;
`;

export const TotalsSpinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const TotalsRow = styled.div.attrs({
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

    opacity: ${p => (p.hideValue ? '0' : '1')};
  }
`;

export const RemainingUntilFreeShipping = styled.div.attrs({
  className: 'crystallize-basket__remaining-until-free-shipping'
})`
  text-align: center;
`;

export const StrikeThrough = styled.span.attrs({
  className: 'crystallize-basket__strike-through'
})`
  text-decoration: line-through;
`;
