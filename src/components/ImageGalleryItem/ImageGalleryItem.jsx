import React from 'react';
import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  activeModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
