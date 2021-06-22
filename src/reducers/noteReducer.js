import { getAll, createNewNote } from '../services/notes'

// Un reducer es una función pura, que recibe un stado y retorna un nuevo estado!
export const noteReducer = (state = [], action) => {
  console.log('ACTION', action)

    if(action.type === '@notes/init'){
      return action.payload
    }

    if(action.type === '@notes/created'){
        return [
            ...state,
            action.payload
        ]
        /* Forma incorrecta de transformar state - mutable
            return state.concat(action.payload)
        */
    }

    if(action.type === '@notes/toggle_importance'){
        const { id } = action.payload
        return state.map(note => {
            if(note.id === id){
                return {
                    ...note,
                    important: !note.important
                }
                /* Forma incorrecta de transformar state - mutable
                    note.important = !note.important 
                */
            }
            return note    
        })
    }
  
    return state
}

/* Logica de action creators debe ser la mínima posible (no meter, logica negocio, conexiones db, apis, etc. Eso debe ir minimo en un servicio) */
// Esto es un actionCreator (redux patrón)
export function createNote(content){
  return async(dispatch) => {
    const newNote = await createNewNote(content)
    dispatch({
      type: '@notes/created',
      payload: newNote
    })
  }
/*   return {
    type: '@notes/created',
    payload: note
  } */
}

export function toggleImportanceOf(id){
  return {
    type: '@notes/toggle_importance',
    payload: {
      id
    }
  }
}

export function initNotes(){
  return async(dispatch) => {
    const notes = await getAll()
    dispatch({
      type: '@notes/init',
      payload: notes
    })
  }


}
  