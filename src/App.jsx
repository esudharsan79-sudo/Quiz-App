import React, { useState } from 'react';
import Quiz from './Components/Quiz/Quiz.jsx';
import StartPage from './Components/Startpage/Startpage.jsx';

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      {start ? <Quiz /> : <StartPage startQuiz={() => setStart(true)} />}
    </>
  );
};

export default App;
