import * as types from './../constants/ActionTypes';

// Cart reducer
const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state.concat(action.product);

    case types.REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.product.id);

    case types.INCREASE_QUANTITY:
      return state.map((index) => {
        const product = index;
        if (product.id === action.product.id) {
          product.quantity += 1;
        } return product;
      });

    case types.DECREASE_QUANTITY:
      return state.map((index) => {
        const product = index;
        if (product.id === action.product.id) {
          product.quantity = (product.quantity > 1) ? product.quantity -= 1 : 1;
        } return product;
      });

    default:
      return state;
  }
};

// Open shopping cart
const openCart = (state = false, action) => {
  if (action.type === types.OPEN_CART) {
    return action.openCart;
  }
  return state;
};

export {
  cart,
  openCart,
};
