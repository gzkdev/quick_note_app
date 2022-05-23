import Link from "next/link";
import { UseNotesContext } from "../context/NotesData";
import styles from "../styles/appSidebar.module.css";
import {
  LayersIcon,
  TrashIcon,
  MoonIcon,
  CubeIcon,
  StarIcon,
} from "@radix-ui/react-icons";

export default function AppSidebar() {
  const { isOpen, toggleIsOpen } = UseNotesContext();
  return (
    <div
      onClick={toggleIsOpen}
      data-toggle={isOpen && "true"}
      className={styles.sidebar}
    >
      <div className={styles.sidebar__container}>
        <span className={styles.sidebar__title}>Minotes</span>
        <nav className={styles.sidebar__nav}>
          <ul className={styles.sidebar__list}>
            <li>
              <Link href="/">
                <a>
                  <CubeIcon /> <span>All Notes</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <StarIcon /> <span>Favorites</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <TrashIcon /> <span>Trash</span>
                </a>
              </Link>
            </li>
            <li>
              <button>
                <LayersIcon />
                <span>Add new notes to top</span>
              </button>
            </li>

            <li>
              <button>
                <MoonIcon />
                <span>Toggle Dark Mode</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
