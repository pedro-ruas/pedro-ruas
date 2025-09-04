import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { Languages } from "../types/translation.type";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./contexts";

function getLanguage(): Languages {
  const lang = navigator.language;

  return Object.values(Languages).includes(lang as Languages)
    ? (lang as Languages)
    : Languages.EN_US;
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Languages>(getLanguage());
  const { i18n, t } = useTranslation();

  const handleLanguage = useCallback((lang: Languages) => {
    setLanguage(lang);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <LanguageContext value={{ language, changeLanguage: handleLanguage, t }}>
      {children}
    </LanguageContext>
  );
}
