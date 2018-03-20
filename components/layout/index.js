import React, { Fragment } from 'react';
import Head from 'next/head';
import { BasketProvider } from 'module';

import Header from '../header';
import { Outer, Main } from './styles';

export default class Layout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title key="title">React basket</title>
        </Head>
        <BasketProvider>
          <Outer>
            <Header />
            <Main>{this.props.children}</Main>
          </Outer>
        </BasketProvider>
      </Fragment>
    );
  }
}
