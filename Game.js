import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Score from './Score';
import Timer from './Timer';
import Equation from './Equation';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Keyboard from './Keyboard';
import './Game.css';
import {randInt} from '../helpers/helpers';

function Game({operation, maxNumber}) {

  let randNums = getRandNumbers(operation, 0, maxNumber);
  const [operands, setOperands] = useState(randNums);
  const question = operands.num1 + ' ' + operation +
                    ' ' + operands.num2;

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const gameLength = 30; // Seconds
  const [timeLeft, setTimeLeft] = useState(gameLength);


  function appendToAnswer(num) {
    // Number() will remove leading zeroes
    setUserAnswer(String(Number(userAnswer + num)));
  }
  
  function checkAnswer(userAnswer) {
    if (isNaN(userAnswer)) return false; // User hasn't answered
    
    let correctAnswer;
    switch(operation) {
      case '+':
        correctAnswer = operands.num1 + operands.num2;
        break;
      case '-':
        correctAnswer = operands.num1 - operands.num2;
        break;
      case 'x':
        correctAnswer = operands.num1 * operands.num2;
        break;
      default: // division
        correctAnswer = operands.num1 / operands.num2;
    };
    return (parseInt(userAnswer) === correctAnswer);
  }
  
  if (!answered && checkAnswer(userAnswer)) {
    setAnswered(true);
    setScore(score + 1);
    setTimeout(newQuestion, 300);
  }
  
  function newQuestion() {
    setUserAnswer('');
    setAnswered(false);
    randNums = getRandNumbers(operation, 0, maxNumber);
    setOperands(randNums);
  }

  function restart() {
    setTimeLeft(gameLength);
    setScore(0);
    newQuestion();
  }
  
  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);
    
    if(operator === '-') { // Make sure higher num comes first
      num1 = numHigh;
      num2 = numLow;
    }
    
    if(operator === '/') {
        if (num2 === 0) { // No division by zero
          num2 = randInt(1, high);
        }
        num1 = (num1 * num2); // product
      }
    return {num1, num2};
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numbers.map((number) =>
    <NumberButton value={number} key={number} 
      handleClick={appendToAnswer} />
  );

  const equationClass = answered
    ? 'row my-2 text-primary fade'
    : 'row my-2 text-secondary';

  if (timeLeft === 0) {
    return (
      <div className="text-center" id="game-container">
        {/* how do I make the operation name show instead of symbol? */}
        {/* <h1>{operation}</h1> */}
        <h3>Time's Up!</h3>
        <div style={{fontSize: "1.5em"}}>Your final score is:</div>
        <div style={{fontSize: "5em"}}>{score}</div>
        <button className="btn btn-success btn-sm m-1"
          onClick={restart}>
            Play Again
        </button><br />
        <Link className="btn btn-secondary btn-sm m-1" to="/">
          Back to Start Screen
        </Link>
      </div>
    );
  }

  return (
    <main className="text-center" id="game-container">
      <div className={equationClass} id="equation">
        <Equation question={question} answer={userAnswer} />
      </div>
      <div className="row" id="buttons">
        <div className="col">
          {numberButtons}
          <ClearButton handleClick={setUserAnswer} />
        </div>
      </div>
      <Keyboard setUserAnswer={setUserAnswer} />
      <h2 className="col px-3 text-center">
          <Score score={score} />
        </h2>
        <h2 className="col px-3 text-center">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </h2>
    </main>
  );
}
export default Game;