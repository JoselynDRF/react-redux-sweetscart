import * as types from './../constants/ActionTypes';

// Products reducer
const products = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return action.products;

    case types.ADD_TO_CART:
      return state.map((index) => {
        const product = index;
        if (product.id === action.product.id) {
          product.quantity = 1;
        } return product;
      });

    case types.REMOVE_FROM_CART:
      return state.map((index) => {
        const product = index;
        if (product.id === action.product.id) {
          product.quantity = 0;
        } return product;
      });

    default:
      return state;
  }
};

// Current category reducer
const categorySelected = (state = {}, action) => {
  if (action.type === types.CHANGE_CATEGORY_SELECTED) {
    return action.category;
  }
  return state;
};

export {
  products,
  categorySelected,
};
