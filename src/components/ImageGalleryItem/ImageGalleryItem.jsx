import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewURL, tags, activeModal }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={activeModal}
      src={previewURL}
      alt={tags}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);


export default ImageGalleryItem;
