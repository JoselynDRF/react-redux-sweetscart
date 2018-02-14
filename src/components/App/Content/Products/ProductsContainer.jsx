import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from './ProductList/ProductList';
import NavProducts from './NavProducts/NavProducts';
import { actionChangeCategory, actionAddToCart, actionRemoveFromCart } from './../../../../actions/actionCreators';

const propTypes = {
  changeCategory: PropTypes.func.isRequired,
  categorySelected: PropTypes.shape().isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const categories = [
  { id: 'candies', name: 'Candies' },
  { id: 'chocolates', name: 'Chocolates' },
  { id: 'parties', name: 'Parties' },
];

const ProductsContainer = props => (
  <div className="container">
    <div className="col-12 row">
      <div className="col-3">
        <NavProducts
          categories={categories}
          categorySelected={props.categorySelected}
          changeCategory={props.changeCategory}
        />
      </div>
      <div className="col-9">
        <ProductList
          categorySelected={props.categorySelected}
          products={props.products}
          changeCategory={props.changeCategory}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => (
  {
    categorySelected: state.categorySelected,
    products: state.products,
  }
);

const mapDispatchToProps = dispatch => (
  {
    changeCategory(category = {}) {
      dispatch(actionChangeCategory(category));
    },
    addToCart(product) {
      dispatch(actionAddToCart(product));
    },
    removeFromCart(product) {
      dispatch(actionRemoveFromCart(product));
    },
  }
);

ProductsContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
