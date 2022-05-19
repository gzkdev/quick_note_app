import styles from '../styles/Home.module.css'
import AppHead from '../components/AppHead'
import NotesContextProvider from '../Data/NotesContextProvider'

export default function Home() {
  return (
    <NotesContextProvider>
      <AppHead />
      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </NotesContextProvider>
  )
}
