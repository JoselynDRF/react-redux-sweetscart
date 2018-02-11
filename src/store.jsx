import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Products reducer
const products = (state = [], action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return action.products;
  }
  return state;
};

// Cart reducer
const cart = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    return state.concat(action.product);
  }

  return state;
};

export default createStore(combineReducers({ products, cart }), applyMiddleware(thunk));
