import aridim from '../../sounds/phrases/aridim.mp3';
import belki from '../../sounds/phrases/belki.mp3';
import berni_tugel from '../../sounds/phrases/berni_tugel.mp3';
import bik_zur_rahmat from '../../sounds/phrases/bik_zur_rahmat.mp3';
import borchulmagiz from '../../sounds/phrases/borchulmagiz.mp3';
import bu_azatnin_atise from '../../sounds/phrases/bu_azatnin_atise.mp3';
import bu_kem from '../../sounds/phrases/bu_kem.mp3';
import bu_nerse from '../../sounds/phrases/bu_nerse.mp3';
import bu_turistlar_amerikadan from '../../sounds/phrases/bu_turistlar_amerikadan.mp3';
import e_sez_kem from '../../sounds/phrases/e_sez_kem.mp3';
import eide from '../../sounds/phrases/eide.mp3';
import eide_ashybyz from '../../sounds/phrases/eide_ashybyz.mp3';
import eide_kittek from '../../sounds/phrases/eide_kittek.mp3';
import elbette from '../../sounds/phrases/elbette.mp3';
import gafu_itegez from '../../sounds/phrases/gafu_itegez.mp3';
import haerle_kich from '../../sounds/phrases/haerle_kich.mp3';
import haerle_kon from '../../sounds/phrases/haerle_kon.mp3';
import hallaren_nichek from '../../sounds/phrases/hallaren_nichek.mp3';
import hazer_nishlik from '../../sounds/phrases/hazer_nishlik.mp3';
import hichshiksez from '../../sounds/phrases/hichshiksez.mp3';
import hush from '../../sounds/phrases/hush.mp3';
import isanmesez from '../../sounds/phrases/isanmesez.mp3';
import kaefem_uk from '../../sounds/phrases/kaefem_uk.mp3';
import kaia_barabiz from '../../sounds/phrases/kaia_barabiz.mp3';
import kile_alasinmi from '../../sounds/phrases/kile_alasinmi.mp3';
import kyskasi from '../../sounds/phrases/kyskasi.mp3';
import matur_kyz from '../../sounds/phrases/matur_kyz.mp3';
import minemche from '../../sounds/phrases/minemche.mp3';
import minem_isemem_alsu from '../../sounds/phrases/minem_isemem_alsu.mp3';
import minem_telefon_kaida from '../../sounds/phrases/minem_telefon_kaida.mp3';
import min_bik_shat from '../../sounds/phrases/min_bik_shat.mp3';
import min_tatarcha_soileshem from '../../sounds/phrases/min_tatarcha_soileshem.mp3';
import mina_apelsin_kirek from '../../sounds/phrases/mina_apelsin_kirek.mp3';
import ni_hel from '../../sounds/phrases/ni_hel.mp3';
import rahim_itegez from '../../sounds/phrases/rahim_itegez.mp3';
import rahmat from '../../sounds/phrases/rahmat.mp3';
import salam from '../../sounds/phrases/salam.mp3';
import salam_ait from '../../sounds/phrases/salam_ait.mp3';
import sau_buligiz from '../../sounds/phrases/sau_buligiz.mp3';
import saubuligiz from '../../sounds/phrases/saubuligiz.mp3';
import sezge_de_rehmet from '../../sounds/phrases/sezge_de_rehmet.mp3';
import shulaimi from '../../sounds/phrases/shulaimi.mp3';
import sin_nishlisen from '../../sounds/phrases/sin_nishlisen.mp3';
import sinzes_kaida from '../../sounds/phrases/sinzes_kaida.mp3';
import zinhar from '../../sounds/phrases/zinhar.mp3';

