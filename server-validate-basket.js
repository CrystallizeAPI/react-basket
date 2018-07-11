const fetch = require('cross-fetch');

const validateBasketRequest = async ({ validateEndpoint, basket }) => {
  const response = await fetch(validateEndpoint, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(basket)
  });

  return response.json();
};

// Validate the basket if there is a coupon present.
async function validateBasket({ validateEndpoint, items, coupon }) {
  let discount = null;

  if (items.length === 0) {
    return {
      coupon,
      items: [],
      totalAmount: 0,
      discount
    };
  }

  try {
    const result = await validateBasketRequest({
      validateEndpoint,
      basket: {
        items: items.filter(
          item => !['discount', 'shipping', 'shipping_fee'].includes(item.type)
        ),
        coupon: {
          code: coupon
        }
      }
    });

    if (result.status === 'INVALID') {
      return result;
    }

    const discountItem = result.find(item => item.type === 'discount');
    if (discountItem) {
      discount = discountItem.unit_price;
    }

    // Transform the cart items so that they are validated by Klarna
    const itemsTransformed = result
      .filter(item => item.type !== 'discount')
      .map(i => {
        const item = { ...i };

        item.tax_rate = item.tax_rate || item.vat || 0;
        item.discount_rate = item.discount_rate || 0;
        delete item.vat;

        return item;
      });

    // Calculate the total order value minus shipping and discount
    const totalAmount = itemsTransformed.reduce(
      (accumulator, item) => accumulator + item.unit_price * item.quantity,
      0
    );

    return {
      coupon,
      items: itemsTransformed,
      totalAmount,
      discount,
      discountBasketModel: discountItem
    };
  } catch (error) {
    console.warn('@crystallize/react-basket', error); // eslint-disable-line

    return {
      error
    };
  }
}

module.exports = validateBasket;
