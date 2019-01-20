import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyles } from './globalStyles';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
