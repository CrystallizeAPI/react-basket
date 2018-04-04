export function getTranslationsFromProps(tr) {
  return {
    clickToAddCoupon: 'Click here to add a coupon',
    inputCoupon: 'Input coupon below',
    registerCoupon: 'Register coupon',
    cancel: 'Cancel',
    thisCouponIsNotValid: 'This coupon is not valid',
    anErrorOccurred: 'An error occurred. Please try again.',
    ...tr
  };
}

export const generateUniqueId = (function iife() {
  let idIncremenet = 0;

  return name => `crystallize-${name}-${idIncremenet++}`;
})();

export function parseBasketItem(item) {
  function ensureProperty(name, fallbackValue) {
    if (typeof item[name] === 'undefined') {
      /* eslint-disable */
      console.warn(
        `Basket item validation error: missing property "${name}" for`,
        item
      );
      /* eslint-enable */

      return fallbackValue;
    }
    return item[name];
  }

  const sku = ensureProperty('sku', item.variation_sku);

  return {
    name: ensureProperty('name', 'No name'),
    unit_price: ensureProperty('unit_price', item.price_ex_vat || 0),
    reference: sku,
    sku,
    quantity: 1,
    ...item
  };
}

export function createBasketItem({ masterProduct, variant }) {
  const basketItem = {};
  if (!variant) {
    /* eslint-disable */
    console.error('Could not create basket item. Please provide the variant!');
    /* eslint-enable */
  } else {
    basketItem.sku = variant.variation_sku;
    basketItem.reference = variant.variation_sku;
    basketItem.attributes = variant.attributes;

    if (!masterProduct) {
      /* eslint-disable */
      console.error(
        'Could not create basket item from variant alone. Please provide the master product!'
      );
      /* eslint-enable */
    } else {
      basketItem.unit_price =
        variant.price_ex_vat * (1 + (masterProduct.vat || 0) / 100);
      basketItem.name = masterProduct.name;

      if (variant.image) {
        basketItem.product_image = variant.image;
      } else {
        basketItem.product_image = masterProduct.product_image;
        basketItem.product_image_resized = masterProduct.product_image_resized;
      }
    }
  }

  return basketItem;
}

export function getSupportedOptionsFromProps(props) {
  const {
    freeShippingMinimumPurchaseAmount = -1,
    shippingCost = -1,
    validateEndpoint = '/api/basket/validate'
  } = props;

  return {
    freeShippingMinimumPurchaseAmount: parseFloat(
      freeShippingMinimumPurchaseAmount
    ),
    shippingCost: parseFloat(shippingCost),
    validateEndpoint
  };
}

const validateBasketRequest = async ({ validateEndpoint, basket }) => {
  let endpoint = validateEndpoint;

  if (validateEndpoint.startsWith('/')) {
    const l = window.location;
    endpoint = `${l.protocol}//${l.host}${validateEndpoint}`;
  }

  const response = await fetch(endpoint, {
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
export async function validateBasket({ validateEndpoint, items, coupon, tr }) {
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
          item => item.type !== 'discount' && item.type !== 'shipping'
        ),
        coupon: {
          code: coupon
        }
      }
    });

    if (result.status === 'INVALID') {
      let message = tr.thisCouponIsNotValid;
      if (
        result.message &&
        result.message !== 'NO valid coupons found with this code'
      ) {
        ({ message } = result);
      }
      return {
        error: message
      };
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

        return i;
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
      discount
    };
  } catch (error) {
    console.warn('@crystallize/react-basket', error); // eslint-disable-line

    return {
      error: tr.anErrorOccurred
    };
  }
}
