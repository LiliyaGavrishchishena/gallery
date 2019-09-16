import React from 'react';
// styles
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.backdrop}>
    <div className={styles.Loader} />
  </div>
);

export default Spinner;
