import useSound from "use-sound";
import sound from "../../sounds/sound.mp3";
import wrong from "../../sounds/wrong.mp3";
import {Button} from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const Words = ({state, setState}) => {
    const {
        currentQuestionIndex,
        result,
        questions,
        phrases,
        finished,
        currentAudio,
        gameState,
        language,
        translate,
        chosenGame
    } = state;
    const question = questions[currentQuestionIndex];
    const {options, questionText, correct, id: questionId} = question
    // const shuffledOptions = _.shuffle(options)
    const shuffledOptions = options;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);

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
        return <li key={id}>
            <Button size={"large"} onClick={() => {
                handleClick(id);
            }} block>{text}</Button>
        </li>
    })

    return (
        <div style={{textAlign: "center"}}>
            <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {phrases.length}</Title>
            <Title level={2}>{questionText}</Title>
            <ul style={{minWidth: '200px', maxWidth: '350px'}}>
                {optionsList}
            </ul>
        </div>
    )
}

export default Words;