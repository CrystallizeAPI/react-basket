import React, { Fragment } from 'react';
import Head from 'next/head';
import { BasketProvider } from 'module';

import Header from '../header';
import { Outer, Main } from './styles';

const basketOptions = {
  alwaysValidate: true,
  freeShippingMinimumPurchaseAmount: 800,
  onEmpty: () => console.log('emptied basket'), // eslint-disable-line
  onAddToBasket: item => console.log('Add to basket', item), // eslint-disable-line
  onRemoveFromBasket: item => console.log('Remove from basket', item), // eslint-disable-line
  defaultShipping: {
    sku: 'BP-X-shipping-mypack',
    name: 'Frakt - MyPack',
    price: 59,
    displayName: 'MyPack',
    description: 'Få varene levert til nærmeste utleveringssted dude!',
    'COLLIFLOW-REFERENCE': 'POSTNORD',
    transporterContract: {
      name: 'MyPack T1',
      reference: 'POSTNORD'
    }
  }
};

export default class Layout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title key="title">Crystallize - React basket</title>
        </Head>
        <BasketProvider {...basketOptions}>
          <Outer>
            <Header />
            <Main>{this.props.children}</Main>
          </Outer>
        </BasketProvider>
      </Fragment>
    );
  }
}
