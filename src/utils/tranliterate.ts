export const transliterate = (text: string) => {
  const arr = text.split("");

  const getLetter = (char: string) =>
    translate.find((item) => item.tat == char);

  const res = arr.map((item, index) => {
    if (getLetter(item)) {
      if (
        (item === "К" || item === "к" || item === "Г" || item === "г") &&
        (arr[index + 1] === "а" ||
          arr[index + 1] === "о" ||
          arr[index + 1] === "у")
      ) {
        return getLetter(item)?.strong;
      }
      return getLetter(item)?.lat;
    }
    return item;
  });

  return res.join("");
};

interface TranslateInterface {
  tat: string;
  lat: string;
  strong?: string;
}

const translate: TranslateInterface[] = [
  { tat: "А", lat: "A" },
  { tat: "а", lat: "a" },
  { tat: "Б", lat: "B" },
  { tat: "б", lat: "b" },
  { tat: "В", lat: "V" },
  { tat: "в", lat: "v" },
  { tat: "Г", lat: "G", strong: "Ğ" },
  { tat: "г", lat: "g", strong: "ğ" },
  { tat: "Д", lat: "D" },
  { tat: "д", lat: "d" },
  { tat: "Е", lat: "E" },
  { tat: "е", lat: "e" },
  { tat: "Ж", lat: "J" },
  { tat: "ж", lat: "j" },
  { tat: "З", lat: "Z" },
  { tat: "з", lat: "z" },
  { tat: "И", lat: "I" },
  { tat: "и", lat: "i" },
  { tat: "Й", lat: "Y" },
  { tat: "й", lat: "y" },
  { tat: "К", lat: "K", strong: "Q" },
  { tat: "к", lat: "k", strong: "q" },
  { tat: "Л", lat: "L" },
  { tat: "л", lat: "l" },
  { tat: "М", lat: "M" },
  { tat: "м", lat: "m" },
  { tat: "Н", lat: "N" },
  { tat: "н", lat: "n" },
  { tat: "О", lat: "O" },
  { tat: "о", lat: "o" },
  { tat: "П", lat: "P" },
  { tat: "п", lat: "p" },
  { tat: "Р", lat: "R" },
  { tat: "р", lat: "r" },
  { tat: "С", lat: "S" },
  { tat: "с", lat: "s" },
  { tat: "Т", lat: "T" },
  { tat: "т", lat: "t" },
  { tat: "У", lat: "U" },
  { tat: "у", lat: "u" },
  { tat: "Ф", lat: "F" },
  { tat: "ф", lat: "f" },
  { tat: "Х", lat: "H" },
  { tat: "х", lat: "h" },
  { tat: "Ц", lat: "Ts" },
  { tat: "ц", lat: "ts" },
  { tat: "Ч", lat: "C" },
  { tat: "ч", lat: "c" },
  { tat: "Ш", lat: "Ş" },
  { tat: "ш", lat: "ş" },
  { tat: "Ы", lat: "I" },
  { tat: "ы", lat: "ı" },
  { tat: "Э", lat: "E" },
  { tat: "э", lat: "e" },
  { tat: "Ю", lat: "Iu" },
  { tat: "ю", lat: "iu" },
  { tat: "Я", lat: "Ia" },
  { tat: "я", lat: "ia" },
  { tat: "Ә", lat: "Ä" },
  { tat: "ә", lat: "ä" },
  { tat: "Ө", lat: "Ö" },
  { tat: "ө", lat: "ö" },
  { tat: "ң", lat: "ñ" },
  { tat: "Җ", lat: "J" },
  { tat: "җ", lat: "j" },
  { tat: "ь", lat: "" },
];
