import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calculator() {
  const [result, setResult] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result) || '');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(prevResult => prevResult + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Calculator App</h1>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <h1>Welcome to My Calculator</h1>
        <p>This is a simple calculator application built with React.</p>
        <button onClick={() => window.location.href = '/calculator'}>Go to Calculator</button>
      </div>
      <Calculator />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
