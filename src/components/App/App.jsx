import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'normalize-css';
import './app.scss';
import Header from './Header/Header';
import Content from './Content/Content';
import { actionOpenCart } from './../../actionCreators';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  openCart: PropTypes.bool.isRequired,
  handleOpenCart: PropTypes.func.isRequired,
};

const App = ({ cart, openCart, handleOpenCart }) => (
  <div>
    <Header handleOpenCart={handleOpenCart} cart={cart} />
    <Content openCart={openCart} />
  </div>
);

const mapStateToProps = state => (
  {
    cart: state.cart,
    openCart: state.openCart,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleOpenCart(stateCart) {
      dispatch(actionOpenCart(stateCart));
    },
  }
);

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
