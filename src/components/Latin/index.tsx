import React, { useState } from "react";
import { Button, Input } from "antd";
import { transliterate } from "../../utils/tranliterate";
import { words, WordsInterface } from "../../localBase/words";
import { phrases } from "../../localBase/phrases";
interface TranslateInterface {
  tat: string;
  lat: string;
  strong?: string;
}

const Latin = () => {
  const [first, setFirst] = useState("кибеткабат");
  const [second, setSecond] = useState("");

  const handleFirst = () => {
    const res = transliterate(first);
    setSecond(res);
  };

  const handleSecond = (e: any) => {
    setSecond(e.target.value);
  };

  const translateInterface = {
    menu: "Меню",
    user: "Профиль",
    login: "Керегез",
    settings: "Көйләнеш",
    chooseLanguage: "Тел",
    repeat: "Кабат",
    resultText: "Нәтиҗә",
    wordsText: "Сүзләр",
    phrases: "Гыйбарә",
    dragAndDrop: "Тупла",
    wrong: "Ялгыш",
    right: "Дөрес",
    mainPage: "Кайтык",
    check: "Тикшер",
    repeatAudio: "Кабат тыңларга",
    question: "Сорау",
    welcomeText: "Татар телен мини-уеннар форматында өйрәнү",
    wellDone: "Афәрин. Тагын уйнап кара!",
    start: "Башларга",
  };
  let final: any = {};
  for (let [key, value] of Object.entries(translateInterface)) {
    console.log(`${key}: ${value}`);
    let test: any = { [key]: transliterate(value) };

    // test.key = key;
    // test.value = value;
    console.log("test", test);
    final = { ...final, ...test };
  }

  const updatedWords = words.map((item: any) => {
    const { tat } = item;
    return { ...item, lat: transliterate(tat) };
  });

  const updatedPhrases = phrases.map((item) => {
    const { tat } = item;
    return { ...item, lat: transliterate(tat) };
  });

  return (
    <div>
      <Input
        value={first}
        onChange={(event) => {
          setFirst(event.target.value);
        }}
      />
      <Input readOnly value={second} onChange={handleSecond} />
      <Button onClick={handleFirst}>Convert</Button>
      <Button
        onClick={() => {
          var FileSaver = require("file-saver");
          var blob = new Blob([JSON.stringify(updatedPhrases)], {
            type: "text/plain;charset=utf-8",
          });
          FileSaver.saveAs(blob, "hello world.txt");

          // FileSaver saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom })
        }}
      >
        Convert
      </Button>
    </div>
  );
};

export default Latin;
