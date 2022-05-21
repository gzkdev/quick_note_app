import styles from '../styles/Home.module.css'
import AppHead from '../components/AppHead'
import NotesContextProvider from '../Data/NotesContextProvider'
import AppSidebar from '../components/AppSidebar'

export default function Home() {
  return (
    <NotesContextProvider>
      <AppHead />
      <div className="app">
        <AppSidebar />
        <h1>Hello world</h1>
      </div>
    </NotesContextProvider>
  )
}
