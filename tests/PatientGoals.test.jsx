import React from 'react';
import { render, screen } from '@testing-library/react';
import PatientGoals from '../../src/pages/patient/PatientGoals';

describe('PatientGoals Page', () => {
  test('renders sidebar and daily goals content', () => {
    render(<PatientGoals />);
    expect(screen.getByText(/daily goals/i)).toBeInTheDocument();
  });
});
