import styles from "./styles.module.css";

export default function LoadMoreBtn({ handleBtn }) {
  return (
    <button className={styles.btn} onClick={handleBtn}>
      Load more
    </button>
  );
}
