import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const ShoppingCart = ({ cart }) => (
  <table>
    <tbody>
      {
        cart.map(product => (
          <tr key={product.id}>
            <td> {product.name} </td>
            <td> {product.price} </td>
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

ShoppingCart.propTypes = propTypes;
export default connect(mapStateToProps)(ShoppingCart);
