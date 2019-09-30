import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './Range.module.css';

const Range = ({ minComments, updateMinComments }) => (
  <form className={styles.form}>
    <p className={styles.question}>How many comments to show?</p>
    <input
      className={styles.slider}
      type="range"
      name="range"
      value={minComments}
      onChange={updateMinComments}
      min={0}
      max={300}
    />
  </form>
);

Range.propTypes = {
  minComments: PropTypes.number.isRequired,
  updateMinComments: PropTypes.func.isRequired,
};

export default Range;
