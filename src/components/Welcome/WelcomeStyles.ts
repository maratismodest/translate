import styled from "styled-components";
import { device } from "../../localBase/responsiveStyled";
import Header from "../../ui/Header";

export const StyledWelcome = styled.div`
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

export const WelcomeWallPaper = styled.div`
  max-width: 50%;
  @media ${device.laptop} {
    max-width: 90%;
  }
`;

export const WelcomeHeader = styled(Header)`
  text-align: center;
`;
