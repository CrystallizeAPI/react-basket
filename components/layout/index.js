import React, { Fragment } from 'react';
import Head from 'next/head';
import { BasketProvider } from 'module';

import Header from '../header';
import { Outer, Main } from './styles';

const basketOptions = {
  freeShippingMinimumPurchaseAmount: 800,
  defaultShippingOld: {
    discount_rate: 0,
    name: 'Shipping',
    quantity: 1,
    reference: 'BM-1-Frakt-standard',
    tax_rate: 0,
    total_price_excluding_tax: 0,
    total_price_including_tax: 0,
    total_tax_amount: 0,
    type: 'shipping_fee',
    unit_price: 99
  },
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
