import React, { useState } from "react";
import { Button, Input } from "antd";
import { transliterate } from "../../utils/tranliterate";
import { phrases } from "../../localBase/phrases";



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
  for (const [key, value] of Object.entries(translateInterface)) {
    const test: any = { [key]: transliterate(value) };
    final = { ...final, ...test };
  }


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
            const FileSaver = require('file-saver');
          const blob = new Blob([JSON.stringify(updatedPhrases)], {
            type: "text/plain;charset=utf-8",
          });
          FileSaver.saveAs(blob, "hello world.txt");
        }}
      >
        Convert
      </Button>
    </div>
  );
};

export default Latin;
