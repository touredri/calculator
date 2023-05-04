import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/home';

describe('Home', () => {
  it('renders the text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to our page')).toBeInTheDocument();
  });

  it('renders correct', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
