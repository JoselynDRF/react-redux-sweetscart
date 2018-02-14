import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from './Cart/Cart';
import {
  actionRemoveFromCart, actionIncreaseQuantity, actionDecreaseQuantity, actionOpenCart,
} from './../../../../actionCreators';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleOpenCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

const CartContainer = props => (
  <Cart
    cart={props.cart}
    handleOpenCart={props.handleOpenCart}
    removeFromCart={props.removeFromCart}
    increaseQuantity={props.increaseQuantity}
    decreaseQuantity={props.decreaseQuantity}
  />
);

const mapStateToProps = state => (
  {
    cart: state.cart,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleOpenCart(stateCart) {
      dispatch(actionOpenCart(stateCart));
    },
    removeFromCart(product) {
      dispatch(actionRemoveFromCart(product));
    },
    increaseQuantity(product) {
      dispatch(actionIncreaseQuantity(product));
    },
    decreaseQuantity(product) {
      dispatch(actionDecreaseQuantity(product));
    },
  }
);

CartContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
