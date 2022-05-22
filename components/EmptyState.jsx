import styles from "../styles/emptyState.module.css";

function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}></div>
      <div className={styles.title}>Empty Notes</div>
      <span className={styles.text}>You don&apos;t have any notes now</span>
    </div>
  );
}

export default EmptyState;
