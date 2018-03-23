import React from 'react';
import Link from 'next/link';

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
          <a>Crystallize React basket</a>
        </Link>
      </Outer>
    );
  }
}
