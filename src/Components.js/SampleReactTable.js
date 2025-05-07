import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const SampleReactTable = () => {
  const data = React.useMemo(
    () => [
      { name: 'John Doe', age: 28, country: 'USA' },
      { name: 'Jane Smith', age: 32, country: 'Canada' },
      { name: 'Michael Johnson', age: 40, country: 'UK' },
      { name: 'Alice Brown', age: 25, country: 'Australia' },
      { name: 'Tom Clark', age: 35, country: 'Germany' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Country', accessor: 'country' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // instead of rows
    prepareRow,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex, pageSize },
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 3 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="table-container">
      <table {...getTableProps()} className="react-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[3, 5, 10].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SampleReactTable;

