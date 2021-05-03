import React from 'react';
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

export default ImageGallery;
