import styled from 'styled-components';

export const Outer = styled.div.attrs({
  className: 'crystallize-basket crystallize-basket--tiny'
})`
  padding-bottom: 15px;
`;

export const Items = styled.ul.attrs({
  className: 'crystallize-basket__items'
})`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li.attrs({
  className: 'crystallize-basket__item'
})`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  position: relative;
`;

export const ItemInfo = styled.span.attrs({
  className: 'crystallize-basket__item-info'
})`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img.attrs({
  className: 'crystallize-basket__item-image'
})`
  width: 50px;
  margin-right: 10px;
`;

export const ItemQuantityChanger = styled.span.attrs({
  className: 'crystallize-basket__item-quantity-changer'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemQuantity = styled.span.attrs({
  className: 'crystallize-basket__item-quantity'
})`
  display: inline-block;
  margin: 0 3px;
  min-width: 23px;
  text-align: center;
`;

export const ItemDelete = styled.button.attrs({
  className: 'crystallize-basket__item-delete'
})`
  position: absolute;
  top: 2px;
  right: 2px;
`;

export const BasketIsEmpty = styled.div.attrs({
  className: 'crystallize-basket__basket-is-empty'
})`
  text-align: center;
  margin: 25px;
`;

export const EmptyTheBasket = styled.div.attrs({
  className: 'crystallize-basket__empty-the-basket'
})`
  text-align: center;
  margin-top: 15px;
`;

export const Totals = styled.div.attrs({
  className: 'crystallize-basket__totals'
})`
  margin: 15px;
`;

export const TotalsRow = styled.div.attrs({
  className: 'crystallize-basket__totals-row'
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
