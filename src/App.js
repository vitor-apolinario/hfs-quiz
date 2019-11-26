import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

function App() {
  return (
    <div className="App">
      <Quiz quiz={quiz}/>
    </div>
  );
}

export default App;
