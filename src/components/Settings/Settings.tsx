import React, { FC } from 'react';
import styles from './Settings.module.css';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => (
  <div className={styles.Settings} data-testid="Settings">
    Settings Component
  </div>
);

export default Settings;
