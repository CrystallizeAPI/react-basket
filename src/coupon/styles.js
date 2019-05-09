import styled from 'styled-components';

export const Outer = styled.div.attrs(() => ({
  className: 'crystallize-basket-coupon'
}))`
  margin-top: 15px;
`;

export const ButtonToggle = styled.button.attrs(() => ({
  className: 'crystallize-basket-coupon__Toggle'
}))`
  appearance: none;
  padding: 0;
  border: none;
  text-decoration: none;
  color: #555;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Label = styled.label.attrs(() => ({
  className: 'crystallize-basket-coupon__label'
}))`
  display: block;
  padding-bottom: 3px;
`;

export const Input = styled.input.attrs(() => ({
  className: 'crystallize-basket-coupon__input'
}))`
  padding: 5px 8px;
  font-size: 16px;
`;

export const ButtonRegisterWrap = styled.div.attrs(() => ({
  className: 'crystallize-basket-coupon__register-wrap'
}))`
  margin-top: 5px;
`;

export const ButtonRegister = styled.button.attrs(() => ({
  className: 'crystallize-basket-coupon__register'
}))`
  margin-right: 10px;
`;

export const ButtonRegisterCancel = styled.div.attrs(() => ({
  className: 'crystallize-basket-coupon__cancel'
}))`
  margin-top: 5px;
`;

export const Feedback = styled.div`
  margin: 5px 0;
  color: red;
`;
