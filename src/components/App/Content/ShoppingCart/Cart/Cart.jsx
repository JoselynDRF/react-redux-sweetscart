import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleOpenCart: PropTypes.func.isRequired,
};

const Cart = props => (
  <div className="container">
    <div className="mb-3">
      <span className="title-cart"> MY ORDER </span>
    </div>
    {
      props.cart.length === 0 ?
        <div>
          <span className="msg-empty-cart"> Your cart is empty! </span>
          <div className="mt-4">
            <button className="btn button-back" onClick={() => props.handleOpenCart(false)}> BACK </button>
          </div>
        </div>
      :
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
                props.cart.map(product => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} className="product-img" />
                      <span> {product.name} </span>
                    </td>
                    <td>
                      <span
                        onClick={() => props.decreaseQuantity(product)}
                        role="presentation"
                        onKeyDown={() => {}}
                      >
                        <i className="fas fa-minus icons-cart" />
                      </span>
                      <span> {product.quantity} </span>
                      <span
                        onClick={() => props.increaseQuantity(product)}
                        role="presentation"
                        onKeyDown={() => {}}
                      >
                        <i className="fas fa-plus icons-cart" />
                      </span>
                    </td>
                    <td><span> {product.price}€ each </span></td>
                    <td><span> {product.price * product.quantity}€ </span></td>
                    <td>
                      <span
                        onClick={() => props.removeFromCart(product)}
                        role="presentation"
                        onKeyDown={() => {}}
                      >
                        <i className="fas fa-trash-alt icon-delete" />
                      </span>
                    </td>
                  </tr>
                ))
                }
            </tbody>
          </table>

          <div className="table-foot text-right">
            <span className="mr-3"> ORDER TOTAL: </span>
            <span> {props.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}€ </span>
          </div>

          <div className="d-flex justify-content-between">
            <div className="p-3 text-left">
              <button className="btn button-back" onClick={() => props.handleOpenCart(false)}> BACK </button>
            </div>

            <div className="p-3 text-right">
              <button className="btn button-checkout"> CHECKOUT </button>
            </div>
          </div>
        </div>
      }
  </div>
);

Cart.propTypes = propTypes;
export default Cart;
