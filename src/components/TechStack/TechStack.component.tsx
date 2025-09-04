import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { techStack } from "../../types/tech-stack.type";
import { getBEMClass } from "../../utils/getBEMClass.util";
import "./TechStack.style.scss";

interface Props {
  startIndex?: number;
  reverse?: boolean;
  interactive?: boolean;
  limit?: number;
}

const b = "TechStack";
const animationDuration = 1;
const animationStep = animationDuration / 1000;

function TechStack({
  startIndex = 0,
  reverse = false,
  interactive = true,
  limit = 0,
}: Props) {
  const [position, setPosition] = useState<number>(0);
  const animationRef = useRef<number | null>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const getAnimationTranslation = useCallback(
    (nextStep: number) => {
      if (!interactive || !stackRef.current) return;

      return `translateX(${
        reverse ? -stackRef.current.scrollWidth / 2 + nextStep : -nextStep
      }px)`;
    },
    [reverse, interactive]
  );

  const handleAnimation = useCallback(() => {
    if (!interactive || !stackRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const stackWidth = stackRef.current.scrollWidth;
    const halfWidth = stackWidth / 2;

    const animate = () => {
      setPosition((p) => {
        const nextStep = p + (animationStep / animationDuration) * halfWidth;
        const duration = nextStep / stackWidth;

        return duration >= 0.5 ? 0 : nextStep;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  }, [interactive]);

  const handleHover = useCallback(() => {
    if (!interactive) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, [interactive]);

  const stack = useMemo(() => {
    const stackArray = Object.entries(techStack);

    const count = stackArray.length;

    const s = stackArray.slice(
      startIndex,
      limit > 0 ? startIndex + limit : undefined
    );

    if (s.length < count) {
      s.push(...stackArray.slice(0, count - s.length));
    }

    return interactive ? [...s, ...s] : s;
  }, [startIndex, limit, interactive]);

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  return (
    <div
      className={getBEMClass({ b, m: { reverse, silent: !interactive } })}
      style={{ transform: getAnimationTranslation(position) }}
      onMouseLeave={handleAnimation}
      ref={stackRef}
    >
      {stack.map(([key, { name, url, icon }], i) => (
        <div
          key={`${key}_${i}`}
          className={getBEMClass({ b, e: "Wrapper" })}
          onMouseEnter={handleHover}
        >
          <img
            src={icon}
            className={getBEMClass({ b, e: "Icon", m: { [key]: true } })}
          />
          {url ? (
            <a
              href={url}
              target="_blank"
              className={getBEMClass({ b, e: "Name" })}
            >
              {name}
            </a>
          ) : (
            <span className={getBEMClass({ b, e: "Name" })}>{name}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default TechStack;
