import { BasketConsumer } from '../context';
import { Coupon } from '../coupon';

import { Outer } from './styles';

export const BigBasket = () => (
  <BasketConsumer>
    {({ state }) => (
      <Outer>
        <h2>The big basket has not been implemented yet</h2>
        <br />
        {!state.items.length ? (
          <div>No items in basket</div>
        ) : (
          state.items.map(item => (
            <div key={item.basketId}>
              {item.name} ({item.quantity})
            </div>
          ))
        )}
        <Coupon />
      </Outer>
    )}
  </BasketConsumer>
);
