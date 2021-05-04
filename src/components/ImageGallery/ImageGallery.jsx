import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, activeModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => {
        const { id, previewURL, tags } = image;
        return (
          <ImageGalleryItem
            activeModal={() => activeModal(image)}
            key={id}
            previewURL={previewURL}
            type={tags}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  activeModal: PropTypes.func.isRequired,
};

export default ImageGallery;
