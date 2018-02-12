import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

const propTypes = {
  product: PropTypes.shape().isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

const Product = ({ product, handleAddToCart, handleRemoveFromCart }) => (
  <div key={product.id} className="product-container">
    <img src={product.image} alt={product.name} />
    <div className="mt-3">
      <div className="col">
        <p> {product.name} </p>
        <p className="price"> {product.price}€ </p>
      </div>
      { (product.quantity === 0) ?
        <button
          onClick={() => handleAddToCart(product)}
          className="btn btn-block button-add"
          disabled={product.stock <= 0}
        >
          Add to Cart
        </button>
        :
        <button
          onClick={() => handleRemoveFromCart(product)}
          className="btn btn-block button-add"
        >
          Remove
        </button>
      }
    </div>
  </div>
);

Product.propTypes = propTypes;
export default Product;
