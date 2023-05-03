import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});