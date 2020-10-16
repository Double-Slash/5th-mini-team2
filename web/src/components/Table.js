import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <div className="row table-number">
      <table border="1" {...getTableProps()}>
        <thead>
          <th>No</th>
          <th>나의답</th>
          <th>정답</th>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
