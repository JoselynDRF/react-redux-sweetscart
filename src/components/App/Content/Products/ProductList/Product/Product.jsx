import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  product: PropTypes.shape().isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

const Product = ({ product, handleAddToCart }) => (
  <div key={product.id}>
    <img src={product.image} alt={product.name} height="100px" />
    <div>
      <span> {product.name} </span>
      <button
        onClick={() => handleAddToCart(product)}
        disabled={product.stock <= 0}
      >
        {product.price}€
      </button>
    </div>
  </div>
);

Product.propTypes = propTypes;
export default Product;
