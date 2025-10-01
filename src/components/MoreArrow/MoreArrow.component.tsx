import { useState, useRef, useCallback, useEffect } from "react";
import { usePageScroll } from "../../hooks/use-page-scroll.hook";
import "./MoreArrow.styles.scss";
import { getBEMClass } from "../../utils/get-bem-class.util";

const b = "MoreArrow";
const hideDuration = 3000;

function MoreArrow() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const hideRef = useRef<number>(null);

  const handleHideOnScroll = useCallback(() => {
    if (hideRef.current) {
      clearTimeout(hideRef.current);
    }

    setIsHidden(true);
  }, []);

  const { currentScroll } = usePageScroll({
    onScroll: handleHideOnScroll,
  });

  const handleClick = () => {
    const windowHeight = window.innerHeight;

    if (currentScroll < windowHeight) {
      window.scrollTo(0, windowHeight);
    } else if (currentScroll < 2 * windowHeight) {
      window.scrollTo(0, 2 * windowHeight);
    }

    setIsHidden(true);
  };

  useEffect(() => {
    if (hideRef.current) {
      clearTimeout(hideRef.current);
    }

    hideRef.current = setTimeout(() => {
      if (currentScroll < 2 * window.innerHeight) {
        setIsHidden(false);
      }
    }, hideDuration);
  }, [currentScroll]);

  return (
    <button
      className={getBEMClass({
        b,
        m: { isHidden },
      })}
      onClick={handleClick}
    >
      <div className={getBEMClass({ b, e: "Arrow" })} />
    </button>
  );
}

export default MoreArrow;
