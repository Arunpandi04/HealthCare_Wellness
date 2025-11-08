import React from 'react';
import { render, screen } from '@testing-library/react';
import ProviderDashboard from '../../src/pages/provider/ProviderDashboard';

describe('ProviderDashboard Page', () => {
  test('renders provider dashboard content', () => {
    render(<ProviderDashboard />);
    expect(screen.getByText(/provider dashboard/i)).toBeInTheDocument();
  });
});
