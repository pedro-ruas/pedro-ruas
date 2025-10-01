import { use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./LanguageSelector.style.scss";
import { Languages } from "../../types/translation.type";
import { LanguageContext } from "../../store/language/language.contexts";
import { getBEMClass } from "../../utils/get-bem-class.util";
import type { Callback } from "../../types/callback.type";

const b = "Language";

const languageOptions: Record<Languages, string> = {
  [Languages.EN_US]: "english",
  [Languages.ES_ES]: "español",
  [Languages.PT_BR]: "português",
};

export function LanguageOption({
  language,
  onSelect,
}: {
  language: Languages;
  onSelect?: Callback;
}) {
  const { changeLanguage, language: currentLanguage } = use(LanguageContext);

  const handleSelectLanguage = useCallback(() => {
    if (onSelect) {
      onSelect(language);
    }
    changeLanguage(language);
  }, [onSelect, changeLanguage, language]);

  const isSelected = useMemo(
    () => currentLanguage === language,
    [currentLanguage, language]
  );

  return (
    <div
      onClick={handleSelectLanguage}
      className={getBEMClass({ b, e: "Option", m: { isSelected } })}
    >
      <img
        className={getBEMClass({ b, e: "OptionIcon" })}
        src={`/src/assets/flags/${language}.svg`}
      />
      <span className={getBEMClass({ b, e: "OptionLabel" })}>
        {languageOptions[language]}
      </span>
    </div>
  );
}

function LanguageSelector() {
  const { language } = use(LanguageContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeOutRef = useRef<number>(null);

  const handleButtonClick = () => {
    setIsOpen((o) => !o);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleHover = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      timeOutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className={getBEMClass({ b })}>
      <button
        className={getBEMClass({ b, e: "Button", m: { [language]: true } })}
        onClick={handleButtonClick}
      >
          {languageOptions[language]}
      </button>
      <div
        className={getBEMClass({ b, e: "OptionsContainer", m: { isOpen } })}
        onMouseLeave={handleClose}
        onMouseEnter={handleHover}
      >
        <div className={getBEMClass({ b, e: "OptionsHolder" })}>
          {Object.values(Languages).map((lang) => (
            <LanguageOption key={lang} language={lang} onSelect={handleClose} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
