import { Typography } from 'antd'
import styled, { css } from 'styled-components'

const { Text: AntdText } = Typography

interface Props {
  light?: boolean;
  large?: boolean;
  small?: boolean;
  green?: boolean;
  color?: string;
  onClick?: any;
  huge?: boolean;
  bold?: boolean;
  pointer?: boolean;
}

export const Text = styled(AntdText)<Partial<Props>>`
  &&& {
    display: block;
    color: var(--color-black);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 126%;
    ${(props) =>
      props.color === 'green' &&
      css`
        color: var(--color-green);
      `}
    ${(props) =>
      props.color === 'red' &&
      css`
        color: var(--color-red);
      `}
    ${(props) =>
      props.small &&
      css`
        font-size: 12px;
      `}
    ${(props) =>
      props.bold &&
      css`
        font-weight: 600;
      `}
    ${(props) =>
      props.pointer &&
      css`
        cursor: pointer;
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
      props.huge &&
      css`
        font-size: 20px;
        line-height: 24px;
      `}
    ${(props) =>
      props.green &&
      css`
        color: var(--color-green);
      `}
  }
`

export default styled(AntdText)<Partial<Props>>`
  &&& {
    display: block;
    color: var(--color-black);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 126%;
    ${(props) =>
      props.color === 'green' &&
      css`
        color: var(--color-green);
      `}
    ${(props) =>
      props.color === 'red' &&
      css`
        color: var(--color-red);
      `}
    ${(props) =>
      props.small &&
      css`
        font-size: 12px;
      `}
    ${(props) =>
      props.bold &&
      css`
        font-weight: 600;
      `}
    ${(props) =>
      props.pointer &&
      css`
        cursor: pointer;
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
      props.huge &&
      css`
        font-size: 20px;
        line-height: 24px;
      `}
    ${(props) =>
      props.green &&
      css`
        color: var(--color-green);
      `}
  }
`
