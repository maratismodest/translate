import React, {useEffect, useState} from "react";
import _ from "lodash";
import useSound from "use-sound";
import sound from "../../sounds/sound.mp3";
import wrong from "../../sounds/wrong.mp3";
import {Button, Divider, Tag} from "antd";
import Title from "antd/es/typography/Title";
import Icon, {PlayCircleOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {StyledGame} from "../../App";

const Collect = ({state, setState}) => {

    const history = useHistory();
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);

    const {
        phrases,
        translate,
        chosenGame
    } = state;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(_.shuffle(phrases).slice(0, 5));
    const [result, setResult] = useState([]);

    const question = questions[currentQuestionIndex];
    const {options, questionText, correct, id: questionId, audio} = question;
    const questionArr = questionText.split(' ');
    const phrasesClone = _.clone(phrases);
    const firstIndex = _.indexOf(phrasesClone, question);
    phrasesClone.splice(firstIndex, 1);
    const randomArr = _.sample(phrasesClone).questionText.split(' ');
    const [arr, setArr] = useState(_.shuffle(questionArr.concat(randomArr)));
    const [answer, setAnswer] = useState([]);

    const [tell] = useSound(audio);

    useEffect(() => {
        setArr(_.shuffle(questionArr.concat(randomArr)));
        setAnswer([])
    }, [currentQuestionIndex])
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
        <StyledGame>
            <StyledQuestion>
                <Title level={5}>{translate.question} {currentQuestionIndex + 1} / {questions.length}</Title>
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
        </StyledGame>
    )

}
export default Collect;

export const StyledMenu = styled.div`
  z-index: 1;
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

// const StyledGame = styled.div`
//   padding: 5%;
//   position: relative;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   flex-grow: 1;
//   background: #FEF5EF;
//
//   .ant-divider-horizontal {
//     margin: 12px 0 !important;
//   }
// `

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