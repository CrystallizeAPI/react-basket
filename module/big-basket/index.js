import { BasketConsumer } from '../context';
import { Coupon } from '../coupon';
import { getTranslationsFromProps } from '../helpers';

import { Outer } from './styles';

export const BigBasket = ({ tr }) => {
  const translations = getTranslationsFromProps(tr);
  return (
    <BasketConsumer>
      {({ state }) => (
        <Outer>
          <h2>The big basket has not been implemented yet</h2>
          <br />
          {!state.items.length ? (
            <div>No items in basket</div>
          ) : (
            state.items.map(item => (
              <div key={item.reference}>
                {item.name} ({item.quantity})
              </div>
            ))
          )}
          <Coupon tr={translations} />
        </Outer>
      )}
    </BasketConsumer>
  );
};
