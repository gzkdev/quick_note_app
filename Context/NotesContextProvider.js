import { createContext } from "react";
import { useState, useContext } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [isReversed, setIsReversed] = useState(false)

    const toggleIsOpen = () => setIsOpen(!isOpen)

    const toggleIsReversed = () => setIsReversed(!isReversed)

    return <NotesContext.Provider value={{ notes, isOpen, toggleIsOpen, isReversed, toggleIsReversed }}>{children}</NotesContext.Provider>
}

export const useNotesContext = () => {
    return useContext(NotesContext);
}
