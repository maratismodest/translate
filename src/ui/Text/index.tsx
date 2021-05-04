import { Typography } from "antd";
import styled, { css } from "styled-components";

const { Text } = Typography;

interface Props {
  light?: boolean;
  large?: boolean;
  small?: boolean;
  green?: boolean;
}

export default styled(Text)<Partial<Props>>`
  &&& {
    color: var(--color-black);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 126%;
    ${(props) =>
      props.small &&
      css`
        font-size: 12px;
      `}
    ${(props) =>
      props.light &&
      css`
        font-weight: 300;
      `}
    ${(props) =>
      props.large &&
      css`
        font-size: 16px;
        line-height: 19px;
      `}
    ${(props) =>
      props.green &&
      css`
        color: var(--color-green);
      `}
  }
`;
