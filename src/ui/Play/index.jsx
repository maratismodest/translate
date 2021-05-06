import play from "../../assets/play.svg";
import styled from "styled-components";
import { device } from "../../localBase/responsiveStyled";

const StyledPlay = styled.img`
  cursor: pointer;
  @media ${device.desktop} {
    width: 48px;
    height: 48px;
  }
  @media ${device.laptop} {
    width: 36px;
    height: 36px;
  }
`;
const Play = () => {
  return <StyledPlay src={play} />;
};

export default Play;
