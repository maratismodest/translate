import suz from '../sounds/words/suz.mp3'
import bash from '../sounds/words/bash.mp3';
import vakyt from '../sounds/words/vakyt.mp3';
import halik from '../sounds/words/halik.mp3';
import bala from '../sounds/words/bala.mp3';
import aul from '../sounds/words/aul.mp3';
import kon from '../sounds/words/kon.mp3';
import esh from '../sounds/words/esh.mp3';
import keshe from '../sounds/words/keshe.mp3';
import salam from '../sounds/words/salam.mp3';
import shahar from '../sounds/words/shahar.mp3';
import uryn from '../sounds/words/uryn.mp3';
import hezmat from '../sounds/words/hezmat.mp3';
import mektep from '../sounds/words/mektep.mp3';
import iul from '../sounds/words/iul.mp3';
import ara from '../sounds/words/ara.mp3';
import tel from '../sounds/words/tel.mp3';
import kyz from '../sounds/words/kyz.mp3';
import yesh from '../sounds/words/yesh.mp3';
import zhir from '../sounds/words/zhir.mp3';
import yort from '../sounds/words/yort.mp3';
import donia from '../sounds/words/donia.mp3';
import iak from '../sounds/words/iak.mp3';
import deulet from '../sounds/words/deulet.mp3';
import chara from '../sounds/words/chara.mp3';
import il from '../sounds/words/il.mp3';
import tormosh from '../sounds/words/tormosh.mp3';
import hel from '../sounds/words/hel.mp3';
import zhitekche from '../sounds/words/zhitekche.mp3';
import akcha from '../sounds/words/akcha.mp3';
import barlyk from '../sounds/words/barlyk.mp3';
import kuz from '../sounds/words/kuz.mp3';
import sum from '../sounds/words/sum.mp3';
import tugan from '../sounds/words/tugan.mp3';
import kul from '../sounds/words/kul.mp3';
import ukuchy from '../sounds/words/ukuchy.mp3';
import huzhalyk from '../sounds/words/huzhalyk.mp3';
import mesele from '../sounds/words/mesele.mp3';
import olke from '../sounds/words/olke.mp3';
import kunel from '../sounds/words/kunel.mp3';
import gaile from '../sounds/words/gaile.mp3';
import uzek from '../sounds/words/uzek.mp3';
import isem from '../sounds/words/isem.mp3';
import netizhe from '../sounds/words/netizhe.mp3';
import beirem from '../sounds/words/beirem.mp3';
import ul from '../sounds/words/ul.mp3';
import eget from '../sounds/words/eget.mp3';
import su from '../sounds/words/su.mp3';
import yerdem from '../sounds/words/yerdem.mp3';
import san from '../sounds/words/san.mp3';
import belem from '../sounds/words/belem.mp3';
import kitap from '../sounds/words/kitap.mp3';
import ai from '../sounds/words/ai.mp3';
import oeshma from '../sounds/words/oeshma.mp3';
import is from '../sounds/words/is.mp3';
import ukutuchy from '../sounds/words/ukutuchy.mp3';
import izhat from '../sounds/words/izhat.mp3';
import medeniyet from '../sounds/words/medeniyet.mp3';
import ech from '../sounds/words/ech.mp3';
import meglumet from '../sounds/words/meglumet.mp3';
import chygysh from '../sounds/words/chygysh.mp3';
import oi from '../sounds/words/oi.mp3';
import fiker from '../sounds/words/fiker.mp3';
import tarih from '../sounds/words/tarih.mp3';
import olesh from '../sounds/words/olesh.mp3';
import hezmetker from '../sounds/words/hezmetker.mp3';
import revesh from '../sounds/words/revesh.mp3';
import eser from '../sounds/words/eser.mp3';
import derezhe from '../sounds/words/derezhe.mp3';
import zhyr from '../sounds/words/zhyr.mp3';
import momkinlek from '../sounds/words/momkinlek.mp3';
import vekil from '../sounds/words/vekil.mp3';
import idare from '../sounds/words/idare.mp3';
import koch from '../sounds/words/koch.mp3';
import din from '../sounds/words/din.mp3';
import hatyn from '../sounds/words/hatyn.mp3';
import fen from '../sounds/words/fen.mp3';
import moselman from '../sounds/words/moselman.mp3';
import chor from '../sounds/words/chor.mp3';
import gamel from '../sounds/words/gamel.mp3';
import urynbasar from '../sounds/words/urynbasar.mp3';
import taraf from '../sounds/words/taraf.mp3';
import mechet from '../sounds/words/mechet.mp3';
import sugysh from '../sounds/words/sugysh.mp3';
import maksat from '../sounds/words/maksat.mp3';
import uram from '../sounds/words/uram.mp3';
import reis from '../sounds/words/reis.mp3';
import isep from '../sounds/words/isep.mp3';
import shiger from '../sounds/words/shiger.mp3';
import ochrashu from '../sounds/words/ochrashu.mp3';
import ochrak from '../sounds/words/ochrak.mp3';
import megerif from '../sounds/words/megerif.mp3';
import eni from '../sounds/words/eni.mp3';
import useh from '../sounds/words/useh.mp3';
import sorau from '../sounds/words/sorau.mp3';


