import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionOpenCart } from './../../../actionCreators';
import imgLogo from './../../../../src/assets/img/logo.png';
import './header.scss';

const propTypes = {
  handleOpenCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

function Header({ handleOpenCart, cart }) {
  return (
    <header className="header-container sticky-top">
      <div className="d-flex justify-content-between">
        <div>
          <img src={imgLogo} alt="Logo" className="img-logo" />
          <span
            className="header-title"
            onClick={() => handleOpenCart(false)}
            role="presentation"
            onKeyDown={() => {}}
          >
            SweetsCart
          </span>
        </div>
        <span
          className="icon-add-to-cart"
          onClick={() => handleOpenCart(true)}
          role="presentation"
          onKeyDown={() => {}}
        >
          <i className="fas fa-shopping-cart" />
          <span> {cart.length} </span>
        </span>
      </div>
    </header>
  );
}

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
  }
);


Header.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
