import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionRemoveFromCart, actionIncreaseQuantity } from './../../../../actionCreators';
import './shoppingCart.scss';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
};

const ShoppingCart = ({ cart, removeFromCart, increaseQuantity }) => (
  <table className="cart-container">
    <tbody>
      {
        cart.map(product => (
          <tr key={product.id}>
            <td> {product.name} </td>
            <td> {product.price} </td>
            <td> Quantity: {product.quantity} </td>
            <td>
              <button onClick={() => increaseQuantity(product)}> Más </button>
            </td>
            <td>
              <button onClick={() => removeFromCart(product)}> Remove </button>
            </td>
          </tr>
        ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td>
          Total: {cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}€
        </td>
      </tr>
    </tfoot>
  </table>
);

const mapStateToProps = state => (
  {
    cart: state.cart,
  }
);

const mapDispatchToProps = dispatch => (
  {
    removeFromCart(product) {
      dispatch(actionRemoveFromCart(product));
    },
    increaseQuantity(product) {
      dispatch(actionIncreaseQuantity(product));
    },
  }
);

ShoppingCart.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
