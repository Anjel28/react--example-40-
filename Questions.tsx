import React from 'react';

type QuestionProps = {
  onCorrect: () => void;
};

const Question: React.FC<QuestionProps> = ({ onCorrect }) => {
  const correctAnswer = 'B';

  const handleAnswer = (selected: string) => {
    if (selected === correctAnswer) {
      onCorrect(); 
    }
  };

  return (
    <div>
      <h2>What is the capital of France?</h2>
      <button onClick={() => handleAnswer('A')}>Berlin</button>
      <button onClick={() => handleAnswer('B')}>Paris</button>
      <button onClick={() => handleAnswer('C')}>Madrid</button>
    </div>
  );
};

export default Question;
