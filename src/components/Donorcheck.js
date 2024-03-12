import React, { useState } from 'react';

const Donorcheck = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(''));
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: 'Are you aged between 17 and 65?',
      options: ['yes', 'no'],
      correctAnswer: 'yes'
    },
    {
      question: 'Do you weigh 7st 12lb (50 kg) or more?',
      options: ['yes', 'no'],
      correctAnswer: 'yes'
    },
    {
      question: 'Have you had the Covid-19 vaccine within the last 48 hours?',
      options: ['Yes', 'No'],
      correctAnswer: 'No'
    },
    {
      question: 'Are you waiting for medical test results?',
      options: ['Yes', 'No'],
      correctAnswer: ' No'
    },
    {
      question: 'Have you visited a malarial area in the last year?',
      options: ['Yes','No'],
      correctAnswer: 'No'
    },
    {
        question: 'Have you had cancer, heart disease or a stroke?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Had a tattoo or piercing in the last four months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you had an endoscopy or colonoscopy in the last four months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you received a blood transfusion since 1st January 1980?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you ever injected (or been injected with) non-prescription drugs?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you ever been diagnosed with or treated for Syphilis, HIV, HTLV, Hepatitis B or Hepatitis C?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you been diagnosed with and/or treated for any other sexually transmitted diseases within the last three months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you taken PEP or PrEP to reduce your risk of contracting HIV over the last three months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you had chemsex over the last three months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you started (or restarted) a new sexual relationship, or had more than one sexual partner in the last three months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      },
      {
        question: 'Have you started (or restarted) a new sexual relationship, or had more than one sexual partner in the last three months?',
        options: ['Yes','No'],
        correctAnswer: 'No'
      }
  ];

  const handleAnswer = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      // Calculate score
      let totalScore = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === questions[i].correctAnswer) {
          totalScore++;
        }
      }
      setScore(totalScore);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      {score === null ? (
        <div className=' mx-3 justify-center h-96 font-semibold text-4xl font-sans'>
          <h1 className='mb-8 text-[#378CE7] font-sans mt-4'> Take Our Quick Quiz</h1>
          <h3 className=''>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  
                  name="answer"
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={handleAnswer}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button className='bg-[#378CE7] font-sans rounded  m-3 text-xl px-3' onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h1>Quiz Results</h1>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Donorcheck;

