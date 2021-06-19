import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { noteReducer, createNote, toggleImportanceOf } from './reducers/noteReducer'

const store = createStore(noteReducer)

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'Me gusta aprender React!',
    important: true,
    id: 1,
  }
})

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'Tengo hambre!!!',
    important: false,
    id: 2,
  }
})

const App = () => {
  const state = store.getState()

  function addNote(e){
    e.preventDefault()
    const { target } = e
    const content = target.note.value
    target.note.value = ''

    store.dispatch(createNote(content))
  }

  function toggleImportantNote(id){
    store.dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <h1>Mi form :)</h1>
        <input name="note" />
        <button>Add</button>
      </form> 


      <ul>
        {state.map(note => (
          <li key={note.id} onClick={() => toggleImportantNote(note.id)}>{note.content} - {note.important ? <strong>Important</strong> : <span>Not important</span>}</li>
        ))}
      </ul>  
    </div>
    
  )
}

const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)

