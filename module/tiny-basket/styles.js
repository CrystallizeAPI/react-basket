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

export const RemainingUntilFreeShipping = styled.div.attrs({
  className: 'crystallize-basket__remaining-until-free-shipping'
})`
  text-align: center;
`;

export const ItemIsSubscription = styled.strong`
  display: block;
  font-weight: bold;
`;
