import styles from "../styles/appNote.module.css";

export default function AppNote({ data }) {
  return (
    <div className={styles.note}>
      <div className={styles.note__header}>
        <span className={styles.note__title}>{data.title}</span>
        <button className={styles.note__edit_btn}>Edit</button>
        <div className={styles.note__actions}>
          <button></button>
          <div className={styles.note__actions_menu}>
            <button>Add to Favorites</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
      <p className={styles.note__content}>{data.content}</p>
      <div className={styles.note__footer}>
        <small>{data.date}</small>
      </div>
    </div>
  );
}
