import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Civilization VII title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Civilization VII/i);
  expect(titleElement).toBeInTheDocument();
});
