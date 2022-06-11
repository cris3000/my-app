import React, { FC } from 'react';
import styles from './InterviewHistoryQuestions.module.css';

interface InterviewHistoryQuestionsProps {}

const InterviewHistoryQuestions: FC<InterviewHistoryQuestionsProps> = () => (
  <div className={styles.InterviewHistoryQuestions} data-testid="InterviewHistoryQuestions">
    InterviewHistoryQuestions Component
  </div>
);

export default InterviewHistoryQuestions;
