import aridim from "../sounds/phrases/aridim.mp3";
import belki from "../sounds/phrases/belki.mp3";
import berni_tugel from "../sounds/phrases/berni_tugel.mp3";
import bik_zur_rahmat from "../sounds/phrases/bik_zur_rahmat.mp3";
import borchulmagiz from "../sounds/phrases/borchulmagiz.mp3";
import bu_azatnin_atise from "../sounds/phrases/bu_azatnin_atise.mp3";
import bu_kem from "../sounds/phrases/bu_kem.mp3";
import bu_nerse from "../sounds/phrases/bu_nerse.mp3";
import bu_turistlar_amerikadan from "../sounds/phrases/bu_turistlar_amerikadan.mp3";
import e_sez_kem from "../sounds/phrases/e_sez_kem.mp3";
import eide from "../sounds/phrases/eide.mp3";
import eide_ashybyz from "../sounds/phrases/eide_ashybyz.mp3";
import eide_kittek from "../sounds/phrases/eide_kittek.mp3";
import elbette from "../sounds/phrases/elbette.mp3";
import gafu_itegez from "../sounds/phrases/gafu_itegez.mp3";
import haerle_kich from "../sounds/phrases/haerle_kich.mp3";
import haerle_kon from "../sounds/phrases/haerle_kon.mp3";
import hallaren_nichek from "../sounds/phrases/hallaren_nichek.mp3";
import hazer_nishlik from "../sounds/phrases/hazer_nishlik.mp3";
import hichshiksez from "../sounds/phrases/hichshiksez.mp3";
import hush from "../sounds/phrases/hush.mp3";
import isanmesez from "../sounds/phrases/isanmesez.mp3";
import kaefem_uk from "../sounds/phrases/kaefem_uk.mp3";
import kaia_barabiz from "../sounds/phrases/kaia_barabiz.mp3";
import kile_alasinmi from "../sounds/phrases/kile_alasinmi.mp3";
import kyskasi from "../sounds/phrases/kyskasi.mp3";
import matur_kyz from "../sounds/phrases/matur_kyz.mp3";
import minemche from "../sounds/phrases/minemche.mp3";
import minem_isemem_alsu from "../sounds/phrases/minem_isemem_alsu.mp3";
import minem_telefon_kaida from "../sounds/phrases/minem_telefon_kaida.mp3";
import min_bik_shat from "../sounds/phrases/min_bik_shat.mp3";
import min_tatarcha_soileshem from "../sounds/phrases/min_tatarcha_soileshem.mp3";
import mina_apelsin_kirek from "../sounds/phrases/mina_apelsin_kirek.mp3";
import ni_hel from "../sounds/phrases/ni_hel.mp3";
import rahim_itegez from "../sounds/phrases/rahim_itegez.mp3";
import rahmat from "../sounds/phrases/rahmat.mp3";
import salam from "../sounds/phrases/salam.mp3";
import salam_ait from "../sounds/phrases/salam_ait.mp3";
import saubuligiz from "../sounds/phrases/saubuligiz.mp3";
import sezge_de_rehmet from "../sounds/phrases/sezge_de_rehmet.mp3";
import shulaimi from "../sounds/phrases/shulaimi.mp3";
import sin_nishlisen from "../sounds/phrases/sin_nishlisen.mp3";
import tatar_tele from "../sounds/phrases/tatar_tele.mp3";
import sinzes_kaida from "../sounds/phrases/sinzes_kaida.mp3";
import zinhar from "../sounds/phrases/zinhar.mp3";
import { WordsInterface } from "./words";

