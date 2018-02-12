import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  actionRemoveFromCart,
  actionIncreaseQuantity,
  actionDecreaseQuantity,
  actionOpenCart,
} from './../../../../actionCreators';
import './shoppingCart.scss';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

const ShoppingCart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, handleOpenCart}) => ( // eslint-disable-line
  <div className="container">
    <div className="mb-3">
      <span className="title-cart"> MY ORDER </span>
    </div>
    {
      cart.length === 0 ?
        <div>
          <span className="msg-empty-cart"> Your cart is empty! </span>
          <div className="mt-4">
            <button className="btn button-checkout" onClick={() => handleOpenCart(false)}> BACK </button>
          </div>
        </div> :
        <div>
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
                      <img src={product.image} alt={product.name} className="product-img" />
                      <span> {product.name} </span>
                    </td>
                    <td>
                      <span
                        onClick={() => decreaseQuantity(product)}
                        role="presentation"
                        onKeyDown={() => {}}
                      >
                        <i className="fas icon-cart fa-minus" />
                      </span>
                      <span> {product.quantity} </span>
                      <span
                        onClick={() => increaseQuantity(product)}
                        role="presentation"
                        onKeyDown={() => {}}
                      >
                        <i className="fas icon-cart fa-plus" />
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
                        <i className="fas icon-cart fa-trash-alt button-delete" />
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
          <div className="d-flex justify-content-between">
            <div className="p-3 text-left">
              <button className="btn button-checkout" onClick={() => handleOpenCart(false)}> BACK </button>
            </div>
            <div className="p-3 text-right">
              <button className="btn button-checkout"> CHECKOUT </button>
            </div>
          </div>
        </div>
      }
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
    decreaseQuantity(product) {
      dispatch(actionDecreaseQuantity(product));
    },
    handleOpenCart(stateCart) {
      dispatch(actionOpenCart(stateCart));
    },
  }
);

ShoppingCart.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
