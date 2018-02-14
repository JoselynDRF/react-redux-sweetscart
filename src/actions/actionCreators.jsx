import axios from 'axios';
import * as types from './../constants/ActionTypes';

// Load products from service
const actionLoadProducts = () => (
  dispatch => (
    axios.get('http://localhost:3000/products')
      .then((response) => {
        dispatch({
          type: types.LOAD_PRODUCTS,
          products: response.data,
        });
      })
      .catch(error => console.log('GET PRODUCTS', error))
  )
);

// Open shopping cart
const actionOpenCart = stateCart => (
  {
    type: types.OPEN_CART,
    openCart: stateCart,
  }
);

// Add product to shopping cart
const actionAddToCart = product => (
  {
    type: types.ADD_TO_CART,
    product,
  }
);

// Remove product from shopping cart
const actionRemoveFromCart = product => (
  {
    type: types.REMOVE_FROM_CART,
    product,
  }
);

// Increate quantity of product
const actionIncreaseQuantity = product => (
  {
    type: types.INCREASE_QUANTITY,
    product,
  }
);

// Decrease quantity of product
const actionDecreaseQuantity = product => (
  {
    type: types.DECREASE_QUANTITY,
    product,
  }
);

// Change category selected
const actionChangeCategory = category => (
  {
    type: types.CHANGE_CATEGORY_SELECTED,
    category,
  }
);

export {
  actionLoadProducts,
  actionOpenCart,
  actionAddToCart,
  actionRemoveFromCart,
  actionIncreaseQuantity,
  actionDecreaseQuantity,
  actionChangeCategory,
};
