import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeCategory } from './../../../../../actionCreators';

const propTypes = {
  changeCategory: PropTypes.func.isRequired,
};

function NavProducts({ changeCategory }) {
  const categories = [
    { id: 'candies', name: 'Candies' },
    { id: 'chocolates', name: 'Chocolates' },
    { id: 'parties', name: 'Parties' },
  ];

  return (
    <div>
      <ul>
        <li
          key="all"
          onClick={() => changeCategory()}
          role="presentation"
          onKeyDown={() => {}}
        >
          All
        </li>
        {
          categories.map(category => (
            <li
              key={category.id}
              onClick={() => changeCategory(category)}
              role="presentation"
              onKeyDown={() => {}}
            >
              { category.name }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => (
  {
    changeCategory(category = {}) {
      dispatch(actionChangeCategory(category));
    },
  }
);

NavProducts.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(NavProducts);