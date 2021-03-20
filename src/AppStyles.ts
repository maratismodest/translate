import styled from "styled-components";
import {device} from "./localBase/responsiveStyled";

export const Game = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  background: linear-gradient(91.77deg, #FFFFFF -16.35%, rgba(222, 222, 253, 0.77) 139.34%), #F3F2F9;
  opacity: 0.8;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }

  @media ${device.desktop} {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 40px;
    padding-bottom: 70px;
  }
  @media ${device.laptop} {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 22px;
    padding-bottom: 22px;
  }
  
`

export const StyledHeader = styled.div`
  position: relative;
  //border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLogo = styled.div`
  font-weight: bold;
  line-height: 133%;
  font-family: Rubik;
  font-style: normal;
  @media ${device.desktop} {

    font-size: 26px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    left: 32px;
    top: 32px;
`

export const StyledMenu = styled.div`
  @media ${device.desktop} {
    right: 78px;
    top: 45px;

  }
  @media ${device.laptop} {
    right: 32px;
    top: 25px;
  }

`

export const StyledMain = styled.div`
`

// @media ${device.desktop} {
// }
// @media ${device.laptop} {
//
// }