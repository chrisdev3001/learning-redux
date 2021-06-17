import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { noteReducer } from './reducers/noteReducer'


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
  return (
    <ul>
      {state.map(note => (
        <li key={note.id}>{note.content} - {note.important ? <strong>Important</strong> : <span>Not important</span>}</li>
      ))}
    </ul>
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

