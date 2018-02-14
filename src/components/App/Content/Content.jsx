import React from 'react';
import PropTypes from 'prop-types';
import CartContainer from './../../../containers/CartContainer';
import ProductsContainer from '../../../containers/ProductsContainer';
import imgBanner from './../../../../src/assets/img/candy-banner.png';

const propTypes = {
  openCart: PropTypes.bool.isRequired,
};

const Content = ({ openCart }) => (
  <div>
    <img src={imgBanner} alt="Banner" className="img-fluid mb-4" />
    { (openCart) ? <CartContainer /> : <ProductsContainer /> }
  </div>
);

Content.propTypes = propTypes;
export default Content;
