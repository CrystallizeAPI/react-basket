import fetch from 'cross-fetch';
import { tr } from '@crystallize/translations';

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
  if (!masterProduct) {
    /* eslint-disable */
    console.error('Could not the create basket item without a master product!');
    /* eslint-enable */
    return {};
  }

  function getPriceWithVAT(price) {
    return price * (1 + (masterProduct.vat || 0) / 100);
  }

  const basketItem = {
    name: masterProduct.name,
    sku: `${masterProduct.sku}-standard`,
    product_image: masterProduct.product_image,
    product_image_resized: masterProduct.product_image_resized,
    unit_price: getPriceWithVAT(masterProduct.price),
    attributes: []
  };

  if (!variant) {
    /* eslint-disable */
    console.warn(
      'Creating basket item without a variant. Deferring to -standard'
    );
    /* eslint-enable */
  } else {
    Object.assign(basketItem, {
      sku: variant.variation_sku,
      attributes: variant.attributes
    });

    Object.assign(basketItem, {
      unit_price: getPriceWithVAT(variant.price_ex_vat)
    });

    if (variant.image) {
      Object.assign(basketItem, {
        product_image: variant.image,
        product_image_resized: null
      });
    }
  }

  basketItem.reference = basketItem.sku;

  return basketItem;
}

export function getSupportedOptionsFromProps(props) {
  const {
    freeShippingMinimumPurchaseAmount = -1,
    validateEndpoint = '/api/basket/validate'
  } = props;

  return {
    freeShippingMinimumPurchaseAmount: parseFloat(
      freeShippingMinimumPurchaseAmount
    ),
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
export async function validateBasket({ validateEndpoint, items, coupon }) {
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
