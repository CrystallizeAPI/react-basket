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

  return {
    name: ensureProperty('name', 'No name'),
    price: ensureProperty('price', item.price_ex_vat || 0),
    sku: ensureProperty('sku', item.variation_sku),
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
    basketItem.attributes = variant.attributes;

    if (!masterProduct) {
      /* eslint-disable */
      console.error(
        'Could not create basket item from variant alone. Please provide the master product!'
      );
      /* eslint-enable */
    } else {
      basketItem.price =
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
  const { freeShippingMinimumPurchaseAmount = -1, shippingCost = -1 } = props;
  return {
    freeShippingMinimumPurchaseAmount,
    shippingCost
  };
}
