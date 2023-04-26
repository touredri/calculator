import './calculator.css';
import CalculatorKey from './calculatorkeys';

const Calculator = () => (
  <div className="calculator">
    <DisplayResult />
    <CalculatorKey />
  </div>
);

const DisplayResult = () => <div className="calculator__display">0</div>;

export default Calculator;
