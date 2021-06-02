// import aridim from "../sounds/phrases/aridim.mp3";
// import belki from "../sounds/phrases/belki.mp3";
// import berni_tugel from "../sounds/phrases/berni_tugel.mp3";
// import bik_zur_rahmat from "../sounds/phrases/bik_zur_rahmat.mp3";
// import borchulmagiz from "../sounds/phrases/borchulmagiz.mp3";
// import bu_azatnin_atise from "../sounds/phrases/bu_azatnin_atise.mp3";
// import bu_kem from "../sounds/phrases/bu_kem.mp3";
// import bu_nerse from "../sounds/phrases/bu_nerse.mp3";
// import bu_turistlar_amerikadan from "../sounds/phrases/bu_turistlar_amerikadan.mp3";
// import e_sez_kem from "../sounds/phrases/e_sez_kem.mp3";
// import eide from "../sounds/phrases/eide.mp3";
// import eide_ashybyz from "../sounds/phrases/eide_ashybyz.mp3";
// import eide_kittek from "../sounds/phrases/eide_kittek.mp3";
// import elbette from "../sounds/phrases/elbette.mp3";
// import gafu_itegez from "../sounds/phrases/gafu_itegez.mp3";
// import haerle_kich from "../sounds/phrases/haerle_kich.mp3";
// import haerle_kon from "../sounds/phrases/haerle_kon.mp3";
// import hallaren_nichek from "../sounds/phrases/hallaren_nichek.mp3";
// import hazer_nishlik from "../sounds/phrases/hazer_nishlik.mp3";
// import hichshiksez from "../sounds/phrases/hichshiksez.mp3";
// import hush from "../sounds/phrases/hush.mp3";
// import isanmesez from "../sounds/phrases/isanmesez.mp3";
// import kaefem_uk from "../sounds/phrases/kaefem_uk.mp3";
// import kaia_barabiz from "../sounds/phrases/kaia_barabiz.mp3";
// import kile_alasinmi from "../sounds/phrases/kile_alasinmi.mp3";
// import kyskasi from "../sounds/phrases/kyskasi.mp3";
// import matur_kyz from "../sounds/phrases/matur_kyz.mp3";
// import minemche from "../sounds/phrases/minemche.mp3";
// import minem_isemem_alsu from "../sounds/phrases/minem_isemem_alsu.mp3";
// import minem_telefon_kaida from "../sounds/phrases/minem_telefon_kaida.mp3";
// import min_bik_shat from "../sounds/phrases/min_bik_shat.mp3";
// import min_tatarcha_soileshem from "../sounds/phrases/min_tatarcha_soileshem.mp3";
// import mina_apelsin_kirek from "../sounds/phrases/mina_apelsin_kirek.mp3";
// import ni_hel from "../sounds/phrases/ni_hel.mp3";
// import rahim_itegez from "../sounds/phrases/rahim_itegez.mp3";
// import rahmat from "../sounds/phrases/rahmat.mp3";
// import salam from "../sounds/phrases/salam.mp3";
// import salam_ait from "../sounds/phrases/salam_ait.mp3";
// import saubuligiz from "../sounds/phrases/saubuligiz.mp3";
// import sezge_de_rehmet from "../sounds/phrases/sezge_de_rehmet.mp3";
// import shulaimi from "../sounds/phrases/shulaimi.mp3";
// import sin_nishlisen from "../sounds/phrases/sin_nishlisen.mp3";
// import tatar_tele from "../sounds/phrases/tatar_tele.mp3";
// import sinzes_kaida from "../sounds/phrases/sinzes_kaida.mp3";
// import zinhar from "../sounds/phrases/zinhar.mp3";
import { WordsInterface } from "./words";
// import {getPhraseAudio, getWordAudio} from "../api";

