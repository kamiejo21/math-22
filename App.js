import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom';import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Game from '../components/Game';


function App() {
  const [operation, setOperation] = useState('x');
  const [maxNumber, setMaxNumber] = useState(10);
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/"
      element={
          <Main operation={operation}
          setOperation={setOperation}
          maxNumber={maxNumber}
          setMaxNumber={setMaxNumber} />} />
          <Route path="/play"
            element={
          <Game operation={operation}
          maxNumber={maxNumber} />} />
    </Routes>

  </div>
  );
}

export default App;
