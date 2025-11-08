import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Page', () => {
  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/health care portal/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText(/doctors/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('renders hero section content', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/a professional/i)).toBeInTheDocument();
    expect(screen.getByText(/years experience/i)).toBeInTheDocument();
    expect(screen.getByText(/happy patients/i)).toBeInTheDocument();
    expect(screen.getByText(/medical experts/i)).toBeInTheDocument();
  });

  test('renders sign in and register buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument();
  });
});
