import styled from 'styled-components';

export const Outer = styled.div.attrs({
  className: 'crystallize-basket__totals'
})`
  padding: 15px;
  flex: 0 0 auto;
`;

export const Rows = styled.div.attrs({
  className: 'crystallize-basket__totals-rows'
})`
  position: relative;
`;

export const TotalsSpinner = styled.div.attrs({
  className: 'crystallize-basket__totals-spinner'
})`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const Row = styled.div.attrs({
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

export const StrikeThrough = styled.span.attrs({
  className: 'crystallize-basket__strike-through'
})`
  text-decoration: line-through;
`;
