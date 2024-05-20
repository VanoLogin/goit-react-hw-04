import styles from "./styles.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}
