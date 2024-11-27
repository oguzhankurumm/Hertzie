import { useCallback, useState } from 'react';

const useFeedback = () => {
  const [text, setText] = useState('');
  const [feedbackItems, setFeedbackItems] = useState([
    { id: 'feedback-1', title: 'Some songs are not shown', active: false },
    { id: 'feedback-2', title: 'Too many ads', active: false },
    { id: 'feedback-3', title: 'Bugs', active: false },
    { id: 'feedback-4', title: 'Music stops playing', active: false },
    { id: 'feedback-5', title: 'Suggestions', active: false },
    { id: 'feedback-6', title: 'Others', active: true },
  ]);

  return {
    feedbackItems,
    text,
    setText,
  };
};

export { useFeedback };
