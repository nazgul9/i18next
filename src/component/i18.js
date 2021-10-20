
import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// const translationEn = {"Welcome to React": "Welcome to React and react-i18next"}
// const translationRu = {"Welcome to React": "Добро пожаловать в React и react-i18next"}


i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    debug: true,

    resources: {
      en: {
        translation: {"Welcome to React": "Welcome to React and react-i18next"}
          },
      ru: {
        translation: {"Welcome to React": "Добро пожаловать в React и react-i18next"}
        }
      },

       lng: "ru", // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;