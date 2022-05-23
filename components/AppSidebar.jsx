import Link from "next/link";
import { UseNotesContext } from "../context/NotesContextProvider";
import styles from "../styles/appSidebar.module.css";

export default function AppSidebar() {
  const { isOpen, toggleIsOpen } = UseNotesContext();
  return (
    <div
      onClick={toggleIsOpen}
      data-toggle={isOpen && "true"}
      className={styles.sidebar}
    >
      <div className={styles.sidebar__container}>
        <span className={styles.sidebar__title}>notebook</span>
        <nav className={styles.sidebar__nav}>
          <ul className={styles.sidebar__list}>
            <li>
              <Link href="/">
                <a>All Notes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Favorites</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Trash</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>All Notes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Categories</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
