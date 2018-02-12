import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Products from './Products/Products';
import imgBanner from './../../../assets/img/candy-banner.jpg';

const propTypes = {
  openCart: PropTypes.bool.isRequired,
};

function Content({ openCart }) {
  if (openCart) {
    return (
      <div>
        <img src={imgBanner} alt="Banner" className="img-fluid mb-4" />
        <ShoppingCart />
      </div>
    );
  }
  return (
    <div>
      <img src={imgBanner} alt="Banner" className="img-fluid mb-4" />
      <Products />;
    </div>
  );
}

const mapStateToProps = state => (
  {
    openCart: state.openCart,
  }
);

Content.propTypes = propTypes;
export default connect(mapStateToProps)(Content);