export const phrases = [
    {tat: 'Сәлам!', rus: 'Привет!', audio: salam},
    {tat: 'Хәерле көн!', rus: 'Добрый день!', audio: haerle_kon},
    {tat: 'Ни хәл?', rus: 'Как дела?', audio: ni_hel},
    {tat: 'Исәнме(сез)!', rus: 'Здравствуй(те)!', audio: isanmesez},
    {tat: 'Хуш!', rus: 'Пока!', audio: hush},
    {tat: 'Сау булыгыз!', rus: 'До свидания!', audio: sau_buligiz},
    {tat: 'Сәлам әйт!', rus: 'Передавай привет!', audio: salam_ait},
    {tat: 'Рәхмәт!', rus: 'Спасибо!', audio: rahmat},
    {tat: 'Зинһар!', rus: 'Пожалуйста!', audio: zinhar},
    {tat: 'Берни түгел!', rus: 'Ничего не стоит!', audio: berni_tugel},
    {tat: 'Борчылмагыз', rus: 'Не беспокойтесь', audio: borchulmagiz},
    {tat: 'Әлбәттә', rus: 'Конечно, разумеется', audio: elbette},
    {tat: 'Әйдә!', rus: 'Давай!', audio: eide},
    {tat: 'Минемчә', rus: 'По-моему', audio: minemche},
    {tat: 'Бәлки', rus: 'Возможно', audio: belki},
    {tat: 'Һичшиксез!', rus: 'Несомненно', audio: hichshiksez},
    {tat: 'Кыскасы', rus: 'Короче', audio: kyskasi},
    {tat: 'Син (сез) кайда?', rus: 'Где ты (вы)?', audio: sinzes_kaida},
    {tat: 'Кая барабыз?', rus: 'Куда пойдём?', audio: kaia_barabiz},
    {tat: 'Хәзер нишлик?', rus: 'Что сейчас будем делать?', audio: hazer_nishlik},
    {tat: 'Ә сез кем?', rus: 'А кто вы?', audio: e_sez_kem},
    {tat: 'Шулаймы?', rus: 'Это так?', audio: shulaimi},
    {tat: 'Килә аласыңмы?', rus: 'Можешь прийти?', audio: kile_alasinmi},
    {tat: 'Мин бик шат!', rus: 'Я очень рад!', audio: min_bik_shat},
    {tat: 'Кәефем юк', rus: 'Нет настроения', audio: kaefem_uk},
    {tat: 'Арыдым', rus: 'Я устал(а)', audio: aridim},
    {tat: 'Бу туристлар Америкадан', rus: 'Эти туристы из Америки', audio: bu_turistlar_amerikadan},
    {tat: 'Хәерле кич', rus: 'Добрый вечер', audio: haerle_kich},
    {tat: 'Минем исемем Алсу', rus: 'Меня зовут Алсу', audio: minem_isemem_alsu},
    {tat: 'Бу Азатның әтисе', rus: 'Это папа Азата', audio: bu_azatnin_atise},
    {tat: 'Бик зур рәхмәт', rus: 'Большое спасибо', audio: bik_zur_rahmat},
    {tat: 'Сезгә дә рәхмәт', rus: 'Вам тоже спасибо', audio: sezge_de_rehmet},
    {tat: 'Хәлләрең ничек?', rus: 'Как дела?', audio: hallaren_nichek},
    {tat: 'Гафу итегез', rus: 'Извините', audio: gafu_itegez},
    {tat: 'Мин татарча сөйләшәм', rus: 'Я говорю по-татарски', audio: min_tatarcha_soileshem},
    {tat: 'Сау булыгыз', rus: 'До свидания', audio: sau_buligiz},
    {tat: 'Бу нәрсә?', rus: 'Что это?', audio: bu_nerse},
    {tat: 'Бу кем?', rus: 'Кто это?', audio: bu_kem},
    {tat: 'Матур кыз', rus: 'Красивая девочка', audio: matur_kyz},
    {tat: 'Син нишлисең?', rus: 'Что ты делаешь?', audio: sin_nishlisen},
    {tat: 'Минем телефон кайда?', rus: 'Где мой телефон', audio: minem_telefon_kaida},
    {tat: 'Әйдә ашыйбыз', rus: 'Давай покушаем', audio: eide_ashybyz},
    {tat: 'Әйдә киттек', rus: 'Давай пошли', audio: eide_kittek},
    {tat: 'Рәхим итегез', rus: 'Добро пожаловать', audio: rahim_itegez},
    {tat: 'Миңа апельсин кирәк', rus: 'Мне нужен апельсин', audio: mina_apelsin_kirek},
    // {tat: 'Татар теле', rus: 'Татарский язык', audio: tatar},
]