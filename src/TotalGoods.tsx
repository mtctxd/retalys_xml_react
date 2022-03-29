import React from 'react';

import './App.css';


export const TotalGoods = ({ goods, isFetchFailed }) => {

  return (
    <div>
      <span>
        {(goods && !isFetchFailed) ? (
          `Total amoun of items: ${goods.items[0].item.length}`
        ) : (
          `Loading data...`
        )}
        {isFetchFailed && (
          `Failed to load data`
        )}
      </span>
    </div>
  );
};
