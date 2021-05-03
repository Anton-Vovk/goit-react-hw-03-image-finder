import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => {
        const { id, previewURL, tags } = image;
        return (
          <ImageGalleryItem
            toggleModal={() => toggleModal(image)}
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
