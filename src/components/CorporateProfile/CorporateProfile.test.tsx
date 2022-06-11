import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CorporateProfile from './CorporateProfile';

describe('<CorporateProfile />', () => {
  test('it should mount', () => {
    render(<CorporateProfile />);
    
    const corporateProfile = screen.getByTestId('CorporateProfile');

    expect(corporateProfile).toBeInTheDocument();
  });
});