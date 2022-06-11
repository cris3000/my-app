import React, { FC } from 'react';
import styles from './Candidates.module.css';

interface CandidatesProps {}

const Candidates: FC<CandidatesProps> = () => (
  <div className={styles.Candidates} data-testid="Candidates">
    Candidates Component
  </div>
);

export default Candidates;
