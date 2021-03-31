import React, {useState, useEffect, Dispatch, SetStateAction, useRef} from "react";
import {useDebounce} from 'use-debounce';
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
import {InitialStateInterface} from "../../localBase/base";
import {OptionInterface} from "../../localBase/interfaces";
import {useThrottle, useThrottleCallback} from '@react-hook/throttle'
import {Input} from "antd";


interface WordsInterface {
    state: InitialStateInterface
    setState: Dispatch<SetStateAction<InitialStateInterface>>
}

export interface questionResultInterface {
    correct: boolean
    id: number
    questionText: string
    correctText: string
}

const Words = ({state, setState}: WordsInterface) => {
    const {sound, wrong} = Sounds;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);
    const history = useHistory();
    const [disabled, setDisabled] = useState(false)

    const {
        words,
        chosenGame,
    } = state;


    const {firstLanguage, secondLanguage} = words;
    const first = _.shuffle(firstLanguage).slice(0, 3);
    const second = _.shuffle(secondLanguage).slice(0, 3);
    const shuffle = _.shuffle([...first, ...second])

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(shuffle);
    const [result, setResult] = useState<Array<questionResultInterface>>([]);


    const question = questions[currentQuestionIndex];
    const {options, questionText, correct, id: questionId, audio} = question;
    const [tell, {duration}] = useSound(audio);

    //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
    function checkGameState(chosenGame: string, questionResult: questionResultInterface) {
        // console.log("questionResult", questionResult)
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setResult(prevState => [...prevState, questionResult]);
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
        setAnswer('_')
    }

    const [answer, setAnswer] = useState('_');

    const handleClick = (id: number) => {
        const correctText = _.find(options, {id: 1}).text
        const chosenText = _.find(options, {id: id}).text;
        id === correct ? yes() : no()
        id === correct ? setAnswer('_') : setAnswer(`Правильный ответ:${correctText}`);
        const questionResult = id === correct ? {
            correct: true,
            id: questionId,
            questionText,
            correctText,
            chosenText
        } : {correct: false, id: questionId, questionText, correctText, chosenText}
        setTimeout(() => {
            checkGameState(chosenGame, questionResult)
        }, 1500)
    }


    const optionsList = options.map((option: OptionInterface, index: number) => {
        // console.log("option", option)
        const {id, text} = option;
        return <li key={id + text}>
            <Button size={"large"} onClick={() => {
                handleClick(id);
            }} block><span>{text}</span></Button>
        </li>
    })

    const timer = Math.floor(duration || 1000);

    const delayFunc = () => {
        setDisabled(true)
        tell();
        setTimeout(() => {
            setDisabled(false)
        }, timer)
    }
    return (

        <StyledWords>
            <div
                onClick={_.debounce(delayFunc, timer, {
                    'leading': true})}
                style={{textAlign: 'center', pointerEvents: disabled ? 'none' : 'auto'}}
            >
                <QuestionText title={questionText}/>
                <div><Play/>&nbsp;<PlayAgain>{i18n.t("repeatAudio")}</PlayAgain></div>
            </div>

            <ul style={{minWidth: 200, maxWidth: 350, paddingTop: 16}}>
                {optionsList}
            </ul>
            <StyledRightAnswer>{answer}</StyledRightAnswer>
            <QuestionNumber>{i18n.t("question")} {currentQuestionIndex + 1} / {questions.length}</QuestionNumber>
        </StyledWords>
    )
}

export default Words;
const StyledRightAnswer = styled.span`
  color: var(--color-red);
  font-size: 16px;
  line-height: 18px;
`

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
`

const StyledWords = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
  };
`