import { useState } from 'react';
import PropTypes from 'prop-types';
import './calculator.css';
import CalculatorKey from './calculatorkeys';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    const newObj = calculate(obj, buttonName);
    setObj(newObj);
  };
  return (
    <div className="calculator">
      <DisplayResult result={obj.total} next={obj.next} operation={obj.operation} />
      <CalculatorKey handleClick={handleClick} />
    </div>
  );
};

const DisplayResult = ({ result, next, operation }) => (
  <div className="calculator__display">
    <div>{next}</div>
    {' '}
    <div>{operation}</div>
    <div>{result}</div>
  </div>
);

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
export default Calculator;
