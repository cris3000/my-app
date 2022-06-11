import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Candidates from './Candidates';

describe('<Candidates />', () => {
  test('it should mount', () => {
    render(<Candidates />);
    
    const candidates = screen.getByTestId('Candidates');

    expect(candidates).toBeInTheDocument();
  });
});