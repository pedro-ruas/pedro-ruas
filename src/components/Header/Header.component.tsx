import "./Header.style.scss";
import { getBEMClass } from "../../utils/getBEMClass.util";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector.component";

const b = "Header";

function Header() {
  const { t } = useTranslation();

  return (
    <header
      className={getBEMClass({
        b,
      })}
    >
      <div className={getBEMClass({ b, e: "Wrapper" })}>
        <div className={getBEMClass({ b, e: "Logo" })}>Pedro Ruas</div>
        <nav className={getBEMClass({ b, e: "Nav" })}>
          <a href="#about" className={getBEMClass({ b, e: "NavItem" })}>
            {t("header.about")}
          </a>
          <a href="#experience" className={getBEMClass({ b, e: "NavItem" })}>
            {t("header.experience")}
          </a>
          <a href="#contact" className={getBEMClass({ b, e: "NavItem" })}>
            {t("header.contact")}
          </a>
        </nav>
        <div className={getBEMClass({ b, e: "Actions" })}>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

export default Header;
