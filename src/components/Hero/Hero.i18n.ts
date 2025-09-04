import { Languages, type Translation } from "../../types/translation.type";

export const heroTranslation: Translation = {
  [Languages.EN_US]: {
    name: {
      hello: "Hello, I am"
    },
    title: {
      engineer: "engineer"
    }
  },
  [Languages.ES_ES]: {
    name: {
      hello: "Hola, me llamo"
    },
    title: {
      engineer: "ingeniero"
    }
  },
  [Languages.PT_BR]: {
    name: {
      hello: "Olá, sou"
    },
    title: {
      engineer: "engenheiro"
    }
  },
  groupKey: "hero",
};
