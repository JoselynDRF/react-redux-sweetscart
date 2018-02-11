import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product/Product';
import { actionAddToCart } from './../../../../../actionCreators';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  categorySelected: PropTypes.shape().isRequired,
  addToCart: PropTypes.func.isRequired,
};

const ProductList = ({ products, categorySelected, addToCart }) => {
  if (!categorySelected.id) {
    return (
      <div>
        {
          products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={addToCart} />
          ))
        }
      </div>
    );
  }
  return (
    <div>
      {
        products.map((product) => {
          if (categorySelected.id === product.category) {
          return (
            <Product key={product.id} product={product} handleAddToCart={addToCart} />
          );
        } return false;
        })
      }
    </div>
  );
};

const mapStateToProps = state => (
  {
    products: state.products,
    categorySelected: state.categorySelected,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addToCart(product) {
      dispatch(actionAddToCart(product));
    },
  }
);

ProductList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
