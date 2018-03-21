import React, { Fragment } from 'react';

export default class AddItem extends React.Component {
  createItem = () => {
    const id = +new Date();
    return {
      id,
      sku: `sku-${id}`,
      product_image_resized: '/static/404.png',
      price: Math.floor(Math.random() * 100)
    };
  };

  add = () => {
    this.props.addItem(this.createItem());
  };

  addSnowball = () => {
    this.props.addItem({
      id: 'snowball',
      sku: 'snowball-1',
      name: 'Awesome snowball',
      product_image_resized: '/static/snowball.png',
      price: 99
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.add}>Add a new random item</button>
        <button onClick={this.addSnowball}>Add a snowball</button>
      </Fragment>
    );
  }
}
