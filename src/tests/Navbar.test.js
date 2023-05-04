import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom/extend-expect';

test('renders navigation links', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(getByText('Math Magicians')).toBeInTheDocument();
  expect(getByText('Home')).toHaveAttribute('href', '/');
  expect(getByText('Calculator')).toHaveAttribute('href', '/calculator');
  expect(getByText('Quote')).toHaveAttribute('href', '/quote');
});
