import React from 'react';
// styles
import styles from './Headline.module.css';

const Headline = props => {
  const { text } = props;
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{text}</h2>
    </header>
  );
};

export default Headline;
