// Un reducer es una función pura, que recibe un stado y retorna un nuevo estado!
export const noteReducer = (state = [], action) => {
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
  