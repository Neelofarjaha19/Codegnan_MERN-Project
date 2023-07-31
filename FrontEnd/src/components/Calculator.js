import React, { useState } from 'react';
import '../Calculator.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  function inputDigit(digit) {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  }

  function inputDecimal() {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  }

  function clearDisplay() {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  }

  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  }

  function calculate() {
    const inputValue = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return firstOperand + inputValue;
      case '-':
        return firstOperand - inputValue;
      case '*':
        return firstOperand * inputValue;
      case '/':
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  }

  return (
    <div className='rootApp'>
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="keypad">
                <div className="row">
                    <button onClick={() => inputDigit(7)}>7</button>
                    <button onClick={() => inputDigit(8)}>8</button>
                    <button onClick={() => inputDigit(9)}>9</button>
                    <button className="operator" onClick={() => performOperation('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={() => inputDigit(4)}>4</button>
                    <button onClick={() => inputDigit(5)}>5</button>
                    <button onClick={() => inputDigit(6)}>6</button>
                    <button className="operator" onClick={() => performOperation('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => inputDigit(1)}>1</button>
                    <button onClick={() => inputDigit(2)}>2</button>
                    <button onClick={() => inputDigit(3)}>3</button>
                    <button className="operator" onClick={() => performOperation('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => inputDigit(0)}>0</button>
                    <button onClick={() => inputDecimal()}>.</button>
                    <button className="operator" onClick={() => performOperation('+')}>+</button>
                    <button className="operator" onClick={() => calculate()}>=</button>
                </div>
                <div className="row">
                    <button className="clear" onClick={() => clearDisplay()}>AC</button>
                </div>
            </div>
        </div>
    </div>
  );
}
