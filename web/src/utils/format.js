import { QUESTION_TYPES } from '@/const';

const toDoubleDigit = (number) => number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

export const formatTime = (time) => {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.floor(time % 60);

  if (hrs > 0) return `${toDoubleDigit(hrs)}:${toDoubleDigit(mins)}:${toDoubleDigit(secs)}`;

  return `${toDoubleDigit(mins)}:${toDoubleDigit(secs)}`;
};

export const timeDiff = (start, end) => {
  const diff = (end.getTime() - start.getTime()) / 1000;

  const hrs = Math.floor(diff / 3600);
  const mins = Math.floor((diff % 3600) / 60);
  const secs = Math.floor(diff % 60);

  if (hrs > 0) return `${hrs}시간 ${mins}분 ${secs}초`;
  return `${mins}분 ${secs}초`;
};

export const toCircledNum = (num) => {
  switch (num) {
    case 1:
      return '①';
    case 2:
      return '②';
    case 3:
      return '③';
    case 4:
      return '④';
    case 5:
    default:
      return '⑤';
  }
};

export const formatAnswer = (type, answer) => {
  if (type === QUESTION_TYPES.MULTIPLE_CHOICE) return answer.map((item) => toCircledNum(item + 1)).join(', ');

  return answer[0];
};