// const prev = [
//   { tat: "Сәлам!", rus: "Привет!", eng: "Hi", audio: salam },
//   {
//     tat: "Хәерле көн!",
//     rus: "Добрый день!",
//     eng: "Good afternoon",
//     audio: haerle_kon,
//   },
//   { tat: "Ни хәл?", rus: "Как дела?", eng: "How are you doing", audio: ni_hel },
//   {
//     tat: "Исәнме(сез)!",
//     rus: "Здравствуй(те)!",
//     eng: "Hello",
//     audio: isanmesez,
//   },
//   { tat: "Хуш!", rus: "Пока!", eng: "Bye", audio: hush },
//   {
//     tat: "Сәлам әйт!",
//     rus: "Передавай привет!",
//     eng: "Say Hello",
//     audio: salam_ait,
//   },
//   { tat: "Рәхмәт!", rus: "Спасибо!", eng: "Thanks", audio: rahmat },
//   { tat: "Зинһар!", rus: "Пожалуйста!", eng: "Please", audio: zinhar },
//   {
//     tat: "Берни түгел!",
//     rus: "Ничего не стоит!",
//     eng: "It costs nothing",
//     audio: berni_tugel,
//   },
//   {
//     tat: "Борчылмагыз",
//     rus: "Не беспокойтесь",
//     eng: "Don't worry",
//     audio: borchulmagiz,
//   },
//   { tat: "Әлбәттә", rus: "Конечно, разумеется", eng: "", audio: elbette },
//   { tat: "Әйдә!", rus: "Давай!", eng: "Let's", audio: eide },
//   { tat: "Минемчә", rus: "По-моему", eng: "To my mind", audio: minemche },
//   { tat: "Бәлки", rus: "Возможно", eng: "Possible", audio: belki },
//   {
//     tat: "Һичшиксез!",
//     rus: "Несомненно",
//     eng: "Undoubtedly",
//     audio: hichshiksez,
//   },
//   { tat: "Кыскасы", rus: "Короче", eng: "In short", audio: kyskasi },
//   {
//     tat: "Син (сез) кайда?",
//     rus: "Где ты (вы)?",
//     eng: "Where are you",
//     audio: sinzes_kaida,
//   },
//   {
//     tat: "Кая барабыз?",
//     rus: "Куда пойдём?",
//     eng: "Where do we go?",
//     audio: kaia_barabiz,
//   },
//   {
//     tat: "Хәзер нишлик?",
//     rus: "Что сейчас будем делать?",
//     eng: "What are we going to do now?",
//     audio: hazer_nishlik,
//   },
//   {
//     tat: "Ә сез кем?",
//     rus: "А кто вы?",
//     eng: "And who are you?",
//     audio: e_sez_kem,
//   },
//   { tat: "Шулаймы?", rus: "Это так?", eng: "Is that so?", audio: shulaimi },
//   {
//     tat: "Килә аласыңмы?",
//     rus: "Можешь прийти?",
//     eng: "Can you come?",
//     audio: kile_alasinmi,
//   },
//   {
//     tat: "Мин бик шат!",
//     rus: "Я очень рад!",
//     eng: "I am very happy!",
//     audio: min_bik_shat,
//   },
//   {
//     tat: "Кәефем юк",
//     rus: "Нет настроения",
//     eng: "Not in the mood",
//     audio: kaefem_uk,
//   },
//   { tat: "Арыдым", rus: "Я устал(а)", eng: "I'm tired", audio: aridim },
//   {
//     tat: "Бу туристлар Америкадан",
//     rus: "Эти туристы из Америки",
//     eng: "These tourists are from America",
//     audio: bu_turistlar_amerikadan,
//   },
//   {
//     tat: "Хәерле кич",
//     rus: "Добрый вечер",
//     eng: "Good evening",
//     audio: haerle_kich,
//   },
//   {
//     tat: "Минем исемем Алсу",
//     rus: "Меня зовут Алсу",
//     eng: "My name is Alsu",
//     audio: minem_isemem_alsu,
//   },
//   {
//     tat: "Бу Азатның әтисе",
//     rus: "Это папа Азата",
//     eng: "This is Azat's dad",
//     audio: bu_azatnin_atise,
//   },
//   {
//     tat: "Бик зур рәхмәт",
//     rus: "Большое спасибо",
//     eng: "Thank you very much",
//     audio: bik_zur_rahmat,
//   },
//   {
//     tat: "Сезгә дә рәхмәт",
//     rus: "Вам тоже спасибо",
//     eng: "Thank you too",
//     audio: sezge_de_rehmet,
//   },
//   {
//     tat: "Хәлләрең ничек?",
//     rus: "Как дела?",
//     eng: "What's up?",
//     audio: hallaren_nichek,
//   },
//   { tat: "Гафу итегез", rus: "Извините", eng: "Excuse me", audio: gafu_itegez },
//   {
//     tat: "Мин татарча сөйләшәм",
//     rus: "Я говорю по-татарски",
//     eng: "I speak Tatar",
//     audio: min_tatarcha_soileshem,
//   },
//   { tat: "Сау булыгыз", rus: "До свидания", eng: "Goodbye", audio: saubuligiz },
//   { tat: "Бу нәрсә?", rus: "Что это?", eng: "What's it?", audio: bu_nerse },
//   { tat: "Бу кем?", rus: "Кто это?", eng: "Who is it?", audio: bu_kem },
//   {
//     tat: "Матур кыз",
//     rus: "Красивая девочка",
//     eng: "Beautiful girl",
//     audio: matur_kyz,
//   },
//   {
//     tat: "Син нишлисең?",
//     rus: "Что ты делаешь?",
//     eng: "What are you doing?",
//     audio: sin_nishlisen,
//   },
//   {
//     tat: "Минем телефон кайда?",
//     rus: "Где мой телефон?",
//     eng: "Where is my phone?",
//     audio: minem_telefon_kaida,
//   },
//   {
//     tat: "Әйдә ашыйбыз",
//     rus: "Давай покушаем",
//     eng: "Let's eat",
//     audio: eide_ashybyz,
//   },
//   {
//     tat: "Әйдә киттек",
//     rus: "Давай пошли",
//     eng: "Come on, let's go",
//     audio: eide_kittek,
//   },
//   {
//     tat: "Рәхим итегез",
//     rus: "Добро пожаловать",
//     eng: "Welcome",
//     audio: rahim_itegez,
//   },
//   {
//     tat: "Миңа апельсин кирәк",
//     rus: "Мне нужен апельсин",
//     eng: "I need an orange",
//     audio: mina_apelsin_kirek,
//   },
//   {
//     tat: "Татар теле",
//     rus: "Татарский язык",
//     eng: "Tatar language",
//     audio: tatar_tele,
//   },
// ];

