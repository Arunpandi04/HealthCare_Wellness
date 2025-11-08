import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App Routing', () => {
  test('renders Home page at root path', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome|home/i)).toBeInTheDocument();
  });

  test('renders Login page at /login', () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('renders Register page at /register', () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  test('renders PublicHealthInfo page at /public/health-info', () => {
    render(
      <MemoryRouter initialEntries={["/public/health-info"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/health|info/i)).toBeInTheDocument();
  });

  test('renders PatientDashboard page at /patient/dashboard', () => {
    render(
      <MemoryRouter initialEntries={["/patient/dashboard"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test('renders PatientProfile page at /patient/profile', () => {
    render(
      <MemoryRouter initialEntries={["/patient/profile"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });

  test('renders PatientGoals page at /patient/goals', () => {
    render(
      <MemoryRouter initialEntries={["/patient/goals"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/goal/i)).toBeInTheDocument();
  });

  test('renders PatientMessages page at /patient/messages', () => {
    render(
      <MemoryRouter initialEntries={["/patient/messages"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/message/i)).toBeInTheDocument();
  });
});
