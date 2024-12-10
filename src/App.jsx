import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input) || '' + '');
    } 
    catch (error) {
      setResult('Ошибка');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Калькулятор</h1>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
      </div>
    </div>
  );
};

export default App;