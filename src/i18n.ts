import i18next, { type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { Languages, type Translation } from "./types/translation.type";
import { headerTranslation } from "./components/Header/Header.i18n";
import { heroTranslation } from "./components/Hero/Hero.i18n";
import { aboutTranslation } from "./components/About/About.i18n";
import { experienceTranslation } from "./components/Experience/Experience.i18n";
import { contactTranslation } from "./components/Contact/Contact.i18n";

function getResources(...translations: Translation[]): Resource {
  const initialResources = Object.values(Languages).reduce(
    (r, l) => ({
      ...r,
      [l]: {
        translation: {},
      },
    }),
    {}
  );

  return translations.reduce<Resource>(
    (resources, { groupKey, ...translation }) => {
      Object.values(Languages).forEach((lang) => {
        resources[lang].translation = {
          ...(resources[lang].translation as Record<string, string>),
          [groupKey]: translation[lang],
        };
      });

      return resources;
    },
    initialResources
  );
}

const resources = getResources(
  headerTranslation,
  heroTranslation,
  aboutTranslation,
  experienceTranslation,
  contactTranslation
);

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources,
});

export default i18next;
