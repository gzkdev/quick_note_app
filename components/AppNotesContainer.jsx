import { UseNotesContext } from "../context/NotesData";
import { useState } from "react";
import styles from "../styles/appNotesContainer.module.css";
import AppNote from "./AppNote";
import AppSearchbar from "./AppSearchbar";
import EmptyState from "./EmptyState";

export default function AppNotesContainer() {
  const { notes, isReversed, toggleIsReversed, toggleIsOpen } =
    UseNotesContext();
  const [searchText, setSearchText] = useState("");

  const NOTES_LIST = Object.keys(notes);
  const NOTES_LIST_REVERSED = Object.keys(notes).reverse();
  const NOTES_TO_DISPLAY = isReversed ? NOTES_LIST_REVERSED : NOTES_LIST;

  const NOTES_ON_SCREEN = NOTES_TO_DISPLAY.filter((note) =>
    notes[note].title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.app__main}>
      <div className={styles.app__header}>
        <span>Hello dear 👋🏾</span>
        <h1>All Notes</h1>
      </div>
      <AppSearchbar
        state={searchText}
        stateFunction={setSearchText}
        toggle={toggleIsOpen}
      />
      {NOTES_LIST.length > 0 ? (
        <div className={styles.notes__container}>
          {NOTES_ON_SCREEN.length > 0
            ? NOTES_ON_SCREEN.map((note) => (
                <AppNote key={notes[note].id} data={notes[note]} />
              ))
            : "No matching notes"}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
