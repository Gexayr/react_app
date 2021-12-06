import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppContainer} from "./components/App/AppContainer";

ReactDOM.render(
  <React.StrictMode>
      <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
