import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionAddToCart } from './../../../../../actionCreators';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const ProductList = ({ products, addToCart, categorySelected }) => {
  if (!categorySelected.id) {
    return (
      <div>
        {
          products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.image} alt={product.name} height="100px" />
                <div>
                  <span> {product.name} </span>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock <= 0}
                  >
                    {product.price}€
                  </button>
                </div>
              </div>
            );
          })
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
            <div key={product.id}>
              <img src={product.image} alt={product.name} height="100px" />
              <div>
                <span> {product.name} </span>
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock <= 0}
                >
                  {product.price}€
                </button>
              </div>
            </div>
          );
        }
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
