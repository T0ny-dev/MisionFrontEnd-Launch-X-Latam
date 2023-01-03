import { useEffect, useState } from "react";

const list = [
  {title:"hola", message:"Mundo", id:"123"},
  {title:"hola", message:"Mundo", id:"1234"}
];

const LOCALSTORAGE_KEY = "MYAPP.list";

function  useNotes(){
  const[notes, setNotes] = useState([]);

  useEffect(()=> {
    if(localStorage.getItem(LOCALSTORAGE_KEY)){
      setNotes(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
    }
  },[]);

  useEffect(()=> {
    if (!notes || notes.length == 0) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
  }, [notes]);

  function add(title, message) {
    const id = Date.now();
    const noteObject = {title, message, id};
    setNotes([noteObject, ...notes]);
  }

  function remove(id){
    let newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes)
  }

  return {
    notes, 
    add, 
    remove
  }
    
}

export default useNotes;