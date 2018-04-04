import React, { Component } from 'react';
import styled from 'styled-components';

import { BasketConsumer, createBasketItem } from 'module';

export const Outer = styled.div`
  width: 85vw;
  max-width: 1600px;
  margin: 0 auto;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Item = styled.div``;

export const Add = styled.div`
  margin-top: 5px;
`;

const server_url = `http://api.crystallize.digital/graphql`;

async function doFetch(query) {
  const body = JSON.stringify({
    query,
    variables: {},
    operationName: null
  });

  try {
    const request = await fetch(server_url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body
    });

    return request.json();
  } catch (error) {
    return {};
  }
}

export default class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const response = await doFetch(`{
      product (url: "/smart-mat/myopancakes", tenantID: "myrevolution") {
        id
        name
        vat
        product_image
        product_image_resized
        variations {
          variation_sku
          price_ex_vat
          stock_count
          attributes {
            attribute_key
            attribute_value
          }
          variation_plans {
            name
            initial_price
            renewal_price
            initial_period_unit
            initial_period
            duration
            duration_unit
            renewal_term
            cancellation_term
            variationplan_id
          }
        }
      }
    }`);

    const { product } = response.data;

    this.setState({
      products: product.variations.map(variant =>
        createBasketItem({ masterProduct: product, variant })
      )
    });
  }

  render() {
    return (
      <Outer>
        <h1>Products:</h1>
        <List>
          <BasketConsumer>
            {({ actions }) =>
              this.state.products.map(v => (
                <Item key={v.reference}>
                  <div>{v.reference}</div>
                  <div>Price: {v.unit_price},-</div>
                  <Add>
                    <button onClick={() => actions.addItem(v)}>
                      Add to basket
                    </button>
                  </Add>
                </Item>
              ))
            }
          </BasketConsumer>
        </List>
      </Outer>
    );
  }
}
