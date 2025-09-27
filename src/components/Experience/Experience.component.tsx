import { getBEMClass } from "../../utils/getBEMClass.util";
import { experiences, type ExperienceObj } from "./experiences";
import "./Experience.style.scss";
import { techStack } from "../../types/tech-stack.type";
import { use, useState } from "react";
import { LanguageContext } from "../../store/contexts";
import { useInView } from "../../hooks/use-in-view.hook";

const b = "Experience";

function Job({ experience }: { experience: ExperienceObj }) {
  const { t, language } = use(LanguageContext);
  const { viewWindowRef, isInView } = useInView();

  const formatter = new Intl.DateTimeFormat(language, {
    month: "short",
    year: "numeric",
  });

  const { key, title, company, highlightCount, startDate, endDate, stack } =
    experience;

  return (
    <div
      ref={viewWindowRef}
      className={getBEMClass({ b: "Job", parent: b, m: { Hidden: !isInView } })}
    >
      <article className={getBEMClass({ b: "Job", e: "Card" })}>
        <div className={getBEMClass({ b: "Job", e: "CardHeader" })}>
          <h3 className={getBEMClass({ b: "Job", e: "Title" })}>{t(title)}</h3>
          <h4 className={getBEMClass({ b: "Job", e: "Company" })}>{company}</h4>
          <div className={getBEMClass({ b: "Job", e: "Info" })}>
            <div className={getBEMClass({ b: "Job", e: "InfoItem" })}>
              {`${formatter.format(new Date(startDate))}${
                endDate ? " - " + formatter.format(new Date(endDate)) : ""
              }`}
            </div>
            <div className={getBEMClass({ b: "Job", e: "InfoItem" })}>
              {t("experience.location")}
            </div>
          </div>
          <span className={getBEMClass({ b: "Job", e: "Intro" })}>
            {t(`experience.${key}.intro`)}
          </span>
        </div>
        <div className={getBEMClass({ b: "Job", e: "Description" })}>
          <span className={getBEMClass({ b: "Job", e: "DescriptionTitle" })}>
            {t("experience.description")}
          </span>
          <ul className={getBEMClass({ b: "Job", e: "DescriptionList" })}>
            {new Array(highlightCount).fill(1).map((d, i) => (
              <li
                key={`${key}_h${i}`}
                className={getBEMClass({ b: "Job", e: "DescriptionItem" })}
              >
                {t(`experience.${key}.h_${d + i}`)}
              </li>
            ))}
          </ul>
        </div>
        {stack && (
          <div className={getBEMClass({ b: "Job", e: "CardFooter" })}>
            <span className={getBEMClass({ b: "Job", e: "FooterTitle" })}>
              {t("experience.footer")}
            </span>
            <div className={getBEMClass({ b: "Job", e: "Stack" })}>
              {stack.map((i) => (
                <div
                  key={i}
                  className={getBEMClass({ b: "Job", e: "StackItem" })}
                >
                  {techStack[i].name}
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

function Experience() {
  const { t } = use(LanguageContext);
  const [isReversed, setIsReversed] = useState<boolean>(true);

  const handleReverseOrder = () => {
    setIsReversed((r) => !r);
  };

  const renderedExperiences = isReversed
    ? [...experiences].reverse()
    : [...experiences];

  return (
    <section id="experience" className={getBEMClass({ b })}>
      <div className={getBEMClass({ b, e: "TitleWrapper" })}>
        <h3 className={getBEMClass({ b, e: "Title" })}>
          {t("experience.title")}
        </h3>
        <button
          className={getBEMClass({ b, e: "OrderButton" })}
          onClick={handleReverseOrder}
        >
          {t(!isReversed ? "experience.order" : "experience.orderReverse")}
        </button>
      </div>
      <div className={getBEMClass({ b, e: "Content" })}>
        <div className={getBEMClass({ b, e: "Timeline", m: { isReversed } })} />
        {renderedExperiences.map((experience) => (
          <Job key={experience.key} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