export interface WordsInterface {
    tat: string
    rus: string
    eng: string
    audio: any
}

export const words : Array<WordsInterface> = [
    {
        tat: "Сәлам",
        rus: "Привет",
        eng: "Hello",
        audio: salam,
    },
    {
        tat: "Кеше",
        rus: "Человек",
        eng: "Human",
        audio: keshe,
    },
    {
        tat: "Эш",
        rus: "Работа, занятие, труд",
        eng: "Work",
        audio: esh,
    },
    {
        tat: "Көн",
        rus: "День, сутки",
        eng: "Day",
        audio: kon,
    },
    {
        tat: "Авыл",
        rus: "Деревня",
        eng: "Village",
        audio: aul,
    },
    {
        tat: "Бала",
        rus: "Ребёнок",
        eng: "Child",
        audio: bala,
    },
    {
        tat: "Халык",
        rus: "Народ, люди",
        eng: "Nation",
        audio: halik,
    },
    {
        tat: "Вакыт",
        rus: "Время, пора, период",
        eng: "Time",
        audio: vakyt,
    },
    {
        tat: "Баш",
        rus: "Голова, ум",
        eng: "Head",
        audio: bash,
    },
    {
        tat: "Сүз",
        rus: "Слово",
        eng: "Word",
        audio: suz,
    },
    {
        tat: "Шәһәр",
        rus: "Город",
        eng: "City",
        audio: shahar,
    },
    {
        tat: "Урын",
        rus: "Место",
        eng: "Place",
        audio: uryn,
    },
    {
        tat: "Хезмәт",
        rus: "Служба, работа",
        eng: "Labor",
        audio: hezmat,
    },
    {
        tat: "Мәктәп",
        rus: "Школа",
        eng: "School",
        audio: mektep,
    },
    {
        tat: "Юл",
        rus: "Дорога, путь",
        eng: "Way",
        audio: iul,
    },
    {
        tat: "Ара",
        rus: "Промежуток, расстояние",
        eng: "Distance",
        audio: ara,
    },
    {
        tat: "Тел",
        rus: "Язык",
        eng: "Language",
        audio: tel,
    },
    {
        tat: "Кыз",
        rus: "Девочка/девушка, дочь",
        eng: "Girl",
        audio: kyz,
    },
    {
        tat: "Яшь",
        rus: "Год, возраст",
        eng: "Year",
        audio: yesh,
    },
    {
        tat: "Җир",
        rus: "Земля",
        eng: "Earth",
        audio: zhir,
    },
    {
        tat: "Йорт",
        rus: "Дом, здание",
        eng: "House",
        audio: yort,
    },
    {
        tat: "Дөнья",
        rus: "Мир",
        eng: "World",
        audio: donia,
    },
    {
        tat: "Як",
        rus: "Сторона, край",
        eng: "Side",
        audio: iak,
    },
    {
        tat: "Дәүләт",
        rus: "Государство",
        eng: "State",
        audio: deulet,
    },
    {
        tat: "Чара",
        rus: "Средство, мероприятие",
        eng: "Event",
        audio: chara,
    },
    {
        tat: "Ил",
        rus: "Страна",
        eng: "Country",
        audio: il,
    },
    {
        tat: "Тормыш",
        rus: "Жизнь, бытие",
        eng: "Life",
        audio: tormosh,
    },
    {
        tat: "Хәл",
        rus: "Состояние, сила",
        eng: "State",
        audio: hel,
    },
    {
        tat: "Җитәкче",
        rus: "Руководитель",
        eng: "Head, Leader",
        audio: zhitekche,
    },
    {
        tat: "Акча",
        rus: "Деньги",
        eng: "Money",
        audio: akcha,
    },
    {
        tat: "Барлык",
        rus: "Наличие, существование",
        eng: "Existence",
        audio: barlyk,
    },
    {
        tat: "Күз",
        rus: "Глаз",
        eng: "Eye",
        audio: kuz,
    },
    {
        tat: "Сум",
        rus: "Рубль",
        eng: "Ruble",
        audio: sum,
    },
    {
        tat: "Туган",
        rus: "Родственник, родной",
        eng: "Relative",
        audio: tugan,
    },
    {
        tat: "Кул",
        rus: "Рука",
        eng: "Arm",
        audio: kul,
    },
    {
        tat: "Укучы",
        rus: "Ученик, читатель",
        eng: "Student",
        audio: ukuchy,
    },
    {
        tat: "Хуҗалык",
        rus: "Хозяйство",
        eng: "Economy",
        audio: huzhalyk,
    },
    {
        tat: "Мәсьәлә",
        rus: "Вопрос, проблема",
        eng: "Question",
        audio: mesele,
    },
    {
        tat: "Өлкә",
        rus: "Область",
        eng: "Area",
        audio: olke,
    },
    {
        tat: "Күңел",
        rus: "Душа",
        eng: "Soul",
        audio: kunel,
    },
    {
        tat: "Гаилә",
        rus: "Семья",
        eng: "Family",
        audio: gaile,
    },
    {
        tat: "Үзәк",
        rus: "Центр",
        eng: "Centre",
        audio: uzek,
    },
    {
        tat: "Исем",
        rus: "Имя, название",
        eng: "Name",
        audio: isem,
    },
    {
        tat: "Нәтиҗә",
        rus: "Результат, итог",
        eng: "Result",
        audio: netizhe,
    },
    {
        tat: "Бәйрәм",
        rus: "Праздник",
        eng: "Holiday",
        audio: beirem,
    },
    {
        tat: "Ул",
        rus: "Он/она/оно, сын",
        eng: "he,she,it,son",
        audio: ul,
    },
    {
        tat: "Егет",
        rus: "Парень",
        eng: "Guy",
        audio: eget,
    },
    {
        tat: "Су",
        rus: "Вода",
        eng: "Water",
        audio: su,
    },
    {
        tat: "Ярдәм",
        rus: "Помощь, поддержка",
        eng: "Help",
        audio: yerdem,
    },
    {
        tat: "Сан",
        rus: "Число, количество",
        eng: "Number",
        audio: san,
    },
    {
        tat: "Белем",
        rus: "Знание",
        eng: "Knowledge",
        audio: belem,
    },
    {
        tat: "Китап",
        rus: "Книга",
        eng: "Book",
        audio: kitap,
    },
    {
        tat: "Ай",
        rus: "Луна, месяц",
        eng: "Moon/month",
        audio: ai,
    },
    {
        tat: "Оешма",
        rus: "Отдел, собрание",
        eng: "Department, meeting",
        audio: oeshma,
    },
    {
        tat: "Ис",
        rus: "Запах",
        eng: "Smell",
        audio: is,
    },
    {
        tat: "Укытучы",
        rus: "Учитель",
        eng: "Teacher",
        audio: ukutuchy,
    },
    {
        tat: "Иҗат",
        rus: "Творчество",
        eng: "Creation",
        audio: izhat,
    },
    {
        tat: "Мәдәният",
        rus: "Культура",
        eng: "Culture",
        audio: medeniyet,
    },
    {
        tat: "Эч",
        rus: "Живот",
        eng: "Belly",
        audio: ech,
    },
    {
        tat: "Мәгълүмат",
        rus: "Информация",
        eng: "Information",
        audio: meglumet,
    },
    {
        tat: "Чыгыш",
        rus: "Выступление",
        eng: "Performance",
        audio: chygysh,
    },
    {
        tat: "Өй",
        rus: "Дом",
        eng: "Home",
        audio: oi,
    },
    {
        tat: "Фикер",
        rus: "Мысль, идея",
        eng: "Thought, idea",
        audio: fiker,
    },
    {
        tat: "Тарих",
        rus: "История",
        eng: "History",
        audio: tarih,
    },
    {
        tat: "Өлеш",
        rus: "Часть, доля, порция",
        eng: "Part, share, portion",
        audio: olesh,
    },
    {
        tat: "Хезмәткәр",
        rus: "Сотрудник",
        eng: "Employee",
        audio: hezmetker,
    },
    {
        tat: "Рәвеш",
        rus: "Вид, образ, облик",
        eng: "Image",
        audio: revesh,
    },
    {
        tat: "Әсәр",
        rus: "Произведение",
        eng: "Composition",
        audio: eser,
    },
    {
        tat: "Дәрәҗә",
        rus: "Cтепень, уровень, авторитет",
        eng: "Level",
        audio: derezhe,
    },
    {
        tat: "Җыр",
        rus: "Песня",
        eng: "Song",
        audio: zhyr,
    },
    {
        tat: "Мөмкинлек",
        rus: "Возможность, вероятность",
        eng: "Possibility, probability",
        audio: momkinlek,
    },
    {
        tat: "Вәкил",
        rus: "Представитель",
        eng: "Representative",
        audio: vekil,
    },
    {
        tat: "Идарә",
        rus: "Управление",
        eng: "Management",
        audio: idare,
    },
    {
        tat: "Көч",
        rus: "Сила, могущество",
        eng: "Strength, power",
        audio: koch,
    },
    {
        tat: "Дин",
        rus: "Религия, вера",
        eng: "Religion, faith",
        audio: din,
    },
    {
        tat: "Хатын",
        rus: "Женщина, жена",
        eng: "Woman, wife",
        audio: hatyn,
    },
    {
        tat: "Фән",
        rus: "Наука",
        eng: "The science",
        audio: fen,
    },
    {
        tat: "Мөселман",
        rus: "Мусульманин",
        eng: "Muslim",
        audio: moselman,
    },
    {
        tat: "Чор",
        rus: "Период, этап, эпоха",
        eng: "Period",
        audio: chor,
    },
    {
        tat: "Гамәл",
        rus: "Действие",
        eng: "Action",
        audio: gamel,
    },
    {
        tat: "Урынбасар",
        rus: "Заместитель",
        eng: "Deputy",
        audio: urynbasar,
    },
    {
        tat: "Тараф",
        rus: "Сторона",
        eng: "Side",
        audio: taraf,
    },
    {
        tat: "Мәчет",
        rus: "Мечеть",
        eng: "Mosque",
        audio: mechet,
    },
    {
        tat: "Сугыш",
        rus: "Война",
        eng: "The War",
        audio: sugysh,
    },
    {
        tat: "Максат",
        rus: "Цель",
        eng: "Goal",
        audio: maksat,
    },
    {
        tat: "Урам",
        rus: "Улица",
        eng: "Street",
        audio: uram,
    },
    {
        tat: "Рәис",
        rus: "Председатель",
        eng: "Chairman",
        audio: reis,
    },
    {
        tat: "Исәп",
        rus: "Численность, счёт",
        eng: "Number, account",
        audio: isep,
    },
    {
        tat: "Шигырь",
        rus: "Стихотворение",
        eng: "The poem",
        audio: shiger,
    },
    {
        tat: "Очрашу",
        rus: "Встреча",
        eng: "Meeting",
        audio: ochrashu,
    },
    {
        tat: "Очрак",
        rus: "Случай",
        eng: "Случай",
        audio: ochrak,
    },
    {
        tat: "Мәгариф",
        rus: "Просвещение, образование",
        eng: "Education",
        audio: megerif,
    },
    {
        tat: "Әни",
        rus: "Мама, мать",
        eng: "Mother",
        audio: eni,
    },
    {
        tat: "Үсеш",
        rus: "Рост, прирост",
        eng: "Development",
        audio: useh,
    },
    {
        tat: "Сорау",
        rus: "Вопрос",
        eng: "Question",
        audio: sorau,
    }
]

