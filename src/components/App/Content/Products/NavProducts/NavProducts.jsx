import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeCategory } from './../../../../../actionCreators';
import './navProducts.scss';

const propTypes = {
  changeCategory: PropTypes.func.isRequired,
  categorySelected: PropTypes.shape().isRequired,
};

function NavProducts({ changeCategory, categorySelected }) {
  const categories = [
    { id: 'candies', name: 'Candies' },
    { id: 'chocolates', name: 'Chocolates' },
    { id: 'parties', name: 'Parties' },
  ];

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
          <span className={(!categorySelected.id) ? 'active' : ''}> All </span>
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
              <span className={(categorySelected.id === category.id) ? 'active' : ''}> { category.name } </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = state => (
  {
    categorySelected: state.categorySelected,
  }
);

const mapDispatchToProps = dispatch => (
  {
    changeCategory(category = {}) {
      dispatch(actionChangeCategory(category));
    },
  }
);

NavProducts.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(NavProducts);
