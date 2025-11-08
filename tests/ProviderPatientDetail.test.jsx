import React from 'react';
import { render, screen } from '@testing-library/react';
import ProviderPatientDetail from '../../src/pages/provider/ProviderPatientDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ProviderPatientDetail Page', () => {
  test('renders patient detail content with id', () => {
    render(
      <MemoryRouter initialEntries={["/provider/patient/123"]}>
        <Routes>
          <Route path="/provider/patient/:id" element={<ProviderPatientDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/patient detail/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
    expect(screen.getByText(/placeholder detail view/i)).toBeInTheDocument();
  });
});
