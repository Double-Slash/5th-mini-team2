import React from 'react';
import makeData from '../data/exam/tableData';
import Table from './Table';

function ExamResultTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: '1',
        columns: [
          {
            accessor: 'number',
          },
        ],
      },
      {
        Header: '2',
        columns: [
          {
            accessor: 'myAnswer',
          },
        ],
      },
      {
        Header: '3',
        columns: [
          {
            accessor: 'answer',
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(8), []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ExamResultTable;
