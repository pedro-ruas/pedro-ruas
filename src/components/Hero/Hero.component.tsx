import "./Hero.style.scss";
import { getBEMClass } from "../../utils/get-bem-class.util";
import TechStack from "../TechStack/TechStack.component";
import { use, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../store/language/language.contexts";
import { Languages } from "../../types/translation.type";
import { techStack } from "../../types/tech-stack.type";

const b = "Hero";
const stackHeight = 107;
const stackGap = 0;

function generateStacks(count: number) {
  const limit = Object.keys(techStack).length;

  const getStart = (index: number) => {
    const l = (index + 2) ** 2;

    return l >= limit ? l % limit : l;
  };

  return new Array(count).fill(0).map((a, i) => ({
    startIndex: getStart(a + i),
    reverse: i % 2 == 1,
  }));
}

function Hero() {
  const { t, language } = use(LanguageContext);
  const heroRef = useRef<HTMLDivElement>(null);
  const [stacks, setStacks] = useState<
    { startIndex?: number; reverse?: boolean }[]
  >([]);

  useEffect(() => {
    if (heroRef.current) {
      setStacks(
        generateStacks(
          Math.ceil(heroRef.current.offsetHeight / (stackHeight + stackGap))
        )
      );
    }
  }, []);

  return (
    <section ref={heroRef} className={getBEMClass({ b })}>
      <div className={getBEMClass({ b, e: "Content" })}>
        <div className={getBEMClass({ b, e: "Intro" })}>
          <div className={getBEMClass({ b, e: "IntroWrapper" })}>
            <div className={getBEMClass({ b, e: "IntroBackground" })} />
            <h2 className={getBEMClass({ b, e: "Hello" })}>
              {t("hero.name.hello")}
            </h2>
            <h1 className={getBEMClass({ b, e: "Name" })}>{"Pedro Ruas"}</h1>
          </div>
        </div>
        <div className={getBEMClass({ b, e: "Picture" })}></div>
        <div
          className={getBEMClass({
            b,
            e: "Title",
            m: { reverse: language !== Languages.EN_US },
          })}
        >
          <div
            className={getBEMClass({
              b,
              e: "TitleWrapper",
              m: {
                higher: language === Languages.EN_US,
                lower: language !== Languages.EN_US,
              },
            })}
          >
            <h1
              className={getBEMClass({
                b,
                e: "TitleText",
              })}
            >
              Full Stack
            </h1>
          </div>
          <div
            className={getBEMClass({
              b,
              e: "TitleWrapper",
              m: {
                higher: language !== Languages.EN_US,
                lower: language === Languages.EN_US,
              },
            })}
          >
            <h1
              className={getBEMClass({
                b,
                e: "TitleText",
              })}
            >
              {t("hero.title.engineer")}
            </h1>
          </div>
        </div>
      </div>
      <div className={getBEMClass({ b, e: "Background" })}>
        {stacks.map((stack, index) => (
          <TechStack key={index} {...stack} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
