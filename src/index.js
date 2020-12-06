import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/fontiran.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getDirection} from '../src/localization/index';


document.getElementsByTagName('body')[0].setAttribute('dir',getDirection());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
