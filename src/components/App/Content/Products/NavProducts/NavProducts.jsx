import React from 'react';
import PropTypes from 'prop-types';
import './navProducts.scss';

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  categorySelected: PropTypes.shape().isRequired,
  changeCategory: PropTypes.func.isRequired,
};

function NavProducts({ categories, categorySelected, changeCategory }) {
  return (
    <div>
      <span className="title-products"> PRODUCTS </span>
      <ul className="list-categories">
        <li
          key="all"
          onClick={() => changeCategory()}
          className="category"
          role="presentation"
          onKeyDown={() => {}}
        >
          <span className={(!categorySelected.id) ? 'active-category' : ''}> All </span>
        </li>
        {
          categories.map(category => (
            <li
              key={category.id}
              onClick={() => changeCategory(category)}
              className="category"
              role="presentation"
              onKeyDown={() => {}}
            >
              <span className={(categorySelected.id === category.id) ? 'active-category' : ''}>
                { category.name }
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

NavProducts.propTypes = propTypes;
export default NavProducts;
