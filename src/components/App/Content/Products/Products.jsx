import React from 'react';
import ProductList from './ProductList/ProductList';
import NavProducts from './NavProducts/NavProducts';

function Products() {
  return (
    <div>
      <div className="container">
        <div className="col-12 row">
          <div className="col-3">
            <NavProducts />
          </div>
          <div className="col-9">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
