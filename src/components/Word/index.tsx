import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import i18n from "i18next";
import AppContext from "../../AppContext";
import useSound from "use-sound";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import Header from "../../ui/Header";
import ProgressBlock from "../../ui/ProgressBlock";
import Slab from "../../ui/Slab";

import { StyledBody } from "../Welcome/WelcomeStyles";
import { ModalAnswer } from "../../ui/Modals/ModalAnswer";

const Collect = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const { state, setState } = useContext(AppContext);
  const { chosenGame, word, firstLanguage, sounds } = state;
  const { soundCorrect, soundWrong } = sounds;
  const [yes] = useSound(soundCorrect);
  const [no] = useSound(soundWrong);
  //Берем 5 случайных слов
  const [questions, setQuestions] = useState(_.shuffle(word).slice(0, 5));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = questions[currentQuestionIndex];
  const { tat, lat, audio } = question;
  const [tell, { duration }] = useSound(audio);
  const timer = Math.floor(duration || 1000);

  const questionSeparated = question[firstLanguage].toLowerCase().split("");
  const randomseparated = _.sample(word)[firstLanguage].toLowerCase().split("");

  const [result, setResult] = useState<Array<any>>([]);

  const [separated, setSeparated] = useState<any>([]);
  const [answer, setAnswer] = useState<Array<any>>([]);
  const [questionResult, setQuestionResult] = useState<any>();

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
  }

  const handleAnswerClick = () => {
    const final = _.capitalize(answer.join(""));
    question[firstLanguage] === final ? yes() : no();

    const questionResult: QuestionResultInterface =
      question[firstLanguage] === final
        ? {
            correct: true,
            questionText: question[firstLanguage],
            chosenText: final,
            correctText: question[firstLanguage],
          }
        : {
            correct: false,
            questionText: question[firstLanguage],
            chosenText: final,
            correctText: question[firstLanguage],
          };
    setQuestionResult(questionResult);
  };

  const handleRemoveTag = (index: number) => {
    const currentWord = answer[index];
    setSeparated((separated: any) => [...separated, currentWord]);
    const copyAnswer = _.clone(answer);
    copyAnswer.splice(index, 1);
    setAnswer(copyAnswer);
  };

  const handleTagAdd = (index: number) => {
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
            handleRemoveTag(index);
          }}
          green
        >
          <Text>{item}</Text>
        </Tag>
      </AnswerLi>
    );
  });

  const separatedList = separated.map((item: any, index: number) => {
    return (
      <OptionLi key={item + index + separated.length}>
        <Tag
          onClick={() => {
            handleTagAdd(index);
          }}
        >
          <Text>{item}</Text>
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
      <Slab
        onClick={delayFunc}
        style={{
          pointerEvents: disabled ? "none" : "auto",
        }}
        large
      >
        <Circle>
          <Icon icon={"play"} size={16} />
        </Circle>
        <Header>{i18n.t("repeatAudio")}</Header>
      </Slab>

      <Result>{resultList}</Result>

      <Options>{separatedList}</Options>
      {questionResult ? (
        <ModalAnswer
          currentQuestionResult={questionResult}
          handleNext={handleNext}
        />
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

interface QuestionResultInterface {
  correct: boolean;
  questionText: string;
  chosenText: string;
  correctText: string;
}

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
