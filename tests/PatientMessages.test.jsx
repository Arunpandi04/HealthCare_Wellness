import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientMessages from '../../src/pages/patient/PatientMessages';

describe('PatientMessages Page', () => {
  test('renders sidebar and messages content', () => {
    render(<PatientMessages />);
    expect(screen.getByText(/messages/i)).toBeInTheDocument();
    expect(screen.getByText(/no messages yet/i)).toBeInTheDocument();
  });
});
