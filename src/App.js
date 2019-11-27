import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz quiz={quiz}/>
    </div>
  );
}

export default App;
