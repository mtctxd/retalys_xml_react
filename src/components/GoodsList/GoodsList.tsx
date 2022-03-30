import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';

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
        Header: 'Product ID',
        accessor: '$.code',
      },
      {
        Header: 'Product name',
        accessor: '$.name',
      },
    ]), []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data: item,
        initialState: { pageIndex: 2 },
      },
      usePagination,
    );

    return (
      <>
        <div className="pagination">
          <button
            type="button"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          {' '}
          <button
            type="button"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>
          {' '}
          <button
            type="button"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>
          {' '}
          <button
            type="button"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
          {' '}
          <span>
            Page
            {' '}
            <strong>
              {pageIndex + 1}
              of
              {pageOptions.length}
            </strong>
            {' '}
          </span>
          <span>
            | Go to page:
            {' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageOnchange = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(pageOnchange);
              }}
              style={{ width: '100px' }}
            />
          </span>
          {' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSizeSelector) => (
              <option key={pageSizeSelector} value={pageSizeSelector}>
                Show
                {pageSizeSelector}
              </option>
            ))}
          </select>
        </div>
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
            {page.map((row) => {
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
      </>
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
