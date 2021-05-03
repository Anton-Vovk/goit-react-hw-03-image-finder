import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewURL, tags, activeModal }) => (
  <li className={styles.ImageGallaryItem}>
    <img
      className={styles.ImageGallaryItemImage}
      onClick={activeModal}
      src={previewURL}
      alt={tags}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  activeModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
