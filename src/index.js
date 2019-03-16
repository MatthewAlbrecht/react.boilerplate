import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import { Provider } from 'react-redux';
import configureStore from 'store';

import App from 'components/App/App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
