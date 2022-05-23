import { useNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/floatingButton.module.css";
import { PlusIcon } from "@radix-ui/react-icons";

export default function FloatingButton() {
  const { toggleIsAddNoteFormOpen } = useNotesContext();

  return (
    <button onClick={toggleIsAddNoteFormOpen} className={styles.button}>
      <PlusIcon />
    </button>
  );
}
