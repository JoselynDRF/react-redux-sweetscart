import axios from 'axios';

// Load products from service
const actionLoadProducts = () => (
  dispatch => (
    axios.get('http://localhost:3000/products')
      .then((response) => {
        dispatch({
          type: 'LOAD_PRODUCTS',
          products: response.data,
        });
      })
      .catch(error => console.log('GET PRODUCTS', error))
  )
);

// Add product to shopping cart
const actionAddToCart = product => (
  {
    type: 'ADD_TO_CART',
    product,
  }
);

// Remove product from shopping cart
const actionRemoveFromCart = product => (
  {
    type: 'REMOVE_FROM_CART',
    product,
  }
);

export { actionLoadProducts, actionAddToCart, actionRemoveFromCart };
