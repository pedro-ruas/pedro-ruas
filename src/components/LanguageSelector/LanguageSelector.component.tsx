import { use } from "react";
import "./LanguageSelector.style.scss";
import { Languages } from "../../types/translation.type";
import { LanguageContext } from "../../store/contexts";

function LanguageSelector() {
  const { changeLanguage } = use(LanguageContext);

  return (
    <div>
      {Object.values(Languages).map((language) => (
        <button
          key={language}
          className={""}
          onClick={() => changeLanguage(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
