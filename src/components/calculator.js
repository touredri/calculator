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
    <div
      className="calculator"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '60px',
        gap: '20px',
        width: '100%',
        padding: '20px',
      }}
    >
      <h2 style={{ textAlign: 'left' }}>Let&apos;s do some Math Operations</h2>
      <div
        style={{
          width: '70%',
          marginRight: '40px',
        }}
      >
        <DisplayResult
          result={obj.total}
          next={obj.next}
          operation={obj.operation}
        />
        <CalculatorKey handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
