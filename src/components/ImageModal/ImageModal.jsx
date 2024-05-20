import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={imageUrl} alt="" className={styles.image} />
    </Modal>
  );
}
