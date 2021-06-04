import styled, { css } from 'styled-components'

interface TagInterface {
  green?: boolean;
}
export default styled.p<TagInterface>`
  padding: 6px 20px;
  border: 1px solid rgba(11, 65, 12, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
  color: var(--color-black);
  background: var(--color-white);
  height: 30px;
  cursor: pointer;
  max-width: 380px;
  &:active {
    background-color: #272f5a;
  }
  &:hover {
    background: var(--color-green);
    color: var(--color-white) !important;
    span {
      color: var(--color-white) !important;
    }
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
    props.green &&
    css`
      background: rgba(15, 128, 18, 0.2);
    `}
`
