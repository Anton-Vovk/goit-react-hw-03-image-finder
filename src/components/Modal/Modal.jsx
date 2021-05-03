import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, activeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        activeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  const handleBackdropClick = (event) => {
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

export default Modal;