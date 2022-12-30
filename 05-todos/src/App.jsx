import './App.css'
import { NotesProvider } from './Context/NotesContext'
import NoteList from './Notes/NoteList'
import NotesForm from './Notes/NotesForm'

function App() {


  return (
    <div className="App">
      <NotesProvider>
        <NotesForm/>
        <NoteList/>
      </NotesProvider>
    </div>
  )
}

export default App
