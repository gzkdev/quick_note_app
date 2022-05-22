import AppHead from "../components/AppHead"
import AppNotesContainer from "../components/AppNotesContainer"
import AppSidebar from "../components/AppSidebar"

export default function Home() {
  return (
    <>
      <AppHead />
      <div className="app">
        <AppSidebar />
        <AppNotesContainer />
      </div>
    </>
  )
}
