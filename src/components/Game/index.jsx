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
    initialState,
    phrasesEngTat,
    phrasesRusTat,
    phrasesTatEng,
    phrasesTatRus, translateBase,
    wordsEngTat,
    wordsRusTat,
    wordsTatEng,
    wordsTatRus
} from "./base";



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
            translate,
            chosenGame
        } = state;



        //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
        function checkGameState(chosenGame, questionResult) {
            if (currentQuestionIndex + 1 < phrases.length) {
                setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, questionResult]})
            } else {
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
                case 'tateng':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsTatEng).slice(1, 6),
                        phrases: _.shuffle(phrasesTatEng).slice(1, 6),
                        translate: translateBase.eng
                    })))
                    break;
                case 'engtat':
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

        // const Words = () => {
        //     const question = questions[currentQuestionIndex];
        //     const {options, questionText, correct, id: questionId} = question
        //     // const shuffledOptions = _.shuffle(options)
        //     const shuffledOptions = options;
        //     const [yes] = useSound(sound);
        //     const [no] = useSound(wrong);
        //
        //     const handleClick = (id) => {
        //         const timeout = window.setTimeout(() => {
        //             id === correct ? yes() : no()
        //             const questionResult = id === correct ? {
        //                 correct: true,
        //                 id: questionId,
        //                 questionText: questionText
        //             } : {correct: false, id: questionId, questionText: questionText}
        //             checkGameState(chosenGame, questionResult)
        //             window.clearTimeout(timeout)
        //         }, 300)
        //
        //     }
        //
        //     const optionsList = shuffledOptions.map((option, index) => {
        //         const {id, text} = option;
        //         return <li key={id}>
        //             <Button size={"large"} onClick={() => {
        //                 handleClick(id);
        //             }} block>{text}</Button>
        //         </li>
        //     })
        //
        //     return (
        //         <div style={{textAlign: "center"}}>
        //             <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {phrases.length}</Title>
        //             <Title level={2}>{questionText}</Title>
        //             <ul style={{minWidth: '200px', maxWidth: '350px'}}>
        //                 {optionsList}
        //             </ul>
        //         </div>
        //     )
        // }

        // const Phrases = () => {
        //
        //     const question = phrases[currentQuestionIndex];
        //     const {options, questionText, correct, id: questionId, audio} = question
        //     const [tell] = useSound(audio)
        //     // const shuffledOptions = _.shuffle(options)
        //     const shuffledOptions = options;
        //     const [yes] = useSound(sound);
        //     const [no] = useSound(wrong);
        //
        //
        //     // useEffect(()=>{
        //     //     console.log("tell")
        //     //     tell()
        //     // },[tell])
        //
        //
        //     const handleClick = (id) => {
        //         const timeout = window.setTimeout(() => {
        //             id === correct ? yes() : no()
        //             const questionResult = id === correct ? {
        //                 correct: true,
        //                 id: questionId,
        //                 questionText: questionText
        //             } : {correct: false, id: questionId, questionText: questionText}
        //             checkGameState(chosenGame, questionResult)
        //
        //             window.clearTimeout(timeout)
        //         }, 300)
        //
        //
        //     }
        //     const optionsList = shuffledOptions.map((option, index) => {
        //         const {id, text} = option;
        //         return <li key={id}>
        //             <Button size={"large"} onClick={() => {
        //                 handleClick(id);
        //
        //             }} block>{text}</Button>
        //
        //         </li>
        //     })
        //
        //
        //
        //
        //     return (
        //         <StyledPhrase>
        //
        //             <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {phrases.length}</Title>
        //
        //             <Title level={2} onClick={()=>{tell()}}><Icon onClick={tell} component={PlayCircleOutlined} style={{color: '#12a4d9'}}/> {questionText}</Title>
        //             <ul style={{minWidth: '200px', maxWidth: '350px'}}>
        //                 {optionsList}
        //             </ul>
        //         </StyledPhrase>
        //     )
        // }


        const DragAndDrop = () => {

            const question = phrases[currentQuestionIndex];
            const {options, questionText, correct, id: questionId, audio} = question
            const questionArr = questionText.split(' ');
            const phrasesClone = _.clone(phrases);

            const firstIndex = _.indexOf(phrasesClone, question);
            // console.log("firstIndex",firstIndex)
            phrasesClone.splice(firstIndex, 1);
            const randomArr = _.sample(phrasesClone).questionText.split(' ');
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


            }

            const handleAnswerClick = () => {
                console.log("handleAnswerClick")
                // if (answer.length === questionArr.length) {

                const timeout = window.setTimeout(() => {
                    const final = answer.join(' ');
                    questionText === final ? yes() : no()
                    const questionResult = questionText === final ? {
                        correct: true,
                        id: questionId,
                        questionText: questionText
                    } : {correct: false, id: questionId, questionText: questionText}
                    checkGameState(chosenGame, questionResult)
                    window.clearTimeout(timeout)
                }, 500)
                // }
            }

            const arrList = arr.map((item, index) => {
                return <li key={item + index + arr.length} style={{marginRight: 4}}>
                    <Button size={"large"} onClick={() => {
                        handleClick(index)
                    }}>{item}</Button>
                </li>
            })

            const handleTagClick = (index) => {
                console.log(answer)
                console.log(arr)

                const currentWord = answer[index];
                const resultArr = _.clone(arr)
                resultArr.push(currentWord)
                setArr(resultArr);

                const copyAnswer = _.clone(answer);
                copyAnswer.splice(index, 1);
                setAnswer(copyAnswer)


            }
            const resultList = answer.map((item, index) => {
                return <li key={item + index + answer.length}>
                    <Tag color="green"
                         style={{
                             fontSize: '16px',
                             lineHeight: '18px',
                             padding: '6.4px 15px',
                         }}
                         onClick={() => {
                             handleTagClick(index)
                         }}
                    >{item}</Tag></li>
            })


            return (
                <StyledQuestion>
                    <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {phrases.length}</Title>
                    <Title level={2}>{translate.repeatAudio}</Title>
                    <Icon onClick={tell} component={PlayCircleOutlined} style={{fontSize: '400%', color: '#12a4d9'}}/>
                    <StyledResult>
                        {resultList}
                    </StyledResult>
                    <Divider/>
                    <StyledUl>
                        {arrList}
                    </StyledUl>
                    <Button size={'large'} type="primary" onClick={handleAnswerClick}>{translate.check}</Button>
                </StyledQuestion>
            )

        }

        function res() {
            switch (gameState) {
                case 'welcome':
                    return <Welcome state={state} setState={setState}/>
                // case 'words':
                //     return <Words state={state} setState={setState}/>
                // case 'phrases':
                //     return <Phrases state={state} setState={setState}/>
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
                {/*<StyledNavMenu>*/}
                {/*    <NavMenu state={state} setState={setState}/>*/}
                {/*</StyledNavMenu>*/}
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

const StyledQuestion = styled.div`
  text-align: center;
  width: 100%;
  max-width: 350px;
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
  // flex-wrap: wrap;
  margin-top: 16px;
  // padding: 12px 0;
  max-width: 350px;
`
const StyledUl = styled.ul`
  width: auto;
  min-width: 200px;
  display: flex;
  min-height: 120px;
  flex-wrap: wrap;
  padding: 12px 0;
  //max-width: 300px;
`
export const StyledPhrase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`