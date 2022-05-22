import styles from "../styles/appNote.module.css";

export default function AppNote() {
  return (
    <div className={styles.note}>
      <div>
        <span>Title</span>
        <div>
          <button>Menu</button>
          <div></div>
        </div>
      </div>
    </div>
  );
}
