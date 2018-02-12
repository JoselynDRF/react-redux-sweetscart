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
  <div className="container">
    <table className="table text-center borderless">
      <thead>
        <tr>
          <th> ITEM </th>
          <th> QUANTITY </th>
          <th> UNIT PRICE </th>
          <th> ITEM TOTAL </th>
          <th> &nbsp; </th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} height="50px" />
                <span> {product.name} </span>
              </td>
              <td>
                <span
                  onClick={() => decreaseQuantity(product)}
                  role="presentation"
                  onKeyDown={() => {}}
                >
                  <i className="fas fa-minus" />
                </span>
                <span> {product.quantity} </span>
                <span
                  onClick={() => increaseQuantity(product)}
                  role="presentation"
                  onKeyDown={() => {}}
                >
                  <i className="fas fa-plus" />
                </span>
              </td>
              <td><span> {product.price}€ each </span></td>
              <td><span> {product.price * product.quantity}€ </span></td>
              <td>
                <span
                  onClick={() => removeFromCart(product)}
                  role="presentation"
                  onKeyDown={() => {}}
                >
                  <i className="fas fa-trash-alt button-delete" />
                </span>
              </td>
            </tr>
          ))
          }
      </tbody>
    </table>
    <div className="table-foot text-right">
      <span className="mr-3"> ORDER TOTAL: </span>
      <span> {cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}€ </span>
    </div>
    <div className="p-3 text-right">
      <button className="btn button-checkout"> CHECKOUT </button>
    </div>
  </div>
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
