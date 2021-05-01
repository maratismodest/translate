import { Button } from "antd";
import styled, { css } from "styled-components";
import { device } from "../../localBase/responsiveStyled";

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
}

export default styled(Button)<Partial<Props>>`
  background: var(--color-primary);
  border-radius: 40px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  white-space: pre-line;
  font-size: 22px;
  line-height: 26px;
  width: 250px;
  height: 68px;
  //&:active {
  //  background-color: #272f5a;
  //}
  //&:disabled {
  //  background-color: rgba(39, 47, 90, 0.32);
  //  color: #fff;
  //}
  &:focus {
    outline: none;
    box-shadow: none;
  }
  ${(props) =>
    props.small &&
    css`
      padding: 8px 16px;
      font-size: 14px;
      line-height: 16px;
      height: auto;
      display: flex;
      svg {
        margin-left: 16px;
      }
    `}
  ${(props) =>
    props.green &&
    css`
      background: #00ff00;
    `}

  
  @media ${device.laptop} {
    width: 200px;
    height: 44px;
    font-size: 16px;
    line-height: 19px;
  }
`;
