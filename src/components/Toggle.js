import React, { useState } from 'react';

const QuestionCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-card">
      <div className="question-card-header" onClick={() => setShowAnswer(!showAnswer)}>
        <h3 className="question-card-question">{question}</h3>
        <div className={`arrow ${showAnswer ? 'open' : ''}`}>&#9660;</div>
      </div>
      {showAnswer && <p className="question-card-answer">{answer}</p>}
    </div>
  );
};

const Toggle= () => {
  const questions = [
    {
      question: 'What is the importance of blood donation?',
      answer: 'Blood donation helps save lives by providing blood to those in need...',
    },
    {
      question: 'Who can donate blood?',
      answer: 'Most healthy adults between the ages of 18 and 65 can donate blood...',
    },
    {
      question: 'How often can I donate blood?',
      answer: 'In most cases, you can donate whole blood every 56 days...',
    },
  ];

  return (
    <div className="faqs-container">
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div className="questions-list">
        {questions.map((q, index) => (
          <QuestionCard key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default Toggle;
