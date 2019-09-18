import React, { Component } from 'react';
// components
import GalleryItem from './GalleryItem';
// styles
import styles from './Gallery.module.css';

export default class Gallery extends Component {
  state = {};

  render() {
    const { galleryList = [] } = this.props;
    return (
      <section>
        <ul className={styles.list}>
          {galleryList.map(gallery => (
            <li className={styles.item} key={gallery.id}>
              <GalleryItem galleryList={galleryList} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
