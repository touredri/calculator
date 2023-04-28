import PropTypes from 'prop-types';
import './calculator.css';

const DisplayResult = ({ result, next, operation }) => (
  <div className="calculator__display">
    <div>
      {result}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
    <div />
    {' '}
  </div>
);

DisplayResult.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
export default DisplayResult;
