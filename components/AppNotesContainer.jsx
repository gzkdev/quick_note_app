import styles from "../styles/appNotesContainer.module.css";
import AppNote from "./AppNote";
import AppSearchbar from "./AppSearchbar";

export default function AppNotesContainer() {
  return (
    <div className={styles.app__main}>
      <div className={styles.app__header}>
        <span>Hello dear 👋🏾</span>
        <h1>All Notes</h1>
      </div>
      <AppSearchbar />
      <div className={styles.notes__container}>
        <AppNote />
      </div>
    </div>
  );
}
