import React, { useState } from "react";
import { Button, Input } from "antd";
import { transliterate } from "../../utils/tranliterate";
import { words, WordsInterface } from "../../localBase/words";
// import salam from "../../sounds/words/salam.mp3";
// import keshe from "../../sounds/words/keshe.mp3";
// import esh from "../../sounds/words/esh.mp3";
// import kon from "../../sounds/words/kon.mp3";
// import aul from "../../sounds/words/aul.mp3";
// import bala from "../../sounds/words/bala.mp3";
// import halik from "../../sounds/words/halik.mp3";
// import vakyt from "../../sounds/words/vakyt.mp3";
// import bash from "../../sounds/words/bash.mp3";
// import suz from "../../sounds/words/suz.mp3";
// import shahar from "../../sounds/words/shahar.mp3";
// import uryn from "../../sounds/words/uryn.mp3";
// import hezmat from "../../sounds/words/hezmat.mp3";
// import mektep from "../../sounds/words/mektep.mp3";
// import iul from "../../sounds/words/iul.mp3";
// import ara from "../../sounds/words/ara.mp3";
// import tel from "../../sounds/words/tel.mp3";
// import kyz from "../../sounds/words/kyz.mp3";
// import yesh from "../../sounds/words/yesh.mp3";
// import zhir from "../../sounds/words/zhir.mp3";
// import yort from "../../sounds/words/yort.mp3";
// import donia from "../../sounds/words/donia.mp3";
// import iak from "../../sounds/words/iak.mp3";
// import deulet from "../../sounds/words/deulet.mp3";
// import chara from "../../sounds/words/chara.mp3";
// import il from "../../sounds/words/il.mp3";
// import tormosh from "../../sounds/words/tormosh.mp3";
// import hel from "../../sounds/words/hel.mp3";
// import zhitekche from "../../sounds/words/zhitekche.mp3";
// import akcha from "../../sounds/words/akcha.mp3";
// import barlyk from "../../sounds/words/barlyk.mp3";
// import kuz from "../../sounds/words/kuz.mp3";
// import sum from "../../sounds/words/sum.mp3";
// import tugan from "../../sounds/words/tugan.mp3";
// import kul from "../../sounds/words/kul.mp3";
// import ukuchy from "../../sounds/words/ukuchy.mp3";
// import huzhalyk from "../../sounds/words/huzhalyk.mp3";
// import mesele from "../../sounds/words/mesele.mp3";
// import olke from "../../sounds/words/olke.mp3";
// import kunel from "../../sounds/words/kunel.mp3";
// import gaile from "../../sounds/words/gaile.mp3";
// import uzek from "../../sounds/words/uzek.mp3";
// import isem from "../../sounds/words/isem.mp3";
// import netizhe from "../../sounds/words/netizhe.mp3";
// import beirem from "../../sounds/words/beirem.mp3";
// import ul from "../../sounds/words/ul.mp3";
// import eget from "../../sounds/words/eget.mp3";
// import su from "../../sounds/words/su.mp3";
// import yerdem from "../../sounds/words/yerdem.mp3";
// import san from "../../sounds/words/san.mp3";
// import belem from "../../sounds/words/belem.mp3";
// import kitap from "../../sounds/words/kitap.mp3";
// import ai from "../../sounds/words/ai.mp3";
// import oeshma from "../../sounds/words/oeshma.mp3";
// import is from "../../sounds/words/is.mp3";
// import ukutuchy from "../../sounds/words/ukutuchy.mp3";
// import izhat from "../../sounds/words/izhat.mp3";
// import medeniyet from "../../sounds/words/medeniyet.mp3";
// import ech from "../../sounds/words/ech.mp3";
// import meglumet from "../../sounds/words/meglumet.mp3";
// import chygysh from "../../sounds/words/chygysh.mp3";
// import oi from "../../sounds/words/oi.mp3";
// import fiker from "../../sounds/words/fiker.mp3";
// import tarih from "../../sounds/words/tarih.mp3";
// import olesh from "../../sounds/words/olesh.mp3";
// import hezmetker from "../../sounds/words/hezmetker.mp3";
// import revesh from "../../sounds/words/revesh.mp3";
// import eser from "../../sounds/words/eser.mp3";
// import derezhe from "../../sounds/words/derezhe.mp3";
// import zhyr from "../../sounds/words/zhyr.mp3";
// import momkinlek from "../../sounds/words/momkinlek.mp3";
// import vekil from "../../sounds/words/vekil.mp3";
// import idare from "../../sounds/words/idare.mp3";
// import koch from "../../sounds/words/koch.mp3";
// import din from "../../sounds/words/din.mp3";
// import hatyn from "../../sounds/words/hatyn.mp3";
// import fen from "../../sounds/words/fen.mp3";
// import moselman from "../../sounds/words/moselman.mp3";
// import chor from "../../sounds/words/chor.mp3";
// import gamel from "../../sounds/words/gamel.mp3";
// import urynbasar from "../../sounds/words/urynbasar.mp3";
// import taraf from "../../sounds/words/taraf.mp3";
// import mechet from "../../sounds/words/mechet.mp3";
// import sugysh from "../../sounds/words/sugysh.mp3";
// import maksat from "../../sounds/words/maksat.mp3";
// import uram from "../../sounds/words/uram.mp3";
// import reis from "../../sounds/words/reis.mp3";
// import isep from "../../sounds/words/isep.mp3";
// import shiger from "../../sounds/words/shiger.mp3";
// import ochrashu from "../../sounds/words/ochrashu.mp3";
// import ochrak from "../../sounds/words/ochrak.mp3";
// import megerif from "../../sounds/words/megerif.mp3";
// import eni from "../../sounds/words/eni.mp3";
// import useh from "../../sounds/words/useh.mp3";
// import sorau from "../../sounds/words/sorau.mp3";

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

  console.log("final", final);

  console.log(words);

  const updatedWords = words.map((item) => {
    const { tat } = item;
    return { ...item, lat: transliterate(tat) };
  });

  console.log(updatedWords);

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
          console.log("updatedWords", JSON.stringify(updatedWords));
          console.log("updatedWords", updatedWords);
          var FileSaver = require("file-saver");
          var blob = new Blob([JSON.stringify(updatedWords)], {
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
