import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'Select your data',
      answerOptions: [
        { answerText: 'Price:1800', isCorrect: false },
        { answerText: 'Price:2000', isCorrect: false },
        { answerText: 'Price:0', isCorrect: false },
        // { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Do you want a bike',
      answerOptions: [
        { answerText: 'Yes', isCorrect: false },

        // { answerText: 'Bill Gates', isCorrect: false },
        // { answerText: 'Tony Stark', isCorrect: false },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText: 'Date & Time Slot',
      answerOptions: [
        { answerText: '27th Aug/10.00am', isCorrect: false },
        { answerText: '27th Aug/3.00pm', isCorrect: false },
        { answerText: '29th Aug/10.00am', isCorrect: false },
        { answerText: '29th Aug/3.00am', isCorrect: false },
      ],
    },
    {
      questionText: 'package selection test',
      answerOptions: [
        { answerText: 'a:1', isCorrect: false },
        { answerText: 'b:4', isCorrect: false },
        // { answerText: '6', isCorrect: false },
        { answerText: 'c:7', isCorrect: false },
      ],
    },
    {
      questionText: 'Enter Your exprience details',
      answerOptions: [
        { answerText: '1-2 Years', isCorrect: false },
        { answerText: '2-3 Years', isCorrect: false },
        // { answerText: '6', isCorrect: false },
        { answerText: '3-5 Years', isCorrect: false },
      ],
    },
    // {
    //   questionText: 'testing check box',
    //   answerOptions: [
    //     { answerText: 'A:0', isCorrect: false },
    //     { answerText: 'B:0', isCorrect: false },
    //     // { answerText: '6', isCorrect: false },
    //     { answerText: 'c:0', isCorrect: false },
    //   ],
    // },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (!isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You selected {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (

              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

            ))}
          </div>
        </>
      )}
    </div>
  );
}