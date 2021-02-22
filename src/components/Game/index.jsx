import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Tag, Button, Divider} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';

import Welcome from "../Welcome";

import AidaMenu from "../AidaMenu";
import kitap from "../../sounds/words/kitap.mp3";
import {words} from "./words";
import {phrases} from "./phrases";
import {YMInitializer} from 'react-yandex-metrika';


const rusWords = words.map((item, index) => {
    const {rus} = item;
    return rus;
})
const tatWords = words.map((item, index) => {
    const {tat} = item;
    return tat;
})


const rusPhrases = phrases.map((item, index) => {
    const {rus} = item;
    return rus;
})
const tatPhrases = phrases.map((item, index) => {
    const {tat} = item;
    return tat;
})

const phrasesRusTat = phrases.map((item, index) => {
    const {tat, rus, audio} = item;
    return {
        id: index,
        questionText: rus,
        correct: 1,
        options: [
            {id: 1, text: tat},
            {id: 2, text: _.sample(tatPhrases)},
            {id: 3, text: _.sample(tatPhrases)},
            {id: 4, text: _.sample(tatPhrases)},
        ],
        audio: audio
    }

})
const phrasesTatRus = phrases.map((item, index) => {
    const {tat, rus, audio} = item;
    return {
        id: index,
        questionText: tat,
        correct: 1,
        options: [
            {id: 1, text: rus},
            {id: 2, text: _.sample(rusPhrases)},
            {id: 3, text: _.sample(rusPhrases)},
            {id: 4, text: _.sample(rusPhrases)},
        ],
        audio: audio
    }

})


const wordsRusTat = words.map((item, index) => {
    const {tat, rus} = item;
    return {
        id: index,
        questionText: rus,
        correct: 1,
        options: [
            {id: 1, text: tat},
            {id: 2, text: _.sample(tatWords)},
            {id: 3, text: _.sample(tatWords)},
            {id: 4, text: _.sample(tatWords)},
        ],
        audio: kitap
    }

})
const wordsTatRus = words.map((item, index) => {
    const {tat, rus} = item;
    return {
        id: index,
        questionText: tat,
        correct: 1,
        options: [
            {id: 1, text: rus},
            {id: 2, text: _.sample(rusWords)},
            {id: 3, text: _.sample(rusWords)},
            {id: 4, text: _.sample(rusWords)},
        ],
        audio: kitap
    }

})

export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'tat',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
}


