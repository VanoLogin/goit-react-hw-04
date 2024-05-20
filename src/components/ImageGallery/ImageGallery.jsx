// src/components/ImageGallery/ImageGallery.jsx
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./styles.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.galleryItem}
          onClick={() => onImageClick(image.urls.regular)}
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
}
