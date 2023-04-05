import NoteContext from './noteContext'
import React, { useState } from 'react'


const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "642801bb4d2e68b06b5a24",
      "user": "642726bfad4dec32429cc529",
      "title": "Taimoor",
      "description": "Life is awsom",
      "tag": "Mern",
      "date": "2023-04-01T10:04:43.593Z",
      "__v": 0
    },
    {
      "_id": "642801c04dd22e68b05a28",
      "user": "642726bfad4dec32429cc529",
      "title": "Taimoor",
      "description": "Life is awsom",
      "tag": "Mern",
      "date": "2023-04-01T10:04:48.652Z",
      "__v": 0
    },
    {
      "_id": "642804874dd22e68b06b2a",
      "user": "642726bfad4dec32429cc529",
      "title": "Taimoor",
      "description": "Life is awsom",
      "tag": "Mern googogoogo",
      "date": "2023-04-01T10:16:39.932Z",
      "__v": 0
    },

    {
      "_id": "642804894dd22e68b06b5eea2e",
      "user": "642726bfad4dec32429cc529",
      "title": "Taimoor",
      "description": "Life is awsom",
      "tag": "Mern googogoogo",
      "date": "2023-04-01T10:16:41.086Z",
      "__v": 0
    },
    {
      "_id": "642804894dd22e68b06b5a3eerg0",
      "user": "642726bfad4dec32429cc529",
      "title": "Taimoor",
      "description": "Life is awsom3 yo ",
      "tag": "Mern googogoogo",
      "date": "2023-04-01T10:16:41.591Z",
      "__v": 0
    },

  ]

  const [notes, setNotes] = useState(notesInitial);


  // Add a  note

  const addNote = ( title, description, tag) => {
    //todo api call
    console.log("adding an new node ")
    const note = {
      "_id": "642804874dd22e68b06b2a",
      "user": "642726bfad4dec32429cc529",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-01T10:16:39.932Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  // Delete a note

  const deleteNote = (id) => {
    //todo api call
console.log("Deleting the node with id:" + id)
const newNote = notes.filter((note)=>{return note._id!==id})
setNotes(newNote);
  }

  // Edit a note

  const editNote = (id,title,description,tag) => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;