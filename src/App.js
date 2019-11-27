import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

function App() {
  return (
    <div className="container d-flex justify-content-center" id="container-home">
      <div className="App">
        <div className="Teste">
        <Quiz quiz={quiz} showInstantFeedback={true} continueTillCorrect={true} shuffle={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
