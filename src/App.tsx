import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './styles.css';

import TotalGoods from './components/TotalGoods';
import DataLoadingInfo from './components/DataLoadingInfo';
import Nav from './components/Nav';
import GoodsWithPartsList from './components/GoodsWithPartsList';
import GoodsList from './components/GoodsList';

import { getGoods } from './api/getGoods.ts';


export const App = () => {
  const [goods, setGoods] = useState(null);
  const [isFetchFailed, setisFetchFailed] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);

    getGoods()
      .then(setGoods)
      .then(() => setIsDataLoading(false))
      .catch(() => setisFetchFailed(true));
  }, []);

  return (
    <Router>
      <div>
        <Nav 
          goods={goods} 
          isFetchFailed={isFetchFailed}
          isDataLoading={isDataLoading}
        />
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
            path='/goods-total' 
            element={<TotalGoods 
              goods={goods} 
              isFetchFailed={isFetchFailed}
            />
          }
          />
          <Route 
            path='/goods-list' 
            element={<GoodsList 
              goods={goods} 
              isFetchFailed={isFetchFailed}
            />
          }
          />
          <Route 
            path='/goods-with-parts' 
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
