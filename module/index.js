import { setTranslations } from '@crystallize/translations';

setTranslations({
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
});

export * from './context';
export * from './big-basket';
export * from './tiny-basket';
export * from './coupon';
