import React, { FC } from 'react';
import styles from './Filters.module.css';

interface FiltersProps {}

const Filters: FC<FiltersProps> = () => (
  <div className={styles.Filters} data-testid="Filters">
    Filters Component
  </div>
);

export default Filters;
