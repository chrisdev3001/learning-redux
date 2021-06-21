import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'

import { getAll } from './services/notes'
import { initNotes } from './reducers/noteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then(notes => dispatch(initNotes(notes)))
  },[dispatch])

  function filterSelected(filter){
    
  }

  return (
    <div>
      <NewNote/>

      <div>
        all
        <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />

        important
        <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />

        not important
        <input type='radio' name='filter' onChange={() => filterSelected('NOT_IMPORTANT')} />
      </div>

      <Notes/>
    </div>
    
  )
}

export default App