// const prev = [
//   { tat: "Сәлам!", rus: "Привет!", eng: "Hi", audio: "salam" },
//   {
//     tat: "Хәерле көн!",
//     rus: "Добрый день!",
//     eng: "Good afternoon",
//     audio: "haerle_kon",
//   },
//   { tat: "Ни хәл?", rus: "Как дела?", eng: "How are you doing", audio: "ni_hel" },
//   {
//     tat: "Исәнме(сез)!",
//     rus: "Здравствуй(те)!",
//     eng: "Hello",
//     audio: "isanmesez",
//   },
//   { tat: "Хуш!", rus: "Пока!", eng: "Bye", audio: "hush" },
//   {
//     tat: "Сәлам әйт!",
//     rus: "Передавай привет!",
//     eng: "Say Hello",
//     audio: "salam_ait",
//   },
//   { tat: "Рәхмәт!", rus: "Спасибо!", eng: "Thanks", audio: "rahmat" },
//   { tat: "Зинһар!", rus: "Пожалуйста!", eng: "Please", audio: "zinhar" },
//   {
//     tat: "Берни түгел!",
//     rus: "Ничего не стоит!",
//     eng: "It costs nothing",
//     audio: "berni_tugel",
//   },
//   {
//     tat: "Борчылмагыз",
//     rus: "Не беспокойтесь",
//     eng: "Don't worry",
//     audio: "borchulmagiz",
//   },
//   { tat: "Әлбәттә", rus: "Конечно, разумеется", eng: "", audio: "elbette" },
//   { tat: "Әйдә!", rus: "Давай!", eng: "Let's", audio: "eide" },
//   { tat: "Минемчә", rus: "По-моему", eng: "To my mind", audio: "minemche" },
//   { tat: "Бәлки", rus: "Возможно", eng: "Possible", audio: "belki" },
//   {
//     tat: "Һичшиксез!",
//     rus: "Несомненно",
//     eng: "Undoubtedly",
//     audio: "hichshiksez",
//   },
//   { tat: "Кыскасы", rus: "Короче", eng: "In short", audio: "kyskasi" },
//   {
//     tat: "Син(сез) кайда?",
//     rus: "Где ты(вы)?",
//     eng: "Where are you?",
//     audio: "sinzes_kaida",
//   },
//   {
//     tat: "Кая барабыз?",
//     rus: "Куда пойдём?",
//     eng: "Where do we go?",
//     audio: "kaia_barabiz",
//   },
//   {
//     tat: "Хәзер нишлик?",
//     rus: "Что сейчас будем делать?",
//     eng: "What are we going to do now?",
//     audio: "hazer_nishlik",
//   },
//   {
//     tat: "Ә сез кем?",
//     rus: "А кто вы?",
//     eng: "And who are you?",
//     audio:"e_sez_kem",
//   },
//   { tat: "Шулаймы?", rus: "Это так?", eng: "Is that so?", audio: "shulaimi" },
//   {
//     tat: "Килә аласыңмы?",
//     rus: "Можешь прийти?",
//     eng: "Can you come?",
//     audio: "kile_alasinmi",
//   },
//   {
//     tat: "Мин бик шат!",
//     rus: "Я очень рад!",
//     eng: "I am very happy!",
//     audio: "min_bik_shat",
//   },
//   {
//     tat: "Кәефем юк",
//     rus: "Нет настроения",
//     eng: "Not in the mood",
//     audio: "kaefem_uk",
//   },
//   { tat: "Арыдым", rus: "Я устал(а)", eng: "I'm tired", audio: 'aridim' },
//   {
//     tat: "Бу туристлар Америкадан",
//     rus: "Эти туристы из Америки",
//     eng: "These tourists are from America",
//     audio: "bu_turistlar_amerikadan",
//   },
//   {
//     tat: "Хәерле кич",
//     rus: "Добрый вечер",
//     eng: "Good evening",
//     audio: "haerle_kich",
//   },
//   {
//     tat: "Минем исемем Алсу",
//     rus: "Меня зовут Алсу",
//     eng: "My name is Alsu",
//     audio: "minem_isemem_alsu",
//   },
//   {
//     tat: "Бу Азатның әтисе",
//     rus: "Это папа Азата",
//     eng: "This is Azat's dad",
//     audio: "bu_azatnin_atise",
//   },
//   {
//     tat: "Бик зур рәхмәт",
//     rus: "Большое спасибо",
//     eng: "Thank you very much",
//     audio: "bik_zur_rahmat",
//   },
//   {
//     tat: "Сезгә дә рәхмәт",
//     rus: "Вам тоже спасибо",
//     eng: "Thank you too",
//     audio: "sezge_de_rehmet",
//   },
//   {
//     tat: "Хәлләрең ничек?",
//     rus: "Как дела?",
//     eng: "What's up?",
//     audio: "hallaren_nichek",
//   },
//   { tat: "Гафу итегез", rus: "Извините", eng: "Excuse me", audio: "gafu_itegez" },
//   {
//     tat: "Мин татарча сөйләшәм",
//     rus: "Я говорю по-татарски",
//     eng: "I speak Tatar",
//     audio: "min_tatarcha_soileshem",
//   },
//   { tat: "Сау булыгыз", rus: "До свидания", eng: "Goodbye", audio: "saubuligiz" },
//   { tat: "Бу нәрсә?", rus: "Что это?", eng: "What's it?", audio: "bu_nerse" },
//   { tat: "Бу кем?", rus: "Кто это?", eng: "Who is it?", audio: "bu_kem" },
//   {
//     tat: "Матур кыз",
//     rus: "Красивая девочка",
//     eng: "Beautiful girl",
//     audio: "matur_kyz",
//   },
//   {
//     tat: "Син нишлисең?",
//     rus: "Что ты делаешь?",
//     eng: "What are you doing?",
//     audio: "sin_nishlisen",
//   },
//   {
//     tat: "Минем телефон кайда?",
//     rus: "Где мой телефон?",
//     eng: "Where is my phone?",
//     audio: "minem_telefon_kaida",
//   },
//   {
//     tat: "Әйдә ашыйбыз",
//     rus: "Давай покушаем",
//     eng: "Let's eat",
//     audio: "eide_ashybyz",
//   },
//   {
//     tat: "Әйдә киттек",
//     rus: "Давай пошли",
//     eng: "Come on, let's go",
//     audio: "eide_kittek",
//   },
//   {
//     tat: "Рәхим итегез",
//     rus: "Добро пожаловать",
//     eng: "Welcome",
//     audio: "rahim_itegez",
//   },
//   {
//     tat: "Миңа апельсин кирәк",
//     rus: "Мне нужен апельсин",
//     eng: "I need an orange",
//     audio: "mina_apelsin_kirek",
//   },
//   {
//     tat: "Татар теле",
//     rus: "Татарский язык",
//     eng: "Tatar language",
//     audio: "tatar_tele",
//   },
// ];
//
// const test = [
//   {
//     tat: "Сәлам!",
//     rus: "Привет!",
//     eng: "Hi",
//     audio: "/static/media/salam.471169c6.mp3",
//     lat: "Sälam!",
//   },
//   {
//     tat: "Хәерле көн!",
//     rus: "Добрый день!",
//     eng: "Good afternoon",
//     audio: "/static/media/haerle_kon.4fe81e87.mp3",
//     lat: "Häerle kön!",
//   },
//   {
//     tat: "Ни хәл?",
//     rus: "Как дела?",
//     eng: "How are you doing",
//     audio: "/static/media/ni_hel.3158b09c.mp3",
//     lat: "Ni häl?",
//   },
//   {
//     tat: "Исәнме(сез)!",
//     rus: "Здравствуй(те)!",
//     eng: "Hello",
//     audio: "/static/media/isanmesez.1cb01a8b.mp3",
//     lat: "Isänme(sez)!",
//   },
//   {
//     tat: "Хуш!",
//     rus: "Пока!",
//     eng: "Bye",
//     audio: "/static/media/hush.cd40ad1d.mp3",
//     lat: "Huş!",
//   },
//   {
//     tat: "Сәлам әйт!",
//     rus: "Передавай привет!",
//     eng: "Say Hello",
//     audio: "/static/media/salam_ait.da27c8fb.mp3",
//     lat: "Sälam äyt!",
//   },
//   {
//     tat: "Рәхмәт!",
//     rus: "Спасибо!",
//     eng: "Thanks",
//     audio: "/static/media/rahmat.81ab0caf.mp3",
//     lat: "Rähmät!",
//   },
//   {
//     tat: "Зинһар!",
//     rus: "Пожалуйста!",
//     eng: "Please",
//     audio: "/static/media/zinhar.ee9ad456.mp3",
//     lat: "Zinһar!",
//   },
//   {
//     tat: "Берни түгел!",
//     rus: "Ничего не стоит!",
//     eng: "It costs nothing",
//     audio: "/static/media/berni_tugel.9594bc9c.mp3",
//     lat: "Berni tүgel!",
//   },
//   {
//     tat: "Борчылмагыз",
//     rus: "Не беспокойтесь",
//     eng: "Don't worry",
//     audio: "/static/media/borchulmagiz.c6669e04.mp3",
//     lat: "Borcılmagız",
//   },
//   {
//     tat: "Әлбәттә",
//     rus: "Конечно, разумеется",
//     eng: "",
//     audio: "/static/media/elbette.78119363.mp3",
//     lat: "Älbättä",
//   },
//   {
//     tat: "Әйдә!",
//     rus: "Давай!",
//     eng: "Let's",
//     audio: "/static/media/eide.09278d49.mp3",
//     lat: "Äydä!",
//   },
//   {
//     tat: "Минемчә",
//     rus: "По-моему",
//     eng: "To my mind",
//     audio: "/static/media/minemche.8550d178.mp3",
//     lat: "Minemcä",
//   },
//   {
//     tat: "Бәлки",
//     rus: "Возможно",
//     eng: "Possible",
//     audio: "/static/media/belki.b452b2e9.mp3",
//     lat: "Bälki",
//   },
//   {
//     tat: "Һичшиксез!",
//     rus: "Несомненно",
//     eng: "Undoubtedly",
//     audio: "/static/media/hichshiksez.5b60394d.mp3",
//     lat: "Һicşiksez!",
//   },
//   {
//     tat: "Кыскасы",
//     rus: "Короче",
//     eng: "In short",
//     audio: "/static/media/kyskasi.b3188d7d.mp3",
//     lat: "Kısqası",
//   },
//   {
//     tat: "Син (сез) кайда?",
//     rus: "Где ты (вы)?",
//     eng: "Where are you",
//     audio: "/static/media/sinzes_kaida.8fba6114.mp3",
//     lat: "Sin (sez) qayda?",
//   },
//   {
//     tat: "Кая барабыз?",
//     rus: "Куда пойдём?",
//     eng: "Where do we go?",
//     audio: "/static/media/kaia_barabiz.c4f1055f.mp3",
//     lat: "Qaia barabız?",
//   },
//   {
//     tat: "Хәзер нишлик?",
//     rus: "Что сейчас будем делать?",
//     eng: "What are we going to do now?",
//     audio: "/static/media/hazer_nishlik.8768be60.mp3",
//     lat: "Häzer nişlik?",
//   },
//   {
//     tat: "Ә сез кем?",
//     rus: "А кто вы?",
//     eng: "And who are you?",
//     audio: "/static/media/e_sez_kem.dabb1031.mp3",
//     lat: "Ä sez kem?",
//   },
//   {
//     tat: "Шулаймы?",
//     rus: "Это так?",
//     eng: "Is that so?",
//     audio: "/static/media/shulaimi.11980412.mp3",
//     lat: "Şulaymı?",
//   },
//   {
//     tat: "Килә аласыңмы?",
//     rus: "Можешь прийти?",
//     eng: "Can you come?",
//     audio: "/static/media/kile_alasinmi.9e3056d9.mp3",
//     lat: "Kilä alasıñmı?",
//   },
//   {
//     tat: "Мин бик шат!",
//     rus: "Я очень рад!",
//     eng: "I am very happy!",
//     audio: "/static/media/min_bik_shat.f268a2ee.mp3",
//     lat: "Min bik şat!",
//   },
//   {
//     tat: "Кәефем юк",
//     rus: "Нет настроения",
//     eng: "Not in the mood",
//     audio: "/static/media/kaefem_uk.d7aea813.mp3",
//     lat: "Käefem iuk",
//   },
//   {
//     tat: "Арыдым",
//     rus: "Я устал(а)",
//     eng: "I'm tired",
//     audio: "/static/media/aridim.c92ef274.mp3",
//     lat: "Arıdım",
//   },
//   {
//     tat: "Бу туристлар Америкадан",
//     rus: "Эти туристы из Америки",
//     eng: "These tourists are from America",
//     audio: "/static/media/bu_turistlar_amerikadan.d07f2a1f.mp3",
//     lat: "Bu turistlar Ameriqadan",
//   },
//   {
//     tat: "Хәерле кич",
//     rus: "Добрый вечер",
//     eng: "Good evening",
//     audio: "/static/media/haerle_kich.541a70bd.mp3",
//     lat: "Häerle kic",
//   },
//   {
//     tat: "Минем исемем Алсу",
//     rus: "Меня зовут Алсу",
//     eng: "My name is Alsu",
//     audio: "/static/media/minem_isemem_alsu.6dd48cd4.mp3",
//     lat: "Minem isemem Alsu",
//   },
//   {
//     tat: "Бу Азатның әтисе",
//     rus: "Это папа Азата",
//     eng: "This is Azat's dad",
//     audio: "/static/media/bu_azatnin_atise.fe1cbab1.mp3",
//     lat: "Bu Azatnıñ ätise",
//   },
//   {
//     tat: "Бик зур рәхмәт",
//     rus: "Большое спасибо",
//     eng: "Thank you very much",
//     audio: "/static/media/bik_zur_rahmat.fa0181a0.mp3",
//     lat: "Bik zur rähmät",
//   },
//   {
//     tat: "Сезгә дә рәхмәт",
//     rus: "Вам тоже спасибо",
//     eng: "Thank you too",
//     audio: "/static/media/sezge_de_rehmet.d9bb981b.mp3",
//     lat: "Sezgä dä rähmät",
//   },
//   {
//     tat: "Хәлләрең ничек?",
//     rus: "Как дела?",
//     eng: "What's up?",
//     audio: "/static/media/hallaren_nichek.c3dbb4f5.mp3",
//     lat: "Hälläreñ nicek?",
//   },
//   {
//     tat: "Гафу итегез",
//     rus: "Извините",
//     eng: "Excuse me",
//     audio: "/static/media/gafu_itegez.ea987867.mp3",
//     lat: "Ğafu itegez",
//   },
//   {
//     tat: "Мин татарча сөйләшәм",
//     rus: "Я говорю по-татарски",
//     eng: "I speak Tatar",
//     audio: "/static/media/min_tatarcha_soileshem.4565454c.mp3",
//     lat: "Min tatarca söyläşäm",
//   },
//   {
//     tat: "Сау булыгыз",
//     rus: "До свидания",
//     eng: "Goodbye",
//     audio: "/static/media/saubuligiz.ddfaee89.mp3",
//     lat: "Sau bulıgız",
//   },
//   {
//     tat: "Бу нәрсә?",
//     rus: "Что это?",
//     eng: "What's it?",
//     audio: "/static/media/bu_nerse.c8ff75e9.mp3",
//     lat: "Bu närsä?",
//   },
//   {
//     tat: "Бу кем?",
//     rus: "Кто это?",
//     eng: "Who is it?",
//     audio: "/static/media/bu_kem.c73884e5.mp3",
//     lat: "Bu kem?",
//   },
//   {
//     tat: "Матур кыз",
//     rus: "Красивая девочка",
//     eng: "Beautiful girl",
//     audio: "/static/media/matur_kyz.15f1bdba.mp3",
//     lat: "Matur kız",
//   },
//   {
//     tat: "Син нишлисең?",
//     rus: "Что ты делаешь?",
//     eng: "What are you doing?",
//     audio: "/static/media/sin_nishlisen.11b6a50e.mp3",
//     lat: "Sin nişliseñ?",
//   },
//   {
//     tat: "Минем телефон кайда?",
//     rus: "Где мой телефон?",
//     eng: "Where is my phone?",
//     audio: "/static/media/minem_telefon_kaida.d732c9f5.mp3",
//     lat: "Minem telefon qayda?",
//   },
//   {
//     tat: "Әйдә ашыйбыз",
//     rus: "Давай покушаем",
//     eng: "Let's eat",
//     audio: "/static/media/eide_ashybyz.62763843.mp3",
//     lat: "Äydä aşıybız",
//   },
//   {
//     tat: "Әйдә киттек",
//     rus: "Давай пошли",
//     eng: "Come on, let's go",
//     audio: "/static/media/eide_kittek.b1bc95bc.mp3",
//     lat: "Äydä kittek",
//   },
//   {
//     tat: "Рәхим итегез",
//     rus: "Добро пожаловать",
//     eng: "Welcome",
//     audio: "/static/media/rahim_itegez.4791d144.mp3",
//     lat: "Rähim itegez",
//   },
//   {
//     tat: "Миңа апельсин кирәк",
//     rus: "Мне нужен апельсин",
//     eng: "I need an orange",
//     audio: "/static/media/mina_apelsin_kirek.ab12b6a9.mp3",
//     lat: "Miña apelsin kiräk",
//   },
//   {
//     tat: "Татар теле",
//     rus: "Татарский язык",
//     eng: "Tatar language",
//     audio: "/static/media/tatar_tele.1f300397.mp3",
//     lat: "Tatar tele",
//   },
// ];
//
// const combined = prev.map((item, index)=>{
//   return {
//   ...item, lat: test[index].lat
//   }
// })
//
// console.log("combined", JSON.stringify(combined))
//
// export const phrasesNoDirectLinks: WordsInterface[] =[
//   {
//     "tat":"Сәлам!",
//     "rus":"Привет!",
//     "eng":"Hi",
//     "audio":"salam",
//     "lat":"Sälam!"
//   },
//   {
//     "tat":"Хәерле көн!",
//     "rus":"Добрый день!",
//     "eng":"Good afternoon",
//     "audio":"haerle_kon",
//     "lat":"Häerle kön!"
//   },
//   {
//     "tat":"Ни хәл?",
//     "rus":"Как дела?",
//     "eng":"How are you doing",
//     "audio":"ni_hel",
//     "lat":"Ni häl?"
//   },
//   {
//     "tat":"Исәнме(сез)!",
//     "rus":"Здравствуй(те)!",
//     "eng":"Hello",
//     "audio":"isanmesez",
//     "lat":"Isänme(sez)!"
//   },
//   {
//     "tat":"Хуш!",
//     "rus":"Пока!",
//     "eng":"Bye",
//     "audio":"hush",
//     "lat":"Huş!"
//   },
//   {
//     "tat":"Сәлам әйт!",
//     "rus":"Передавай привет!",
//     "eng":"Say Hello",
//     "audio":"salam_ait",
//     "lat":"Sälam äyt!"
//   },
//   {
//     "tat":"Рәхмәт!",
//     "rus":"Спасибо!",
//     "eng":"Thanks",
//     "audio":"rahmat",
//     "lat":"Rähmät!"
//   },
//   {
//     "tat":"Зинһар!",
//     "rus":"Пожалуйста!",
//     "eng":"Please",
//     "audio":"zinhar",
//     "lat":"Zinһar!"
//   },
//   {
//     "tat":"Берни түгел!",
//     "rus":"Ничего не стоит!",
//     "eng":"It costs nothing",
//     "audio":"berni_tugel",
//     "lat":"Berni tүgel!"
//   },
//   {
//     "tat":"Борчылмагыз",
//     "rus":"Не беспокойтесь",
//     "eng":"Don't worry",
//     "audio":"borchulmagiz",
//     "lat":"Borcılmagız"
//   },
//   {
//     "tat":"Әлбәттә",
//     "rus":"Конечно, разумеется",
//     "eng":"",
//     "audio":"elbette",
//     "lat":"Älbättä"
//   },
//   {
//     "tat":"Әйдә!",
//     "rus":"Давай!",
//     "eng":"Let's",
//     "audio":"eide",
//     "lat":"Äydä!"
//   },
//   {
//     "tat":"Минемчә",
//     "rus":"По-моему",
//     "eng":"To my mind",
//     "audio":"minemche",
//     "lat":"Minemcä"
//   },
//   {
//     "tat":"Бәлки",
//     "rus":"Возможно",
//     "eng":"Possible",
//     "audio":"belki",
//     "lat":"Bälki"
//   },
//   {
//     "tat":"Һичшиксез!",
//     "rus":"Несомненно",
//     "eng":"Undoubtedly",
//     "audio":"hichshiksez",
//     "lat":"Һicşiksez!"
//   },
//   {
//     "tat":"Кыскасы",
//     "rus":"Короче",
//     "eng":"In short",
//     "audio":"kyskasi",
//     "lat":"Kısqası"
//   },
//   {
//     "tat":"Син(сез) кайда?",
//     "rus":"Где ты(вы)?",
//     "eng":"Where are you?",
//     "audio":"sinzes_kaida",
//     "lat":"Sin (sez) qayda?"
//   },
//   {
//     "tat":"Кая барабыз?",
//     "rus":"Куда пойдём?",
//     "eng":"Where do we go?",
//     "audio":"kaia_barabiz",
//     "lat":"Qaia barabız?"
//   },
//   {
//     "tat":"Хәзер нишлик?",
//     "rus":"Что сейчас будем делать?",
//     "eng":"What are we going to do now?",
//     "audio":"hazer_nishlik",
//     "lat":"Häzer nişlik?"
//   },
//   {
//     "tat":"Ә сез кем?",
//     "rus":"А кто вы?",
//     "eng":"And who are you?",
//     "audio":"e_sez_kem",
//     "lat":"Ä sez kem?"
//   },
//   {
//     "tat":"Шулаймы?",
//     "rus":"Это так?",
//     "eng":"Is that so?",
//     "audio":"shulaimi",
//     "lat":"Şulaymı?"
//   },
//   {
//     "tat":"Килә аласыңмы?",
//     "rus":"Можешь прийти?",
//     "eng":"Can you come?",
//     "audio":"kile_alasinmi",
//     "lat":"Kilä alasıñmı?"
//   },
//   {
//     "tat":"Мин бик шат!",
//     "rus":"Я очень рад!",
//     "eng":"I am very happy!",
//     "audio":"min_bik_shat",
//     "lat":"Min bik şat!"
//   },
//   {
//     "tat":"Кәефем юк",
//     "rus":"Нет настроения",
//     "eng":"Not in the mood",
//     "audio":"kaefem_uk",
//     "lat":"Käefem iuk"
//   },
//   {
//     "tat":"Арыдым",
//     "rus":"Я устал(а)",
//     "eng":"I'm tired",
//     "audio":"aridim",
//     "lat":"Arıdım"
//   },
//   {
//     "tat":"Бу туристлар Америкадан",
//     "rus":"Эти туристы из Америки",
//     "eng":"These tourists are from America",
//     "audio":"bu_turistlar_amerikadan",
//     "lat":"Bu turistlar Ameriqadan"
//   },
//   {
//     "tat":"Хәерле кич",
//     "rus":"Добрый вечер",
//     "eng":"Good evening",
//     "audio":"haerle_kich",
//     "lat":"Häerle kic"
//   },
//   {
//     "tat":"Минем исемем Алсу",
//     "rus":"Меня зовут Алсу",
//     "eng":"My name is Alsu",
//     "audio":"minem_isemem_alsu",
//     "lat":"Minem isemem Alsu"
//   },
//   {
//     "tat":"Бу Азатның әтисе",
//     "rus":"Это папа Азата",
//     "eng":"This is Azat's dad",
//     "audio":"bu_azatnin_atise",
//     "lat":"Bu Azatnıñ ätise"
//   },
//   {
//     "tat":"Бик зур рәхмәт",
//     "rus":"Большое спасибо",
//     "eng":"Thank you very much",
//     "audio":"bik_zur_rahmat",
//     "lat":"Bik zur rähmät"
//   },
//   {
//     "tat":"Сезгә дә рәхмәт",
//     "rus":"Вам тоже спасибо",
//     "eng":"Thank you too",
//     "audio":"sezge_de_rehmet",
//     "lat":"Sezgä dä rähmät"
//   },
//   {
//     "tat":"Хәлләрең ничек?",
//     "rus":"Как дела?",
//     "eng":"What's up?",
//     "audio":"hallaren_nichek",
//     "lat":"Hälläreñ nicek?"
//   },
//   {
//     "tat":"Гафу итегез",
//     "rus":"Извините",
//     "eng":"Excuse me",
//     "audio":"gafu_itegez",
//     "lat":"Ğafu itegez"
//   },
//   {
//     "tat":"Мин татарча сөйләшәм",
//     "rus":"Я говорю по-татарски",
//     "eng":"I speak Tatar",
//     "audio":"min_tatarcha_soileshem",
//     "lat":"Min tatarca söyläşäm"
//   },
//   {
//     "tat":"Сау булыгыз",
//     "rus":"До свидания",
//     "eng":"Goodbye",
//     "audio":"saubuligiz",
//     "lat":"Sau bulıgız"
//   },
//   {
//     "tat":"Бу нәрсә?",
//     "rus":"Что это?",
//     "eng":"What's it?",
//     "audio":"bu_nerse",
//     "lat":"Bu närsä?"
//   },
//   {
//     "tat":"Бу кем?",
//     "rus":"Кто это?",
//     "eng":"Who is it?",
//     "audio":"bu_kem",
//     "lat":"Bu kem?"
//   },
//   {
//     "tat":"Матур кыз",
//     "rus":"Красивая девочка",
//     "eng":"Beautiful girl",
//     "audio":"matur_kyz",
//     "lat":"Matur kız"
//   },
//   {
//     "tat":"Син нишлисең?",
//     "rus":"Что ты делаешь?",
//     "eng":"What are you doing?",
//     "audio":"sin_nishlisen",
//     "lat":"Sin nişliseñ?"
//   },
//   {
//     "tat":"Минем телефон кайда?",
//     "rus":"Где мой телефон?",
//     "eng":"Where is my phone?",
//     "audio":"minem_telefon_kaida",
//     "lat":"Minem telefon qayda?"
//   },
//   {
//     "tat":"Әйдә ашыйбыз",
//     "rus":"Давай покушаем",
//     "eng":"Let's eat",
//     "audio":"eide_ashybyz",
//     "lat":"Äydä aşıybız"
//   },
//   {
//     "tat":"Әйдә киттек",
//     "rus":"Давай пошли",
//     "eng":"Come on, let's go",
//     "audio":"eide_kittek",
//     "lat":"Äydä kittek"
//   },
//   {
//     "tat":"Рәхим итегез",
//     "rus":"Добро пожаловать",
//     "eng":"Welcome",
//     "audio":"rahim_itegez",
//     "lat":"Rähim itegez"
//   },
//   {
//     "tat":"Миңа апельсин кирәк",
//     "rus":"Мне нужен апельсин",
//     "eng":"I need an orange",
//     "audio":"mina_apelsin_kirek",
//     "lat":"Miña apelsin kiräk"
//   },
//   {
//     "tat":"Татар теле",
//     "rus":"Татарский язык",
//     "eng":"Tatar language",
//     "audio":"tatar_tele",
//     "lat":"Tatar tele"
//   }
// ]

