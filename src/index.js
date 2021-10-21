import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import './component/i18';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
// import HNavbar from './component/HNavbar';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
