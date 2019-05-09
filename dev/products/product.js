import React from 'react';
import styled from 'styled-components';

import { BasketContext } from '../../src';

const Outer = styled.article`
  display: flex;
  min-height: 40px;
  align-items: center;
  padding: 5px 0;
`;

const ImageWrap = styled.div`
  flex: 0 0 75px;
  height: 75px;
  margin-right: 15px;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  flex: 1 1 auto;
`;

const Price = styled.div`
  flex: 0 0 auto;
  font-size: 1.25rem;
  margin: 0 15px;
`;

const Actions = styled.div`
  flex: 0 0 auto;
`;

const Product = ({ name, variants }) => {
  const [variant] = variants;

  return (
    <Outer>
      <ImageWrap>
        {variant.image && <img src={variant.image.url} alt={name} />}
      </ImageWrap>
      <Name>{name}</Name>
      <Price>{variant.price}</Price>
      <Actions>
        <BasketContext.Consumer>
          {({ actions }) => (
            <button type="button" onClick={() => actions.addItem(variant)}>
              Add
            </button>
          )}
        </BasketContext.Consumer>
      </Actions>
    </Outer>
  );
};

export default Product;
