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

const GoodsList: React.FC<Props> = ({
  goods, isFetchFailed, isDataLoading,
}) => {
  if (goods !== null) {
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
  }

  return (
    <DataLoadingInfo
      goods={goods}
      isFetchFailed={isFetchFailed}
      isDataLoading={isDataLoading}
    />
  );
};

export default GoodsList;
