import styled from "styled-components";
import Header from "./ui/Header";

export const Game = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  min-height: 100vh;
  background: var(--color-lightgrey);
`;

export const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 30px;
`;

export const StyledMain = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0 30px 30px 30px;
`;

export const StyledLogo = styled(Header)`
  font-weight: 700;
  font-size: 16px;
  line-height: 133%;
  color: #0f8012;
`;
