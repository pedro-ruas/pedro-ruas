import { getBEMClass } from "../../utils/getBEMClass.util";
import "./About.style.scss";
import { useTranslation } from "react-i18next";

const b = "About";

const groups: string[] = ["code", "devops", "communication"];

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={getBEMClass({ b })}>
      <div className={getBEMClass({ b, e: "Container" })}>
        <div className={getBEMClass({ b, e: "Content" })}>
          <div className={getBEMClass({ b, e: "Background" })} />
          <div className={getBEMClass({ b, e: "Background" })} />
          <div className={getBEMClass({ b, e: "Texts" })}>
            <h3 className={getBEMClass({ b, e: "Title" })}>
              {t("about.title")}
            </h3>
            <article className={getBEMClass({ b, e: "Text" })}>
              <p className={getBEMClass({ b, e: "Paragraph" })}>
                {t("about.first_p")}
              </p>
              <p className={getBEMClass({ b, e: "Paragraph" })}>
                {t("about.second_p")}
              </p>
              <p className={getBEMClass({ b, e: "Paragraph" })}>
                {t("about.third_p")}
              </p>
            </article>

            <div className={getBEMClass({ b, e: "Stack" })}>
              {groups.map((title) => (
                <article
                  className={getBEMClass({ b, e: "StackGroup" })}
                  key={title}
                >
                  <span className={getBEMClass({ b, e: "StackTitle" })}>
                    {t(`about.${title}`)}
                  </span>
                  <p className={getBEMClass({ b, e: "StackText" })}>
                    {t(`about.${title}_text`)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <img
            src="/src/assets/about-picture.jpg"
            alt="Pedro picture"
            className={getBEMClass({ b, e: "Picture" })}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
