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

export const Item = styled.div`
  img {
    height: 100px;
    margin-bottom: 5px;
  }
`;

export const Add = styled.div`
  margin-top: 5px;
`;

async function doFetch(query) {
  const body = JSON.stringify({
    query,
    variables: {},
    operationName: null
  });

  try {
    const request = await fetch(`${__crystallizeConfig.API_URL}/graphql`, {
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
    /* A tenant with product variants */
    const response = await doFetch(`{
      product (url: "/magasin/bunad-utgave-1-2017", tenantID: "bunad_magasinet") {
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

    if (response.data) {
      const { product } = response.data;
      this.setState({
        products: product.variations.map(variant =>
          createBasketItem({ masterProduct: product, variant })
        )
      });
    }
  }

  render() {
    return (
      <BasketConsumer>
        {({ actions }) => (
          <Outer>
            <h2>Shipping:</h2>
            <button
              onClick={() =>
                actions.setShipping({
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
                })
              }
            >
              Add standard shipping
            </button>
            <button onClick={() => actions.setShipping(null)}>
              Remove shipping
            </button>
            <br />
            <br />
            <h2>Products:</h2>
            <List>
              {this.state.products.map(v => (
                <Item key={v.reference}>
                  <img src={v.product_image_resized} alt={v.name} />
                  <div>{v.reference}</div>
                  <div>Price: {v.unit_price},-</div>
                  <Add>
                    <button onClick={() => actions.addItem(v)}>
                      Add to basket
                    </button>
                  </Add>
                </Item>
              ))}
            </List>
          </Outer>
        )}
      </BasketConsumer>
    );
  }
}
