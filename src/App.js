import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz quiz={quiz}/>
      <Footer />
    </div>
  );
}

export default App;
