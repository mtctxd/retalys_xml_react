import React from 'react';
import PaginationList from 'react-pagination-list';

import '../../styles.css';

export const GoodsList = ({ goods }) => {
  const { item } = goods.items[0];

  return (
    <div className='content'>
      <PaginationList 
        data={item}
        pageSize={20}
        renderItem={(item) => {
          const processedItem = item.$;

          return (
            <li key={processedItem.code}>
              {processedItem.name}
            </li>
          );
        }}
      />
    </div>
  );
};