const Game = () => {

        const [state, setState] = useState(initialState);
        const {currentQuestionIndex, result, questions, phrases, finished, currentAudio, gameState, language} = state;


        useEffect(() => {
            // console.log(language)
            if (language === 'tat') {
                setState((prevState => ({
                    ...prevState,
                    questions: _.shuffle(wordsTatRus).slice(1, 6),
                    phrases: _.shuffle(phrasesTatRus).slice(1, 6),
                })))

            }
            if (language === 'rus') {
                setState((prevState => ({
                    ...prevState,
                    questions: _.shuffle(wordsRusTat).slice(1, 6),
                    phrases: _.shuffle(phrasesRusTat).slice(1, 6),
                })))

            }
            // console.log(state.phrases)
        }, [gameState, language])

        const Question = () => {
            const question = questions[currentQuestionIndex];
            const {options, questionText, correct, id: questionId} = question
            const shuffledOptions = _.shuffle(options)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            // const [word] = useSound(audio)

            const Options = shuffledOptions.map((option, index) => {
                const handleClick = (id) => {
                    const timeout = window.setTimeout(() => {
                        const res = id === correct ? {
                            correct: true,
                            id: questionId,
                            questionText: questionText
                        } : {correct: false, id: questionId, questionText: questionText}

                        id === correct ? yes() : no()
                        if (currentQuestionIndex + 1 < questions.length) {
                            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, res]})
                        } else {
                            setState({
                                ...state,
                                // questions: _.shuffle(initialQuestions).slice(1, 6),
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true,
                                gameState: 'result',
                                chosenGame: 'words'
                            })
                        }

                        window.clearTimeout(timeout)
                    }, 500)


                }
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })

            // useEffect(() => {
            //     word()
            // }, [word])


            return (
                <div style={{textAlign: "center"}}>
                    {/*<DragAndDrop/>*/}
                    <div>Вопрос {currentQuestionIndex + 1} из {questions.length}</div>
                    <Title>{questionText}</Title>
                    <ul style={{minWidth: '200px'}}>
                        {Options}
                    </ul>
                </div>
            )
        }

        const Phrases = () => {
            const question = phrases[currentQuestionIndex];
            const {options, questionText, correct, id: questionId} = question
            const shuffledOptions = _.shuffle(options)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            // const [word] = useSound(audio)

            const Options = shuffledOptions.map((option, index) => {
                const handleClick = (id) => {
                    const timeout = window.setTimeout(() => {
                        const res = id === correct ? {
                            correct: true,
                            id: questionId,
                            questionText: questionText
                        } : {correct: false, id: questionId, questionText: questionText}

                        id === correct ? yes() : no()
                        if (currentQuestionIndex + 1 < phrases.length) {
                            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, res]})
                        } else {
                            setState({
                                ...state,
                                // phrases: _.shuffle(initialPhrases).slice(1, 6),
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true,
                                gameState: 'result',
                                chosenGame: 'phrases'
                            })
                        }

                        window.clearTimeout(timeout)
                    }, 500)


                }
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })

            // useEffect(() => {
            //     word()
            // }, [word])


            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {phrases.length}</div>
                    <Title>{questionText}</Title>
                    <ul style={{minWidth: '200px'}}>
                        {Options}
                    </ul>
                </div>
            )
        }

        const DragAndDrop = () => {

            const question = phrases[currentQuestionIndex];
            const {options, questionText, correct, id: questionId, audio} = question
            const [arr, setArr] = useState(_.shuffle(questionText.split(' ')));
            const [answer, setAnswer] = useState([]);
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            const [tell] = useSound(audio);
            useEffect(() => {
                // console.log("question", question)
                tell()
            }, [tell])

            const handleClick = (index) => {

                const currentWord = arr[index];
                const copyAnswer = answer.map((item) => {
                    return item;
                })
                copyAnswer.push(currentWord);

                setAnswer(prevState => [...prevState, currentWord])

                const resultArr = arr.map((item) => {
                    return item;
                })

                resultArr.splice(index, 1)
                setArr(resultArr);


                if (resultArr.length === 0) {

                    const timeout = window.setTimeout(() => {
                        const final = copyAnswer.join(' ');
                        questionText.toLowerCase() === final.toLowerCase() ? yes() : no()
                        const res = questionText === final ? {
                            correct: true,
                            id: questionId,
                            questionText: questionText
                        } : {correct: false, id: questionId, questionText: questionText}
                        console.log("res", res)
                        if (currentQuestionIndex + 1 < phrases.length) {
                            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, res]})
                        } else {
                            setState({
                                ...state,
                                // phrases: _.shuffle(initialPhrases).slice(1, 6),
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true,
                                gameState: 'result',
                                chosenGame: 'dragAndDrop'
                            })
                        }
                        window.clearTimeout(timeout)
                    }, 500)
                }

            }

            const arrList = arr.map((item, index) => {
                return <li key={item}>
                    <Button onClick={() => {
                        handleClick(index)
                    }}>{item.toLowerCase()}</Button>
                </li>
            })

            const resultList = answer.map((item, index) => {
                return <li key={item}><Tag color="green" style={{
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '4px'}}>{item}</Tag></li>
            })


            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {phrases.length}</div>
                    <h2 onClick={tell} style={{maxWidth:300, border: '1px solid black'}}>Нажмите на текст, чтобы повторить аудио</h2>
                    <ul style={{minWidth: '200px', minHeight: '40px', display: 'flex'}}>
                        {resultList}
                    </ul>
                    <Divider/>
                    <ul style={{minWidth: '200px', display: 'flex', justifyContent: 'space-evenly', minHeight: '40px'}}>
                        {arrList}
                    </ul>
                </div>
            )

        }

        function res() {
            switch (gameState) {
                case 'welcome':
                    return <Welcome state={state} setState={setState}/>
                case 'words':
                    return <Question/>
                case 'phrases':
                    return <Phrases/>
                case 'result':
                    return <Result state={state} setState={setState}/>
                case 'dragAndDrop':
                    return <DragAndDrop state={state} setState={setState}/>
                default:
                    return null
            }
        }


        return (
            <StyledGame>
                <StyledMenu>
                    <AidaMenu state={state} setState={setState}/>
                </StyledMenu>
                {res()}
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
            </StyledGame>
        );
    }
;


export default Game;

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledGame = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;
`
