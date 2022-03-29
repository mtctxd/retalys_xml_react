import React from 'react';

export const DataLoadingInfo = ({ goods, isFetchFailed }) => {
  return (
    <div>
      {!goods && (
        `Loading goods from server...`
      )}
      {isFetchFailed && (
        `Failed to load goods`
      )}
      {(goods && !isFetchFailed) && (
        `Data is loaded`
      )}
    </div>
  );
};
