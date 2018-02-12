import React from 'react';
import ProductList from './ProductList/ProductList';
import NavProducts from './NavProducts/NavProducts';
import imgBanner from './../../../../assets/img/candy-banner.jpg';

function Content() {
  return (
    <div>
      <img src={imgBanner} alt="Banner" className="img-fluid mb-4" />
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

export default Content;
