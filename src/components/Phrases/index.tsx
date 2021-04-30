import React, { useContext, useRef, useState } from "react";
import useSound from "use-sound";
import Sounds from "../../localBase/sounds";
import Button from "../../ui/Button";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import styled from "styled-components";
import { device } from "../../localBase/responsiveStyled";
import Play from "../../ui/Play";
import QuestionText from "../../ui/QuestionText";
import i18n from "i18next";
import { OptionInterface } from "../../localBase/interfaces";
import AppContext from "../../AppContext";

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
  const { firstLanguage, secondLanguage } = phrases;
  const first = _.shuffle(firstLanguage).slice(0, 3);
  const second = _.shuffle(secondLanguage).slice(0, 3);
  const shuffle = _.shuffle([...first, ...second]);
  const questions = useRef(shuffle);

  const [answer, setAnswer] = useState("-");

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
        chosenGame: "phrases",
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
      setAnswer(`Правильный ответ:${correctText}`);
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

  const optionsList = options.map((option: OptionInterface, index: number) => {
    const { id, text } = option;
    return (
      <li key={id + text}>
        <Button
          onClick={() => {
            currentQuestionResult
              ? console.log("уже выбран вариант")
              : handleClick(id);
          }}
        >
          <span>{text}</span>
        </Button>
      </li>
    );
  });

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
    setAnswer("-");
    setCurrentQuestionResult(null);
  };

  return (
    <StyledWords>
      <div
        onClick={delayFunc}
        style={{
          textAlign: "center",
          pointerEvents: disabled ? "none" : "auto",
        }}
      >
        <QuestionText title={questionText} />
        <div>
          <Play />
          &nbsp;<PlayAgain>{i18n.t("repeatAudio")}</PlayAgain>
        </div>
      </div>

      <StyledOptionsList>{optionsList}</StyledOptionsList>
      <StyledRightAnswer>{answer}</StyledRightAnswer>
      <Button green disabled={!currentQuestionResult} onClick={handleNext}>
        Далее
      </Button>
      <QuestionNumber>
        {i18n.t("question")} {currentQuestionIndex + 1} /{" "}
        {questions.current.length}
      </QuestionNumber>
    </StyledWords>
  );
};

export default Words;

export const StyledOptionsList = styled.ul`
  min-width: 200px;
  max-width: 350px;
  padding-top: 16px;
`;
export const StyledRightAnswer = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--color-red);
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;

export const PlayAgain = styled.span`
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
  color: var(--color-primary);
  line-height: 133%;
  cursor: pointer;
}

@media ${device.desktop} {
  font-size: 24px;
}

@media ${device.laptop} {
  font-size: 16px;
}
`;

const StyledWords = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const QuestionNumber = styled.span`
  font-size: 16px;
  line-height: 126%;
  color: var (-color-primary);
  font-weight: normal;
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  @media ${device.desktop} {
    bottom: 70px;
  }
  @media ${device.laptop} {
    bottom: 32px;
  } ;
`;
