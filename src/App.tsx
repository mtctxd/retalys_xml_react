import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import { DataLoadingInfo } from './DataLoadingInfo.tsx';
import { GoodsList } from './GoodsList.tsx';
import { GoodsWithPartsList } from './GoodsWithPartsList.tsx';
import { Nav } from './Nav.tsx';
import { TotalGoods } from './TotalGoods.tsx';

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
      <div>
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
