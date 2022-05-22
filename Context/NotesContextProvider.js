import { createContext } from "react";
import { useState, useContext, useEffect } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [isReversed, setIsReversed] = useState(false)
    const [isAddNoteFormOpen, setIsAddNoteFormOpen] = useState(false);

    const addNote = (data) => {
        setNotes({ ...notes, [data.id]: data })
    }

    const toggleIsOpen = () => setIsOpen(!isOpen)

    const toggleIsAddNoteFormOpen = () => setIsAddNoteFormOpen(!isAddNoteFormOpen)

    const toggleIsReversed = () => setIsReversed(!isReversed)

    useEffect(() => console.log(isAddNoteFormOpen), [isAddNoteFormOpen])

    return <NotesContext.Provider value={{ notes, isOpen, toggleIsOpen, isReversed, toggleIsReversed, isAddNoteFormOpen, toggleIsAddNoteFormOpen, addNote }}>{children}</NotesContext.Provider>
}

export const useNotesContext = () => {
    return useContext(NotesContext);
}
