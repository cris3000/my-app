import React, { FC } from 'react';
import styles from './Search.module.css';

interface SearchProps {}

const Search: FC<SearchProps> = () => (
  <div className={styles.Search} data-testid="Search">
    Search Component
  </div>
);

export default Search;
