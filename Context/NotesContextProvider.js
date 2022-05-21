import { createContext, useState, useEffect } from 'react'


export const NotesContext = createContext()

export default function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState({});
    const [trashedNotes, setTrashedNotes] = useState({}); const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen((prev) => !prev);

    const handleAddNote = (data) => {
        const newNotes = { data, ...notes };
        setNotes(newNotes);
    }

    const handleDeleteNote = (id) => {
        const note = notes[id];
        setTrashedNotes(note, ...trashedNotes)
        delete notes[id];
    }

    const handleUpdateNote = (data, id) => {
        notes[id] = data;
    }

    const handleDeleteTrashedNote = (id) => {
        delete trashedNotes[id]
    }

    useEffect(() => {
        console.log(notes);
        console.log(trashedNotes)
    }, [notes, trashedNotes])

    return (
        <NotesContext.Provider value={{ handleAddNote, handleDeleteNote, handleUpdateNote, handleDeleteTrashedNote, isOpen, toggleIsOpen }}>{children}</NotesContext.Provider>
    )
}
