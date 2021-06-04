import { eng } from './eng'
import { rus } from './rus'
import { tat } from './tat'
import { lat } from './lat'

export interface LanguageInterface {
  [name: string]: TranslationInterface;
}

export interface TranslationInterface {
  chooseLanguage: string;
  repeat: string;
  resultText: string;
  wordsText: string;
  phrases: string;
  dragAndDrop: string;
  wrong: string;
  right: string;
  mainPage: string;
  check: string;
  repeatAudio: string;
  question: string;
  welcomeText: string;
  wellDone: string;
  settings: string;
  login: string;
  user: string;
  menu: string;
  start: string;
  home: string;
  languages: string;
  profile: string;
  collectWord: string;
  collectPhrase: string;
  next: string;
  pickGame: string;
  forgotPassword: string;
  password: string;
}

export const translateBaseI18: { [name: string]: LanguageInterface } = {
  eng: eng,
  rus: rus,
  lat: lat,
  tat: tat
}
