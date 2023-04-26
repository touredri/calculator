import './calculator.css';

const CalculatorKey = () => (
  <div className="calculator__keys">
    <table>
      <tr>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="AC"
          >
            AC
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="+/-"
          >
            +/-
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="%"
          >
            %
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="/"
          >
            &divide;
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" className="calculator__key" value="7">
            7
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="8">
            8
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="9">
            9
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="*"
          >
            &times;
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" className="calculator__key" value="4">
            4
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="5">
            5
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="6">
            6
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="-"
          >
            -
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" className="calculator__key" value="1">
            1
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="2">
            2
          </button>
        </td>
        <td>
          <button type="button" className="calculator__key" value="3">
            3
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="+"
          >
            +
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button type="button" className="calculator__key zero" value="0">
            0
          </button>
        </td>

        <td>
          <button type="button" className="calculator__key" value=".">
            .
          </button>
        </td>
        <td>
          <button
            type="button"
            className="calculator__key calculator__key--operator"
            value="="
          >
            =
          </button>
        </td>
      </tr>
    </table>
  </div>
);

export default CalculatorKey;
