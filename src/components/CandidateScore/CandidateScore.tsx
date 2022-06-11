import React, { FC } from 'react';
import styles from './CandidateScore.module.css';

interface CandidateScoreProps {}

const CandidateScore: FC<CandidateScoreProps> = () => (
  <div className={styles.CandidateScore} data-testid="CandidateScore">
    CandidateScore Component
  </div>
);

export default CandidateScore;
