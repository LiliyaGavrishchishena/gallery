import React from 'react';
// styles
import styles from './Headline.module.css';

const Headline = props => {
  const { text } = props;
  return <div className={styles.title}>{text}</div>;
};

export default Headline;
