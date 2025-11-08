import React from 'react';
import { render, screen } from '@testing-library/react';
import PublicHealthInfo from '../src/pages/PublicHealthInfo';

describe('PublicHealthInfo Page', () => {
  test('renders public health info content', () => {
    render(<PublicHealthInfo />);
    expect(screen.getByText(/public health information/i)).toBeInTheDocument();
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
    expect(screen.getByText(/we do not store sensitive data/i)).toBeInTheDocument();
    expect(screen.getByText(/static public health content/i)).toBeInTheDocument();
  });
});
