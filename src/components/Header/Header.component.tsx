import "./Header.style.scss";
import { getBEMClass } from "../../utils/get-bem-class.util";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector.component";
import { pageBlocks } from "../../data/page-blocks.data";
import { use, useCallback, useRef, useState } from "react";
import { ModalsContext } from "../../store/modals/modals.context";
import { getCurrentPageBlock } from "../../utils/get-current-page-block.util";
import { usePageScroll } from "../../hooks/use-page-scroll.hook";

const b = "Header";
const hideDuration = 2500;

function Header() {
  const { t } = useTranslation();
  const { toggleSidebar } = use(ModalsContext);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const hideRef = useRef<number>(null);

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
    <header
      id="header"
      className={getBEMClass({
        b,
        m: { isHidden: isHidden && currentScroll !== 0 },
      })}
    >
      <div className={getBEMClass({ b, e: "Wrapper" })}>
        <img
          src="/src/assets/logo.svg"
          className={getBEMClass({ b, e: "Logo" })}
        />
        <nav className={getBEMClass({ b, e: "Nav" })}>
          {pageBlocks.map((block) => (
            <a
              href={`#${block}`}
              key={block}
              className={getBEMClass({
                b,
                e: "NavItem",
                m: {
                  isSelected: getCurrentPageBlock(currentScroll) === block,
                },
              })}
            >
              {t(`header.${block}`)}
            </a>
          ))}
        </nav>
        <div className={getBEMClass({ b, e: "Actions" })}>
          <LanguageSelector />

          <div
            className={getBEMClass({ b, e: "Menu" })}
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
