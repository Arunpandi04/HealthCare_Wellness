import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientDashboard from '../../src/pages/patient/PatientDashboard';

describe('PatientDashboard Page', () => {
  test('renders sidebar and dashboard content', () => {
    render(<PatientDashboard />);
    expect(screen.getByText(/welcome, patient/i)).toBeInTheDocument();
    expect(screen.getByText(/wellness goals/i)).toBeInTheDocument();
    expect(screen.getByText(/preventive care reminders/i)).toBeInTheDocument();
  });
});
