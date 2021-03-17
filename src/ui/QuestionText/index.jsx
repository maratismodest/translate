import play from "../../assets/play.svg";
import styled from "styled-components";
import {device} from "../../localBase/responsiveStyled";


const StyledQuestionText = styled.h4`
  color: #718CCC;
  font-style: normal;
  font-weight: 500;
  @media ${device.desktop} {
    font-size: 46px;
    line-height: 133%;
  }
  @media ${device.laptop} {
    font-size: 36px;
    line-height: 122%;
  }
`
const QuestionText = ({title}) => {
    return <StyledQuestionText>{title}</StyledQuestionText>
}

export default QuestionText;