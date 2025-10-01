import { useState, useRef, useCallback } from "react";
import { usePageScroll } from "../../hooks/use-page-scroll.hook";
import "./ScrollTop.styles.scss";
import { getBEMClass } from "../../utils/get-bem-class.util";
import { useTranslation } from "react-i18next";

const b = "ScrollTop";
const hideDuration = 2500;

function ScrollTop() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const hideRef = useRef<number>(null);
  const { t } = useTranslation();

  const handleHideOnScroll = useCallback(() => {
    if (hideRef.current) {
      clearTimeout(hideRef.current);
    }

    setIsHidden(true);
  }, []);

  const handleShowScrollEnd = useCallback(() => {
    if (hideRef.current) {
      clearTimeout(hideRef.current);
    }

    hideRef.current = setTimeout(() => setIsHidden(false), hideDuration);
  }, []);

  const { currentScroll } = usePageScroll({
    onScroll: handleHideOnScroll,
    onScrollEnd: handleShowScrollEnd,
  });

  return (
    <button
      className={getBEMClass({
        b,
        m: { isHidden: isHidden || currentScroll === 0 },
      })}
      onClick={() => {
        window.scrollTo(0, 0);
        setIsHidden(true);
      }}
    >
      <span className={getBEMClass({ b, e: "Text" })}>{t("menu.back")}</span>
      <div className={getBEMClass({ b, e: "Arrow" })} />
    </button>
  );
}

export default ScrollTop;
