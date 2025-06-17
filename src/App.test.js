import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Civilization VII title', () => {
  render(<App />);
  

  const titleElement = screen.getByRole('heading', { 
    name: /Civilization VII/i,
    level: 1
  });
  
  expect(titleElement).toBeInTheDocument();
});
