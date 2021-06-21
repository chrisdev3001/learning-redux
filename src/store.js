import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { noteReducer } from './reducers/noteReducer'
import { filterReducer } from './reducers/filterReducer'

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
  })
  
export const store = createStore(reducer, composeWithDevTools())