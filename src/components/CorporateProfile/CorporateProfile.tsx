import React, { FC } from 'react';
import styles from './CorporateProfile.module.css';

interface CorporateProfileProps {}

const CorporateProfile: FC<CorporateProfileProps> = () => (
  <div className={styles.CorporateProfile} data-testid="CorporateProfile">
    CorporateProfile Component
  </div>
);

export default CorporateProfile;
