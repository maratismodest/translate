import React, {useState} from "react";
const test = {
    // Aa - Aa
    // Ää - Әә
    // Bb - Бб
    // Cc - Чч
    // Dd - Дд
    // Ee - Ее
    // Ff - Фф
    // Gg - Ғғ, Гг
    // Hh - Хх, Һһ
    // İi - Ии
    // Jj - Жж, Ж, ж,
    // Kk - Ққ Кк
    // Ll - Лл
    // Mm - Мм
    // Nn - Нн
    // ñ - ң
    // Oo - Oo
    // Öö - Өө
    // Pp - Пп
    // Rr - Рр
    // Ss - Сс
    // Tt - Tт
    // Uu - Уу
    // Üü - Үү
    // Ww - Вв Уу
    // Zz - Зз
    // Şş - Шш
    // Yy - Йй
    // Iı - Ыы
}
const translate = [
    {tat: 'A', lat: 'Ä'},
    {tat: 'a', lat: 'ä'},
    {tat: 'Б', lat: 'B'},
    {tat: 'б', lat: 'b'},
    {tat: 'В', lat: 'V'},
    {tat: 'в', lat: 'v'},
    {tat: 'Г', lat: 'G'},
    {tat: 'г', lat: 'g'},
    {tat: 'Д', lat: 'D'},
    {tat: 'д', lat: 'd'},
    {tat: 'Е', lat: 'E'},
    {tat: 'е', lat: 'e'},
    {tat: 'Ж', lat: 'J'},
    {tat: 'ж', lat: 'j'},
    {tat: 'З', lat: 'Z'},
    {tat: 'з', lat: 'z'},
    {tat: 'И', lat: 'I'},
    {tat: 'и', lat: 'i'},
    {tat: 'Й', lat: 'Y'},
    {tat: 'й', lat: 'y'},
    {tat: 'К', lat: 'K'},
    {tat: 'к', lat: 'k'},
    {tat: 'Л', lat: 'L'},
    {tat: 'л', lat: 'l'},
    {tat: 'М', lat: 'M'},
    {tat: 'м', lat: 'm'},
    {tat: 'Н', lat: 'N'},
    {tat: 'н', lat: 'n'},
    {tat: 'О', lat: 'O'},
    {tat: 'о', lat: 'o'},
    {tat: 'П', lat: 'P'},
    {tat: 'п', lat: 'p'},
    {tat: 'Р', lat: 'R'},
    {tat: 'р', lat: 'r'},
    {tat: 'С', lat: 'S'},
    {tat: 'с', lat: 's'},
    {tat: 'Т', lat: 'T'},
    {tat: 'т', lat: 't'},
    {tat: 'У', lat: 'U'},
    {tat: 'у', lat: 'u'},
    {tat: 'Ф', lat: 'F'},
    {tat: 'ф', lat: 'f'},
    {tat: 'Х', lat: 'H'},
    {tat: 'х', lat: 'h'},
    {tat: 'Ц', lat: 'Ts'},
    {tat: 'ц', lat: 'ts'},
    {tat: 'Ч', lat: 'C'},
    {tat: 'ч', lat: 'c'},
    {tat: 'Ш', lat: 'Ş'},
    {tat: 'ш', lat: 'ş'},
    {tat: 'Ы', lat: 'I'},
    {tat: 'ы', lat: 'ı'},
    {tat: 'Э', lat: 'E'},
    {tat: 'э', lat: 'e'},
    {tat: 'Ю', lat: 'Iu'},
    {tat: 'ю', lat: 'iu'},
    {tat: 'Я', lat: 'Ia'},
    {tat: 'я', lat: 'ia'},
    {tat: 'Ә', lat: 'Ä'},
    {tat: 'ә', lat: 'ä'},
    {tat: 'Ө', lat: 'Ö'},
    {tat: 'ө', lat: 'ö'},
    {tat: 'ң', lat: 'ñ'},
    {tat: 'Җ', lat: 'J'},
    {tat: 'җ', lat: 'j'},
]


const Latin = () => {
    // console.log("latin")
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')

    const handleFirst = (e)=>{
        const income = e.target.value;
        console.log(income)
        let result = '';

        for (let char of income) {
            const getLetter = translate.find(latin => latin.tat === char)
            const letter = getLetter ? getLetter.lat : char
            console.log("letter",letter)
            result = result + letter
        }

        console.log("result",result)

        // const res = arrayOfStrings.map((item)=>{
        //     const letter = translate.find(latin => latin.tat === item)
        //     console.log("letter",letter)
        //     return letter
        // })
        // console.log("res",res)


        setFirst(e.target.value)
        setSecond(result)

    }
    const handleSecond = (e)=>{
        setSecond(e.target.value)
    }
    return (<div>
        <input value={first} onChange={handleFirst}/>
        <input value={second} onChange={handleSecond} />
    </div>)
}

export default Latin