/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
// import PaginationList from 'react-pagination-list';
import { useTable } from 'react-table';

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
    const columns = useMemo(() => ([
      {
        Header: 'code',
        accessor: '$.code',
      },
      {
        Header: 'name',
        accessor: '$.name',
      },
    ]), []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data: item,
    });

    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
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
