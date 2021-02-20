import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Button} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';

import Welcome from "../Welcome";

import AidaMenu from "../AidaMenu";
import kitap from "../../sounds/words/kitap.mp3";
import {words} from "./100";
import { YMInitializer } from 'react-yandex-metrika';


const phrases = [{tat: 'Сәлам!', rus: 'Привет!'},
    {tat: 'Хәерле көн!', rus: 'Добрый день!'},
    {tat: 'Ни хәл?', rus: 'Как дела?'},
    {tat: 'Исәнмесез!', rus: 'Здравствуй(те)!'},
    {tat: 'Ни хәл?', rus: 'Как дела?'},
    {tat: 'Хуш!', rus: 'Пока!'},
    {tat: 'Сау булыгыз!', rus: 'До свидания!'},
    {tat: 'Сәлам әйт!', rus: 'Передавай привет!'},
    {tat: 'Рәхмәт!', rus: 'Спасибо!'},
    {tat: 'Зинһар!', rus: 'Пожалуйста!'},
    {tat: 'Берни түгел!', rus: 'Ничего не стоит!'},
    {tat: 'Борчылмагыз!', rus: 'Не беспокойтесь!'},
    {tat: 'Әлбәттә!', rus: 'Конечно, разумеется!'},
    {tat: 'Әйдә!', rus: 'Давай!'},
    {tat: 'Минемчә!', rus: 'По-моему!'},
    {tat: 'Бәлки!', rus: 'Возможно!'},
    {tat: 'Һичшиксез!', rus: 'Несомненно'},
    {tat: 'Кыскасы', rus: 'Короче'},
    {tat: 'Син (сез) кайда?', rus: 'Где ты (вы)?'},
    {tat: 'Кая барабыз?', rus: 'Куда пойдём?'},
    {tat: 'Хәзер нишлик?', rus: 'Что сейчас будем делать?'},
    {tat: ' Ә сез кем?', rus: 'А кто вы?'},
    {tat: 'Шулаймы?', rus: 'Это так?'},
    {tat: 'Килә аласыңмы?', rus: 'Можешь прийти?'},
    {tat: 'Мин бик шат!', rus: 'Я очень рад!'},
    {tat: 'Кәефем юк', rus: 'Нет настроения'},
    {tat: 'Арыдым', rus: 'Я устал(а)'},
    {tat: 'бу туристлар Америкадан', rus: 'эти туристы из Америки'},
    {tat: 'хәерле кич', rus: 'добрый вечер'},
    {tat: 'минем исемем Алсу', rus: 'меня зовут Алсу'},
    {tat: 'Бу Азатның әтисе', rus: 'это папа Азата'},
    {tat: 'Бик зур рәхмәт', rus: 'большое спасибо'},
    {tat: 'Сезгә дә рәхмәт', rus: 'вам тоже спасибо'},
    {tat: 'Хәлләрең ничек?', rus: 'как дела?'},
    {tat: 'Гафу итегез', rus: 'извините'},
    {tat: 'мин татарча сөйләшәм', rus: 'я говорю по-татарски'},
    {tat: 'сау булыгыз', rus: 'до свидания'},
    {tat: 'бу нэрсә?', rus: 'что это?'},
    {tat: 'бу кем?', rus: 'кто это?'},
    {tat: 'матур кыз', rus: 'красивая девочка'},
    {tat: 'син нишлисең?', rus: 'что ты делаешь?'},
    {tat: 'минем телефон кайда?', rus: 'где мой телефон'},
    {tat: 'Әйдә ашыйбыз', rus: 'давай покушаем'},
    {tat: 'Әйдә киттек', rus: 'давай пошли'},
    {tat: 'рәхим итегез', rus: 'добро пожаловать'},
    {tat: 'миңа апельсин кирәк', rus: 'мне нужен апельсин'},
    {tat: 'татар теле', rus: 'татарский язык'},
]



const rusWords = words.map((item, index) => {
    const {tat, rus} = item;
    return rus;
})
const tatWords = words.map((item, index) => {
    const {tat, rus} = item;
    return tat;
})


const rusPhrases = phrases.map((item, index) => {
    const {tat, rus} = item;
    return rus;
})
const tatPhrases = phrases.map((item, index) => {
    const {tat, rus} = item;
    return tat;
})

const phrasesRusTat = phrases.map((item, index) => {
    const {tat, rus} = item;
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
        audio: kitap
    }

})
const phrasesTatRus = phrases.map((item, index) => {
    const {tat, rus} = item;
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
        audio: kitap
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
            console.log(language)
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
            console.log(state.phrases)
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
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2" />
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