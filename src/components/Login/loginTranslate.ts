interface LanguageInterface {
  [name: string]: TranslationInterface;
}

interface TranslationInterface {
  enter: string;
}

export const translate: { [name: string]: LanguageInterface } = {
  eng: {
    translation: {
      enter: "Enter",
    },
  },
  lat: {
    translation: {
      enter: "Enter",
    },
  },
  tat: {
    translation: {
      enter: "Enter",
    },
  },
  rus: {
    translation: {
      enter: "Enter",
    },
  },
};
