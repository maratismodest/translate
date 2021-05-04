import { Button } from "antd";
import styled, { css } from "styled-components";

interface Props {
  height: number;
  name: string;
  size?: string;
  small?: boolean;
  transparent?: boolean;
  big?: boolean;
  color: string;
  key: string;
  onClick: any;
  htmlType?: string;
  disabled?: boolean;
  green?: boolean;
  large?: boolean;
  medium?: boolean;
  normal?: boolean;
}

export default styled(Button)<Partial<Props>>`
  background: var(--color-green);
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 25px;
  border: none;

  color: var(--color-white);
  width: 262px;
  height: 52px;
  outline: none;
  box-shadow: none;
  &:active {
    background-color: #272f5a;
  }
  &:hover {
    background: var(--color-darkgreen);
    color: var(--color-white);
  }

  &:focus {
    background: rgba(15, 128, 18, 0.07);
    border: 1px solid #0f8012;
    box-sizing: border-box;
    box-shadow: inset 0px 5px 13px rgba(3, 32, 4, 0.02);
    border-radius: 25px;
    color: var(--color-green);
  }

  &:disabled {
    background: var(--color-grey);
  }

  ${(props) =>
    props.small &&
    css`
      width: 232px;
    `}
  ${(props) =>
    props.medium &&
    css`
      width: 262px;
    `}
  ${(props) =>
    props.large &&
    css`
      width: 300px;
    `}
  ${(props) =>
    props.normal &&
    css`
      background: var(--color-white);
      color: var(--color-black);
      border: 1px solid rgba(11, 65, 12, 0.2);
      box-sizing: border-box;
      box-shadow: inset 0px 5px 13px rgba(3, 32, 4, 0.02);
    `}

  ${(props) =>
    props.green &&
    css`
      background: #00ff00;
    `}
`;
