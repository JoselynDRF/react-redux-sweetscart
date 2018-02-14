import React from 'react';
import PropTypes from 'prop-types';
import imgLogo from './../../../../src/assets/img/logo.png';
import './header.scss';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleOpenCart: PropTypes.func.isRequired,
};

const Header = ({ cart, handleOpenCart }) => (
  <header className="header-container sticky-top">
    <div className="d-flex justify-content-between">
      <div>
        <img src={imgLogo} alt="Logo" />
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
        className="icon-show-cart"
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

Header.propTypes = propTypes;
export default Header;
