
import {Button} from "antd";
import styled from "styled-components";
import {device} from "../../components/responsiveStyled";

export default styled(Button)`
  background: var(--color-primary);
  border-radius: 48px;
  font-style: normal;
  font-weight: 500;
  color: #FFFFFF;
  font-family: Rubik;
  font-style: normal;
  white-space: pre-line;
  @media ${device.desktop} {
    font-size: 22px;
    line-height: 26px;
    width: 250px;
    height: 70px;

  }
  @media ${device.laptop} {
    width: 220px;
    height: 54px;
    font-size: 16px;
    line-height: 19px;
  }

`