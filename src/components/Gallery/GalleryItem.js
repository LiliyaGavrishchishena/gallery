/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  gallery: { thumbnail = '', title = '', num_comments = 0, permalink = '' },
}) => (
  <>
    <div className={styles.content}>
      <img src={thumbnail} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p>{num_comments}</p>
      <NavLink
        exact
        to={permalink}
        activeClassName={styles.active}
        className={styles.link}
      >
        {permalink}
      </NavLink>
    </div>
  </>
);

export default GalleryItem;
