import styles from "../styles/appNotesContainer.module.css";

export default function AppNotesContainer() {
  return (
    <div className={styles.app__main}>
      <div className={styles.app__header}>
        <span>Hello dear 👋🏾</span>
        <h1>All Notes</h1>
      </div>
      <div className={styles.notes__container}>
        <div className={styles.app__note}></div>
      </div>
    </div>
  );
}
