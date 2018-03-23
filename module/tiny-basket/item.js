import React from 'react';
import styled from 'styled-components';

const Item = styled.li.attrs({
  className: 'crystallize-basket__item'
})`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  position: relative;
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

const ItemImage = styled.img.attrs({
  className: 'crystallize-basket__item-image'
})`
  width: 50px;
  margin-right: 10px;
`;

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

const Price = styled.div.attrs({
  className: 'crystallize-basket__item-price'
})`
  margin-top: 5px;
`;

export default class TinyBasketItem extends React.Component {
  state = {};
  render() {
    const { item, actions } = this.props;
    const { attributes } = item;
    return (
      <Item>
        <ItemInfo>
          <ItemImage src={item.product_image_resized} alt={item.name} />
          <ItemInfoText>
            <div>{item.name}</div>
            {attributes &&
              attributes.length > 0 && (
                <Attributes>
                  {attributes.map(a => (
                    <Attribute>
                      {a.attribute_key}: {a.attribute_value}
                    </Attribute>
                  ))}
                </Attributes>
              )}
            <Price>{item.price},-</Price>
          </ItemInfoText>
        </ItemInfo>
        <ItemQuantityChanger>
          <button onClick={() => actions.decrementQuantityItem(item)}>-</button>
          <ItemQuantity>{item.quantity}</ItemQuantity>
          <button onClick={() => actions.incrementQuantityItem(item)}>+</button>
        </ItemQuantityChanger>
        <ItemDelete onClick={() => actions.removeItem(item)}>x</ItemDelete>
      </Item>
    );
  }
}
