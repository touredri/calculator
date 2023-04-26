import './calculator.css';
import PropTypes from 'prop-types';

const CalculatorKey = ({ handleClick }) => (
  <div className="calculator__keys">
    <table>
      <tr>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="AC"
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="+/-"
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="%"
            onClick={() => handleClick('%')}
          >
            %
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="÷"
            onClick={() => handleClick('÷')}
          >
            &divide;
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="7"
            onClick={() => handleClick('7')}
          >
            7
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="8"
            onClick={() => handleClick('8')}
          >
            8
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="9"
            onClick={() => handleClick('9')}
          >
            9
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="x"
            onClick={() => handleClick('x')}
          >
            &times;
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="4"
            onClick={() => handleClick('4')}
          >
            4
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="5"
            onClick={() => handleClick('5')}
          >
            5
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" name="6" onClick={() => handleClick('6')}>
            6
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="-"
            onClick={() => handleClick('-')}
          >
            -
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="1"
            onClick={() => handleClick('1')}
          >
            1
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="2"
            onClick={() => handleClick('2')}
          >
            2
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key"
            name="3"
            onClick={() => handleClick('3')}
          >
            3
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="+"
            onClick={() => handleClick('+')}
          >
            +
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button
            type="button"
            className="calculator__key zero"
            name="0"
            onClick={() => handleClick('0')}
          >
            0
          </button>
        </td>

        <td>
          <button
            type="button"
            className="calculator__key"
            name="."
            onClick={() => handleClick('.')}
          >
            .
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            name="="
            onClick={() => handleClick('=')}
          >
            =
          </button>
        </td>
      </tr>
    </table>
  </div>
);

CalculatorKey.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorKey;
