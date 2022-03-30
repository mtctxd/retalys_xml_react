import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../../styles.css';

import TotalGoods from '../TotalGoods';
import DataLoadingInfo from '../DataLoadingInfo';
import Nav from '../Nav';
import GoodsWithPartsList from '../GoodsWithPartsList';
import GoodsList from '../GoodsList';
import getGoods from '../../api';

const App = () => {
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
            path="/"
            element={(
              <DataLoadingInfo
                goods={goods}
                isFetchFailed={isFetchFailed}
                isDataLoading={isDataLoading}
              />
            )}
          />
          <Route
            path="/goods-total"
            element={(
              <TotalGoods
                goods={goods}
                isFetchFailed={isFetchFailed}
                isDataLoading={isDataLoading}
              />
            )}
          />
          <Route
            path="/goods-list"
            element={(
              <GoodsList
                goods={goods}
                isFetchFailed={isFetchFailed}
                isDataLoading={isDataLoading}
              />
            )}
          />
          <Route
            path="/goods-with-parts"
            element={(
              <GoodsWithPartsList
                goods={goods}
                isFetchFailed={isFetchFailed}
                isDataLoading={isDataLoading}
              />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
