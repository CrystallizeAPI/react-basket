import React from 'react';
import Link from 'next/link';
import { BasketConsumer } from 'module';

import AddItem from './add-item';
import { Outer } from './styles';

export default class Header extends React.PureComponent {
  createItem = () => {
    const id = +new Date();
    return {
      id,
      sku: `sku-${id}`
    };
  };

  render() {
    return (
      <Outer>
        <Link href="/">
          <a>React basket</a>
        </Link>
        <BasketConsumer>
          {({ actions }) => <AddItem {...actions} />}
        </BasketConsumer>
      </Outer>
    );
  }
}
