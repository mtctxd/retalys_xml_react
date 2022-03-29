import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './App.css';
import { GoodsList } from './GoodsList.tsx';
import { GoodsWithPartsList } from './GoodsWithPartsList.tsx';
import { TotalGoods } from './TotalGoods.tsx';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/goodsTotal">
        Total amount of goods
      </Link>
      <Link to="/goodsList">
        Goods list
      </Link>
      <Link to="/goodsWithParts">
        Goods with parts
      </Link>
    </div>
  );
}; 

const DataLoadingInfo = ({ goods, isFetchFailed}) => {
  return (
    <div>
      {!goods && (
        `Loading goods from server...`
      )}
      {isFetchFailed && (
        `Failed to load goods`
      )}
      {(goods && !isFetchFailed) && (
        `Data is loaded`
      )}
    </div>
  );
};

// need to change here, it do make request to port 3000 if i only type /goods
const getGoods = () => {
  return fetch('/goods')
    .then(response => response.json());
};

export const App = () => {
  const [goods, setGoods] = useState(null);
  const [isFetchFailed, setisFetchFailed] = useState(false);

  useEffect(() => {
    getGoods()
      .then(setGoods)
      .catch(() => setisFetchFailed(true));
  }, []);

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route 
              path='/' 
              element={<DataLoadingInfo 
                goods={goods} 
                isFetchFailed={isFetchFailed}
              />
            }
          />
          <Route 
            path='/goodsTotal' 
            element={<TotalGoods 
              goods={goods} 
              isFetchFailed={isFetchFailed}
            />
          }
          />
          <Route 
            path='/goodsList' 
            element={<GoodsList 
              goods={goods} 
              isFetchFailed={isFetchFailed}
            />
          }
          />
          <Route 
            path='/goodsWithParts' 
            element={<GoodsWithPartsList 
                goods={goods} 
                isFetchFailed={isFetchFailed}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
