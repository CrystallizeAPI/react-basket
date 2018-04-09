const defaultStrings = {
  'basket.clickToAddCoupon': 'Click here to add a coupon',
  'basket.inputCoupon': 'Input coupon below',
  'basket.registerCoupon': 'Register coupon',
  'basket.cancel': 'Cancel',
  'basket.thisCouponIsNotValid': 'This coupon is not valid',
  'basket.anErrorOccurred': 'An error occurred. Please try again.',
  'basket.basketIsEmpty': 'You have no items in your basket',
  'basket.totalPrice': 'Total price',
  'basket.discount': 'Discount',
  'basket.totalAfterDiscount': 'Total after discount',
  'basket.shipping': 'Shipping',
  'basket.amountToPay': 'To pay',
  'basket.remainingUntilFreeShippingApplies':
    'Shop for {remainingUntilFreeShippingApplies},- more for free shipping',
  'basket.couldNotVerifyCoupon': 'Could not find the coupon "{coupon}"',
  'basket.fillOutCoupon': 'Please input a coupon'
};

let activeStrings = { ...defaultStrings };

export function setTranslations(tr = {}) {
  activeStrings = {
    ...defaultStrings,
    ...tr
  };
}

export function getTranslation(name, variables = {}) {
  if (!Object.hasOwnProperty.call(activeStrings, name)) {
    return `[tr 404, ${name}]`;
  }

  let value = activeStrings[name];
  Object.keys(variables).forEach(key => {
    value = value.replace(new RegExp(`{${key}}`, 'g'), variables[key]);
  });

  return value;
}
