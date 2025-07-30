import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const heading = screen.getByText(/my portfolio/i);
  expect(heading).toBeInTheDocument();
});
