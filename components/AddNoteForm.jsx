import { useNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/addNoteForm.module.css";
import { useRef } from "react";

export default function AddNoteForm() {
  const { isAddNoteFormOpen, toggleIsAddNoteFormOpen, addNote } =
    useNotesContext();

  const noteTitle = useRef();
  const noteText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle.current.value) {
      let date = new Date();
      let data = {
        id: date.toISOString(),
        title: noteTitle.current.value,
        content: noteText.current.value,
        date: date.toLocaleDateString(),
      };
      addNote(data);
      noteTitle.current.value = noteText.current.value = "";
    }

    return (
      <div
        data-toggle={isAddNoteFormOpen && isAddNoteFormOpen}
        className={styles.overlay}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form__header}>
            <button
              className={styles.form__button}
              onClick={toggleIsAddNoteFormOpen}
            >
              Close
            </button>
            <button type="submit" className={styles.form__button}>
              Save
            </button>
          </div>
          <input
            ref={noteTitle}
            className={styles.form__input}
            type="text"
            name="title"
            placeholder="Note title"
          />
          <textarea
            ref={noteText}
            className={styles.form__textarea}
            name="content"
            placeholder="Write something"
          ></textarea>
        </form>
      </div>
    );
  };
}
