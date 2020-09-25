import React from 'react';

const Solve = () => {
  return (
    <div className="wrapper">
      <div className="question-info col"></div>
      <div className="container">
        <div className="row">
          <div className="col-9 current-remain-question-wrapper">
            <span className="current-remain-question">현재 12문제 | 남은 8문제</span>
          </div>
        </div>

        <div className="row">
          <div className="col-9 question-img"></div>
          <div className="col omr"></div>
        </div>

        <div className="row">
          <div className="col-9 previous-next-wrapper">
            <input className="mr-3" type="button" value="이전" onclick="" />
            <input className="ml-3" type="button" value="다음" onclick="" />
          </div>
          <div className="col">
            <input className="w-100" type="button" value="답안지 전송" onclick="" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .question-info {
            height: 50px;
            background-color: skyblue;
          }
          .current-remain-question-wrapper {
            text-align: right;
          }
          .current-remain-question {
            height: 30px;
            background-color: yellow;
          }
          .question-img {
            height: 500px;
            width: 100%;
            background-color: gray;
          }
          .omr {
            height: 500px;
            width: 100%;
            background-color: darkslateblue;
          }
          .previous-next-wrapper {
            text-align: center;
          }
          .previous {
            background-color: green;
          }
          .next {
            background-color: purple;
          }
          .send {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Solve;
