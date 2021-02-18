import sound from './sounds/sound.mp3';
import wrong from './sounds/wrong.mp3';
import kitap from './sounds/words/kitap.mp3';
import alma from './sounds/words/alma.mp3';
import el from './sounds/words/el.mp3';
import keshe from './sounds/words/keshe.mp3';
import avyl from './sounds/words/avyl.mp3';
import bala from './sounds/words/bala.mp3';
import esh from './sounds/words/esh.mp3';
import bash from './sounds/words/bash.mp3';
import vakyt from './sounds/words/vakyt.mp3';
import suz from './sounds/words/suz.mp3';
import kon from './sounds/words/kon.mp3';

export const initialQuestions = [
    {
        id: 1,
        questionText: 'Китап',
        correct: 1,
        options: [
            {id: 1, text: "Книга"},
            {id: 2, text: "Рубашка"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: kitap
    },
    {
        id: 2,
        questionText: 'Алма',
        correct: 1,
        options: [
            {id: 3, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 1, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: alma
    },
    {
        id: 3,
        questionText: 'Ел',
        correct: 1,
        options: [
            {id: 2, text: "Книга"},
            {id: 1, text: "Год"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: el
    },
    {
        id: 4,
        questionText: 'Кеше',
        correct: 1,
        options: [
            {id: 4, text: "Книга"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Человек"},
        ],
        audio: keshe
    },
    {
        id: 5,
        questionText: 'Эш',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Работа"},
        ],
        audio: esh
    },
    {
        id: 6,
        questionText: 'Көн',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "День"},
        ],
        audio: kon
    },
    {
        id: 7,
        questionText: 'Авыл',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Деревня"},
        ],
        audio: avyl
    },
    {
        id: 8,
        questionText: 'Бала',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Ребенок"},
        ],
        audio: bala
    },
    {
        id: 9,
        questionText: 'Вакыт',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Время"},
        ],
        audio: vakyt
    },
    {
        id: 10,
        questionText: 'Баш',
        correct: 1,
        options: [
            {id: 4, text: "Рубашка"},
            {id: 2, text: "Город"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Голова"},
        ],
        audio: bash
    },
    {
        id: 11,
        questionText: 'Шәһәр',
        correct: 1,
        options: [
            {id: 4, text: "Голова"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 1, text: "Город"},
        ],
        audio: suz
    },
    {
        id: 12,
        questionText: 'Урын',
        correct: 1,
        options: [
            {id: 1, text: "Место"},
            {id: 2, text: "Голова"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 13,
        questionText: 'Хезмәт',
        correct: 1,
        options: [
            {id: 1, text: "Труд"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },

    {
        id: 14,
        questionText: 'Мәктәп',
        correct: 1,
        options: [
            {id: 1, text: "Школа"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 15,
        questionText: 'Юл',
        correct: 1,
        options: [
            {id: 1, text: "Дорога"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 16,
        questionText: 'Ара',
        correct: 1,
        options: [
            {id: 1, text: "Расстояние"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 17,
        questionText: 'Тел',
        correct: 1,
        options: [
            {id: 1, text: "Язык"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 18,
        questionText: 'Кыз',
        correct: 1,
        options: [
            {id: 1, text: "Девочка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 19,
        questionText: 'Яшь',
        correct: 1,
        options: [
            {id: 1, text: "Год/Возраст"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 20,
        questionText: 'Җир',
        correct: 1,
        options: [
            {id: 1, text: "Земля"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 21,
        questionText: 'Йорт',
        correct: 1,
        options: [
            {id: 1, text: "Дом/Здание"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },


    {
        id: 22,
        questionText: 'Дөнья',
        correct: 1,
        options: [
            {id: 1, text: "мир"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },

    {
        id: 23,
        questionText: 'Хезмәт',
        correct: 1,
        options: [
            {id: 1, text: "Сторона"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },

    {
        id: 24,
        questionText: 'Дәүләт',
        correct: 1,
        options: [
            {id: 1, text: "Государство"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 25,
        questionText: 'Чара',
        correct: 1,
        options: [
            {id: 1, text: "Мера/средство/мероприятие"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 26,
        questionText: 'Ил',
        correct: 1,
        options: [
            {id: 1, text: "Страна"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 27,
        questionText: 'Тормыш',
        correct: 1,
        options: [
            {id: 1, text: "Жизнь"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 28,
        questionText: 'Хәл',
        correct: 1,
        options: [
            {id: 1, text: "Состояние/положение/сила"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 29,
        questionText: 'Җитәкче',
        correct: 1,
        options: [
            {id: 1, text: "руководитель"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 30,
        questionText: 'Акча',
        correct: 1,
        options: [
            {id: 1, text: "Деньги"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 31,
        questionText: 'Барлык',
        correct: 1,
        options: [
            {id: 1, text: "наличие/существование"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 32,
        questionText: 'Күз',
        correct: 1,
        options: [
            {id: 1, text: "Глаз"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },

    {
        id: 33,
        questionText: 'Сум',
        correct: 1,
        options: [
            {id: 1, text: "Рубль"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },

    {
        id: 34,
        questionText: 'Туган',
        correct: 1,
        options: [
            {id: 1, text: "Родственник"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 35,
        questionText: 'Кул',
        correct: 1,
        options: [
            {id: 1, text: "Рука"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 36,
        questionText: 'Укучы',
        correct: 1,
        options: [
            {id: 1, text: "Ученик"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 37,
        questionText: 'Хуҗалык',
        correct: 1,
        options: [
            {id: 1, text: "Хозяйство"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 38,
        questionText: 'Мәсьәлә',
        correct: 1,
        options: [
            {id: 1, text: "вопрос, проблема, задача"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 39,
        questionText: 'Өлкә',
        correct: 1,
        options: [
            {id: 1, text: "Область"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 40,
        questionText: 'Күңел',
        correct: 1,
        options: [
            {id: 1, text: "Душа/Настроение"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 41,
        questionText: 'Гаилә',
        correct: 1,
        options: [
            {id: 1, text: "Семья"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 42,
        questionText: 'Үзәк',
        correct: 1,
        options: [
            {id: 1, text: "Центр"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 43,
        questionText: 'Исем',
        correct: 1,
        options: [
            {id: 1, text: "Имя/название/наименование"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 44,
        questionText: 'Нәтиҗә',
        correct: 1,
        options: [
            {id: 1, text: "Результат/итог"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 45,
        questionText: 'Бәйрәм',
        correct: 1,
        options: [
            {id: 1, text: "Праздник"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 46,
        questionText: 'Ул',
        correct: 1,
        options: [
            {id: 1, text: "Он/она/оно"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 47,
        questionText: 'Егет',
        correct: 1,
        options: [
            {id: 1, text: "Парень"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 48,
        questionText: 'Су',
        correct: 1,
        options: [
            {id: 1, text: "Вода"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 49,
        questionText: 'Ярдәм',
        correct: 1,
        options: [
            {id: 1, text: "Помощь"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 50,
        questionText: 'Сан',
        correct: 1,
        options: [
            {id: 1, text: "Число"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 51,
        questionText: 'Белем',
        correct: 1,
        options: [
            {id: 1, text: "Знание"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 52,
        questionText: 'Китап',
        correct: 1,
        options: [
            {id: 1, text: "Книга"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 53,
        questionText: 'Ай',
        correct: 1,
        options: [
            {id: 1, text: "Месяц/луна"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 54,
        questionText: 'Оешма',
        correct: 1,
        options: [
            {id: 1, text: "Организация"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 55,
        questionText: 'Бәйрәм',
        correct: 1,
        options: [
            {id: 1, text: "Праздник"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 56,
        questionText: 'Бүлек',
        correct: 1,
        options: [
            {id: 1, text: "Часть/Отдел"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 57,
        questionText: 'Ис',
        correct: 1,
        options: [
            {id: 1, text: "Запах"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 58,
        questionText: 'Укытучы',
        correct: 1,
        options: [
            {id: 1, text: "Преподаватель"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 59,
        questionText: 'Иҗат',
        correct: 1,
        options: [
            {id: 1, text: "Творчество"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 60,
        questionText: 'Мәдәният',
        correct: 1,
        options: [
            {id: 1, text: "Культура"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    }
    ,
    {
        id: 61,
        questionText: 'Эч',
        correct: 1,
        options: [
            {id: 1, text: "Живот/нутро"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 62,
        questionText: 'Мәгълүмат',
        correct: 1,
        options: [
            {id: 1, text: "Информация"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 63,
        questionText: 'Чыгыш',
        correct: 1,
        options: [
            {id: 1, text: "Выступление"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 64,
        questionText: 'Өй',
        correct: 1,
        options: [
            {id: 1, text: "Дом"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 65,
        questionText: 'Фикер',
        correct: 1,
        options: [
            {id: 1, text: "Мысль"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 66,
        questionText: 'Тарих',
        correct: 1,
        options: [
            {id: 1, text: "История"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 67,
        questionText: 'Өлеш',
        correct: 1,
        options: [
            {id: 1, text: "Часть/доля"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 68,
        questionText: 'Хезмәткәр',
        correct: 1,
        options: [
            {id: 1, text: "Сотрудник"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 69,
        questionText: 'Рәвеш',
        correct: 1,
        options: [
            {id: 1, text: "Вид/форма"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 70,
        questionText: 'Әсәр',
        correct: 1,
        options: [
            {id: 1, text: "Произведение"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 71,
        questionText: 'Дәрәҗә',
        correct: 1,
        options: [
            {id: 1, text: "Звание/степень/авторитет"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 72,
        questionText: 'Җыр',
        correct: 1,
        options: [
            {id: 1, text: "Песня"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 73,
        questionText: 'Мөмкинлек',
        correct: 1,
        options: [
            {id: 1, text: "Возможность"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 74,
        questionText: 'Идарә',
        correct: 1,
        options: [
            {id: 1, text: "Управление"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 75,
        questionText: 'Көч',
        correct: 1,
        options: [
            {id: 1, text: "Сила"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 76,
        questionText: 'Дин',
        correct: 1,
        options: [
            {id: 1, text: "Религия/вера"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 77,
        questionText: 'Хатын',
        correct: 1,
        options: [
            {id: 1, text: "Женщина/жена"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 78,
        questionText: 'Фән',
        correct: 1,
        options: [
            {id: 1, text: "Наука"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 79,
        questionText: 'Сугыш',
        correct: 1,
        options: [
            {id: 1, text: "Война"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 80,
        questionText: 'Максат',
        correct: 1,
        options: [
            {id: 1, text: "Цель"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    ,
    {
        id: 81,
        questionText: 'Урам',
        correct: 1,
        options: [
            {id: 1, text: "Улица"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: suz
    },

    {
        id: 82,
        questionText: 'Шигырь',
        correct: 1,
        options: [
            {id: 1, text: "Стихотворение"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Город"},
        ],
        audio: sound
    },
    {
        id: 83,
        questionText: 'Очрашу',
        correct: 1,
        options: [
            {id: 1, text: "Встреча"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 84,
        questionText: 'Очрак',
        correct: 1,
        options: [
            {id: 1, text: "Случай"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 85,
        questionText: 'Әни',
        correct: 1,
        options: [
            {id: 1, text: "Мама"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    },
    {
        id: 86,
        questionText: 'Сорау',
        correct: 1,
        options: [
            {id: 1, text: "Вопрос"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: sound
    }

]

export const initialPhrases = [
    {
        id: 1,
        questionText: 'Китап Кайда?',
        correct: 1,
        options: [
            {id: 1, text: "Где Книга?"},
            {id: 2, text: "Почему Книга?"},
            {id: 3, text: "Где деньги, Лебовски?"},
            {id: 4, text: "Где Кино?"},
        ],
        audio: kitap
    },
    {
        id: 2,
        questionText: 'Алма Юк',
        correct: 1,
        options: [
            {id: 1, text: "Яблока Нет"},
            {id: 2, text: "Белого нет"},
            {id: 3, text: "Красное яблоко"},
            {id: 4, text: "Нет, не бери"},
        ],
        audio: alma
    },
    {
        id: 3,
        questionText: 'Минем исемем Марат',
        correct: 1,
        options: [
            {id: 1, text: "Меня зовут Марат"},
            {id: 2, text: "Меня зовут Кхан"},
            {id: 3, text: "Позови меня в ночи"},
            {id: 4, text: "Марата так зовут"},
        ],
        audio: alma
    }]