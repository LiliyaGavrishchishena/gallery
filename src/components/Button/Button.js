import React from 'react';
// styles
import styles from './Button.module.css';

const Button = props => {
  const { refresh } = props;
  return (
    <div>
      <button className={styles.btn} onClick={() => console.log(refresh)}>
        {refresh}
      </button>
    </div>
  );
};

export default Button;
