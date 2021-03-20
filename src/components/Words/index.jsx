import React, {useState, useEffect} from "react";
import useSound from "use-sound";
import Sounds from '../../localBase/sounds'
import Button from "../../ui/Button";

import {useHistory} from "react-router-dom";
import _ from 'lodash'
import styled from "styled-components"
import {device} from "../../localBase/responsiveStyled";

import Play from "../../ui/Play";
import QuestionText from "../../ui/QuestionText";
import i18n from "i18next";

const Words = ({state, setState}) => {
    const {sound, wrong} = Sounds;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);
    const history = useHistory();

    const {
        words,
        chosenGame,
    } = state;

    console.log("words", words)


    const {firstLanguage, secondLanguage} = words;
    const first = _.shuffle(firstLanguage).slice(0, 3);
    const second = _.shuffle(secondLanguage).slice(0, 3);
    const shuffle = _.shuffle([...first, ...second])

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(shuffle);
    const [result, setResult] = useState([]);


    const question = questions[currentQuestionIndex];
    const {options, questionText, correct, id: questionId, audio} = question;
    const [tell] = useSound(audio);

    //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
    function checkGameState(chosenGame, questionResult) {
        if (currentQuestionIndex + 1 < questions.length) {
            setResult([...result, questionResult])
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            history.push("/result");
            setState({
                ...state,
                currentQuestionIndex: 0,
                result: [...result, questionResult],
                finished: true,
                gameState: 'result',
                chosenGame: chosenGame
            })
        }
    }

    const handleClick = (id) => {
        const timeout = window.setTimeout(() => {
            id === correct ? yes() : no()
            const questionResult = id === correct ? {
                correct: true,
                id: questionId,
                questionText: questionText
            } : {correct: false, id: questionId, questionText: questionText}
            checkGameState(chosenGame, questionResult)
            window.clearTimeout(timeout)
        }, 300)

    }

    const optionsList = options.map((option, index) => {
        const {id, text} = option;
        return <li key={id + text}>
            <Button size={"large"} onClick={() => {
                handleClick(id);
            }} block>{text}</Button>
        </li>
    })

    return (

        <StyledWords>
            <div onClick={tell} style={{textAlign: 'center'}}>
                <QuestionText title={questionText}/>
                <div><Play/>&nbsp;<PlayAgain>{i18n.t("repeatAudio")}</PlayAgain></div>
                </div>
            <ul style={{minWidth: 200, maxWidth: 350, paddingTop: 16}}>
                {optionsList}
            </ul>
            <QuestionNumber>{i18n.t("question")} {currentQuestionIndex + 1} / {questions.length}</QuestionNumber>
        </StyledWords>
    )
}

export default Words;

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
  
  @media ${device.laptop} {
    font-size: 16px;
  };
`

const StyledWords = styled.div`
  text-align: center;
`
export const QuestionNumber = styled.span`
  font-size: 16px;
  line-height: 126%;
  color: var(--color-primary);
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
  };
`