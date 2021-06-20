import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

export default function NewNote() {
    const dispatch = useDispatch()

    function addNote(e) {
        e.preventDefault()
        const { target } = e
        const content = target.note.value
        target.note.value = ''

        dispatch(createNote(content))
    }



    return (
        <form onSubmit={addNote}>
            <h1>Mi form :)</h1>
            <input name="note" />
            <button>Add</button>
        </form>
    )
}
