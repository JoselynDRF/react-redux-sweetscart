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
      <div className="col-12 row">
        {
          products.map(product => (
            <div className="col-12 col-md-6 col-lg-3 text-center" key={product.id}>
              <Product product={product} handleAddToCart={addToCart} />
            </div>
          ))
        }
      </div>
    );
  }
  return (
    <div className="col-12 row">
      {
        products.map((product) => {
          if (categorySelected.id === product.category) {
          return (
            <div className="col-12 col-md-6 col-lg-3 text-center" key={product.id}>
              <Product product={product} handleAddToCart={addToCart} />
            </div>
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
