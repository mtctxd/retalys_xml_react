import React from 'react';
import PaginationList from 'react-pagination-list';

import '../../styles.css';
import ExportedData from '../../types';

type Props = {
  goods: ExportedData,
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  const { item } = goods.items[0];

  return (
    <div className="content">
      <PaginationList
        data={item}
        pageSize={20}
        renderItem={(itemFromProps) => {
          const processedItem = itemFromProps.$;

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

export default GoodsList;
