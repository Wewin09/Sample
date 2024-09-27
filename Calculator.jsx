import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(''); 

  const handleAddition = () => {
    setOperator('+');
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setOperator('-');
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setOperator('*');
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    if (num2 !== 0) {
      setOperator('/');
      setResult(num1 / num2);
    } else {
      setResult('Undefined');
    }
  };

  return (
    <div className='calcuForm'>
      <h1>Calculator</h1>
      <div className='calcuForm2'>
        <div className='inputValue'>
          <input
            className="input1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            placeholder="Enter first number"
          />
          <span className="operator">{operator}</span> {}
          <input
            className="input2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            placeholder="Enter second number"
          />
        </div>
        <div className='buttons'>
          <button className='calButton' onClick={handleMultiplication}>
            <b>Multiplication</b>
          </button>
          <button className='calButton' onClick={handleDivision}>
            <b>Division</b>
          </button>
          <button className='calButton' onClick={handleAddition}>
            <b>Addition</b>
          </button>
          <button className='calButton' onClick={handleSubtraction}>
            <b>Subtraction</b>
          </button>
        </div>
        {result !== null && (
          <div className='result'>
            <h2>Result: {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
