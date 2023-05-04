import { render, fireEvent } from '@testing-library/react';
import CalculatorKey from '../components/calculatorkeys';

describe('CalculatorKey', () => {
  it('renders CalculatorKey component', () => {
    const { container } = render(<CalculatorKey handleClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls handleClick function with correct value when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<CalculatorKey handleClick={handleClick} />);
    const twoButton = getByTestId('two');
    fireEvent.click(twoButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith('2');
  });
});
