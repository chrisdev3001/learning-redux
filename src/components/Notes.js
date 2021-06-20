import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

/* Contenido: componente tonto que sólo pinta datos */
function Note({note, toggleImportantNote}){
    return (
        <li key={note.id} onClick={() => toggleImportantNote(note.id)}>{note.content} - {note.important ? <strong>Important</strong> : <span>Not important</span>}</li>
    )
}

export default function NotesContainer(){
    const notes = useSelector(state => state.notes)   // Selecciona una parte del estado a la que me quiero suscribir
    const dispatch = useDispatch()              // Dispatcher

    function toggleImportantNote(id) {
        dispatch(toggleImportanceOf(id))
    }
    return <Notes notes={notes} toggleImportantNote={toggleImportantNote} />
}

/* Contenedor: tiene lógica de cómo hacer las cosas */
function Notes({notes, toggleImportantNote}) {
    return (
        <ul>
            {notes.map(note => <Note note={note} toggleImportantNote={toggleImportantNote} />)}
        </ul>
    )
}
