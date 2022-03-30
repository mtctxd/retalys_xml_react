import React from 'react';
import PaginationList from 'react-pagination-list';

import '../../styles.css';
import ExportedData from '../../types';
import DataLoadingInfo from '../DataLoadingInfo';

type Props = {
  goods: ExportedData,
  isFetchFailed: boolean,
  isDataLoading: boolean,
};

const GoodsWithPartsList: React.FC<Props> = ({
  goods, isFetchFailed, isDataLoading,
}) => {
  if (goods !== null) {
    let { item } = goods.items[0];
    item = item.filter((filteredItem) => filteredItem.parts);

    return (
      <div className="content">
        <PaginationList
          data={item}
          pageSize={5}
          renderItem={(renderedItem) => {
            const processedItem = renderedItem.$;

            return (
              <li key={processedItem.code}>
                {processedItem.name}

                <ul>
                  {renderedItem.parts[0].part[0].item.map((part) => (
                    <li key={part.$.code}>
                      {part.$.name}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }}
        />
      </div>
    );
  }

  return (
    <DataLoadingInfo
      goods={goods}
      isFetchFailed={isFetchFailed}
      isDataLoading={isDataLoading}
    />
  );
};

export default GoodsWithPartsList;
