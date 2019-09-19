import React from 'react';
// styles
import styles from './Range.module.css';

const Range = ({ range, handleChangeRange }) => (
  <form className={styles.form}>
    <input
      className={styles.slider}
      type="range"
      name="range"
      value={range}
      onChange={handleChangeRange}
    />
  </form>
);

export default Range;
