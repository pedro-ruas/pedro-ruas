import { useTranslation } from "react-i18next";
import { getBEMClass } from "../../utils/get-bem-class.util";
import "./Contact.style.scss";
import { contacts } from "../../data/contacts.data";

const b = "Contact";

function Contact() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className={getBEMClass({ b })}>
      <div className={getBEMClass({ b, e: "Container" })}>
        <h3 className={getBEMClass({ b, e: "Title" })}>{t("contact.title")}</h3>
        <div className={getBEMClass({ b, e: "Content" })}>
          <div className={getBEMClass({ b, e: "Links" })}>
            {contacts.map(({ text, url }) => (
              <a
                className={getBEMClass({ b, e: "Link" })}
                href={url}
                target="_blank"
                key={text}
              >
                {text}
              </a>
            ))}
          </div>
          <div className={getBEMClass({ b, e: "Texts" })}>
            <span className={getBEMClass({ b, e: "Intro" })}>
              {t("contact.intro")}
            </span>
            <span className={getBEMClass({ b, e: "Cta" })}>
              {t("contact.cta")}
            </span>
          </div>
        </div>
        <div className={getBEMClass({ b, e: "Bottom" })}>
          <span className={getBEMClass({ b, e: "BottomText" })}>
            {t("contact.bottom")}
          </span>
          <a
            className={getBEMClass({ b, e: "BottomLink" })}
            href="https://github.com/pedro-ruas/pedro-ruas/"
            target="_blank"
          >
            {t("contact.bottom_cta")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
