import { useNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/appSearchbar.module.css";

export default function AppSearchbar() {
  const { toggleIsOpen } = useNotesContext();

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbar__input}
        type="text"
        name="search"
        placeholder="Search notes..."
      />
      <button
        onClick={toggleIsOpen}
        className={styles.searchbar__button}
      ></button>
    </div>
  );
}
