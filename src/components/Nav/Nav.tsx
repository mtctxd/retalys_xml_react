import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import '../../styles.css';

export const Nav = ({ goods, isFetchFailed, isDataLoading}) => {
  const buttonClass = classNames(
    'button',
    'is-link', {
      'disabled': !goods && isFetchFailed,
      'is-loading': isDataLoading
    }
  )

  return (
    <div className='nav'>
      <Link to="/" className={buttonClass}>
        Home
      </Link>
      <Link to="/goods-total" className={buttonClass}>
        Total amount of goods
      </Link>
      <Link to="/goods-list" className={buttonClass}>
        Goods list
      </Link>
      <Link to="/goods-with-parts" className={buttonClass}>
        Goods with parts
      </Link>
    </div>
  );
};
