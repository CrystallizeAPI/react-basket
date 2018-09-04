import React from 'react';
import styled, { keyframes } from 'styled-components';
import CrystallizeImage from '@crystallize/react-image';

import { animationSpeedMs } from '../helpers';

const animationItemHighlight = keyframes`
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(0.97);
    }
    75% {
      transform: scale(0.93);
    }
    100% {
      transform: scale(1);
    }
  `;

const Item = styled.li.attrs({
  className: 'crystallize-basket__item'
})`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  position: relative;
  ${p =>
    p.animate &&
    `
    animation: ${animationItemHighlight} ${animationSpeedMs}ms 1;
  `};
`;

const ItemInfo = styled.span.attrs({
  className: 'crystallize-basket__item-info'
})`
  display: flex;
  align-items: center;
`;

const ItemInfoText = styled.div.attrs({
  className: 'crystallize-basket__item-info-text'
})``;

const ItemImage = styled(CrystallizeImage).attrs({
  className: 'crystallize-basket__item-image'
})`
  width: 50px;
  margin-right: 10px;
`;

const ItemName = styled.div.attrs({
  className: 'crystallize-basket__item-name'
})``;

const ItemQuantityChanger = styled.span.attrs({
  className: 'crystallize-basket__item-quantity-changer'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemQuantity = styled.span.attrs({
  className: 'crystallize-basket__item-quantity'
})`
  display: inline-block;
  margin: 0 3px;
  min-width: 23px;
  text-align: center;
`;

const ItemDelete = styled.button.attrs({
  className: 'crystallize-basket__item-delete'
})`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0px;

  &:before {
    content: '+';
    display: block;
    transform: rotate(45deg);
    font-size: 12px;
  }
`;

const Attributes = styled.div.attrs({
  className: 'crystallize-basket__item-attributes'
})`
  margin-top: 5px;
  font-size: 0.8rem;
`;
const Attribute = styled.div.attrs({
  className: 'crystallize-basket__item-attribute'
})``;

const PriceWrap = styled.div.attrs({
  className: `crystallize-basket__item-price-wrap`
})`
  display: flex;
  margin-top: 5px;
`;

const Price = styled.div.attrs({
  className: p =>
    `crystallize-basket__item-price crystallize-basket__item-price--original ${p.isDiscounted &&
      'crystallize-basket__item-price--original-discounted'}`
})`
  ${p => p.isDiscounted && 'text-decoration: line-through'};
`;

const PriceDiscounted = styled.div.attrs({
  className: `crystallize-basket__item-price crystallize-basket__item-price--discounted`
})`
  margin-left: 10px;
`;

export default class TinyBasketItem extends React.Component {
  state = {};

  render() {
    const { item, actions, t, itemImageSizes = '100px' } = this.props;
    const { attributes } = item;

    const isDiscounted = !!item.discount_rate;

    const discountedPrice = Math.round(
      item.unit_price - item.unit_price * (item.discount_rate / 100)
    );

    return (
      <Item animate={item.animate}>
        <ItemInfo>
          <ItemImage
            src={item.product_image}
            alt={item.name}
            sizes={itemImageSizes}
          />
          <ItemInfoText>
            <ItemName>{item.name}</ItemName>
            {attributes &&
              attributes.length > 0 && (
                <Attributes>
                  {attributes.map(a => (
                    <Attribute key={a.attribute_key}>
                      {a.attribute_key}: {a.attribute_value}
                    </Attribute>
                  ))}
                </Attributes>
              )}
            <PriceWrap>
              <Price isDiscounted={isDiscounted}>
                {item.unit_price}
                ,-
              </Price>
              {isDiscounted && (
                <PriceDiscounted>
                  {discountedPrice}
                  ,-
                </PriceDiscounted>
              )}
            </PriceWrap>
          </ItemInfoText>
        </ItemInfo>
        <ItemQuantityChanger>
          <button
            onClick={() => actions.decrementQuantityItem(item)}
            type="button"
          >
            -
          </button>
          <ItemQuantity>{item.quantity}</ItemQuantity>
          <button
            onClick={() => actions.incrementQuantityItem(item)}
            type="button"
          >
            +
          </button>
        </ItemQuantityChanger>
        <ItemDelete onClick={() => actions.removeItem(item)}>
          {t('basket:removeItemFromBasket', item)}
        </ItemDelete>
      </Item>
    );
  }
}
