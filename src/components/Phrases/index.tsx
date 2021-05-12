import React, { useContext, useRef, useState } from "react";
import useSound from "use-sound";
import Sounds from "../../localBase/sounds";
import Button from "../../ui/Button";
import Slab from "../../ui/Slab";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

import { useHistory } from "react-router-dom";
import _ from "lodash";
import i18n from "i18next";
import { OptionInterface } from "../../localBase/interfaces";
import AppContext from "../../AppContext";
import Icon from "../../ui/Icon";
import styled from "styled-components";
import { StyledBody } from "../Welcome/WelcomeStyles";
import { Progress } from "antd";
import { ModalAnswer } from "../../ui/Modals/ModalAnswer";
import { isMobile } from "react-device-detect";

export interface questionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
}

interface CurrentQuestionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
  chosenText: string;
}

const Words = () => {
  const history = useHistory();

  const { state, setState } = useContext(AppContext);
  const { phrases, chosenGame } = state;
  console.log("phrases", phrases);
  const { firstLanguage, secondLanguage } = phrases;
  const first = _.shuffle(firstLanguage).slice(0, 3);
  const second = _.shuffle(secondLanguage).slice(0, 3);
  const shuffle = _.shuffle([...first, ...second]);
  const questions = useRef(shuffle);

  const { soundCorrect, soundWrong } = Sounds;
  const [success] = useSound(soundCorrect);
  const [mistake] = useSound(soundWrong);

  const [disabled, setDisabled] = useState(false);

  const [currentQuestionResult, setCurrentQuestionResult] = useState<
    CurrentQuestionResultInterface | any
  >(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [result, setResult] = useState<Array<questionResultInterface>>([]);

  const question = questions.current[currentQuestionIndex];
  const { options, questionText, correct, id: questionId, audio } = question;
  const [tell, { duration }] = useSound(audio);

  function checkGameState(
    chosenGame: string,
    questionResult: questionResultInterface
  ) {
    if (currentQuestionIndex + 1 < questions.current.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setResult((prevState) => [...prevState, questionResult]);
    } else {
      history.push("/result");
      setState({
        ...state,
        result: [...result, questionResult],
        chosenGame: "words",
      });
    }
  }

  const handleClick = (id: number) => {
    if (currentQuestionResult) {
      return;
    }

    const correctText = _.find(options, { id: 1 }).text;
    const chosenText = _.find(options, { id: id }).text;

    if (id === correct) {
      success();
    } else {
      mistake();
    }

    const questionResultObject = {
      correct: id === correct,
      id: questionId,
      questionText,
      correctText,
      chosenText,
    };

    setCurrentQuestionResult(questionResultObject);
  };

  const timer = Math.floor(duration || 1000);

  const delayFunc = () => {
    setDisabled(true);
    tell();
    setTimeout(() => {
      setDisabled(false);
    }, timer);
  };

  const handleNext = () => {
    checkGameState(chosenGame, currentQuestionResult);
    setCurrentQuestionResult(null);
  };
  const OptionsList = () => {
    const MobileUl = styled.ul`
      margin-top: 30px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: fit-content;
        margin-bottom: 20px;
      }
    `;

    const list = options.map((option: OptionInterface, index: number) => {
      const { id, text } = option;
      if (isMobile) {
        return (
          <li key={id + text}>
            <Slab
              normal
              onClick={() => {
                currentQuestionResult
                  ? console.log("уже выбран вариант")
                  : handleClick(id);
              }}
            >
              {text}
            </Slab>
          </li>
        );
      }
      return (
        <li key={id + text} style={{ marginBottom: 10 }}>
          <Button
            normal
            onClick={() => {
              currentQuestionResult
                ? console.log("уже выбран вариант")
                : handleClick(id);
            }}
          >
            {text}
          </Button>
        </li>
      );
    });
    if (isMobile) {
      return <MobileUl>{list}</MobileUl>;
    }
    return <ul style={{ marginTop: 16 }}>{list}</ul>;
  };

  return (
    <StyledWords>
      <Slab
        onClick={delayFunc}
        style={{
          pointerEvents: disabled ? "none" : "auto",
        }}
        big
      >
        <Header level={2}>{questionText}</Header>
        <Icon icon="play" size={24} className={"play"} />
      </Slab>
      <OptionsList />
      {currentQuestionResult ? (
        <ModalAnswer
          currentQuestionResult={currentQuestionResult}
          handleNext={handleNext}
        />
      ) : null}
      <ProgressBlock>
        <Progress
          percent={(currentQuestionIndex * 100) / questions.current.length}
          showInfo={false}
          strokeColor={"#0F8012"}
        />
        <Text green>
          {i18n.t("question")} {currentQuestionIndex + 1} /{" "}
          {questions.current.length}
        </Text>
      </ProgressBlock>
    </StyledWords>
  );
};

export default Words;

const ProgressBlock = styled.div`
  width: 100%;
  text-align: left;
`;

const StyledWords = styled(StyledBody)``;
