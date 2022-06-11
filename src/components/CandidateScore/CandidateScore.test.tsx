import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CandidateScore from './CandidateScore';

describe('<CandidateScore />', () => {
  test('it should mount', () => {
    render(<CandidateScore />);
    
    const candidateScore = screen.getByTestId('CandidateScore');

    expect(candidateScore).toBeInTheDocument();
  });
});