export const phrases: WordsInterface[] = [
  {
    tat: "Һичшиксез!",
    rus: "Несомненно",
    eng: "Undoubtedly",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhichshiksez.mp3?alt=media&token=7c0f73df-45f1-40d0-a9ba-7f5dc6e6e136",
    lat: "Һicşiksez!",
  },
  {
    tat: "Берни түгел!",
    rus: "Ничего не стоит!",
    eng: "It costs nothing",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fberni_tugel.mp3?alt=media&token=fd4ed778-a240-46fd-b685-38f505a40587",
    lat: "Berni tүgel!",
  },
  {
    tat: "Сәлам!",
    rus: "Привет!",
    eng: "Hi",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsalam.mp3?alt=media&token=ba3b2101-2d91-44a8-85e0-5e3602da37b5",
    lat: "Sälam!",
  },
  {
    tat: "Бәлки",
    rus: "Возможно",
    eng: "Possible",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbelki.mp3?alt=media&token=23e0bbc8-0a5d-433e-bbe7-4da52cd1a6be",
    lat: "Bälki",
  },
  {
    tat: "Хәерле көн!",
    rus: "Добрый день!",
    eng: "Good afternoon",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhaerle_kon.mp3?alt=media&token=7c3841df-5cf7-4d4f-b5ce-112b428b933f",
    lat: "Häerle kön!",
  },
  {
    tat: "Сәлам әйт!",
    rus: "Передавай привет!",
    eng: "Say Hello",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsalam_ait.mp3?alt=media&token=0e842c6c-5bdd-4903-959c-1dd58f2710b1",
    lat: "Sälam äyt!",
  },
  {
    tat: "Минемчә",
    rus: "По-моему",
    eng: "To my mind",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fminemche.mp3?alt=media&token=a9dc3e80-30c4-447d-aec3-6328c94d16ee",
    lat: "Minemcä",
  },
  {
    tat: "Кыскасы",
    rus: "Короче",
    eng: "In short",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fkyskasi.mp3?alt=media&token=154acaba-b8f4-446f-a1a5-d3061840deda",
    lat: "Kısqası",
  },
  {
    tat: "Борчылмагыз",
    rus: "Не беспокойтесь",
    eng: "Don't worry",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fborchulmagiz.mp3?alt=media&token=5327174b-4cb9-4ae1-b2ad-323dcba354e7",
    lat: "Borcılmagız",
  },
  {
    tat: "Әйдә!",
    rus: "Давай!",
    eng: "Let's",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Feide.mp3?alt=media&token=2e253f46-c5b6-4ed8-8f7e-0326e9f91a04",
    lat: "Äydä!",
  },
  {
    tat: "Әлбәттә",
    rus: "Конечно, разумеется",
    eng: "",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Felbette.mp3?alt=media&token=2ea55f29-2c1b-4efc-bbf4-004c17904f82",
    lat: "Älbättä",
  },
  {
    tat: "Син(сез) кайда?",
    rus: "Где ты(вы)?",
    eng: "Where are you?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsinzes_kaida.mp3?alt=media&token=f5cb62a2-9a4f-4687-b11d-179dc225436a",
    lat: "Sin (sez) qayda?",
  },
  {
    tat: "Син нишлисең?",
    rus: "Что ты делаешь?",
    eng: "What are you doing?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsin_nishlisen.mp3?alt=media&token=b61cd75b-8167-455c-ab78-ca97379bdb1f",
    lat: "Sin nişliseñ?",
  },
  {
    tat: "Сау булыгыз",
    rus: "До свидания",
    eng: "Goodbye",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsaubuligiz.mp3?alt=media&token=9a298681-8029-49d1-affb-db6ab82ab07c",
    lat: "Sau bulıgız",
  },
  {
    tat: "Хуш!",
    rus: "Пока!",
    eng: "Bye",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhush.mp3?alt=media&token=93f907b8-4cff-428b-a537-c651aabd5f9d",
    lat: "Huş!",
  },
  {
    tat: "Зинһар!",
    rus: "Пожалуйста!",
    eng: "Please",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fzinhar.mp3?alt=media&token=2c61fa96-db6d-496a-bb3c-c9289cba78a9",
    lat: "Zinһar!",
  },
  {
    tat: "Бу кем?",
    rus: "Кто это?",
    eng: "Who is it?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbu_kem.mp3?alt=media&token=225cc10e-24bc-47b9-8976-15f78dbc1994",
    lat: "Bu kem?",
  },
  {
    tat: "Ни хәл?",
    rus: "Как дела?",
    eng: "How are you doing",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fni_hel.mp3?alt=media&token=edd8f617-ce1f-4deb-9111-08ffcbbb1d72",
    lat: "Ni häl?",
  },
  {
    tat: "Гафу итегез",
    rus: "Извините",
    eng: "Excuse me",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fgafu_itegez.mp3?alt=media&token=a29b4bbd-ace9-48ea-a998-ca19e1607222",
    lat: "Ğafu itegez",
  },
  {
    tat: "Кая барабыз?",
    rus: "Куда пойдём?",
    eng: "Where do we go?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fkaia_barabiz.mp3?alt=media&token=1e8cb57b-fb1f-4301-90b7-cf71dcbd9488",
    lat: "Qaia barabız?",
  },
  {
    tat: "Хәзер нишлик?",
    rus: "Что сейчас будем делать?",
    eng: "What are we going to do now?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhazer_nishlik.mp3?alt=media&token=53b065ba-50a6-4688-bba2-4d4e3108b673",
    lat: "Häzer nişlik?",
  },
  {
    tat: "Ә сез кем?",
    rus: "А кто вы?",
    eng: "And who are you?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fe_sez_kem.mp3?alt=media&token=2ac97070-021d-48d5-88a2-46b893d07e81",
    lat: "Ä sez kem?",
  },
  {
    tat: "Шулаймы?",
    rus: "Это так?",
    eng: "Is that so?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fshulaimi.mp3?alt=media&token=467fc33b-cb10-455b-ba36-6fc7354a7026",
    lat: "Şulaymı?",
  },
  {
    tat: "Исәнме(сез)!",
    rus: "Здравствуй(те)!",
    eng: "Hello",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fisanmesez.mp3?alt=media&token=483f7be9-790b-4d6f-801b-6f8899e609e8",
    lat: "Isänme(sez)!",
  },
  {
    tat: "Килә аласыңмы?",
    rus: "Можешь прийти?",
    eng: "Can you come?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fkile_alasinmi.mp3?alt=media&token=393958dd-123a-491e-93ee-3a604c5f61e4",
    lat: "Kilä alasıñmı?",
  },
  {
    tat: "Мин бик шат!",
    rus: "Я очень рад!",
    eng: "I am very happy!",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fmin_bik_shat.mp3?alt=media&token=cce31ebc-4a81-4ebf-937e-a61aa5529a5c",
    lat: "Min bik şat!",
  },
  {
    tat: "Кәефем юк",
    rus: "Нет настроения",
    eng: "Not in the mood",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fkaefem_uk.mp3?alt=media&token=23e7e946-6547-41d2-8857-4fe70d26b750",
    lat: "Käefem iuk",
  },
  {
    tat: "Арыдым",
    rus: "Я устал(а)",
    eng: "I'm tired",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Faridim.mp3?alt=media&token=0c044d28-1338-4840-a838-d076951991ec",
    lat: "Arıdım",
  },
  {
    tat: "Бу туристлар Америкадан",
    rus: "Эти туристы из Америки",
    eng: "These tourists are from America",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbu_turistlar_amerikadan.mp3?alt=media&token=b06e8f6e-ff76-4c2f-8b2a-9c3dcb6a4b81",
    lat: "Bu turistlar Ameriqadan",
  },
  {
    tat: "Хәерле кич",
    rus: "Добрый вечер",
    eng: "Good evening",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhaerle_kich.mp3?alt=media&token=e96dcb8a-9b06-4f50-a478-acf58fbc55ef",
    lat: "Häerle kic",
  },
  {
    tat: "Минем исемем Алсу",
    rus: "Меня зовут Алсу",
    eng: "My name is Alsu",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fminem_isemem_alsu.mp3?alt=media&token=50de63c7-ddd6-4b7d-8577-3ae06f9fa592",
    lat: "Minem isemem Alsu",
  },
  {
    tat: "Бу Азатның әтисе",
    rus: "Это папа Азата",
    eng: "This is Azat's dad",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbu_azatnin_atise.mp3?alt=media&token=251f9eec-6225-4d92-998a-be17ee9f891a",
    lat: "Bu Azatnıñ ätise",
  },
  {
    tat: "Бик зур рәхмәт",
    rus: "Большое спасибо",
    eng: "Thank you very much",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbik_zur_rahmat.mp3?alt=media&token=d1718560-51f2-4042-b15e-626959f7bb5a",
    lat: "Bik zur rähmät",
  },
  {
    tat: "Сезгә дә рәхмәт",
    rus: "Вам тоже спасибо",
    eng: "Thank you too",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fsezge_de_rehmet.mp3?alt=media&token=e58d5742-067d-4ce1-9907-6b50ce0251fa",
    lat: "Sezgä dä rähmät",
  },
  {
    tat: "Хәлләрең ничек?",
    rus: "Как дела?",
    eng: "What's up?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fhallaren_nichek.mp3?alt=media&token=3773c1f1-f90b-4225-878a-435585c7f950",
    lat: "Hälläreñ nicek?",
  },
  {
    tat: "Мин татарча сөйләшәм",
    rus: "Я говорю по-татарски",
    eng: "I speak Tatar",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fmin_tatarcha_soileshem.mp3?alt=media&token=7d8617c9-44d0-4332-aefe-c8e344832cc3",
    lat: "Min tatarca söyläşäm",
  },
  {
    tat: "Бу нәрсә?",
    rus: "Что это?",
    eng: "What's it?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fbu_nerse.mp3?alt=media&token=402fcb00-59d0-4b4d-a0f5-bae9f81664a5",
    lat: "Bu närsä?",
  },
  {
    tat: "Матур кыз",
    rus: "Красивая девочка",
    eng: "Beautiful girl",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fmatur_kyz.mp3?alt=media&token=334b47bc-b4d3-4f53-9770-e4dc87a9747c",
    lat: "Matur kız",
  },
  {
    tat: "Минем телефон кайда?",
    rus: "Где мой телефон?",
    eng: "Where is my phone?",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fminem_telefon_kaida.mp3?alt=media&token=bc4cbc07-8778-49a2-a6de-4ef8cce62dd1",
    lat: "Minem telefon qayda?",
  },
  {
    tat: "Әйдә ашыйбыз",
    rus: "Давай покушаем",
    eng: "Let's eat",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Feide_ashybyz.mp3?alt=media&token=aec8e0ed-9e5c-41da-98cb-bbb235f134d7",
    lat: "Äydä aşıybız",
  },
  {
    tat: "Әйдә киттек",
    rus: "Давай пошли",
    eng: "Come on, let's go",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Feide_kittek.mp3?alt=media&token=2eff9e8c-fc11-4466-b2ec-e62392e21275",
    lat: "Äydä kittek",
  },
  {
    tat: "Рәхим итегез",
    rus: "Добро пожаловать",
    eng: "Welcome",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Frahim_itegez.mp3?alt=media&token=a2772186-8e48-4a09-afda-79127176420b",
    lat: "Rähim itegez",
  },
  {
    tat: "Миңа апельсин кирәк",
    rus: "Мне нужен апельсин",
    eng: "I need an orange",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Fmina_apelsin_kirek.mp3?alt=media&token=beaf21b6-c303-4ece-914c-405ce0516849",
    lat: "Miña apelsin kiräk",
  },
  {
    tat: "Татар теле",
    rus: "Татарский язык",
    eng: "Tatar language",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Ftatar_tele.mp3?alt=media&token=f6416366-a591-43a5-85ea-a951a1c28c4b",
    lat: "Tatar tele",
  },
  {
    tat: "Рәхмәт!",
    rus: "Спасибо!",
    eng: "Thanks",
    audio:
      "https://firebasestorage.googleapis.com/v0/b/chamala-317a8.appspot.com/o/audio%2Fphrases%2Frahmat.mp3?alt=media&token=be27c79f-4b06-4d2c-8a32-a87953bdfc0b",
    lat: "Rähmät!",
  },
];

// let newPhrases: any[] = [];
//
// for (let i = 0; i < phrases.length; i++) {
//   getPhraseAudio(phrases[i].audio).then((url) => {
//     newPhrases.push({ ...phrases[i], audio: url });
//   });
//   // console.log("word", words[i]);
// }

// console.log("newWords", newPhrases);
//
// setTimeout(() => {
//   var blob = new Blob([JSON.stringify(newPhrases)], {
//     type: "text/plain;charset=utf-8",
//   });
//   var FileSaver = require("file-saver");
//   FileSaver.saveAs(blob, "phrases.txt");
// }, 5000);
