import { UseNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/floatingButton.module.css";
import { PlusIcon } from "@radix-ui/react-icons";

export default function FloatingButton() {
  const { toggleIsAddNoteFormOpen } = UseNotesContext();

  return (
    <button onClick={toggleIsAddNoteFormOpen} className={styles.button}>
      <PlusIcon />
    </button>
  );
}
