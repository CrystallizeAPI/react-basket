import React, { Component } from 'react';
import faker from 'faker';
import styled from 'styled-components';

import { BasketConsumer, createBasketItem } from 'module';

export const Outer = styled.div`
  width: 85vw;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
`;

export const Section = styled.div`
  flex: 1 1 250px;
  margin: 0 10px;

  > h2 {
    margin-bottom: 15px;
  }

  button {
    white-space: nowrap;
    margin-bottom: 5px;
    background: #ccc;
  }

  pre {
    font-size: 0.7rem;
    background: #fff;
    padding: 15px;
    max-width: 400px;
    max-height: 400px;
    overflow: auto;
  }
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
    object-fit: contain;
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

const testItem = {
  masterId: 347,
  name: 'MyoBCAA',
  sku: 'MY-12-347-enkel-amazing-apple',
  product_image:
    'https://accelerated.atoms.crystallize.digital/myrevolution/images/image_347_353_bcaa_myrevolution_aplle.png',
  product_image_resized: null,
  unit_price: 368,
  attributes: [
    {
      attribute_key: 'Smak',
      attribute_value: 'Amazing Apple',
      __typename: 'variation_attributes'
    },
    {
      attribute_key: 'Pakke',
      attribute_value: 'Enkel',
      __typename: 'variation_attributes'
    }
  ],
  metadata: {
    description: '',
    link: '/kosttilskudd/myobcaa'
  },
  reference: 'MY-12-347-enkel-amazing-apple',
  subscription: {
    name: 'Ukentlig',
    initial_price: 349,
    renewal_price: 349,
    initial_period_unit: 'weeks',
    initial_period: 1,
    duration: 1,
    duration_unit: 'weeks',
    renewal_term: '{ }',
    cancellation_term: '{ }',
    variationplan_id: 37,
    __typename: 'variation_plans'
  }
};

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
        catalogue(url: "/standard/monthly-illustration", tenantID: "demo") {
          name
          link
          product {
            id
            name
            vat {
              id
            }
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
        }
    }`);

    if (response.data) {
      const { product } = response.data.catalogue;
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
        {({ actions, state }) => (
          <Outer>
            <Section>
              <h2>Shipping:</h2>
              <div>
                <button
                  onClick={() =>
                    actions.setShipping({
                      reference: 'DE-9-43-standard',
                      price: 99
                    })
                  }
                >
                  Add standard shipping
                </button>
              </div>
              <div>
                <button onClick={() => actions.setShipping(null)}>
                  Remove shipping
                </button>
              </div>
            </Section>
            <Section>
              <h2>Metadata:</h2>
              <pre>{JSON.stringify(state.metadata, null, 2)}</pre>
              <div>
                <button
                  onClick={() =>
                    actions.setMetadata({
                      comment: faker.hacker.phrase(),
                      shippingAddress: {
                        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        email: faker.internet.email(),
                        phone: faker.phone.phoneNumber(),
                        streetName: faker.address.streetName(),
                        streetAddress: faker.address.streetAddress(),
                        zipCode: faker.address.zipCode(),
                        city: faker.address.city()
                      }
                    })
                  }
                >
                  Set metadata
                </button>
              </div>
              <div>
                <button onClick={() => actions.setMetadata({})}>
                  Remove metadata
                </button>
              </div>
            </Section>
            <Section>
              <h2>Products:</h2>
              <List>
                {this.state.products.slice(0, 4).map(v => (
                  <Item key={v.reference}>
                    <img src={v.product_image_resized} alt={v.name} />
                    <div>{v.reference}</div>
                    <div>
                      Price: {v.unit_price}
                      ,-
                    </div>
                    <Add>
                      <div>
                        <button
                          onClick={() => {
                            actions.addItem(v);
                            actions.animateItem(v);
                          }}
                        >
                          Add to basket
                        </button>
                        <button
                          onClick={() => {
                            const item = {
                              ...v,
                              subscription: {
                                name: 'Hvert kvartal',
                                initial_price: 98,
                                renewal_price: 98,
                                initial_period_unit: 'weeks',
                                initial_period: 1,
                                duration: 3,
                                duration_unit: 'months',
                                renewal_term: '{ }',
                                cancellation_term: '{ }',
                                variationplan_id: 61
                              }
                            };
                            actions.addItem(testItem);
                            actions.animateItem(testItem);
                          }}
                        >
                          Add to basket with subscription
                        </button>
                      </div>
                    </Add>
                  </Item>
                ))}
              </List>
              <hr />
              <button onClick={actions.empty}>Empty basket</button>
            </Section>
          </Outer>
        )}
      </BasketConsumer>
    );
  }
}
