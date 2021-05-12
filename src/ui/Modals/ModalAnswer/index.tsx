import Header from "../../Header";
import { Paragraph } from "../../Paragraph";
import { Modal } from "antd";
import Button from "../../Button";
import i18n from "i18next";
import styled from "styled-components";
import React from "react";

export const ModalAnswer = ({ currentQuestionResult, handleNext }: any) => {
  const { correct, correctText, chosenText } = currentQuestionResult;
  const True = () => {
    return (
      <div>
        <Header color="green" style={{ marginTop: 20 }}>
          Верно
        </Header>
        <Paragraph bold>{chosenText}</Paragraph>
      </div>
    );
  };

  const False = () => {
    return (
      <div>
        <Header color="red">Неверно</Header>
        <Paragraph bold>{chosenText}</Paragraph>
        <Header color="green" style={{ marginTop: 20 }}>
          Правильный ответ
        </Header>
        <Paragraph bold>{correctText}</Paragraph>
      </div>
    );
  };

  return (
    <Modal
      width={300}
      bodyStyle={{ height: 300 }}
      visible={true}
      footer={null}
      closable={false}
      centered
    >
      <ModalBody>
        {correct ? <True /> : <False />}
        <Button onClick={handleNext}>{i18n.t("next")}</Button>
      </ModalBody>
    </Modal>
  );
};

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
`;