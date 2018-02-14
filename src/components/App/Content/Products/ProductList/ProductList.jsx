import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product/Product';

const propTypes = {
  categorySelected: PropTypes.shape().isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const ProductList = (props) => {
  if (!props.categorySelected.id) {
    return (
      <div className="col-12 row">
        {
          props.products.map(product => (
            <div className="col-12 col-md-6 col-lg-4 text-center" key={product.id}>
              <Product
                product={product}
                handleAddToCart={props.addToCart}
                handleRemoveFromCart={props.removeFromCart}
              />
            </div>
          ))
        }
      </div>
    );
  }
  return (
    <div className="col-12 row">
      {
        props.products.map((product) => {
          if (props.categorySelected.id === product.category) {
          return (
            <div className="col-12 col-md-6 col-lg-4 text-center" key={product.id}>
              <Product
                product={product}
                handleAddToCart={props.addToCart}
                handleRemoveFromCart={props.removeFromCart}
              />
            </div>
          );
        } return false;
        })
      }
    </div>
  );
};

ProductList.propTypes = propTypes;
export default ProductList;
