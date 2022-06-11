import React, { FC } from 'react';
import styles from './Homepage.module.css';

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => (
  <div className={styles.Homepage} data-testid="Homepage">
    Homepage Component
  </div>
);

export default Homepage;
