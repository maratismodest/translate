import React, { useContext } from "react";
import { isMobile } from "react-device-detect";
import MobileMenu from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import "./styles.scss";
import {
  phrasesLatEng,
  phrasesLatLat,
  phrasesTatRus,
  wordsLatEng,
  wordsLatLat,
  wordsTatRus,
} from "../../localBase/base";
import { MenuInterface } from "./menuBase";
import AppContext from "../../AppContext";
import { useHistory } from "react-router-dom";
export default ({ user }: any) => {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();
  const LanguageMenuList: MenuInterface[] = [
    {
      text: "Русский",
      cb: () => {
        setState({
          ...state,
          language: "rus",
          firstLanguage: "tat",
          secondLanguage: "rus",
          words: wordsTatRus,
          phrases: phrasesTatRus,
        });
        history.push("/");
      },
    },
    {
      text: "English",
      cb: () => {
        setState({
          ...state,
          language: "eng",
          firstLanguage: "lat",
          secondLanguage: "eng",
          words: wordsLatEng,
          phrases: phrasesLatEng,
        });
        history.push("/");
      },
    },
    {
      text: "Татарча",
      cb: () => {
        setState({
          ...state,
          language: "tat",
          firstLanguage: "tat",
          secondLanguage: "rus",
          words: wordsTatRus,
          phrases: phrasesTatRus,
        });
        history.push("/");
      },
    },
    {
      text: "Latin",
      cb: () => {
        setState({
          ...state,
          language: "lat",
          firstLanguage: "lat",
          secondLanguage: "lat",
          words: wordsLatLat,
          phrases: phrasesLatLat,
        });
        history.push("/");
      },
    },
  ];

  return isMobile ? (
    <MobileMenu user={user} LanguageMenuList={LanguageMenuList} />
  ) : (
    <DesktopMenu user={user} LanguageMenuList={LanguageMenuList} />
  );
};
