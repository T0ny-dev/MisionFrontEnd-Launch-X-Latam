import { useContext } from "react";
import { NotesContext } from "../Context/NotesContext";
import Note from "./Note";




function NoteList() {
  const { notes } = useContext(NotesContext)
  return (
    <div>
      <p style={{textAlign:"right"}} className="notice">(Tienes {notes.length} todos actualmente)</p>
      {
        notes.map(note => <Note key={note.id} id={note.id} title={note.title} message={note.message}/>)
      }
    </div>
  )
}

export default NoteList;