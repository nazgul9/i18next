
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense } from 'react';
import ReactDOM from 'react-dom';
// import AppFun from "./AppFun";
import i18 from "i18next";
import {useTranslation} from "react-i18next";



function App() {
  const changeLanguage = (lg) => {
    i18.changeLanguage(lg)
  }
  const { t } = useTranslation();


  // const count = 5;

  return (
    <>
      <h2>{t('Welcome to React')}</h2>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('ru')}>ru</button>
    </>
  )
}

export default App

