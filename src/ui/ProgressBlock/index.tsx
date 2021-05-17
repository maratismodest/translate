import styled from "styled-components";
import { Progress } from "antd";
import Text from "../Text";
import i18n from "i18next";
import React from "react";

const ProgressBlock = styled.div`
  width: 100%;
  text-align: left;
`;

interface ProgressBlockInterface {
  currentQuestionIndex: number;
  length: number;
}
export default ({ currentQuestionIndex, length }: ProgressBlockInterface) => {
  return (
    <ProgressBlock>
      <Progress
        percent={((currentQuestionIndex + 1) * 100) / length}
        showInfo={false}
        strokeColor={"#0F8012"}
      />
      <Text green>
        {i18n.t("question")} {currentQuestionIndex + 1} / {length}
      </Text>
    </ProgressBlock>
  );
};
