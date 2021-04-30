import { Button } from "antd";
import styled from "styled-components";
import { device } from "../../localBase/responsiveStyled";

export default styled(Button)`
  background: var(--color-primary);
  border-radius: 40px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  white-space: pre-line;
  @media ${device.desktop} {
    font-size: 22px;
    line-height: 26px;
    width: 250px;
    height: 68px;
  }
  @media ${device.laptop} {
    width: 200px;
    height: 44px;
    font-size: 16px;
    line-height: 19px;
  }
`;
