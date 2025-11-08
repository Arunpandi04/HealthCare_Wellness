import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientProfile from '../../src/pages/patient/PatientProfile';

describe('PatientProfile Page', () => {
  test('renders sidebar and profile content', () => {
    render(<PatientProfile />);
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});