const prev = [
  { tat: "Сәлам!", rus: "Привет!", eng: "Hi", audio: salam },
  {
    tat: "Хәерле көн!",
    rus: "Добрый день!",
    eng: "Good afternoon",
    audio: haerle_kon,
  },
  { tat: "Ни хәл?", rus: "Как дела?", eng: "How are you doing", audio: ni_hel },
  {
    tat: "Исәнме(сез)!",
    rus: "Здравствуй(те)!",
    eng: "Hello",
    audio: isanmesez,
  },
  { tat: "Хуш!", rus: "Пока!", eng: "Bye", audio: hush },
  {
    tat: "Сәлам әйт!",
    rus: "Передавай привет!",
    eng: "Say Hello",
    audio: salam_ait,
  },
  { tat: "Рәхмәт!", rus: "Спасибо!", eng: "Thanks", audio: rahmat },
  { tat: "Зинһар!", rus: "Пожалуйста!", eng: "Please", audio: zinhar },
  {
    tat: "Берни түгел!",
    rus: "Ничего не стоит!",
    eng: "It costs nothing",
    audio: berni_tugel,
  },
  {
    tat: "Борчылмагыз",
    rus: "Не беспокойтесь",
    eng: "Don't worry",
    audio: borchulmagiz,
  },
  { tat: "Әлбәттә", rus: "Конечно, разумеется", eng: "", audio: elbette },
  { tat: "Әйдә!", rus: "Давай!", eng: "Let's", audio: eide },
  { tat: "Минемчә", rus: "По-моему", eng: "To my mind", audio: minemche },
  { tat: "Бәлки", rus: "Возможно", eng: "Possible", audio: belki },
  {
    tat: "Һичшиксез!",
    rus: "Несомненно",
    eng: "Undoubtedly",
    audio: hichshiksez,
  },
  { tat: "Кыскасы", rus: "Короче", eng: "In short", audio: kyskasi },
  {
    tat: "Син (сез) кайда?",
    rus: "Где ты (вы)?",
    eng: "Where are you",
    audio: sinzes_kaida,
  },
  {
    tat: "Кая барабыз?",
    rus: "Куда пойдём?",
    eng: "Where do we go?",
    audio: kaia_barabiz,
  },
  {
    tat: "Хәзер нишлик?",
    rus: "Что сейчас будем делать?",
    eng: "What are we going to do now?",
    audio: hazer_nishlik,
  },
  {
    tat: "Ә сез кем?",
    rus: "А кто вы?",
    eng: "And who are you?",
    audio: e_sez_kem,
  },
  { tat: "Шулаймы?", rus: "Это так?", eng: "Is that so?", audio: shulaimi },
  {
    tat: "Килә аласыңмы?",
    rus: "Можешь прийти?",
    eng: "Can you come?",
    audio: kile_alasinmi,
  },
  {
    tat: "Мин бик шат!",
    rus: "Я очень рад!",
    eng: "I am very happy!",
    audio: min_bik_shat,
  },
  {
    tat: "Кәефем юк",
    rus: "Нет настроения",
    eng: "Not in the mood",
    audio: kaefem_uk,
  },
  { tat: "Арыдым", rus: "Я устал(а)", eng: "I'm tired", audio: aridim },
  {
    tat: "Бу туристлар Америкадан",
    rus: "Эти туристы из Америки",
    eng: "These tourists are from America",
    audio: bu_turistlar_amerikadan,
  },
  {
    tat: "Хәерле кич",
    rus: "Добрый вечер",
    eng: "Good evening",
    audio: haerle_kich,
  },
  {
    tat: "Минем исемем Алсу",
    rus: "Меня зовут Алсу",
    eng: "My name is Alsu",
    audio: minem_isemem_alsu,
  },
  {
    tat: "Бу Азатның әтисе",
    rus: "Это папа Азата",
    eng: "This is Azat's dad",
    audio: bu_azatnin_atise,
  },
  {
    tat: "Бик зур рәхмәт",
    rus: "Большое спасибо",
    eng: "Thank you very much",
    audio: bik_zur_rahmat,
  },
  {
    tat: "Сезгә дә рәхмәт",
    rus: "Вам тоже спасибо",
    eng: "Thank you too",
    audio: sezge_de_rehmet,
  },
  {
    tat: "Хәлләрең ничек?",
    rus: "Как дела?",
    eng: "What's up?",
    audio: hallaren_nichek,
  },
  { tat: "Гафу итегез", rus: "Извините", eng: "Excuse me", audio: gafu_itegez },
  {
    tat: "Мин татарча сөйләшәм",
    rus: "Я говорю по-татарски",
    eng: "I speak Tatar",
    audio: min_tatarcha_soileshem,
  },
  { tat: "Сау булыгыз", rus: "До свидания", eng: "Goodbye", audio: saubuligiz },
  { tat: "Бу нәрсә?", rus: "Что это?", eng: "What's it?", audio: bu_nerse },
  { tat: "Бу кем?", rus: "Кто это?", eng: "Who is it?", audio: bu_kem },
  {
    tat: "Матур кыз",
    rus: "Красивая девочка",
    eng: "Beautiful girl",
    audio: matur_kyz,
  },
  {
    tat: "Син нишлисең?",
    rus: "Что ты делаешь?",
    eng: "What are you doing?",
    audio: sin_nishlisen,
  },
  {
    tat: "Минем телефон кайда?",
    rus: "Где мой телефон?",
    eng: "Where is my phone?",
    audio: minem_telefon_kaida,
  },
  {
    tat: "Әйдә ашыйбыз",
    rus: "Давай покушаем",
    eng: "Let's eat",
    audio: eide_ashybyz,
  },
  {
    tat: "Әйдә киттек",
    rus: "Давай пошли",
    eng: "Come on, let's go",
    audio: eide_kittek,
  },
  {
    tat: "Рәхим итегез",
    rus: "Добро пожаловать",
    eng: "Welcome",
    audio: rahim_itegez,
  },
  {
    tat: "Миңа апельсин кирәк",
    rus: "Мне нужен апельсин",
    eng: "I need an orange",
    audio: mina_apelsin_kirek,
  },
  {
    tat: "Татар теле",
    rus: "Татарский язык",
    eng: "Tatar language",
    audio: tatar_tele,
  },
];

