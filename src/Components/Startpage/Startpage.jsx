import React from 'react';
import './Startpage.css';

const StartPage = ({ startQuiz }) => {
  return (
    <div className="start-container">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge and see your score!</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
