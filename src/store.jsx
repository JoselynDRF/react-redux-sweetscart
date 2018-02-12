import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Products reducer
const products = (state = [], action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return action.products;
  } else if (action.type === 'ADD_TO_CART') {
    return state.map((index) => {
      const product = index;
      if (product.id === action.product.id) {
        product.quantity = 1;
      } return product;
    });
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.map((index) => {
      const product = index;
      if (product.id === action.product.id) {
        product.quantity = 0;
      } return product;
    });
  }
  return state;
};

// Cart reducer
const cart = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    action.product.quantity = 1;
    return state.concat(action.product);
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.filter(product => product.id !== action.product.id);
  } else if (action.type === 'INCREASE_QUANTITY') {
    return state.map((index) => {
      const product = index;
      if (product.id === action.product.id) {
        product.quantity += 1;
      } return product;
    });
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
