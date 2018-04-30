import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './redux/store';
import App from './components/App';

import './js/fontawesome-all';
import './sass/index.scss';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// if (__DEV__) {
//   module.hot.accept();
// }
