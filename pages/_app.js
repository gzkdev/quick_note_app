import { NotesContextProvider } from '../context/NotesData'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NotesContextProvider>
      <Component {...pageProps} />
    </NotesContextProvider>
  )
}

export default MyApp
