import styles from '../styles/Home.module.css'
import AppHead from '../components/AppHead'
import NotesContextProvider from '../Context/NotesContextProvider'
import AppSidebar from '../components/AppSidebar'
import AppNotesContainer from '../components/AppNotesContainer'

export default function Home() {
  return (
    <NotesContextProvider>
      <AppHead />
      <div className="app">
        <AppSidebar />
        <AppNotesContainer />
      </div>
    </NotesContextProvider>
  )
}
