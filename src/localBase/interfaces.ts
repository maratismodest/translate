import { InitialStateInterface } from './base'
import { Dispatch, SetStateAction } from 'react'

export interface WordsInterface {
    tat: string;
    rus: string;
    eng: string;
    lat: string;
    audio: any;
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
