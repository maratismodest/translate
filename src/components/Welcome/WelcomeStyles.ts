import styled from "styled-components";
import {device} from "../../localBase/responsiveStyled";

export const StyledWelcome = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.desktop} {
    flex-direction: flex;
  }
  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledWallPaper = styled.div`
  max-width: 50%;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    align-items: flex-start;
  }
  @media ${device.laptop} {
    align-items: center;
  }
`

export const StyledWelcomeMenu = styled.div`
  @media ${device.desktop} {
    padding-left: 5%;

  }
  @media ${device.laptop} {
    padding-left: 0;
    padding-top: 30px;
  }
`

export const StyledHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  color: #718CCC;
  max-width: 618px;

  @media ${device.desktop} {
    font-size: 46px;
    line-height: 133%;
    padding-bottom: 75px;

  }
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 126%;
    padding-bottom: 30px;
  }

`
