import styled, { css } from "styled-components";

interface TagInterface {
  green?: boolean;
}
export const Tag = styled.p<TagInterface>`
  padding: 6px 20px;
  border: 1px solid rgba(11, 65, 12, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
  color: var(--color-black);
  background: var(--color-white);
  height: 30px;
  cursor: pointer;
  ${(props) =>
    props.green &&
    css`
      background: rgba(15, 128, 18, 0.2);
    `}
`;
