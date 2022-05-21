import Link from "next/link";

export default function AppSidebar() {
  return (
    <div>
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
  );
}
