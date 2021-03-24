import React, {useState} from "react";

const translate = [

    {tat: 'A', lat: 'Ä'},
    {tat: 'a', lat: 'ä'},
    {tat: 'Б', lat: 'B'},
    {tat: 'б', lat: 'b'},
    {tat: 'В', lat: '1'},
    {tat: 'в', lat: '1'},
    {tat: 'Г', lat: '1'},
    {tat: 'г', lat: '1'},
    {tat: 'Д', lat: '1'},
    {tat: 'д', lat: '1'},
    {tat: 'Е', lat: '1'},
    {tat: 'е', lat: '1'},
    {tat: 'Ж', lat: '1'},
    {tat: 'ж', lat: '1'},
    {tat: 'З', lat: '1'},
    {tat: 'з', lat: '1'},
    {tat: 'И', lat: '1'},
    {tat: 'и', lat: '1'},
    {tat: 'Й', lat: '1'},
    {tat: 'й', lat: '1'},
    {tat: 'К', lat: '1'},
    {tat: 'к', lat: '1'},
    {tat: 'Л', lat: '1'},
    {tat: 'л', lat: '1'},
    {tat: 'М', lat: '1'},
    {tat: 'м', lat: '1'},
    {tat: 'Н', lat: '1'},
    {tat: 'н', lat: '1'},
    {tat: 'О', lat: '1'},
    {tat: 'о', lat: '1'},
    {tat: 'П', lat: '1'},
    {tat: 'п', lat: '1'},
    {tat: 'Р', lat: '1'},
    {tat: 'р', lat: '1'},
    {tat: 'С', lat: '1'},
    {tat: 'с', lat: '1'},
    {tat: 'Т', lat: '1'},
    {tat: 'т', lat: '1'},
    {tat: 'У', lat: '1'},
    {tat: 'у', lat: '1'},
    {tat: 'Ф', lat: '1'},
    {tat: 'ф', lat: '1'},
    {tat: 'Х', lat: '1'},
    {tat: 'х', lat: '1'},
    {tat: 'Ц', lat: '1'},
    {tat: 'ц', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},
    {tat: '1', lat: '1'},

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