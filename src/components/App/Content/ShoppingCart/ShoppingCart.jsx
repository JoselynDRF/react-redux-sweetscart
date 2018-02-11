import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionRemoveFromCart } from './../../../../actionCreators';
import './shoppingCart.scss';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const ShoppingCart = ({ cart, removeFromCart }) => (
  <table className="cart-container">
    <tbody>
      {
        cart.map(product => (
          <tr key={product.id}>
            <td> {product.name} </td>
            <td> {product.price} </td>
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
          Total: {cart.reduce((sum, product) => sum + product.price, 0)}€
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
  }
);

ShoppingCart.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
