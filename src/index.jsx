import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { actionLoadProducts } from './actionCreators';
import App from './components/App/App';

// Images
import './../src/assets/img/candies.jpg';
import './../src/assets/img/chocolates.jpg';
import './../src/assets/img/parties.jpg';

store.dispatch(actionLoadProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
