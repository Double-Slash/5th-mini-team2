import React from 'react';
import ExamInfo from '@/components/ExamInfo';
import ExamResultInfo from '@/components/ExamResultInfo';
import connectStore from '@/hoc/connectStore';
import ExamResultTable from '@/components/ExamResultTable';

const Result = ({ exam: { info } }) => {
  return (
    <div className="result">
      <ExamInfo info={info} />
      <div className="result-info-wrapper">
        <div className="result-info">
          <div className="result-user">홍길동님의 점수</div>
          <div className="result-score">
            <p>80점</p>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-9 remain-root">
            <ExamResultInfo correct={''} wrong={''} elapsed={''} />
          </div>
        </div>

        <ExamResultTable />

        <div className="row button-wrapper">
          <div style={{ margin: 0, paddingLeft: 0 }} className="col-2">
            <button
              style={{ margin: 0, border: '1px solid #707070' }}
              type="button"
              className="btn btn-light rounded-pill btn-block">
              문제다시보기
            </button>
          </div>
          <div style={{ margin: 0, paddingLeft: 0 }} className="col-2">
            <button
              style={{ margin: 0, border: '1px solid #707070' }}
              type="button"
              className="btn btn-light rounded-pill btn-block">
              문제해설
            </button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .result {
          height: 100vh;
        }
        .result main {
          display: flex;
          flex-direction: column;
          padding-top: 48px;
        }

        .result .button-wrapper {
          display: flex;
          justify-content: flex-end;
          text-align: center;
          padding: 16px 0px;
        }
        .result .remain-root {
          display: flex;
          justify-content: flex-start;
          padding: 0;
          margin-bottom: 15px;
        }
        .result-info-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
        }
        .result .result-info {
          display: block;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .result .result-user {
          padding-bottom: 20px;
          font-size: 26px;
        }
        .result .result-score {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 185px;
          height: 185px;
          border-radius: 50%;
          border: solid 4px #4893c4;
        }
        .result .result-score > p {
          color: #4893c4;
          font-size: 50px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default connectStore(Result);
