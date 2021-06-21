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


export const generateId = () => Math.floor(Math.random() * 999999999) +1

// Esto es un actionCreator (redux patrón)
export function createNote(content){
  return {
    type: '@notes/created',
    payload:{
      content,
      important: false,
      id: generateId()
    }
  }
}

export function toggleImportanceOf(id){
  return {
    type: '@notes/toggle_importance',
    payload: {
      id
    }
  }
}

export function initNotes(notes){
  return {
    type: '@notes/init',
    payload: notes
  }
}
  