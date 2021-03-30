import useSound from "use-sound";
import Sounds from '../../localBase/sounds'
import Button from '../../ui/Button'

import {useHistory} from "react-router-dom";
import {StyledPhrase} from "../Collect";
import React, {useRef, useState} from "react";
import _ from "lodash";
import {PlayAgain, QuestionNumber, questionResultInterface} from "../Words";
import QuestionText from "../../ui/QuestionText";
import Play from "../../ui/Play";
import i18n from "i18next";
import {OptionInterface, StateInterface} from "../../localBase/interfaces";

const Phrases = ({state, setState}: StateInterface) => {
    const history = useHistory();
    const [answer, setAnswer] = useState('_');
    const [disabled, setDisabled] = useState(false)
    const {sound, wrong} = Sounds;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);

    const {
        phrases,
        chosenGame
    } = state;

    const {firstLanguage, secondLanguage} = phrases;
    const first = _.shuffle(firstLanguage).slice(0, 3);
    const second = _.shuffle(secondLanguage).slice(0, 3);
    const shuffle = _.shuffle([...first, ...second])

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(shuffle);
    const [result, setResult] = useState<Array<questionResultInterface>>([]);

    const question = questions[currentQuestionIndex];

    const {options, questionText, correct, id: questionId, audio} = question
    const [tell, {duration}] = useSound(audio)
    // const shuffledOptions = _.shuffle(options)
    const shuffledOptions = options;


    //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
    function checkGameState(chosenGame: string, questionResult: questionResultInterface) {
        console.log("questionResult", questionResult)
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
    }

    const handleClick = (id: number) => {
        const correctText = _.find(options, {id: 1}).text
        const chosenText = _.find(options, {id: id}).text;
        id === correct ? setAnswer('_') : setAnswer(`Правильный ответ:${correctText}`);
        const timeout = window.setTimeout(() => {
            id === correct ? yes() : no()
            const questionResult = id === correct ? {
                correct: true,
                id: questionId,
                questionText,
                correctText,
                chosenText
            } : {correct: false, id: questionId, questionText, correctText, chosenText}
            checkGameState(chosenGame, questionResult)
            setAnswer('_');
            window.clearTimeout(timeout)
        }, 300)
    }

    const optionsList = shuffledOptions.map((option: OptionInterface, index: number) => {
        const {id, text} = option;
        return <li key={id + text}>
            <Button size={"large"} onClick={() => {
                handleClick(id);

            }} block>{text}</Button>

        </li>
    })

    const timer = Math.floor(duration || 1000);
    return (

        <StyledPhrase>
            <div onClick={(event) => {
                setDisabled(true)
                tell();
                setTimeout(() => {
                    setDisabled(false)
                }, timer)

            }} style={{textAlign: 'center', pointerEvents: disabled ? 'none' : 'auto'}}
            >
                <QuestionText title={questionText}/>
                <div><Play/>&nbsp;<PlayAgain>{i18n.t("repeatAudio")}</PlayAgain></div>
            </div>
            <ul style={{minWidth: 200, maxWidth: 350, paddingTop: 16}}>
                {optionsList}
            </ul>
            <QuestionNumber>{i18n.t("question")}&nbsp;{currentQuestionIndex + 1} / {questions.length}</QuestionNumber>
        </StyledPhrase>

    )
}

export default Phrases;