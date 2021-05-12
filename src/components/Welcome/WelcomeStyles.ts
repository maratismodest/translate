import styled from "styled-components";

export const DesktopWelcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  text-align: left;
  position: relative;
`;

export const DesktopWelcomeWallPaper = styled.div`
  width: 50%;
  padding-right: 5%;
  img {
    display: block;
    margin-left: auto;
    max-width: 600px;
  }
`;
export const DesktopWelcomeBegin = styled.div`
  width: 50%;
  padding-left: 5%;
  display: block;
  margin-right: auto;
  max-width: 600px;
`;

export const MobileWelcomeWallPaper = styled.div``;

export const MobileWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  text-align: center;
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  text-align: center;
`;
