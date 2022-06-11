import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InterviewHistoryQuestions from './InterviewHistoryQuestions';

describe('<InterviewHistoryQuestions />', () => {
  test('it should mount', () => {
    render(<InterviewHistoryQuestions />);
    
    const interviewHistoryQuestions = screen.getByTestId('InterviewHistoryQuestions');

    expect(interviewHistoryQuestions).toBeInTheDocument();
  });
});