import suz from "../sounds/words/suz.mp3";
import bash from "../sounds/words/bash.mp3";
import vakyt from "../sounds/words/vakyt.mp3";
import halik from "../sounds/words/halik.mp3";
import bala from "../sounds/words/bala.mp3";
import aul from "../sounds/words/aul.mp3";
import kon from "../sounds/words/kon.mp3";
import esh from "../sounds/words/esh.mp3";
import keshe from "../sounds/words/keshe.mp3";
import salam from "../sounds/words/salam.mp3";
import shahar from "../sounds/words/shahar.mp3";
import uryn from "../sounds/words/uryn.mp3";
import hezmat from "../sounds/words/hezmat.mp3";
import mektep from "../sounds/words/mektep.mp3";
import iul from "../sounds/words/iul.mp3";
import ara from "../sounds/words/ara.mp3";
import tel from "../sounds/words/tel.mp3";
import kyz from "../sounds/words/kyz.mp3";
import yesh from "../sounds/words/yesh.mp3";
import zhir from "../sounds/words/zhir.mp3";
import yort from "../sounds/words/yort.mp3";
import donia from "../sounds/words/donia.mp3";
import iak from "../sounds/words/iak.mp3";
import deulet from "../sounds/words/deulet.mp3";
import chara from "../sounds/words/chara.mp3";
import il from "../sounds/words/il.mp3";
import tormosh from "../sounds/words/tormosh.mp3";
import hel from "../sounds/words/hel.mp3";
import zhitekche from "../sounds/words/zhitekche.mp3";
import akcha from "../sounds/words/akcha.mp3";
import barlyk from "../sounds/words/barlyk.mp3";
import kuz from "../sounds/words/kuz.mp3";
import sum from "../sounds/words/sum.mp3";
import tugan from "../sounds/words/tugan.mp3";
import kul from "../sounds/words/kul.mp3";
import ukuchy from "../sounds/words/ukuchy.mp3";
import huzhalyk from "../sounds/words/huzhalyk.mp3";
import mesele from "../sounds/words/mesele.mp3";
import olke from "../sounds/words/olke.mp3";
import kunel from "../sounds/words/kunel.mp3";
import gaile from "../sounds/words/gaile.mp3";
import uzek from "../sounds/words/uzek.mp3";
import isem from "../sounds/words/isem.mp3";
import netizhe from "../sounds/words/netizhe.mp3";
import beirem from "../sounds/words/beirem.mp3";
import ul from "../sounds/words/ul.mp3";
import eget from "../sounds/words/eget.mp3";
import su from "../sounds/words/su.mp3";
import yerdem from "../sounds/words/yerdem.mp3";
import san from "../sounds/words/san.mp3";
import belem from "../sounds/words/belem.mp3";
import kitap from "../sounds/words/kitap.mp3";
import ai from "../sounds/words/ai.mp3";
import oeshma from "../sounds/words/oeshma.mp3";
import is from "../sounds/words/is.mp3";
import ukutuchy from "../sounds/words/ukutuchy.mp3";
import izhat from "../sounds/words/izhat.mp3";
import medeniyet from "../sounds/words/medeniyet.mp3";
import ech from "../sounds/words/ech.mp3";
import meglumet from "../sounds/words/meglumet.mp3";
import chygysh from "../sounds/words/chygysh.mp3";
import oi from "../sounds/words/oi.mp3";
import fiker from "../sounds/words/fiker.mp3";
import tarih from "../sounds/words/tarih.mp3";
import olesh from "../sounds/words/olesh.mp3";
import hezmetker from "../sounds/words/hezmetker.mp3";
import revesh from "../sounds/words/revesh.mp3";
import eser from "../sounds/words/eser.mp3";
import derezhe from "../sounds/words/derezhe.mp3";
import zhyr from "../sounds/words/zhyr.mp3";
import momkinlek from "../sounds/words/momkinlek.mp3";
import vekil from "../sounds/words/vekil.mp3";
import idare from "../sounds/words/idare.mp3";
import koch from "../sounds/words/koch.mp3";
import din from "../sounds/words/din.mp3";
import hatyn from "../sounds/words/hatyn.mp3";
import fen from "../sounds/words/fen.mp3";
import moselman from "../sounds/words/moselman.mp3";
import chor from "../sounds/words/chor.mp3";
import gamel from "../sounds/words/gamel.mp3";
import urynbasar from "../sounds/words/urynbasar.mp3";
import taraf from "../sounds/words/taraf.mp3";
import mechet from "../sounds/words/mechet.mp3";
import sugysh from "../sounds/words/sugysh.mp3";
import maksat from "../sounds/words/maksat.mp3";
import uram from "../sounds/words/uram.mp3";
import reis from "../sounds/words/reis.mp3";
import isep from "../sounds/words/isep.mp3";
import shiger from "../sounds/words/shiger.mp3";
import ochrashu from "../sounds/words/ochrashu.mp3";
import ochrak from "../sounds/words/ochrak.mp3";
import megerif from "../sounds/words/megerif.mp3";
import eni from "../sounds/words/eni.mp3";
import useh from "../sounds/words/useh.mp3";
import sorau from "../sounds/words/sorau.mp3";

