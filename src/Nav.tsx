import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-start'>
        <Link to="/" className='navbar-item'>
          Home
        </Link>
        <Link to="/goodsTotal" className='navbar-item'>
          Total amount of goods
        </Link>
        <Link to="/goodsList" className='navbar-item'>
          Goods list
        </Link>
        <Link to="/goodsWithParts" className='navbar-item'>
          Goods with parts
        </Link>
      </div>
    </nav>
  );
};
