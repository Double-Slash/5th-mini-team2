import React from 'react';
import PropTypes from 'prop-types';

function ExamResultInfo({ correct, wrong, elapsed }) {
  return (
    <div className="exam-result">
      <span className="result">정답 {correct}문제 </span>
      <span className="dash"></span>
      <span className="result">오답 {wrong}문제 </span>
      <span className="dash"></span>
      <span className="result">소요시간 {elapsed}분 </span>

      <style jsx>{`
        .exam-result {
          padding: 8px 16px;
          background-color: #b0d5e5;
          font-size: 14px;
        }
        .exam-result .result {
          color: #6c6c6c;
          border: 3px;
        }
        .exam-result .dash {
          margin: 0px 8px;
          border-left: 2px solid #6c6c6c;
        }
      `}</style>
    </div>
  );
}

ExamResultInfo.propTypes = {
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
};

export default ExamResultInfo;
