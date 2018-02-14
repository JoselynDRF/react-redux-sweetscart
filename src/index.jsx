import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { cart, openCart } from './reducers/cartReducer';
import { products, categorySelected } from './reducers/productsReducer';
import { actionLoadProducts } from './actions/actionCreators';
import App from './containers/App';

// Images
import './../src/assets/img/candies.jpg';
import './../src/assets/img/chocolates.jpg';
import './../src/assets/img/parties.jpg';
import './../src/assets/img/favicon.ico';

// Create store
const store = createStore(combineReducers({
  cart,
  openCart,
  products,
  categorySelected,
}), applyMiddleware(thunk));

store.dispatch(actionLoadProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