export interface WordsInterface {
  tat: string;
  rus: string;
  eng: string;
  lat: string;
  audio: any;
}
const prev = [
  {
    tat: "Сәлам",
    rus: "Привет",
    eng: "Hello",
    audio: "salam",
  },
  {
    tat: "Кеше",
    rus: "Человек",
    eng: "Human",
    audio: "keshe",
  },
  {
    tat: "Эш",
    rus: "Работа, занятие, труд",
    eng: "Work",
    audio: "esh",
  },
  {
    tat: "Көн",
    rus: "День, сутки",
    eng: "Day",
    audio: "kon",
  },
  {
    tat: "Авыл",
    rus: "Деревня",
    eng: "Village",
    audio: "aul",
  },
  {
    tat: "Бала",
    rus: "Ребёнок",
    eng: "Child",
    audio: "bala",
  },
  {
    tat: "Халык",
    rus: "Народ, люди",
    eng: "Nation",
    audio: "halik",
  },
  {
    tat: "Вакыт",
    rus: "Время, пора, период",
    eng: "Time",
    audio: "vakyt",
  },
  {
    tat: "Баш",
    rus: "Голова, ум",
    eng: "Head",
    audio: "bash",
  },
  {
    tat: "Сүз",
    rus: "Слово",
    eng: "Word",
    audio: "suz",
  },
  {
    tat: "Шәһәр",
    rus: "Город",
    eng: "City",
    audio: "shahar",
  },
  {
    tat: "Урын",
    rus: "Место",
    eng: "Place",
    audio: "uryn",
  },
  {
    tat: "Хезмәт",
    rus: "Служба, работа",
    eng: "Labor",
    audio: "hezmat",
  },
  {
    tat: "Мәктәп",
    rus: "Школа",
    eng: "School",
    audio: "mektep",
  },
  {
    tat: "Юл",
    rus: "Дорога, путь",
    eng: "Way",
    audio: "iul",
  },
  {
    tat: "Ара",
    rus: "Промежуток, расстояние",
    eng: "Distance",
    audio: "ara",
  },
  {
    tat: "Тел",
    rus: "Язык",
    eng: "Language",
    audio: "tel",
  },
  {
    tat: "Кыз",
    rus: "Девочка/девушка, дочь",
    eng: "Girl",
    audio: "kyz",
  },
  {
    tat: "Яшь",
    rus: "Год, возраст",
    eng: "Year",
    audio: "yesh",
  },
  {
    tat: "Җир",
    rus: "Земля",
    eng: "Earth",
    audio: "zhir",
  },
  {
    tat: "Йорт",
    rus: "Дом, здание",
    eng: "House",
    audio: "yort",
  },
  {
    tat: "Дөнья",
    rus: "Мир",
    eng: "World",
    audio: "donia",
  },
  {
    tat: "Як",
    rus: "Сторона, край",
    eng: "Side",
    audio: "iak",
  },
  {
    tat: "Дәүләт",
    rus: "Государство",
    eng: "State",
    audio: "deulet",
  },
  {
    tat: "Чара",
    rus: "Средство, мероприятие",
    eng: "Event",
    audio: "chara",
  },
  {
    tat: "Ил",
    rus: "Страна",
    eng: "Country",
    audio: "il",
  },
  {
    tat: "Тормыш",
    rus: "Жизнь, бытие",
    eng: "Life",
    audio: "tormosh",
  },
  {
    tat: "Хәл",
    rus: "Состояние, сила",
    eng: "State",
    audio: "hel",
  },
  {
    tat: "Җитәкче",
    rus: "Руководитель",
    eng: "Head, Leader",
    audio: "zhitekche",
  },
  {
    tat: "Акча",
    rus: "Деньги",
    eng: "Money",
    audio: "akcha",
  },
  {
    tat: "Барлык",
    rus: "Наличие, существование",
    eng: "Existence",
    audio: "barlyk",
  },
  {
    tat: "Күз",
    rus: "Глаз",
    eng: "Eye",
    audio: "kuz",
  },
  {
    tat: "Сум",
    rus: "Рубль",
    eng: "Ruble",
    audio: "sum",
  },
  {
    tat: "Туган",
    rus: "Родственник, родной",
    eng: "Relative",
    audio: "tugan",
  },
  {
    tat: "Кул",
    rus: "Рука",
    eng: "Arm",
    audio: "kul",
  },
  {
    tat: "Укучы",
    rus: "Ученик, читатель",
    eng: "Student",
    audio: "ukuchy",
  },
  {
    tat: "Хуҗалык",
    rus: "Хозяйство",
    eng: "Economy",
    audio: "huzhalyk",
  },
  {
    tat: "Мәсьәлә",
    rus: "Вопрос, проблема",
    eng: "Question",
    audio: "mesele",
  },
  {
    tat: "Өлкә",
    rus: "Область",
    eng: "Area",
    audio: "olke",
  },
  {
    tat: "Күңел",
    rus: "Душа",
    eng: "Soul",
    audio: "kunel",
  },
  {
    tat: "Гаилә",
    rus: "Семья",
    eng: "Family",
    audio: "gaile",
  },
  {
    tat: "Үзәк",
    rus: "Центр",
    eng: "Centre",
    audio: "uzek",
  },
  {
    tat: "Исем",
    rus: "Имя, название",
    eng: "Name",
    audio: "isem",
  },
  {
    tat: "Нәтиҗә",
    rus: "Результат, итог",
    eng: "Result",
    audio: "netizhe",
  },
  {
    tat: "Бәйрәм",
    rus: "Праздник",
    eng: "Holiday",
    audio: "beirem",
  },
  {
    tat: "Ул",
    rus: "Он/она/оно, сын",
    eng: "he,she,it,son",
    audio: "ul",
  },
  {
    tat: "Егет",
    rus: "Парень",
    eng: "Guy",
    audio: "eget",
  },
  {
    tat: "Су",
    rus: "Вода",
    eng: "Water",
    audio: "su",
  },
  {
    tat: "Ярдәм",
    rus: "Помощь, поддержка",
    eng: "Help",
    audio: "yerdem",
  },
  {
    tat: "Сан",
    rus: "Число, количество",
    eng: "Number",
    audio: "san",
  },
  {
    tat: "Белем",
    rus: "Знание",
    eng: "Knowledge",
    audio: "belem",
  },
  {
    tat: "Китап",
    rus: "Книга",
    eng: "Book",
    audio: "kitap",
  },
  {
    tat: "Ай",
    rus: "Луна, месяц",
    eng: "Moon/month",
    audio: "ai",
  },
  {
    tat: "Оешма",
    rus: "Отдел, собрание",
    eng: "Department, meeting",
    audio: "oeshma",
  },
  {
    tat: "Ис",
    rus: "Запах",
    eng: "Smell",
    audio: "is",
  },
  {
    tat: "Укытучы",
    rus: "Учитель",
    eng: "Teacher",
    audio: "ukutuchy",
  },
  {
    tat: "Иҗат",
    rus: "Творчество",
    eng: "Creation",
    audio: "izhat",
  },
  {
    tat: "Мәдәният",
    rus: "Культура",
    eng: "Culture",
    audio: "medeniyet",
  },
  {
    tat: "Эч",
    rus: "Живот",
    eng: "Belly",
    audio: "ech",
  },
  {
    tat: "Мәгълүмат",
    rus: "Информация",
    eng: "Information",
    audio: "meglumet",
  },
  {
    tat: "Чыгыш",
    rus: "Выступление",
    eng: "Performance",
    audio: "chygysh",
  },
  {
    tat: "Өй",
    rus: "Дом",
    eng: "Home",
    audio: "oi",
  },
  {
    tat: "Фикер",
    rus: "Мысль, идея",
    eng: "Thought, idea",
    audio: "fiker",
  },
  {
    tat: "Тарих",
    rus: "История",
    eng: "History",
    audio: "tarih",
  },
  {
    tat: "Өлеш",
    rus: "Часть, доля, порция",
    eng: "Part, share, portion",
    audio: "olesh",
  },
  {
    tat: "Хезмәткәр",
    rus: "Сотрудник",
    eng: "Employee",
    audio: "hezmetker",
  },
  {
    tat: "Рәвеш",
    rus: "Вид, образ, облик",
    eng: "Image",
    audio: "revesh",
  },
  {
    tat: "Әсәр",
    rus: "Произведение",
    eng: "Composition",
    audio: "eser",
  },
  {
    tat: "Дәрәҗә",
    rus: "Cтепень, уровень, авторитет",
    eng: "Level",
    audio: "derezhe",
  },
  {
    tat: "Җыр",
    rus: "Песня",
    eng: "Song",
    audio: "zhyr",
  },
  {
    tat: "Мөмкинлек",
    rus: "Возможность, вероятность",
    eng: "Possibility, probability",
    audio: "momkinlek",
  },
  {
    tat: "Вәкил",
    rus: "Представитель",
    eng: "Representative",
    audio: "vekil",
  },
  {
    tat: "Идарә",
    rus: "Управление",
    eng: "Management",
    audio: "idare",
  },
  {
    tat: "Көч",
    rus: "Сила, могущество",
    eng: "Strength, power",
    audio: "koch",
  },
  {
    tat: "Дин",
    rus: "Религия, вера",
    eng: "Religion, faith",
    audio: "din",
  },
  {
    tat: "Хатын",
    rus: "Женщина, жена",
    eng: "Woman, wife",
    audio: "hatyn",
  },
  {
    tat: "Фән",
    rus: "Наука",
    eng: "The science",
    audio: "fen",
  },
  {
    tat: "Мөселман",
    rus: "Мусульманин",
    eng: "Muslim",
    audio: "moselman",
  },
  {
    tat: "Чор",
    rus: "Период, этап, эпоха",
    eng: "Period",
    audio: "chor",
  },
  {
    tat: "Гамәл",
    rus: "Действие",
    eng: "Action",
    audio: "gamel",
  },
  {
    tat: "Урынбасар",
    rus: "Заместитель",
    eng: "Deputy",
    audio: "urynbasar",
  },
  {
    tat: "Тараф",
    rus: "Сторона",
    eng: "Side",
    audio: "taraf",
  },
  {
    tat: "Мәчет",
    rus: "Мечеть",
    eng: "Mosque",
    audio: "mechet",
  },
  {
    tat: "Сугыш",
    rus: "Война",
    eng: "The War",
    audio: "sugysh",
  },
  {
    tat: "Максат",
    rus: "Цель",
    eng: "Goal",
    audio: "maksat",
  },
  {
    tat: "Урам",
    rus: "Улица",
    eng: "Street",
    audio: "uram",
  },
  {
    tat: "Рәис",
    rus: "Председатель",
    eng: "Chairman",
    audio: "reis",
  },
  {
    tat: "Исәп",
    rus: "Численность, счёт",
    eng: "Number, account",
    audio: "isep",
  },
  {
    tat: "Шигырь",
    rus: "Стихотворение",
    eng: "The poem",
    audio: "shiger",
  },
  {
    tat: "Очрашу",
    rus: "Встреча",
    eng: "Meeting",
    audio: "ochrashu",
  },
  {
    tat: "Очрак",
    rus: "Случай",
    eng: "Случай",
    audio: "ochrak",
  },
  {
    tat: "Мәгариф",
    rus: "Просвещение, образование",
    eng: "Education",
    audio: "megerif",
  },
  {
    tat: "Әни",
    rus: "Мама, мать",
    eng: "Mother",
    audio: "eni",
  },
  {
    tat: "Үсеш",
    rus: "Рост, прирост",
    eng: "Development",
    audio: "useh",
  },
  {
    tat: "Сорау",
    rus: "Вопрос",
    eng: "Question",
    audio: "sorau",
  },
];
const test = [
  {
    tat: "Сәлам",
    rus: "Привет",
    eng: "Hello",
    audio: "/static/media/salam.dc8407e1.mp3",
    lat: "Sälam",
  },
  {
    tat: "Кеше",
    rus: "Человек",
    eng: "Human",
    audio: "/static/media/keshe.3f517cb6.mp3",
    lat: "Keşe",
  },
  {
    tat: "Эш",
    rus: "Работа, занятие, труд",
    eng: "Work",
    audio: "/static/media/esh.b05b288c.mp3",
    lat: "Eş",
  },
  {
    tat: "Көн",
    rus: "День, сутки",
    eng: "Day",
    audio: "/static/media/kon.bd1fab53.mp3",
    lat: "Kön",
  },
  {
    tat: "Авыл",
    rus: "Деревня",
    eng: "Village",
    audio: "/static/media/aul.188aea97.mp3",
    lat: "Avıl",
  },
  {
    tat: "Бала",
    rus: "Ребёнок",
    eng: "Child",
    audio: "/static/media/bala.a11e1cd2.mp3",
    lat: "Bala",
  },
  {
    tat: "Халык",
    rus: "Народ, люди",
    eng: "Nation",
    audio: "/static/media/halik.2966a382.mp3",
    lat: "Halık",
  },
  {
    tat: "Вакыт",
    rus: "Время, пора, период",
    eng: "Time",
    audio: "/static/media/vakyt.7923b9f7.mp3",
    lat: "Vakıt",
  },
  {
    tat: "Баш",
    rus: "Голова, ум",
    eng: "Head",
    audio: "/static/media/bash.1f04bed9.mp3",
    lat: "Baş",
  },
  {
    tat: "Сүз",
    rus: "Слово",
    eng: "Word",
    audio: "/static/media/suz.049e98cd.mp3",
    lat: "Sүz",
  },
  {
    tat: "Шәһәр",
    rus: "Город",
    eng: "City",
    audio: "/static/media/shahar.e0c80b52.mp3",
    lat: "Şäһär",
  },
  {
    tat: "Урын",
    rus: "Место",
    eng: "Place",
    audio: "/static/media/uryn.1d403814.mp3",
    lat: "Urın",
  },
  {
    tat: "Хезмәт",
    rus: "Служба, работа",
    eng: "Labor",
    audio: "/static/media/hezmat.b273ac85.mp3",
    lat: "Hezmät",
  },
  {
    tat: "Мәктәп",
    rus: "Школа",
    eng: "School",
    audio: "/static/media/mektep.d9feeaa4.mp3",
    lat: "Mäktäp",
  },
  {
    tat: "Юл",
    rus: "Дорога, путь",
    eng: "Way",
    audio: "/static/media/iul.52604ff7.mp3",
    lat: "Iul",
  },
  {
    tat: "Ара",
    rus: "Промежуток, расстояние",
    eng: "Distance",
    audio: "/static/media/ara.e2871127.mp3",
    lat: "Ara",
  },
  {
    tat: "Тел",
    rus: "Язык",
    eng: "Language",
    audio: "/static/media/tel.10cca218.mp3",
    lat: "Tel",
  },
  {
    tat: "Кыз",
    rus: "Девочка/девушка, дочь",
    eng: "Girl",
    audio: "/static/media/kyz.6454a0fe.mp3",
    lat: "Kız",
  },
  {
    tat: "Яшь",
    rus: "Год, возраст",
    eng: "Year",
    audio: "/static/media/yesh.0bfdab6c.mp3",
    lat: "Iaşь",
  },
  {
    tat: "Җир",
    rus: "Земля",
    eng: "Earth",
    audio: "/static/media/zhir.22e54fc8.mp3",
    lat: "Jir",
  },
  {
    tat: "Йорт",
    rus: "Дом, здание",
    eng: "House",
    audio: "/static/media/yort.4cbf99f5.mp3",
    lat: "Yort",
  },
  {
    tat: "Дөнья",
    rus: "Мир",
    eng: "World",
    audio: "/static/media/donia.42290f6a.mp3",
    lat: "Dönьia",
  },
  {
    tat: "Як",
    rus: "Сторона, край",
    eng: "Side",
    audio: "/static/media/iak.d1402c46.mp3",
    lat: "Iak",
  },
  {
    tat: "Дәүләт",
    rus: "Государство",
    eng: "State",
    audio: "/static/media/deulet.e4f0d764.mp3",
    lat: "Däүlät",
  },
  {
    tat: "Чара",
    rus: "Средство, мероприятие",
    eng: "Event",
    audio: "/static/media/chara.4fd6f470.mp3",
    lat: "Cara",
  },
  {
    tat: "Ил",
    rus: "Страна",
    eng: "Country",
    audio: "/static/media/il.bb679951.mp3",
    lat: "Il",
  },
  {
    tat: "Тормыш",
    rus: "Жизнь, бытие",
    eng: "Life",
    audio: "/static/media/tormosh.39a68349.mp3",
    lat: "Tormış",
  },
  {
    tat: "Хәл",
    rus: "Состояние, сила",
    eng: "State",
    audio: "/static/media/hel.1dfc4642.mp3",
    lat: "Häl",
  },
  {
    tat: "Җитәкче",
    rus: "Руководитель",
    eng: "Head, Leader",
    audio: "/static/media/zhitekche.e63e975a.mp3",
    lat: "Jitäkce",
  },
  {
    tat: "Акча",
    rus: "Деньги",
    eng: "Money",
    audio: "/static/media/akcha.6203e3f7.mp3",
    lat: "Akca",
  },
  {
    tat: "Барлык",
    rus: "Наличие, существование",
    eng: "Existence",
    audio: "/static/media/barlyk.078f9105.mp3",
    lat: "Barlık",
  },
  {
    tat: "Күз",
    rus: "Глаз",
    eng: "Eye",
    audio: "/static/media/kuz.fd6a35db.mp3",
    lat: "Kүz",
  },
  {
    tat: "Сум",
    rus: "Рубль",
    eng: "Ruble",
    audio: "/static/media/sum.eb0ab54f.mp3",
    lat: "Sum",
  },
  {
    tat: "Туган",
    rus: "Родственник, родной",
    eng: "Relative",
    audio: "/static/media/tugan.80f2b2c1.mp3",
    lat: "Tuğan",
  },
  {
    tat: "Кул",
    rus: "Рука",
    eng: "Arm",
    audio: "/static/media/kul.0922d88b.mp3",
    lat: "Qul",
  },
  {
    tat: "Укучы",
    rus: "Ученик, читатель",
    eng: "Student",
    audio: "/static/media/ukuchy.6bcb18b7.mp3",
    lat: "Uqucı",
  },
  {
    tat: "Хуҗалык",
    rus: "Хозяйство",
    eng: "Economy",
    audio: "/static/media/huzhalyk.d16e52ce.mp3",
    lat: "Hujalık",
  },
  {
    tat: "Мәсьәлә",
    rus: "Вопрос, проблема",
    eng: "Question",
    audio: "/static/media/mesele.4862c8f6.mp3",
    lat: "Mäsьälä",
  },
  {
    tat: "Өлкә",
    rus: "Область",
    eng: "Area",
    audio: "/static/media/olke.174938c2.mp3",
    lat: "Ölkä",
  },
  {
    tat: "Күңел",
    rus: "Душа",
    eng: "Soul",
    audio: "/static/media/kunel.926ecdbc.mp3",
    lat: "Kүñel",
  },
  {
    tat: "Гаилә",
    rus: "Семья",
    eng: "Family",
    audio: "/static/media/gaile.c2c0ee22.mp3",
    lat: "Ğailä",
  },
  {
    tat: "Үзәк",
    rus: "Центр",
    eng: "Centre",
    audio: "/static/media/uzek.97588077.mp3",
    lat: "Үzäk",
  },
  {
    tat: "Исем",
    rus: "Имя, название",
    eng: "Name",
    audio: "/static/media/isem.8605c1e0.mp3",
    lat: "Isem",
  },
  {
    tat: "Нәтиҗә",
    rus: "Результат, итог",
    eng: "Result",
    audio: "/static/media/netizhe.56927842.mp3",
    lat: "Nätijä",
  },
  {
    tat: "Бәйрәм",
    rus: "Праздник",
    eng: "Holiday",
    audio: "/static/media/beirem.a5e46ae1.mp3",
    lat: "Bäyräm",
  },
  {
    tat: "Ул",
    rus: "Он/она/оно, сын",
    eng: "he,she,it,son",
    audio: "/static/media/ul.d06a1c82.mp3",
    lat: "Ul",
  },
  {
    tat: "Егет",
    rus: "Парень",
    eng: "Guy",
    audio: "/static/media/eget.39cbd11d.mp3",
    lat: "Eget",
  },
  {
    tat: "Су",
    rus: "Вода",
    eng: "Water",
    audio: "/static/media/su.d50a28cf.mp3",
    lat: "Su",
  },
  {
    tat: "Ярдәм",
    rus: "Помощь, поддержка",
    eng: "Help",
    audio: "/static/media/yerdem.53b671c4.mp3",
    lat: "Iardäm",
  },
  {
    tat: "Сан",
    rus: "Число, количество",
    eng: "Number",
    audio: "/static/media/san.d63f69e0.mp3",
    lat: "San",
  },
  {
    tat: "Белем",
    rus: "Знание",
    eng: "Knowledge",
    audio: "/static/media/belem.e7dae1a5.mp3",
    lat: "Belem",
  },
  {
    tat: "Китап",
    rus: "Книга",
    eng: "Book",
    audio: "/static/media/kitap.f77f6287.mp3",
    lat: "Kitap",
  },
  {
    tat: "Ай",
    rus: "Луна, месяц",
    eng: "Moon/month",
    audio: "/static/media/ai.9b1bf7bc.mp3",
    lat: "Ay",
  },
  {
    tat: "Оешма",
    rus: "Отдел, собрание",
    eng: "Department, meeting",
    audio: "/static/media/oeshma.688b3f0d.mp3",
    lat: "Oeşma",
  },
  {
    tat: "Ис",
    rus: "Запах",
    eng: "Smell",
    audio: "/static/media/is.37aea844.mp3",
    lat: "Is",
  },
  {
    tat: "Укытучы",
    rus: "Учитель",
    eng: "Teacher",
    audio: "/static/media/ukutuchy.4d38fe3a.mp3",
    lat: "Ukıtucı",
  },
  {
    tat: "Иҗат",
    rus: "Творчество",
    eng: "Creation",
    audio: "/static/media/izhat.9a00781d.mp3",
    lat: "Ijat",
  },
  {
    tat: "Мәдәният",
    rus: "Культура",
    eng: "Culture",
    audio: "/static/media/medeniyet.aa5b7bcb.mp3",
    lat: "Mädäniiat",
  },
  {
    tat: "Эч",
    rus: "Живот",
    eng: "Belly",
    audio: "/static/media/ech.de413503.mp3",
    lat: "Ec",
  },
  {
    tat: "Мәгълүмат",
    rus: "Информация",
    eng: "Information",
    audio: "/static/media/meglumet.7fcdf8ff.mp3",
    lat: "Mägъlүmat",
  },
  {
    tat: "Чыгыш",
    rus: "Выступление",
    eng: "Performance",
    audio: "/static/media/chygysh.65c87a2d.mp3",
    lat: "Cıgış",
  },
  {
    tat: "Өй",
    rus: "Дом",
    eng: "Home",
    audio: "/static/media/oi.772bc360.mp3",
    lat: "Öy",
  },
  {
    tat: "Фикер",
    rus: "Мысль, идея",
    eng: "Thought, idea",
    audio: "/static/media/fiker.a03cc5fa.mp3",
    lat: "Fiker",
  },
  {
    tat: "Тарих",
    rus: "История",
    eng: "History",
    audio: "/static/media/tarih.a7fc9fb8.mp3",
    lat: "Tarih",
  },
  {
    tat: "Өлеш",
    rus: "Часть, доля, порция",
    eng: "Part, share, portion",
    audio: "/static/media/olesh.74d721a1.mp3",
    lat: "Öleş",
  },
  {
    tat: "Хезмәткәр",
    rus: "Сотрудник",
    eng: "Employee",
    audio: "/static/media/hezmetker.bf61d9bb.mp3",
    lat: "Hezmätkär",
  },
  {
    tat: "Рәвеш",
    rus: "Вид, образ, облик",
    eng: "Image",
    audio: "/static/media/revesh.c41925d2.mp3",
    lat: "Räveş",
  },
  {
    tat: "Әсәр",
    rus: "Произведение",
    eng: "Composition",
    audio: "/static/media/eser.78f29449.mp3",
    lat: "Äsär",
  },
  {
    tat: "Дәрәҗә",
    rus: "Cтепень, уровень, авторитет",
    eng: "Level",
    audio: "/static/media/derezhe.22731982.mp3",
    lat: "Däräjä",
  },
  {
    tat: "Җыр",
    rus: "Песня",
    eng: "Song",
    audio: "/static/media/zhyr.9f12b7dc.mp3",
    lat: "Jır",
  },
  {
    tat: "Мөмкинлек",
    rus: "Возможность, вероятность",
    eng: "Possibility, probability",
    audio: "/static/media/momkinlek.95c7e93d.mp3",
    lat: "Mömkinlek",
  },
  {
    tat: "Вәкил",
    rus: "Представитель",
    eng: "Representative",
    audio: "/static/media/vekil.a685c72b.mp3",
    lat: "Väkil",
  },
  {
    tat: "Идарә",
    rus: "Управление",
    eng: "Management",
    audio: "/static/media/idare.da339b3d.mp3",
    lat: "Idarä",
  },
  {
    tat: "Көч",
    rus: "Сила, могущество",
    eng: "Strength, power",
    audio: "/static/media/koch.babc9eba.mp3",
    lat: "Köc",
  },
  {
    tat: "Дин",
    rus: "Религия, вера",
    eng: "Religion, faith",
    audio: "/static/media/din.ea14308c.mp3",
    lat: "Din",
  },
  {
    tat: "Хатын",
    rus: "Женщина, жена",
    eng: "Woman, wife",
    audio: "/static/media/hatyn.8d461c47.mp3",
    lat: "Hatın",
  },
  {
    tat: "Фән",
    rus: "Наука",
    eng: "The science",
    audio: "/static/media/fen.2341c019.mp3",
    lat: "Fän",
  },
  {
    tat: "Мөселман",
    rus: "Мусульманин",
    eng: "Muslim",
    audio: "/static/media/moselman.b1d884c7.mp3",
    lat: "Möselman",
  },
  {
    tat: "Чор",
    rus: "Период, этап, эпоха",
    eng: "Period",
    audio: "/static/media/chor.21f8e4f2.mp3",
    lat: "Cor",
  },
  {
    tat: "Гамәл",
    rus: "Действие",
    eng: "Action",
    audio: "/static/media/gamel.3de1956d.mp3",
    lat: "Ğamäl",
  },
  {
    tat: "Урынбасар",
    rus: "Заместитель",
    eng: "Deputy",
    audio: "/static/media/urynbasar.065f5a76.mp3",
    lat: "Urınbasar",
  },
  {
    tat: "Тараф",
    rus: "Сторона",
    eng: "Side",
    audio: "/static/media/taraf.ba3ee855.mp3",
    lat: "Taraf",
  },
  {
    tat: "Мәчет",
    rus: "Мечеть",
    eng: "Mosque",
    audio: "/static/media/mechet.4cfd9f5a.mp3",
    lat: "Mäcet",
  },
  {
    tat: "Сугыш",
    rus: "Война",
    eng: "The War",
    audio: "/static/media/sugysh.a1f3731c.mp3",
    lat: "Sugış",
  },
  {
    tat: "Максат",
    rus: "Цель",
    eng: "Goal",
    audio: "/static/media/maksat.5fbbd6ed.mp3",
    lat: "Maksat",
  },
  {
    tat: "Урам",
    rus: "Улица",
    eng: "Street",
    audio: "/static/media/uram.8540ac1f.mp3",
    lat: "Uram",
  },
  {
    tat: "Рәис",
    rus: "Председатель",
    eng: "Chairman",
    audio: "/static/media/reis.9d857e48.mp3",
    lat: "Räis",
  },
  {
    tat: "Исәп",
    rus: "Численность, счёт",
    eng: "Number, account",
    audio: "/static/media/isep.572365f2.mp3",
    lat: "Isäp",
  },
  {
    tat: "Шигырь",
    rus: "Стихотворение",
    eng: "The poem",
    audio: "/static/media/shiger.d7d2261a.mp3",
    lat: "Şigırь",
  },
  {
    tat: "Очрашу",
    rus: "Встреча",
    eng: "Meeting",
    audio: "/static/media/ochrashu.8b79e4a6.mp3",
    lat: "Ocraşu",
  },
  {
    tat: "Очрак",
    rus: "Случай",
    eng: "Случай",
    audio: "/static/media/ochrak.ab35df96.mp3",
    lat: "Ocrak",
  },
  {
    tat: "Мәгариф",
    rus: "Просвещение, образование",
    eng: "Education",
    audio: "/static/media/megerif.23033aee.mp3",
    lat: "Mäğarif",
  },
  {
    tat: "Әни",
    rus: "Мама, мать",
    eng: "Mother",
    audio: "/static/media/eni.8a8821f5.mp3",
    lat: "Äni",
  },
  {
    tat: "Үсеш",
    rus: "Рост, прирост",
    eng: "Development",
    audio: "/static/media/useh.f7f52881.mp3",
    lat: "Үseş",
  },
  {
    tat: "Сорау",
    rus: "Вопрос",
    eng: "Question",
    audio: "/static/media/sorau.8bea6d6b.mp3",
    lat: "Sorau",
  },
];

