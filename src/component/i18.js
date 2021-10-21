
import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const tky={
  "башкы":"башкы",
  "О нас":"биз ({{count}})тууралуу",
  "Наши курсы":"курстар жонундо",
  "IT компания":"биздин компания",
  " Новости": "жанылыктар",
  "Фотогалерея":"суроттор",

}
const tru={
  "главный":"главный", 
   "О нас":"О ({{count}})нас",
   "Наши курсы":"Наши курсы",
   "IT компания":"IT компания",
   "Новости":"Новости",
   "Фотогалерея":"Фотогалерея"

}


i18n
  .use(initReactI18next) 
  .init({
    debug: true,

    resources: {
      ky: {
        translation: tky
          },
      ru: {
        translation: tru
        }
      },

       lng: 'ru', // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;