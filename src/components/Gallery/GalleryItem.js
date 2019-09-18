/*eslint-disable */
import React from 'react';
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  galleryList: { thumbnail, title, num_comments, permalink },
}) => (
  <>
    <div className={styles.content}>
      <p className={styles.created}>{thumbnail}</p>
      <h2 className={styles.title}>{title}</h2>
      <p>{num_comments}</p>
      <p>{permalink}</p>
    </div>
  </>
);

export default GalleryItem;
