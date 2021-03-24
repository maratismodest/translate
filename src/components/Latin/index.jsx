import React, {useState} from "react";

const translate = [
    {tat: 'a', lat: 'q'}
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
]
const Latin = () => {
    // console.log("latin")
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')

    const handleFirst = (e)=>{
        const income = e.target.value;
        console.log(income)

        var input = income;
        let output = ''

        console.log("input",input.length)

        for (var i = 0; i < input.length; i++){
            switch (input[i]) {
                case "Ә":
                   output=output + "Ä"
                    break;
                case "ә":
                    output=output + "ä"
                    break;
                case "5":
                    output=output + "q3"
                    break;
                default:
                    output=output + input[i]
            }
        };

        console.log("output", output)


        setFirst(e.target.value)
        setSecond(output)
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