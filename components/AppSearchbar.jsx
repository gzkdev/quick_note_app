import { useNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/appSearchbar.module.css";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function AppSearchbar({ state, stateFunction, toggle }) {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbar__input}
        type="text"
        name="search"
        placeholder="Search notes..."
      />
      <button onClick={toggle} className={styles.searchbar__button}>
        <HamburgerMenuIcon />
      </button>
    </div>
  );
}
