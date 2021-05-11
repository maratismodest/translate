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
  max-width: 380px;
  background: var(--color-white);
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 25px;
  border: none;

  color: var(--color-white);
  width: 140px;
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  border: 1px solid rgba(11, 65, 12, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 5px 13px rgba(3, 32, 4, 0.08);
  border-radius: 14px;
  outline: none;
  box-shadow: none;
  &:active {
    background-color: var(--color-white);
  }
  .play {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  &:hover {
    background: var(--color-green);
    color: var(--color-white);
    h2 {
      color: var(--color-white) !important;
    }
  }

  &:focus {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &:disabled {
    background: var(--color-grey);
  }

  .selected {
    background: rgba(15, 128, 18, 0.07);
    border: 1px solid #0f8012;
    box-sizing: border-box;
    box-shadow: inset 0px 5px 13px rgba(3, 32, 4, 0.02);
  }

  ${(props) =>
    props.small &&
    css`
      width: 232px;
    `}
  ${(props) =>
    props.big &&
    css`
      width: 100%;
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
