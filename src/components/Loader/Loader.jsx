import styles from "./styles.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}
