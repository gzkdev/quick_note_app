import AppHead from "../components/AppHead"
import AppNotesContainer from "../components/AppNotesContainer"
import AppSidebar from "../components/AppSidebar"
import FloatingButton from "../components/FloatingButton"
import AddNoteForm from "../components/AddNoteForm"

export default function Home() {
  return (
    <>
      <AppHead />
      <div className="app">
        <AppSidebar />
        <AppNotesContainer />
      </div>
      <FloatingButton />
      <AddNoteForm />
    </>
  )
}
