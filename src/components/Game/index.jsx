import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Tag, Button, Divider} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';
import {PlayCircleOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import Welcome from "../Welcome";
import AidaMenu from "../AidaMenu";
import {words} from "./words";
import {phrases} from "./phrases";
import {YMInitializer} from 'react-yandex-metrika';
import NavMenu from "../NavMenu";
import {
    phrasesEngTat,
    phrasesRusTat,
    phrasesTatEng,
    phrasesTatRus, translateBase,
    wordsEngTat,
    wordsRusTat,
    wordsTatEng,
    wordsTatRus
} from "./base";


export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'rus',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    translate: translateBase.rus
}


const Game = () => {
        const [state, setState] = useState(initialState);
        const {
            currentQuestionIndex,
            result,
            questions,
            phrases,
            finished,
            currentAudio,
            gameState,
            language,
            translate
        } = state;

        function checkState(chosenGame) {
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
                    chosenGame: chosenGame
                })
            }
        }

        useEffect(() => {
            switch (language) {
                case 'tat':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsTatRus).slice(1, 6),
                        phrases: _.shuffle(phrasesTatRus).slice(1, 6),
                        translate: translateBase.tat
                    })))
                    break;
                case 'rus':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsRusTat).slice(1, 6),
                        phrases: _.shuffle(phrasesRusTat).slice(1, 6),
                        translate: translateBase.rus
                    })))
                    break;
                case 'tat-eng':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsTatEng).slice(1, 6),
                        phrases: _.shuffle(phrasesTatEng).slice(1, 6),
                        translate: translateBase.eng
                    })))
                    break;
                case 'eng-tat':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsEngTat).slice(1, 6),
                        phrases: _.shuffle(phrasesEngTat).slice(1, 6),
                        translate: translateBase.eng
                    })))
                    break;
                default:
                    break;
            }
        }, [gameState, language])

        const Question = () => {
            const question = questions[currentQuestionIndex];
            const {options, questionText, correct, id: questionId} = question
            const shuffledOptions = _.shuffle(options)

            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            const handleClick = (id) => {
                const timeout = window.setTimeout(() => {
                    id === correct ? yes() : no()
                    const res = id === correct ? {
                        correct: true,
                        id: questionId,
                        questionText: questionText
                    } : {correct: false, id: questionId, questionText: questionText}

                    checkState('words')

                    window.clearTimeout(timeout)
                }, 500)


            }

            const optionsList = shuffledOptions.map((option, index) => {
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);
                    }} block>{text}</Button>

                </li>
            })

            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {questions.length}</div>
                    <Title>{questionText}</Title>
                    <ul style={{minWidth: '200px'}}>
                        {optionsList}
                    </ul>
                </div>
            )
        }

        const Phrases = () => {
            const question = phrases[currentQuestionIndex];
            const {options, questionText, correct, id: questionId, audio} = question
            const shuffledOptions = _.shuffle(options)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);

            const handleClick = (id) => {
                const timeout = window.setTimeout(() => {
                    const res = id === correct ? {
                        correct: true,
                        id: questionId,
                        questionText: questionText
                    } : {correct: false, id: questionId, questionText: questionText}

                    id === correct ? yes() : no()


                    checkState('phrases')

                    window.clearTimeout(timeout)
                }, 500)


            }
            const Options = shuffledOptions.map((option, index) => {
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })


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
            const questionArr = questionText.split(' ');
            const randomArr = _.sample(phrases).questionText.split(' ');
            const [arr, setArr] = useState(_.shuffle(questionArr.concat(randomArr)));
            const [answer, setAnswer] = useState([]);
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            const [tell] = useSound(audio);
            useEffect(() => {
                tell()
            }, [tell])

            const handleClick = (index) => {

                const currentWord = arr[index];

                const copyAnswer = _.clone(answer);
                copyAnswer.push(currentWord);
                setAnswer(copyAnswer)

                const resultArr = _.clone(arr)
                resultArr.splice(index, 1)
                setArr(resultArr);


                if (answer.length + 1 === questionArr.length) {

                    const timeout = window.setTimeout(() => {
                        const final = copyAnswer.join(' ');
                        questionText === final ? yes() : no()
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
                return <li key={item} style={{marginRight: 4}}>
                    <Button onClick={() => {
                        handleClick(index)
                    }}>{item}</Button>
                </li>
            })

            const resultList = answer.map((item, index) => {
                return <li key={item}><Tag color="green" style={{
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '4px'
                }}>{item}</Tag></li>
            })


            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {phrases.length}</div>
                    <h2>{language === ('rus' || 'tat') ? 'Повторить фразу' : 'Repeat again'}</h2>
                    <Icon onClick={tell} component={PlayCircleOutlined} style={{fontSize: '400%', color: '#12a4d9'}}/>
                    <StyledResult>
                        {resultList}
                    </StyledResult>
                    <Divider/>
                    <StyledUl>
                        {arrList}
                    </StyledUl>
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
                <StyledNavMenu>
                    <NavMenu state={state} setState={setState}/>
                </StyledNavMenu>

                {res()}
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
            </StyledGame>
        );
    }
;


export default Game;

export const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledNavMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`

const StyledGame = styled.div`
  padding: 5%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
`

const StyledResult = styled.ul`
  min-width: 200px;
  display: flex;
  min-height: 40px;
  flex-wrap: wrap;
  margin-top: 12px;
  // padding: 12px 0;
  max-width: 300px;
`
const StyledUl = styled.ul`
  min-width: 200px;
  display: flex;
  min-height: 104px;
  flex-wrap: wrap;
  padding: 12px 0;
  max-width: 300px;
`
