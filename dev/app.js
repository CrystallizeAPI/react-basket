import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider, createClient } from 'urql';
import { useTranslation } from 'react-i18next';

import { BasketProvider, TinyBasket } from '../src';

import Products from './products';

const client = createClient({
  url: 'https://graph.crystallize.com/tenant/demo'
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 16px;
    margin: 0;
  }
`;

const Outer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ProductsWrap = styled.div`
  flex: 1 1 auto;
  padding: 30px 0;
`;

const BasketWrap = styled.div`
  flex: 0 0 400px;
  background: #f0f0f0;
`;

const basketOptions = {
  freeShippingMinimumPurchaseAmount: 600,
  onEmpty: () => console.log('emptied basket'),
  onAddToBasket: item => console.log('Add to basket', item),
  onRemoveFromBasket: item => console.log('Remove from basket', item)
};

export default () => {
  const { t } = useTranslation();

  return (
    <Provider value={client}>
      <BasketProvider {...basketOptions} t={t}>
        <GlobalStyle />
        <Outer>
          <ProductsWrap>
            <Products />
          </ProductsWrap>
          <BasketWrap>
            <TinyBasket />
          </BasketWrap>
        </Outer>
      </BasketProvider>
    </Provider>
  );
};
