import React from 'react';
import PaginationList from 'react-pagination-list';

import '../../styles.css';

type Props = {
  goods: Object,
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  const { item } = goods.items[0];

  return (
    <div className="content">
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

export default GoodsList;
