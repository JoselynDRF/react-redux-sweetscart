import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionOpenCart } from './../../../actionCreators';
import './header.scss';

const propTypes = {
  handleOpenCart: PropTypes.func.isRequired,
};

function Header({ handleOpenCart }) {
  return (
    <header className="header-container sticky-top">
      <div className="d-flex justify-content-between">
        <span
          className="header-title"
          onClick={() => handleOpenCart(false)}
          role="presentation"
          onKeyDown={() => {}}
        >
          SweetsCart
        </span>
        <span
          className="icon-add-to-cart"
          onClick={() => handleOpenCart(true)}
          role="presentation"
          onKeyDown={() => {}}
        >
          <i className="fas fa-shopping-cart" />
        </span>
      </div>
    </header>
  );
}

const mapDispatchToProps = dispatch => (
  {
    handleOpenCart(stateCart) {
      dispatch(actionOpenCart(stateCart));
    },
  }
);


Header.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(Header);
