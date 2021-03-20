import useSound from "use-sound";
import Sounds from '../../localBase/sounds'
import Button from '../../ui/Button'

import {useHistory} from "react-router-dom";
import {StyledPhrase} from "../Collect";
import React, {useState} from "react";
import _ from "lodash";
import {PlayAgain, QuestionNumber} from "../Words";
import QuestionText from "../../ui/QuestionText";
import Play from "../../ui/Play";
import i18n from "i18next";

const Phrases = ({state, setState}) => {
    const history = useHistory();
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
    const [result, setResult] = useState([]);

    const question = questions[currentQuestionIndex];

    const {options, questionText, correct, id: questionId, audio} = question
    const [tell] = useSound(audio)
    // const shuffledOptions = _.shuffle(options)
    const shuffledOptions = options;


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
    const optionsList = shuffledOptions.map((option, index) => {
        const {id, text} = option;
        return <li key={id + text}>
            <Button size={"large"} onClick={() => {
                handleClick(id);

            }} block>{text}</Button>

        </li>
    })


    return (

        <StyledPhrase>
            <div onClick={tell} style={{textAlign: 'center'}}>
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