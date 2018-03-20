import { BasketConsumer } from '../context';
import { Outer } from './styles';

export const BigBasket = () => (
  <BasketConsumer>
    {({ state }) => (
      <Outer>
        {!state.items.length ? (
          <div>No items in basket</div>
        ) : (
          state.items.map(item => (
            <div key={item.id}>
              {item.name} {item.quantity}
            </div>
          ))
        )}
      </Outer>
    )}
  </BasketConsumer>
);
