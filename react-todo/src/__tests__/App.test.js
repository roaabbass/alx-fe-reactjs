// src/__tests__/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Adjust the import path as needed

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/counter app/i)).toBeInTheDocument();
  });

  test('displays initial count of 0', () => {
    render(<App />);
    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();
  });

  test('shows and hides input field on button click', () => {
    render(<App />);

    expect(screen.getByPlaceholderText(/type something.../i)).toBeInTheDocument();

    const toggleButton = screen.getByRole('button', { name: /hide input/i });
    fireEvent.click(toggleButton);
    expect(screen.queryByPlaceholderText(/type something.../i)).not.toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByPlaceholderText(/type something.../i)).toBeInTheDocument();
  });

  test('updates input value correctly', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/type something.../i);
    fireEvent.change(input, { target: { value: 'Hello, World!' } });
    expect(input.value).toBe('Hello, World!');
  });
});
