import { useNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/floatingButton.module.css";

export default function FloatingButton() {
  const { toggleIsAddNoteFormOpen } = useNotesContext();

  return (
    <button onClick={toggleIsAddNoteFormOpen} className={styles.button}>
      New
    </button>
  );
}
