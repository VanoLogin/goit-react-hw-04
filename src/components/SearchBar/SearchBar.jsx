import styles from "./styles.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ value, setValue, onSearch }) {
  function handleValue(event) {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      toast.error("Please fill out the search bar", {
        duration: 4000,
        position: "top-right",
      });
      return;
    }
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
