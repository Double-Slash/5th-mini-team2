import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';
import DeleteIcon from '@/assets/images/delete.png';
import connectStore from '@/hoc/connectStore';
import DragDropButton from '@/assets/images/DragDropButton.png';

const Question = ({ idx, question, provided, actions }) => {
  const fileRef = useRef(null);

  const handleFile = ({ target: { files } }) => {
    if (!files.length) return;

    actions.addImage(files[0], idx);
  };

  const imgAttachment = () => {
    if (question.image)
      return <img className="image" src={URL.createObjectURL(question.image)} alt={`question${idx}`} />;

    return (
      <div>
        <span className="add">+</span>
        <p>이미지를 첨부하세요.</p>
      </div>
    );
  };

  return (
    <div className="question">
      <QuestionType idx={idx} type={question.type} />

      <div className="row">
        <div className="col-8 image-root">
          <div className="h-100 d-flex flex-column">
            <div className="title px-3 d-flex">
              <div className="question-number">문제 {idx + 1}</div>
              <div {...provided.dragHandleProps}>
                <img src={DragDropButton} />
              </div>
            </div>
            <div onClick={() => fileRef.current.click()} className="attach">
              {imgAttachment()}
              <input accept="image/*" hidden={true} onChange={handleFile} ref={fileRef} type="file" />
              <img className="delete" src={DeleteIcon} onClick={() => actions.removeQuestion(idx)} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <AnswerInput idx={idx} answer={question.answer} numChoices={question.numChoices} type={question.type} />
        </div>
      </div>

      <style jsx global>{`
        .question {
          width: 100%;
          padding-bottom: 5%;
        }
        .image-root {
          height: 400px;
        }
        .question-number {
          flex-basis: 48.5%;
        }
        .question .title {
          font-weight: 600;
          color: #707070;
          font-size: 18px;
          border: solid 1px #707070;
          border-bottom: none;
        }
        .question .attach {
          width: 100%;
          height: 400px;
          background-color: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #707070;
          color: #707070;
          text-align: center;
          cursor: pointer;
        }
        .question .attach .delete {
          position: absolute;
          right: 32px;
          bottom: 16px;
          cursor: pointer;
        }
        .question .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

Question.propTypes = {
  idx: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};
export default connectStore(Question);
