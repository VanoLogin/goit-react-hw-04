import styles from "./styles.module.css";

export default function SearchBar({ value, setValue, onSearch }) {
  function handleValue(event) {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleValue}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
