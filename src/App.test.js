// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AscendexAPI title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AscendexAPI/i);
    expect(titleElement).toBeInTheDocument();
});
