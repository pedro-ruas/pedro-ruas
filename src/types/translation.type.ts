export enum Languages {
  EN_US = "en",
  PT_BR = "pt",
  ES_ES = "es",
}

type TranslationObj = {
  [key: string]: string | TranslationObj;
};

export type Translation = Record<Languages, TranslationObj> & {
  groupKey: string;
};
