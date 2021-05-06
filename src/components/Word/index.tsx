import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { Tag } from "../../ui/Tag";
import Button from "../../ui/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import i18n from "i18next";
import AppContext from "../../AppContext";
import Sounds from "../../localBase/sounds";
import useSound from "use-sound";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import Header from "../../ui/Header";
import ProgressBlock from "../../ui/ProgressBlock";

import { StyledBody } from "../Welcome/WelcomeStyles";

const Collect = () => {
  const history = useHistory();
  const { state, setState } = useContext(AppContext);

  const { soundCorrect, soundWrong } = Sounds;
  const [yes] = useSound(soundCorrect);
  const [no] = useSound(soundWrong);
  const [disabled, setDisabled] = useState(false);
  const [questionResult, setQuestionResult] = useState<any>();
  const { chosenGame, word, language } = state;

  const shuffle = _.shuffle(word).slice(0, 5);
  const collectClone = _.clone(word);

  const [questions, setQuestions] = useState(shuffle);

  const [result, setResult] = useState<Array<any>>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = questions[currentQuestionIndex];
  const { tat, lat, audio } = question;

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
      <AnswerLi key={item + index + answer.length}>
        <Tag
          onClick={() => {
            handleTagClick(index);
          }}
          green
        >
          <Text small>{item}</Text>
        </Tag>
      </AnswerLi>
    );
  });

  const separatedList = separated.map((item: any, index: number) => {
    return (
      <OptionLi key={item + index + separated.length}>
        <Tag
          onClick={() => {
            handleClick(index);
          }}
        >
          <Text small>{item}</Text>
        </Tag>
      </OptionLi>
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
    <StyledCollect>
      <Repeat
        onClick={delayFunc}
        style={{
          pointerEvents: disabled ? "none" : "auto",
        }}
      >
        <Circle>
          <Icon icon={"play"} size={16} />
        </Circle>
        <Header>{i18n.t("repeatAudio")}</Header>
      </Repeat>

      <Result>{resultList}</Result>

      <Options>{separatedList}</Options>

      <RightAnswer>{hint}</RightAnswer>

      {questionResult ? (
        <Button green disabled={!questionResult} onClick={handleNext}>
          {i18n.t("next")}
        </Button>
      ) : (
        <Button
          onClick={handleAnswerClick}
          disabled={answer.length > 0 ? false : true}
        >
          {i18n.t("check")}
        </Button>
      )}

      <ProgressBlock
        length={questions.length}
        currentQuestionIndex={currentQuestionIndex}
      />
    </StyledCollect>
  );
};
export default Collect;

const StyledCollect = styled(StyledBody)``;

const Result = styled.ul`
  min-height: 140px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(11, 65, 12, 0.2);
  box-sizing: border-box;
  box-shadow: inset 0px 5px 13px rgba(3, 32, 4, 0.02);
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const AnswerLi = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Options = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const OptionLi = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  border: 1px solid;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const Repeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const RightAnswer = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--color-red);
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;
