import React, { useState, useEffect } from 'react';
import ExamInfo from '@/components/ExamInfo';
import ExamRemaining from '@/components/ExamRemaining';
import ExamImage from '@/components/ExamImage';
import OMR from '@/components/OMR';
import connectStore from '@/hoc/connectStore';
import OMRModal from '@/components/OMRModal';
import { useHistory } from 'react-router-dom';

const Solve = ({ exam: { info, questions }, match, actions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const { id } = match.params;
    actions.getExam(id);
  }, []);

  const history = useHistory();

  const handleSubmit = (e) => {
    const message = confirm('제출하시겠습니까?');
    if (message) {
      history.push('/welcome');
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="solve">
      <ExamInfo info={info} />
      <main className="container">
        <div className="row">
          <div className="col-9 remain-root">
            <ExamRemaining current={info.current + 1} remain={info.last} />
          </div>
        </div>
        <div className="row question-input">
          <div className="col-9 question-img">
            <ExamImage question={questions[info.current]} />
          </div>
          <div className="col-3 omr">
            <OMR questions={questions} openModal={openModal} />
          </div>
        </div>
        <div className="row button-wrapper">
          <div className="col-9">
            <button
              type="button"
              onClick={() => actions.prevQuestion()}
              className="btn btn-outline-primary rounded-pill">
              이전
            </button>
            <button type="button" onClick={() => actions.nextQuestion()} className="btn btn-primary rounded-pill">
              다음
            </button>
          </div>
          <div style={{ margin: 0, paddingLeft: 0 }} className="col">
            <button
              style={{ margin: 0 }}
              type="button"
              className="btn btn-primary rounded-pill btn-block"
              onClick={handleSubmit}>
              답안지 전송
            </button>
          </div>
        </div>
      </main>

      <OMRModal isModalOpen={isModalOpen} closeModal={closeModal} />

      <style jsx global>{`
        .solve {
          height: 100vh;
        }
        .solve .omr {
          height: 100%;
        }
        .solve main {
          height: calc(100% - 70px);
          display: flex;
          flex-direction: column;
          padding-top: 48px;
        }
        .solve .question-input {
          flex: 1;
          padding: 16px 0px;
          min-height: 0;
        }
        .solve .button-wrapper {
          text-align: center;
          padding: 16px 0px 62px 0px;
        }
        .solve .button-wrapper * {
          margin: 0px 8px;
        }
        .solve .remain-root {
          display: flex;
          justify-content: flex-end;
          padding: 0;
        }
        .solve .question-img {
          border: solid 1px #707070;
          background-color: #f2f2f2;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default connectStore(Solve);
