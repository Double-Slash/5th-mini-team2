import React from 'react';

const ExamResultTable = () => {
  return (
    <div className="row table-number">
      <table border="1">
        <th>NO</th>
        <th>나의답</th>
        <th>정답</th>
        <tr>
          <td>1번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>2번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>3번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>4번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>5번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>6번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>7번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
        <tr>
          <td>8번</td>
          <td>1</td>
          <td>정답</td>
        </tr>
      </table>
      <style jsx global>{`
        .table-number {
          padding: 16px 0px;
          min-height: 0;
        }
      `}</style>
    </div>
  );
};
export default ExamResultTable;
