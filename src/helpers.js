import fetch from 'cross-fetch';

export const animationSpeedMs = 300;

export function getSupportedOptionsFromProps(props) {
  const {
    freeShippingMinimumPurchaseAmount = -1,
    validateEndpoint = '/api/basket/validate',
    onEmpty,
    onAddToBasket,
    onRemoveFromBasket,
    alwaysValidate
  } = props;

  return {
    freeShippingMinimumPurchaseAmount: parseFloat(
      freeShippingMinimumPurchaseAmount
    ),
    validateEndpoint,
    onEmpty,
    onAddToBasket,
    onRemoveFromBasket,
    alwaysValidate
  };
}

export const generateUniqueId = (function iife() {
  let idIncremenet = 0;

  return name => `crystallize-${name}-${idIncremenet++}`;
})();

export function createBasketItem({
  masterProduct,
  variant,
  metadata,
  subscription
}) {
  if (!masterProduct) {
    /* eslint-disable */
    throw new Error(
      'Could not the create basket item without a master product!'
    );
    /* eslint-enable */
  } else if (!variant) {
    /* eslint-disable */
    throw new Error(
      'Product variant must be provided while creating a basket item'
    );
    /* eslint-enable */
  }

  function getPriceWithVAT(priceWithVat) {
    const { vatType = {} } = masterProduct;
    const vatPercent =
      vatType.percent && vatType.percent === 0 ? 0 : vatType.percent;
    return {
      priceWithoutVat: priceWithVat / (1 + vatPercent / 100),
      /* eslint-disable */
      vatAmount: priceWithVat - priceWithVat / (1 + vatPercent / 100)
      /* eslint-enable */
    };
  }

  /* eslint-disable */
  let vat = 0;
  /* eslint-enable */
  let vatType;
  if (masterProduct && masterProduct.vatType) {
    ({ vatType = {} } = masterProduct);

    if (isNaN(vatType.percent) && vatType && vatType.percent) {
      vat = vatType.percent;
    }

    if (isNaN(vatType.percent) || vatType.percent === 0) {
      vat = 0;
    }
  }

  const basketItem = {
    masterId: masterProduct.id,
    name: masterProduct.name,
    sku: `${variant.sku}-standard`,
    product_image:
      variant.image && variant.image.url ? variant.image.url : undefined,
    unit_price: variant.price,
    price_without_vat: getPriceWithVAT(variant.price).priceWithoutVat,
    attributes: [],
    vat: getPriceWithVAT(variant.price).vatAmount,
    metadata,
    subscription,
    placeholder_image: variant.placeholder_image
      ? variant.placeholder_image
      : undefined
  };

  basketItem.reference = basketItem.sku;

  if (basketItem.subscription) {
    if (!basketItem.variationplan_id) {
      basketItem.variationplan_id = basketItem.subscription.variationplan_id;
    }
  }

  return basketItem;
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
      error
    };
  }
}
