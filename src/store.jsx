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
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.filter(product => product.id !== action.product.id);
  }

  return state;
};

// Current category reducer
const categorySelected = (state = {}, action) => {
  if (action.type === 'CHANGE_CATEGORY_SELECTED') {
    return action.category;
  }
  return state;
};

export default createStore(combineReducers({ products, cart, categorySelected }), applyMiddleware(thunk));
