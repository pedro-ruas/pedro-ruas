export enum Languages {
  EN_US = "en-US",
  PT_BR = "pt-BR",
  ES_ES = "es-ES",
}

type TranslationObj = {
  [key: string]: string | TranslationObj;
};

export type Translation = Record<Languages, TranslationObj> & {
  groupKey: string;
};
