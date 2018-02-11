import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionChangeCategory } from './../../../../../actionCreators';

function NavProducts({ categories, changeCategory }) {
  return (
    <div>
      <ul>
        <li key="all" onClick={() => changeCategory([])}> All </li>
        {
          categories.map(category => (
            <li key={category.id} onClick={() => changeCategory(category)}> { category.name } </li>
          ))
        }
      </ul>
    </div>

  );
}

// TEST
const mapStateToProps = state => {
  // console.log(state);
  const categories = [
    { id: 'candies', name: 'Candies' },
    { id: 'chocolates', name: 'Chocolates' },
    { id: 'parties', name: 'Parties' },
  ]
  return {
    categories,
  }
};

const mapDispatchToProps = dispatch => (
  {
    changeCategory(category) {
      dispatch(actionChangeCategory(category));
    },
  }
);

// ProductList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(NavProducts);
