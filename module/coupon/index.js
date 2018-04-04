import React from 'react';

import { BasketConsumer } from '../context';
import { generateUniqueId, validateBasket } from '../helpers';

import DefaultSpinner from '../spinner';
import {
  Outer,
  Label,
  Input,
  ButtonRegister,
  ButtonRegisterCancel,
  ButtonRegisterWrap,
  ButtonToggle,
  Feedback
} from './styles';

class CouponInner extends React.PureComponent {
  state = {
    showInput: false,
    coupon: '',
    feedback: null
  };

  getInputRef = el => (this.inputRef = el);

  onCouponChange = e => this.setState({ coupon: e.target.value });

  onCouponKeyPress = e => {
    if (e.key === 'Enter') {
      this.register();
    }
  };

  register = async () => {
    const { tr } = this.props;
    const {
      setValidatingNewCoupon,
      setCoupon,
      setItems,
      setDiscount
    } = this.props.actions;
    const { items } = this.props.state;
    const { validateEndpoint } = this.props.options;

    const { coupon } = this.state;

    this.setState({
      feedback: null
    });

    setValidatingNewCoupon(true);

    try {
      const result = await validateBasket({
        items,
        coupon,
        validateEndpoint,
        tr
      });

      if (result.error) {
        this.setState({
          feedback: result.error
        });
        this.inputRef.focus();
      } else {
        setCoupon(coupon);
        setItems(result.items);
        setDiscount(result.discount);
      }
    } catch (error) {
      console.warn(error);
    }

    setValidatingNewCoupon(false);
  };

  showInput = () =>
    this.setState({ showInput: true }, () => {
      this.inputRef.focus();
    });

  hideInput = () => this.setState({ showInput: false });

  render() {
    const { showInput, coupon, feedback } = this.state;
    const { validatingNewCoupon } = this.props.state;
    const { tr, Spinner = DefaultSpinner } = this.props;

    // A coupon has already been registered
    if (this.props.state.coupon) {
      return null;
    }

    if (showInput) {
      const id = generateUniqueId('coupon-input');
      return (
        <Outer>
          <Label htmlFor={id}>{tr.inputCoupon}</Label>
          <Input
            id={id}
            innerRef={this.getInputRef}
            value={coupon}
            onChange={this.onCouponChange}
            onKeyPress={this.onCouponKeyPress}
            readOnly={validatingNewCoupon}
            autoComplete="off"
          />
          <ButtonRegisterWrap>
            {feedback && <Feedback>{feedback}</Feedback>}
            <ButtonRegister
              type="button"
              onClick={this.register}
              disabled={validatingNewCoupon}
            >
              {tr.registerCoupon}
            </ButtonRegister>
            {validatingNewCoupon && <Spinner size="12" />}
            <ButtonRegisterCancel>
              <ButtonToggle onClick={this.hideInput}>{tr.cancel}</ButtonToggle>
            </ButtonRegisterCancel>
          </ButtonRegisterWrap>
        </Outer>
      );
    }

    return (
      <Outer>
        <ButtonToggle onClick={this.showInput}>
          {tr.clickToAddCoupon}
        </ButtonToggle>
      </Outer>
    );
  }
}

export const Coupon = outerProps => (
  <BasketConsumer>
    {props => <CouponInner {...props} {...outerProps} />}
  </BasketConsumer>
);
