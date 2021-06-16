import { Dispatch, SetStateAction } from 'react'

export interface WordsInterface {
    tat: string;
    rus: string;
    eng: string;
    lat: string;
    audio: any;
}

export interface Option {
    id: number,
    text: string
}
export interface QuestionInterface {
    id: number,
    questionText: string,
    correct: 1,
    options:Option[],
    audio: string
}

export interface StateInterface {
    state: InitialStateInterface
    setState: Dispatch<SetStateAction<any>>
}

export interface OptionInterface {
    id: number
    text: string
}
export enum Language {
    // eslint-disable-next-line no-unused-vars
    rus = 'rus',
    // eslint-disable-next-line no-unused-vars
  tat= 'tat'
}

export interface TwoLanguageQuestionsInterface {
    firstLanguage : QuestionInterface[],
    secondLanguage : QuestionInterface[]
}
export interface WordInterface {
    audio:string,
    eng: string,
    lat:string,
    rus: string,
    tat: string,
}

export interface InitialStateInterface {
    chosenGame: string;
    gameState: 'welcome' | 'words' | 'phrases' | 'collect' | 'result';
    language: Language;
    firstLanguage: Language;
    secondLanguage: Language;
    result: Array<any>;
    finished: boolean;
    currentQuestionIndex: number;
    words: TwoLanguageQuestionsInterface | [];
    phrases: TwoLanguageQuestionsInterface | [];
    collect: [];
    initialQuestionIndex?: 0;
    word: WordInterface[];
    sounds: any;
}
