import ReactDOM from "react-dom";

import { use } from "react";
import "./Menu.style.scss";
import { ModalsContext } from "../../store/modals/modals.context";
import { getBEMClass } from "../../utils/get-bem-class.util";
import { pageBlocks } from "../../data/page-blocks.data";
import { Languages } from "../../types/translation.type";
import { LanguageOption } from "../LanguageSelector/LanguageSelector.component";
import { useTranslation } from "react-i18next";
import { usePageScroll } from "../../hooks/use-page-scroll.hook";
import { getCurrentPageBlock } from "../../utils/get-current-page-block.util";

const b = "Menu";

function Menu() {
  const { sidebarOpen: isOpen, toggleSidebar } = use(ModalsContext);
  const { currentScroll } = usePageScroll();
  const { t } = useTranslation();

  return ReactDOM.createPortal(
    <aside className={getBEMClass({ b, m: { isOpen } })}>
      <div className={getBEMClass({ b, e: "Header" })}>
        <button
          className={getBEMClass({ b, e: "Close" })}
          onClick={toggleSidebar}
        />
      </div>
      <div className={getBEMClass({ b, e: "Content" })}>
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
              onClick={toggleSidebar}
            >
              {t(`header.${block}`)}
            </a>
          ))}
        </nav>
        <a
          href="#header"
          onClick={() => {
            window.scrollTo(0, 0);
            toggleSidebar();
          }}
          className={getBEMClass({ b, e: "TopLink" })}
        >
          {t("menu.back")}
        </a>
        <div className={getBEMClass({ b, e: "Languages" })}>
          {Object.values(Languages).map((lang) => (
            <LanguageOption
              key={lang}
              language={lang}
              onSelect={toggleSidebar}
            />
          ))}
        </div>
      </div>
    </aside>,
    document.body
  );
}

export default Menu;