const test = [
  {
    tat: "Сәлам!",
    rus: "Привет!",
    eng: "Hi",
    audio: "/static/media/salam.471169c6.mp3",
    lat: "Sälam!",
  },
  {
    tat: "Хәерле көн!",
    rus: "Добрый день!",
    eng: "Good afternoon",
    audio: "/static/media/haerle_kon.4fe81e87.mp3",
    lat: "Häerle kön!",
  },
  {
    tat: "Ни хәл?",
    rus: "Как дела?",
    eng: "How are you doing",
    audio: "/static/media/ni_hel.3158b09c.mp3",
    lat: "Ni häl?",
  },
  {
    tat: "Исәнме(сез)!",
    rus: "Здравствуй(те)!",
    eng: "Hello",
    audio: "/static/media/isanmesez.1cb01a8b.mp3",
    lat: "Isänme(sez)!",
  },
  {
    tat: "Хуш!",
    rus: "Пока!",
    eng: "Bye",
    audio: "/static/media/hush.cd40ad1d.mp3",
    lat: "Huş!",
  },
  {
    tat: "Сәлам әйт!",
    rus: "Передавай привет!",
    eng: "Say Hello",
    audio: "/static/media/salam_ait.da27c8fb.mp3",
    lat: "Sälam äyt!",
  },
  {
    tat: "Рәхмәт!",
    rus: "Спасибо!",
    eng: "Thanks",
    audio: "/static/media/rahmat.81ab0caf.mp3",
    lat: "Rähmät!",
  },
  {
    tat: "Зинһар!",
    rus: "Пожалуйста!",
    eng: "Please",
    audio: "/static/media/zinhar.ee9ad456.mp3",
    lat: "Zinһar!",
  },
  {
    tat: "Берни түгел!",
    rus: "Ничего не стоит!",
    eng: "It costs nothing",
    audio: "/static/media/berni_tugel.9594bc9c.mp3",
    lat: "Berni tүgel!",
  },
  {
    tat: "Борчылмагыз",
    rus: "Не беспокойтесь",
    eng: "Don't worry",
    audio: "/static/media/borchulmagiz.c6669e04.mp3",
    lat: "Borcılmagız",
  },
  {
    tat: "Әлбәттә",
    rus: "Конечно, разумеется",
    eng: "",
    audio: "/static/media/elbette.78119363.mp3",
    lat: "Älbättä",
  },
  {
    tat: "Әйдә!",
    rus: "Давай!",
    eng: "Let's",
    audio: "/static/media/eide.09278d49.mp3",
    lat: "Äydä!",
  },
  {
    tat: "Минемчә",
    rus: "По-моему",
    eng: "To my mind",
    audio: "/static/media/minemche.8550d178.mp3",
    lat: "Minemcä",
  },
  {
    tat: "Бәлки",
    rus: "Возможно",
    eng: "Possible",
    audio: "/static/media/belki.b452b2e9.mp3",
    lat: "Bälki",
  },
  {
    tat: "Һичшиксез!",
    rus: "Несомненно",
    eng: "Undoubtedly",
    audio: "/static/media/hichshiksez.5b60394d.mp3",
    lat: "Һicşiksez!",
  },
  {
    tat: "Кыскасы",
    rus: "Короче",
    eng: "In short",
    audio: "/static/media/kyskasi.b3188d7d.mp3",
    lat: "Kısqası",
  },
  {
    tat: "Син (сез) кайда?",
    rus: "Где ты (вы)?",
    eng: "Where are you",
    audio: "/static/media/sinzes_kaida.8fba6114.mp3",
    lat: "Sin (sez) qayda?",
  },
  {
    tat: "Кая барабыз?",
    rus: "Куда пойдём?",
    eng: "Where do we go?",
    audio: "/static/media/kaia_barabiz.c4f1055f.mp3",
    lat: "Qaia barabız?",
  },
  {
    tat: "Хәзер нишлик?",
    rus: "Что сейчас будем делать?",
    eng: "What are we going to do now?",
    audio: "/static/media/hazer_nishlik.8768be60.mp3",
    lat: "Häzer nişlik?",
  },
  {
    tat: "Ә сез кем?",
    rus: "А кто вы?",
    eng: "And who are you?",
    audio: "/static/media/e_sez_kem.dabb1031.mp3",
    lat: "Ä sez kem?",
  },
  {
    tat: "Шулаймы?",
    rus: "Это так?",
    eng: "Is that so?",
    audio: "/static/media/shulaimi.11980412.mp3",
    lat: "Şulaymı?",
  },
  {
    tat: "Килә аласыңмы?",
    rus: "Можешь прийти?",
    eng: "Can you come?",
    audio: "/static/media/kile_alasinmi.9e3056d9.mp3",
    lat: "Kilä alasıñmı?",
  },
  {
    tat: "Мин бик шат!",
    rus: "Я очень рад!",
    eng: "I am very happy!",
    audio: "/static/media/min_bik_shat.f268a2ee.mp3",
    lat: "Min bik şat!",
  },
  {
    tat: "Кәефем юк",
    rus: "Нет настроения",
    eng: "Not in the mood",
    audio: "/static/media/kaefem_uk.d7aea813.mp3",
    lat: "Käefem iuk",
  },
  {
    tat: "Арыдым",
    rus: "Я устал(а)",
    eng: "I'm tired",
    audio: "/static/media/aridim.c92ef274.mp3",
    lat: "Arıdım",
  },
  {
    tat: "Бу туристлар Америкадан",
    rus: "Эти туристы из Америки",
    eng: "These tourists are from America",
    audio: "/static/media/bu_turistlar_amerikadan.d07f2a1f.mp3",
    lat: "Bu turistlar Ameriqadan",
  },
  {
    tat: "Хәерле кич",
    rus: "Добрый вечер",
    eng: "Good evening",
    audio: "/static/media/haerle_kich.541a70bd.mp3",
    lat: "Häerle kic",
  },
  {
    tat: "Минем исемем Алсу",
    rus: "Меня зовут Алсу",
    eng: "My name is Alsu",
    audio: "/static/media/minem_isemem_alsu.6dd48cd4.mp3",
    lat: "Minem isemem Alsu",
  },
  {
    tat: "Бу Азатның әтисе",
    rus: "Это папа Азата",
    eng: "This is Azat's dad",
    audio: "/static/media/bu_azatnin_atise.fe1cbab1.mp3",
    lat: "Bu Azatnıñ ätise",
  },
  {
    tat: "Бик зур рәхмәт",
    rus: "Большое спасибо",
    eng: "Thank you very much",
    audio: "/static/media/bik_zur_rahmat.fa0181a0.mp3",
    lat: "Bik zur rähmät",
  },
  {
    tat: "Сезгә дә рәхмәт",
    rus: "Вам тоже спасибо",
    eng: "Thank you too",
    audio: "/static/media/sezge_de_rehmet.d9bb981b.mp3",
    lat: "Sezgä dä rähmät",
  },
  {
    tat: "Хәлләрең ничек?",
    rus: "Как дела?",
    eng: "What's up?",
    audio: "/static/media/hallaren_nichek.c3dbb4f5.mp3",
    lat: "Hälläreñ nicek?",
  },
  {
    tat: "Гафу итегез",
    rus: "Извините",
    eng: "Excuse me",
    audio: "/static/media/gafu_itegez.ea987867.mp3",
    lat: "Ğafu itegez",
  },
  {
    tat: "Мин татарча сөйләшәм",
    rus: "Я говорю по-татарски",
    eng: "I speak Tatar",
    audio: "/static/media/min_tatarcha_soileshem.4565454c.mp3",
    lat: "Min tatarca söyläşäm",
  },
  {
    tat: "Сау булыгыз",
    rus: "До свидания",
    eng: "Goodbye",
    audio: "/static/media/saubuligiz.ddfaee89.mp3",
    lat: "Sau bulıgız",
  },
  {
    tat: "Бу нәрсә?",
    rus: "Что это?",
    eng: "What's it?",
    audio: "/static/media/bu_nerse.c8ff75e9.mp3",
    lat: "Bu närsä?",
  },
  {
    tat: "Бу кем?",
    rus: "Кто это?",
    eng: "Who is it?",
    audio: "/static/media/bu_kem.c73884e5.mp3",
    lat: "Bu kem?",
  },
  {
    tat: "Матур кыз",
    rus: "Красивая девочка",
    eng: "Beautiful girl",
    audio: "/static/media/matur_kyz.15f1bdba.mp3",
    lat: "Matur kız",
  },
  {
    tat: "Син нишлисең?",
    rus: "Что ты делаешь?",
    eng: "What are you doing?",
    audio: "/static/media/sin_nishlisen.11b6a50e.mp3",
    lat: "Sin nişliseñ?",
  },
  {
    tat: "Минем телефон кайда?",
    rus: "Где мой телефон?",
    eng: "Where is my phone?",
    audio: "/static/media/minem_telefon_kaida.d732c9f5.mp3",
    lat: "Minem telefon qayda?",
  },
  {
    tat: "Әйдә ашыйбыз",
    rus: "Давай покушаем",
    eng: "Let's eat",
    audio: "/static/media/eide_ashybyz.62763843.mp3",
    lat: "Äydä aşıybız",
  },
  {
    tat: "Әйдә киттек",
    rus: "Давай пошли",
    eng: "Come on, let's go",
    audio: "/static/media/eide_kittek.b1bc95bc.mp3",
    lat: "Äydä kittek",
  },
  {
    tat: "Рәхим итегез",
    rus: "Добро пожаловать",
    eng: "Welcome",
    audio: "/static/media/rahim_itegez.4791d144.mp3",
    lat: "Rähim itegez",
  },
  {
    tat: "Миңа апельсин кирәк",
    rus: "Мне нужен апельсин",
    eng: "I need an orange",
    audio: "/static/media/mina_apelsin_kirek.ab12b6a9.mp3",
    lat: "Miña apelsin kiräk",
  },
  {
    tat: "Татар теле",
    rus: "Татарский язык",
    eng: "Tatar language",
    audio: "/static/media/tatar_tele.1f300397.mp3",
    lat: "Tatar tele",
  },
];

export const phrases = prev.map((item, index) => {
  return { ...item, lat: test[index].lat };
});
