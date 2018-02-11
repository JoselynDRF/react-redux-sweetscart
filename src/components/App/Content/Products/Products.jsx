import React from 'react';
import ProductList from './ProductList/ProductList';
import NavProducts from './NavProducts/NavProducts';

function Content() {
  return (
    <div>
      <NavProducts />
      <ProductList />
    </div>
  );
}

export default Content;