export const words: Array<WordsInterface> = prev.map((item, index) => {
  return { ...item, lat: test[index].lat };
});

// export const words: Array<WordsInterface> = [
//   {
//     tat: "Сәлам",
//     rus: "Привет",
//     eng: "Hello",
//     audio: salam,
//   },
//   {
//     tat: "Кеше",
//     rus: "Человек",
//     eng: "Human",
//     audio: keshe,
//   },
//   {
//     tat: "Эш",
//     rus: "Работа, занятие, труд",
//     eng: "Work",
//     audio: esh,
//   },
//   {
//     tat: "Көн",
//     rus: "День, сутки",
//     eng: "Day",
//     audio: kon,
//   },
//   {
//     tat: "Авыл",
//     rus: "Деревня",
//     eng: "Village",
//     audio: aul,
//   },
//   {
//     tat: "Бала",
//     rus: "Ребёнок",
//     eng: "Child",
//     audio: bala,
//   },
//   {
//     tat: "Халык",
//     rus: "Народ, люди",
//     eng: "Nation",
//     audio: halik,
//   },
//   {
//     tat: "Вакыт",
//     rus: "Время, пора, период",
//     eng: "Time",
//     audio: vakyt,
//   },
//   {
//     tat: "Баш",
//     rus: "Голова, ум",
//     eng: "Head",
//     audio: bash,
//   },
//   {
//     tat: "Сүз",
//     rus: "Слово",
//     eng: "Word",
//     audio: suz,
//   },
//   {
//     tat: "Шәһәр",
//     rus: "Город",
//     eng: "City",
//     audio: shahar,
//   },
//   {
//     tat: "Урын",
//     rus: "Место",
//     eng: "Place",
//     audio: uryn,
//   },
//   {
//     tat: "Хезмәт",
//     rus: "Служба, работа",
//     eng: "Labor",
//     audio: hezmat,
//   },
//   {
//     tat: "Мәктәп",
//     rus: "Школа",
//     eng: "School",
//     audio: mektep,
//   },
//   {
//     tat: "Юл",
//     rus: "Дорога, путь",
//     eng: "Way",
//     audio: iul,
//   },
//   {
//     tat: "Ара",
//     rus: "Промежуток, расстояние",
//     eng: "Distance",
//     audio: ara,
//   },
//   {
//     tat: "Тел",
//     rus: "Язык",
//     eng: "Language",
//     audio: tel,
//   },
//   {
//     tat: "Кыз",
//     rus: "Девочка/девушка, дочь",
//     eng: "Girl",
//     audio: kyz,
//   },
//   {
//     tat: "Яшь",
//     rus: "Год, возраст",
//     eng: "Year",
//     audio: yesh,
//   },
//   {
//     tat: "Җир",
//     rus: "Земля",
//     eng: "Earth",
//     audio: zhir,
//   },
//   {
//     tat: "Йорт",
//     rus: "Дом, здание",
//     eng: "House",
//     audio: yort,
//   },
//   {
//     tat: "Дөнья",
//     rus: "Мир",
//     eng: "World",
//     audio: donia,
//   },
//   {
//     tat: "Як",
//     rus: "Сторона, край",
//     eng: "Side",
//     audio: iak,
//   },
//   {
//     tat: "Дәүләт",
//     rus: "Государство",
//     eng: "State",
//     audio: deulet,
//   },
//   {
//     tat: "Чара",
//     rus: "Средство, мероприятие",
//     eng: "Event",
//     audio: chara,
//   },
//   {
//     tat: "Ил",
//     rus: "Страна",
//     eng: "Country",
//     audio: il,
//   },
//   {
//     tat: "Тормыш",
//     rus: "Жизнь, бытие",
//     eng: "Life",
//     audio: tormosh,
//   },
//   {
//     tat: "Хәл",
//     rus: "Состояние, сила",
//     eng: "State",
//     audio: hel,
//   },
//   {
//     tat: "Җитәкче",
//     rus: "Руководитель",
//     eng: "Head, Leader",
//     audio: zhitekche,
//   },
//   {
//     tat: "Акча",
//     rus: "Деньги",
//     eng: "Money",
//     audio: akcha,
//   },
//   {
//     tat: "Барлык",
//     rus: "Наличие, существование",
//     eng: "Existence",
//     audio: barlyk,
//   },
//   {
//     tat: "Күз",
//     rus: "Глаз",
//     eng: "Eye",
//     audio: kuz,
//   },
//   {
//     tat: "Сум",
//     rus: "Рубль",
//     eng: "Ruble",
//     audio: sum,
//   },
//   {
//     tat: "Туган",
//     rus: "Родственник, родной",
//     eng: "Relative",
//     audio: tugan,
//   },
//   {
//     tat: "Кул",
//     rus: "Рука",
//     eng: "Arm",
//     audio: kul,
//   },
//   {
//     tat: "Укучы",
//     rus: "Ученик, читатель",
//     eng: "Student",
//     audio: ukuchy,
//   },
//   {
//     tat: "Хуҗалык",
//     rus: "Хозяйство",
//     eng: "Economy",
//     audio: huzhalyk,
//   },
//   {
//     tat: "Мәсьәлә",
//     rus: "Вопрос, проблема",
//     eng: "Question",
//     audio: mesele,
//   },
//   {
//     tat: "Өлкә",
//     rus: "Область",
//     eng: "Area",
//     audio: olke,
//   },
//   {
//     tat: "Күңел",
//     rus: "Душа",
//     eng: "Soul",
//     audio: kunel,
//   },
//   {
//     tat: "Гаилә",
//     rus: "Семья",
//     eng: "Family",
//     audio: gaile,
//   },
//   {
//     tat: "Үзәк",
//     rus: "Центр",
//     eng: "Centre",
//     audio: uzek,
//   },
//   {
//     tat: "Исем",
//     rus: "Имя, название",
//     eng: "Name",
//     audio: isem,
//   },
//   {
//     tat: "Нәтиҗә",
//     rus: "Результат, итог",
//     eng: "Result",
//     audio: netizhe,
//   },
//   {
//     tat: "Бәйрәм",
//     rus: "Праздник",
//     eng: "Holiday",
//     audio: beirem,
//   },
//   {
//     tat: "Ул",
//     rus: "Он/она/оно, сын",
//     eng: "he,she,it,son",
//     audio: ul,
//   },
//   {
//     tat: "Егет",
//     rus: "Парень",
//     eng: "Guy",
//     audio: eget,
//   },
//   {
//     tat: "Су",
//     rus: "Вода",
//     eng: "Water",
//     audio: su,
//   },
//   {
//     tat: "Ярдәм",
//     rus: "Помощь, поддержка",
//     eng: "Help",
//     audio: yerdem,
//   },
//   {
//     tat: "Сан",
//     rus: "Число, количество",
//     eng: "Number",
//     audio: san,
//   },
//   {
//     tat: "Белем",
//     rus: "Знание",
//     eng: "Knowledge",
//     audio: belem,
//   },
//   {
//     tat: "Китап",
//     rus: "Книга",
//     eng: "Book",
//     audio: kitap,
//   },
//   {
//     tat: "Ай",
//     rus: "Луна, месяц",
//     eng: "Moon/month",
//     audio: ai,
//   },
//   {
//     tat: "Оешма",
//     rus: "Отдел, собрание",
//     eng: "Department, meeting",
//     audio: oeshma,
//   },
//   {
//     tat: "Ис",
//     rus: "Запах",
//     eng: "Smell",
//     audio: is,
//   },
//   {
//     tat: "Укытучы",
//     rus: "Учитель",
//     eng: "Teacher",
//     audio: ukutuchy,
//   },
//   {
//     tat: "Иҗат",
//     rus: "Творчество",
//     eng: "Creation",
//     audio: izhat,
//   },
//   {
//     tat: "Мәдәният",
//     rus: "Культура",
//     eng: "Culture",
//     audio: medeniyet,
//   },
//   {
//     tat: "Эч",
//     rus: "Живот",
//     eng: "Belly",
//     audio: ech,
//   },
//   {
//     tat: "Мәгълүмат",
//     rus: "Информация",
//     eng: "Information",
//     audio: meglumet,
//   },
//   {
//     tat: "Чыгыш",
//     rus: "Выступление",
//     eng: "Performance",
//     audio: chygysh,
//   },
//   {
//     tat: "Өй",
//     rus: "Дом",
//     eng: "Home",
//     audio: oi,
//   },
//   {
//     tat: "Фикер",
//     rus: "Мысль, идея",
//     eng: "Thought, idea",
//     audio: fiker,
//   },
//   {
//     tat: "Тарих",
//     rus: "История",
//     eng: "History",
//     audio: tarih,
//   },
//   {
//     tat: "Өлеш",
//     rus: "Часть, доля, порция",
//     eng: "Part, share, portion",
//     audio: olesh,
//   },
//   {
//     tat: "Хезмәткәр",
//     rus: "Сотрудник",
//     eng: "Employee",
//     audio: hezmetker,
//   },
//   {
//     tat: "Рәвеш",
//     rus: "Вид, образ, облик",
//     eng: "Image",
//     audio: revesh,
//   },
//   {
//     tat: "Әсәр",
//     rus: "Произведение",
//     eng: "Composition",
//     audio: eser,
//   },
//   {
//     tat: "Дәрәҗә",
//     rus: "Cтепень, уровень, авторитет",
//     eng: "Level",
//     audio: derezhe,
//   },
//   {
//     tat: "Җыр",
//     rus: "Песня",
//     eng: "Song",
//     audio: zhyr,
//   },
//   {
//     tat: "Мөмкинлек",
//     rus: "Возможность, вероятность",
//     eng: "Possibility, probability",
//     audio: momkinlek,
//   },
//   {
//     tat: "Вәкил",
//     rus: "Представитель",
//     eng: "Representative",
//     audio: vekil,
//   },
//   {
//     tat: "Идарә",
//     rus: "Управление",
//     eng: "Management",
//     audio: idare,
//   },
//   {
//     tat: "Көч",
//     rus: "Сила, могущество",
//     eng: "Strength, power",
//     audio: koch,
//   },
//   {
//     tat: "Дин",
//     rus: "Религия, вера",
//     eng: "Religion, faith",
//     audio: din,
//   },
//   {
//     tat: "Хатын",
//     rus: "Женщина, жена",
//     eng: "Woman, wife",
//     audio: hatyn,
//   },
//   {
//     tat: "Фән",
//     rus: "Наука",
//     eng: "The science",
//     audio: fen,
//   },
//   {
//     tat: "Мөселман",
//     rus: "Мусульманин",
//     eng: "Muslim",
//     audio: moselman,
//   },
//   {
//     tat: "Чор",
//     rus: "Период, этап, эпоха",
//     eng: "Period",
//     audio: chor,
//   },
//   {
//     tat: "Гамәл",
//     rus: "Действие",
//     eng: "Action",
//     audio: gamel,
//   },
//   {
//     tat: "Урынбасар",
//     rus: "Заместитель",
//     eng: "Deputy",
//     audio: urynbasar,
//   },
//   {
//     tat: "Тараф",
//     rus: "Сторона",
//     eng: "Side",
//     audio: taraf,
//   },
//   {
//     tat: "Мәчет",
//     rus: "Мечеть",
//     eng: "Mosque",
//     audio: mechet,
//   },
//   {
//     tat: "Сугыш",
//     rus: "Война",
//     eng: "The War",
//     audio: sugysh,
//   },
//   {
//     tat: "Максат",
//     rus: "Цель",
//     eng: "Goal",
//     audio: maksat,
//   },
//   {
//     tat: "Урам",
//     rus: "Улица",
//     eng: "Street",
//     audio: uram,
//   },
//   {
//     tat: "Рәис",
//     rus: "Председатель",
//     eng: "Chairman",
//     audio: reis,
//   },
//   {
//     tat: "Исәп",
//     rus: "Численность, счёт",
//     eng: "Number, account",
//     audio: isep,
//   },
//   {
//     tat: "Шигырь",
//     rus: "Стихотворение",
//     eng: "The poem",
//     audio: shiger,
//   },
//   {
//     tat: "Очрашу",
//     rus: "Встреча",
//     eng: "Meeting",
//     audio: ochrashu,
//   },
//   {
//     tat: "Очрак",
//     rus: "Случай",
//     eng: "Случай",
//     audio: ochrak,
//   },
//   {
//     tat: "Мәгариф",
//     rus: "Просвещение, образование",
//     eng: "Education",
//     audio: megerif,
//   },
//   {
//     tat: "Әни",
//     rus: "Мама, мать",
//     eng: "Mother",
//     audio: eni,
//   },
//   {
//     tat: "Үсеш",
//     rus: "Рост, прирост",
//     eng: "Development",
//     audio: useh,
//   },
//   {
//     tat: "Сорау",
//     rus: "Вопрос",
//     eng: "Question",
//     audio: sorau,
//   },
// ];
