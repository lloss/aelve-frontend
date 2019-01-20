import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './globalStyles';
import registerServiceWorker from './registerServiceWorker';
import App from './views/App';



ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
