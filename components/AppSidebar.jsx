import Link from "next/link";
import { useContext } from "react";
import { NotesContext } from "../Context/NotesContextProvider";
import styles from "../styles/appSidebar.module.css";

export default function AppSidebar() {
  const { isOpen, setIsOpen } = useContext(NotesContext);
  return (
    <div data-toggle={isOpen && "true"} className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <span>Notebook</span>
        <nav>
          <ul>
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
