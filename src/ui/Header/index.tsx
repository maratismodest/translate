import { Typography } from "antd";
import styled, { css } from "styled-components";

const { Title } = Typography;

interface Props {
  bold?: boolean;
  color?: string;
}

export default styled(Title)<Partial<Props>>`
  && {
    font-family: Roboto;
    font-style: normal;
    padding: 0;
    margin: 0;
    color: var(--color-black);
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 126%;
    ${(props) =>
      props.bold &&
      css`
        font-weight: 500;
      `}
    ${(props) =>
      props.color === "green" &&
      css`
        color: var(--color-green);
      `}
    ${(props) =>
      props.color === "red" &&
      css`
        color: var(--color-red);
      `}
  }
`;
