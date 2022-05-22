import styles from "../styles/appNote.module.css";

export default function AppNote() {
  return (
    <div className={styles.note}>
      <div className={styles.note__header}>
        <span className={styles.note__title}>Title</span>
        <button className={styles.note__edit_btn}>Edit</button>
        <div className={styles.note__actions}>
          <button></button>
          <div className={styles.note__actions_menu}>
            <button>Add to Favorites</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
      <p className={styles.note__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a
        itaque, repellendus, officia reiciendis explicabo adipisci beatae odio
        doloremque aut est iure ut voluptatem?
      </p>
      <div className={styles.note__footer}>
        <small>20/08/2022</small>
      </div>
    </div>
  );
}
