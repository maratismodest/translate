import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import i18n from "i18next";
import AppContext from "../../AppContext";
import Sounds from "../../localBase/sounds";
import useSound from "use-sound";
import Icon from "ui/Icon";
import Text from "ui/Text";
import Header from "ui/Header";
import Tag from "ui/Tag";
import ProgressBlock from "ui/ProgressBlock";
import { StyledBody } from "../Welcome/WelcomeStyles";
import { ModalAnswer } from "ui/Modals/ModalAnswer";
import "./../../styles/styles.scss";
import { Button } from "../../ui/Button";
import { getAudio } from "../../api";

const Collect = () => {
  const history = useHistory();
  const { state, setState } = useContext(AppContext);

  const { soundCorrect, soundWrong } = Sounds;
  const [yes] = useSound(soundCorrect);
  const [no] = useSound(soundWrong);
  const [disabled, setDisabled] = useState(false);
  const [questionResult, setQuestionResult] = useState<any>();
  const { chosenGame, collect, firstLanguage, word } = state;

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

  const questionSeparated = question[firstLanguage].toLowerCase().split("");
  // const randomseparated = _.sample(collectClone)
  //   [firstLanguage].toLowerCase()
  //   .split("");

  const [separated, setSeparated] = useState<any>([]);
  const [answer, setAnswer] = useState<Array<any>>([]);
  const [tell, { duration }] = useSound(audio);
  const timer = Math.floor(duration || 1000);

  useEffect(() => {
    // const wordsWithKeys = _.shuffle(
    //   questionSeparated.concat(randomseparated)
    const wordsWithKeys = _.shuffle(questionSeparated).map(
      (word: string, index: number) => {
        return {
          text: word,
          key: index,
        };
      }
    );
    setSeparated(wordsWithKeys);
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
    const temp = answer.map((item: any) => {
      return item.text;
    });
    const final = _.capitalize(temp.join(""));
    question[firstLanguage] === final ? yes() : no();

    const questionResult: QuestionResultInterface =
      question[firstLanguage] === final
        ? {
            correct: true,
            questionText: tat,
            chosenText: final,
            correctText: question[firstLanguage],
          }
        : {
            correct: false,
            questionText: tat,
            chosenText: final,
            correctText: question[firstLanguage],
          };
    setQuestionResult(questionResult);
  };

  const handleTagClick = (key: number) => {
    const currentIndex = _.findIndex(answer, { key: key });
    const copyAnswer = _.clone(answer);
    copyAnswer.splice(currentIndex, 1);
    setAnswer(copyAnswer);
  };

  const handleClick = (key: number) => {
    if (_.find(answer, { key: key })) {
      console.log("уже есть");
      return;
    }
    const currentWord = _.find(separated, { key: key });
    setAnswer((prevState) => [...prevState, currentWord]);
  };

  const resultList = answer.map((item, index) => {
    const { text, key } = item;
    return (
      <AnswerLi key={key}>
        <Tag
          green
          onClick={() => {
            handleTagClick(key);
          }}
        >
          <Text>{text}</Text>
        </Tag>
      </AnswerLi>
    );
  });

  const separatedList = separated.map((item: any, index: number) => {
    const { text, key } = item;
    return (
      <OptionLi
        key={key}
        className={_.find(answer, item) ? "cover important" : ""}
      >
        <Tag
          onClick={(e: any) => {
            handleClick(key);
          }}
        >
          <Text>{text}</Text>
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

  useEffect(() => {
    setTimeout(tell, 1000);
  }, [tell]);

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

const Repeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
