import React, {useEffect, useState} from "react";
import _ from "lodash";
import useSound from "use-sound";
import {Divider, Tag} from "antd";
import Button from "../../ui/Button";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {PlayAgain, QuestionNumber} from "../Words";
import {device} from "../../localBase/responsiveStyled";
import Play from "../../ui/Play";
import Sounds from '../../localBase/sounds'

const Collect = ({state, setState}) => {
    const history = useHistory();
    const {sound, wrong} = Sounds;
    const [yes] = useSound(sound);
    const [no] = useSound(wrong);

    const {
        translate,
        chosenGame,
        collect
    } = state;

    const shuffle = _.shuffle(collect).slice(0, 5);
    const collectClone = _.clone(collect);

    const [questions, setQuestions] = useState(shuffle);
    const [result, setResult] = useState([]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const question = questions[currentQuestionIndex];
    const {tat, audio} = question;

    //удалить из клона массива фраз именно нашу фразу
    const firstIndex = _.indexOf(collectClone, question);
    collectClone.splice(firstIndex, 1);

    const questionArr = tat.split(' ');
    const randomArr = _.sample(collectClone).tat.split(' ');
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
            tat === final ? yes() : no()
            const questionResult = tat === final ? {
                correct: true,
                questionText: tat
            } : {correct: false, id: tat, questionText: tat}
            checkGameState(chosenGame, questionResult)
            window.clearTimeout(timeout)
        }, 500)
        // }
    }

    const arrList = arr.map((item, index) => {
        return <li key={item + index + arr.length} style={{marginRight: 4}}>
            <Tag color="#FFFFFF"
                 style={{
                     color: '#718CCC',
                     fontSize: '16px',
                     lineHeight: '18px',
                     padding: '6.4px 15px',
                     borderRadius: 12,
                     border: '1px solid #718CCC',
                     cursor: "pointer"
                 }}
                 onClick={() => {
                     handleClick(index)
                 }}
            >{item}</Tag>
        </li>
    })

    const handleTagClick = (index) => {
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
            <Tag color="#E7E6F4"
                 style={{
                     color: '#718CCC',
                     fontSize: '16px',
                     lineHeight: '18px',
                     padding: '6.4px 15px',
                     borderRadius: 12,
                     cursor: "pointer"
                 }}
                 onClick={() => {
                     handleTagClick(index)
                 }}
            >{item}</Tag></li>
    })


    return (

        <StyledQuestion>
            <div onClick={tell} style={{textAlign: 'center'}}>
                {/*<QuestionText title={questionText}/>*/}
                <div><Play/>&nbsp;<PlayAgain>Воспроизвести</PlayAgain></div>
            </div>
            <StyledResult>
                {resultList}
            </StyledResult>
            <Divider/>
            <StyledUl>
                {arrList}
            </StyledUl>
            <Button size={'large'} type="primary" onClick={handleAnswerClick}>{translate.check}</Button>
            <QuestionNumber>{translate.question} {currentQuestionIndex + 1} / {questions.length}</QuestionNumber>
        </StyledQuestion>

    )

}
export default Collect;


const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.desktop} {
    width: 350px;
  }
  @media ${device.laptop} {
    width: 350px;

  }
`


const StyledResult = styled.ul`
  background: #FFFFFF;
  border: 1px solid rgba(113, 140, 204, 0.1);
  box-sizing: border-box;
  box-shadow: inset -2px -1px 4px rgba(113, 140, 204, 0.1);
  border-radius: 28px;
  width: 90%;
  display: flex;
  min-height: 140px;
  flex-wrap: wrap;
  margin-top: 16px;
  max-width: 350px;
  padding: 24px;
`
const StyledUl = styled.ul`
  width: 90%;
  display: flex;
  min-height: 120px;
  flex-wrap: wrap;
  padding: 12px;
  //max-width: 300px;
`
export const StyledPhrase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`