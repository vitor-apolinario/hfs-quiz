import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="container d-flex justify-content-center" id="container-home">
      <div className="App">
        <Header />
        <div className="Teste">
        <Quiz quiz={quiz} showInstantFeedback={true} continueTillCorrect={true} shuffle={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
