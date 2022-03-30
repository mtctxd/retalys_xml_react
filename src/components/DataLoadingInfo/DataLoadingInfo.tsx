import React from 'react';

type Props = {
  goods: Object,
  isFetchFailed: boolean,
  isDataLoading: boolean,
}

const DataLoadingInfo: React.FC<Props> = ({
  goods, isFetchFailed, isDataLoading,
}) => (
  <div>
    {isDataLoading && (
      'Loading goods from server...'
    )}
    {isFetchFailed && (
      'Failed to load goods'
    )}
    {(goods && !isFetchFailed) && (
      'Data is loaded'
    )}
  </div>
);

export default DataLoadingInfo;
