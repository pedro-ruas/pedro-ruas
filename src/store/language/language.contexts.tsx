import { createContext } from "react";
import { Languages } from "../../types/translation.type";
import type { Callback } from "../../types/callback.type";
import type { TFunction } from "i18next";

interface LanguageContext {
  language: Languages;
  changeLanguage: Callback;
  t: TFunction;
}

export const LanguageContext = createContext<LanguageContext>({
  language: Languages.EN_US,
  changeLanguage: () => {},
  t: () => {},
} as LanguageContext);
