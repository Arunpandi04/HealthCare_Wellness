import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../src/components/LoginForm';

describe('LoginForm', () => {
  test('renders login form fields', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('shows validation errors for empty fields', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test('shows error for invalid email', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  test('shows error for short password', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/role/i), { target: { value: 'provider' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    // No error messages should be present
    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/password must be at least 6 characters/i)).not.toBeInTheDocument();
  });
});
