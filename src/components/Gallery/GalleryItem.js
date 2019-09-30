/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import noAva from '../../assets/No_Image_Available.jpg';
//styles
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  gallery: { thumbnail = '', title = '', num_comments = 0, permalink = '' },
}) => (
  <>
    {thumbnail !== 'self' ? (
      <img className={styles.img} src={thumbnail} alt={title} />
    ) : (
      <img className={styles.img} src={noAva} alt={title} />
    )}

    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>Number of comments: {num_comments}</p>
      <NavLink
        target="_blank"
        rel="noopener noreferrer"
        exact
        to={permalink}
        activeClassName={styles.active}
        className={styles.link}
      >
        Read more
      </NavLink>
    </article>
  </>
);

export default GalleryItem;
