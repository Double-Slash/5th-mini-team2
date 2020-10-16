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
      <style jsx global>
        {`
          .table-number > table {
            text-align: center;
          }
          table {
            border-spacing: 0;
            border: 1px solid black;
          }

          th,
          td {
            margin: 0;
            padding: 0.3rem 2rem;

            border-bottom: 1px solid black;
            border-right: 1px solid black;
          }
        `}
      </style>
    </div>
  );
};

export default Table;
