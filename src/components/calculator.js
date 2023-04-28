import { useState } from 'react';
import './calculator.css';
import CalculatorKey from './calculatorkeys';
import calculate from '../logic/calculate';
import DisplayResult from './display';

const Calculator = () => {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    const newObj = calculate(obj, buttonName);
    setObj(newObj);
  };
  return (
    <div className="calculator">
      <DisplayResult result={obj.total} next={obj.next} operation={obj.operation} />
      { ' ' }
      <CalculatorKey handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
