import { createContext } from "react";
import { useState, useContext } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState({})

    return <NotesContext.Provider value={{ notes }}>{children}</NotesContext.Provider>
}

export const useNotesContext = () => {
    return useContext(NotesContext);
}
