import { BasketConsumer } from '../context';
import Inner from './inner';

export const TinyBasket = () => (
  <BasketConsumer>
    {props => (
      <Inner {...props.actions} options={props.options} {...props.state} />
    )}
  </BasketConsumer>
);
