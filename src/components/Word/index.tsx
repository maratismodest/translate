import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { Divider, Tag } from "antd";
import Button from "../../ui/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PlayAgain, QuestionNumber } from "../Words";
import { device } from "../../localBase/responsiveStyled";
import Play from "../../ui/Play";
import i18n from "i18next";
import AppContext from "../../AppContext";
import Sounds from "../../localBase/sounds";
import useSound from "use-sound";

const Word = () => {
  const history = useHistory();
  const { state, setState } = useContext(AppContext);

  const { soundCorrect, soundWrong } = Sounds;
  const [yes] = useSound(soundCorrect);
  const [no] = useSound(soundWrong);
  const [disabled, setDisabled] = useState(false);
  const [questionResult, setQuestionResult] = useState<any>();
  const { chosenGame, word } = state;

  const shuffle = _.shuffle(word).slice(0, 5);
  const collectClone = _.clone(word);

  const [questions, setQuestions] = useState(shuffle);

  const [result, setResult] = useState<Array<any>>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = questions[currentQuestionIndex];
  const { tat, audio } = question;

  //удалить из клона массива фраз именно нашу фразу
  const firstIndex = _.indexOf(collectClone, question);
  collectClone.splice(firstIndex, 1);

  const questionSeparated = tat.split("");
  console.log("questionSeparated", questionSeparated);
  const randomseparated = _.sample(collectClone).tat.split("");
  const [separated, setSeparated] = useState(randomseparated);
  const [answer, setAnswer] = useState<Array<any>>([]);

  const [hint, setHint] = useState("-");

  const [tell, { duration }] = useSound(audio);
  const timer = Math.floor(duration || 1000);

  useEffect(() => {
    setSeparated(_.shuffle(questionSeparated.concat(randomseparated)));
    setAnswer([]);
  }, [currentQuestionIndex]);
  useEffect(() => {
    tell();
  }, [tell]);

  //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
  function checkGameState(
    chosenGame: string,
    questionResult: QuestionResultInterface
  ) {
    if (currentQuestionIndex + 1 < questions.length) {
      setResult((prevState) => [...prevState, questionResult]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      history.push("/result");
      setState({
        ...state,
        currentQuestionIndex: 0,
        result: [...result, questionResult],
        finished: true,
        gameState: "result",
        chosenGame: chosenGame,
      });
    }
    setQuestionResult("");
    setHint("-");
  }

  interface QuestionResultInterface {
    correct: boolean;
    questionText: string;
    chosenText: string;
  }

  const handleAnswerClick = () => {
    const final = answer.join("");
    tat === final ? yes() : no();
    tat === final ? setHint("-") : setHint(`Правильный ответ:${tat}`);

    const questionResult: QuestionResultInterface =
      tat === final
        ? {
            correct: true,
            questionText: tat,
            chosenText: final,
          }
        : { correct: false, questionText: tat, chosenText: final };
    setQuestionResult(questionResult);
  };

  const handleTagClick = (index: number) => {
    const currentWord = answer[index];
    setSeparated((separated: any) => [...separated, currentWord]);
    const copyAnswer = _.clone(answer);
    copyAnswer.splice(index, 1);
    setAnswer(copyAnswer);
  };

  const handleClick = (index: number) => {
    const currentWord = separated[index];
    setAnswer((prevState) => [...prevState, currentWord]);
    const resultSeparated = _.clone(separated);
    resultSeparated.splice(index, 1);
    setSeparated(resultSeparated);
  };

  const resultList = answer.map((item, index) => {
    return (
      <li key={item + index + answer.length}>
        <StyledTagAnswer
          onClick={() => {
            handleTagClick(index);
          }}
        >
          {item}
        </StyledTagAnswer>
      </li>
    );
  });

  const separatedList = separated.map((item: any, index: number) => {
    return (
      <li key={item + index + separated.length} style={{ marginRight: 4 }}>
        <StyledTagOptions
          onClick={() => {
            handleClick(index);
          }}
        >
          {item}
        </StyledTagOptions>
      </li>
    );
  });

  const delayFunc = () => {
    setDisabled(true);
    tell();
    setTimeout(() => {
      setDisabled(false);
    }, timer);
  };

  const handleNext = () => {
    checkGameState(chosenGame, questionResult);
  };

  return (
    <StyledQuestion>
      <div
        onClick={delayFunc}
        style={{
          textAlign: "center",
          pointerEvents: disabled ? "none" : "auto",
        }}
      >
        <div>
          <Play />
          &nbsp;<PlayAgain>{i18n.t("repeatAudio")}</PlayAgain>
        </div>
      </div>
      <StyledResult>{resultList}</StyledResult>
      <Divider />
      <StyledUl>{separatedList}</StyledUl>
      <StyledRightAnswer>{hint}</StyledRightAnswer>
      {questionResult ? (
        <Button green disabled={!questionResult} onClick={handleNext}>
          Далее
        </Button>
      ) : (
        <Button
          onClick={handleAnswerClick}
          disabled={answer.length > 0 ? false : true}
        >
          {i18n.t("check")}
        </Button>
      )}

      <QuestionNumber>
        {i18n.t("question")}&nbsp;{currentQuestionIndex + 1} /{" "}
        {questions.length}
      </QuestionNumber>
    </StyledQuestion>
  );
};
export default Word;

const StyledRightAnswer = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--color-red);
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;
const StyledTagAnswer = styled(Tag)`
  background: #e7e6f4;
  color: #718ccc;
  font-size: 16px;
  line-height: 18px;
  padding: 6.4px 15px;
  border-radius: 12px;
  cursor: pointer;
`;

const StyledTagOptions = styled(Tag)`
  background: #ffffff;
  border: 1px solid #e7e6f4;
  color: #718ccc;
  font-size: 16px;
  line-height: 18px;
  padding: 6.4px 15px;
  border-radius: 12px;
  cursor: pointer;
`;

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;

  @media ${device.laptop} {
    width: 350px;
  }
`;

const StyledResult = styled.ul`
  background: #ffffff;
  border: 1px solid rgba(113, 140, 204, 0.1);
  box-sizing: border-box;
  box-shadow: inset -2px -1px 4px rgba(113, 140, 204, 0.1);
  border-radius: 28px;
  width: 90%;
  display: flex;
  min-height: 140px;
  flex-wrap: wrap;
  margin-top: 16px;
  max-width: 350px;
  padding: 24px;
`;
const StyledUl = styled.ul`
  width: 90%;
  display: flex;
  min-height: 50px;
  flex-wrap: wrap;
  padding: 12px;
  //max-width: 300px;
`;
export const StyledPhrase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
