import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Payment from './Payment';

describe('<Payment />', () => {
  test('it should mount', () => {
    render(<Payment />);
    
    const payment = screen.getByTestId('Payment');

    expect(payment).toBeInTheDocument();
  });
});