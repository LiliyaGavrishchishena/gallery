/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import noImage from '../../assets/No_Image_Available.jpg';
//styles
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  gallery: { thumbnail = '', title = '', num_comments = 0, permalink = '' },
}) => (
  <>
    <div className={styles.card}>
      <img className={styles.img} src={thumbnail} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p>Number of comments: {num_comments}</p>
      <NavLink
        target="_blank"
        rel="noopener noreferrer"
        exact
        to={permalink}
        activeClassName={styles.active}
        className={styles.link}
      >
        Link
      </NavLink>
    </div>
  </>
);

export default GalleryItem;
