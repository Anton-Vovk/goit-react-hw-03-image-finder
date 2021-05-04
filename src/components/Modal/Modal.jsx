import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ children, activeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        activeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      activeModal();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  activeModal: PropTypes.func.isRequired,
};

export default Modal;
