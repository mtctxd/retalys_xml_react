import React from 'react';
import PaginationList from 'react-pagination-list';

import '../../styles.css';


export const GoodsWithPartsList = ({ goods }) => {
    let { item } = goods.items[0];
    item = item.filter(item => item.parts);

    return (
      <div className='content'>
        <PaginationList 
          data={item}
          pageSize={5}
          renderItem={(item) => {
            const processedItem = item.$;

            return (
              <li key={processedItem.code}>
                {processedItem.name}

                <ul>
                    {item.parts && (
                      item.parts[0].part[0].item.map(part => {
                        return (
                          <li key={part.$.code} >
                            {part.$.name}
                          </li>
                        );
                      })
                    )}
                  </ul>
              </li>
            );
          }}
        />
      </div>
    );
  };