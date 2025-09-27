import { Languages, type Translation } from "../../types/translation.type";

export const contactTranslation: Translation = {
  [Languages.EN_US]: {
    title: "contact",
    intro: "got a project in mind?",
    cta: "Let's talk!",
    bottom:
      "This webpage was fully developed by myself using React + TypeScript + SCSS",
    bottom_cta: "see the code",
  },
  [Languages.ES_ES]: {
    title: "contactos",
    intro: "¿tienes alguna idea?",
    cta: "Vamos a hablar!",
    bottom:
      "Este sítio web fue desarrollado completamente por mí usando React + TypeScript + SCSS",
    bottom_cta: "ver el código",
  },
  [Languages.PT_BR]: {
    title: "contatos",
    intro: "algum projeto em mente?",
    cta: "Vamos conversar!",
    bottom:
      "Essa página foi desenvolvida exclusivamente por mim, utilizando React + TypeScript + SCSS",
    bottom_cta: "veja o código",
  },
  groupKey: "contact",
};
