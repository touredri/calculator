import { render } from '@testing-library/react';
import DisplayQuote from '../components/quote/DisplayQuote';

describe('DisplayQuote', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<DisplayQuote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
