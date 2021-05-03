import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

export default Modal;