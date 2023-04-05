import NoteContext from './noteContext'
import React, { useState } from 'react'


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [ ]

  const [notes, setNotes] = useState(notesInitial);


  // Get all notes

  const getNotes = async () => {
    //Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      }
    });

    const json =await response.json();
    console.log(json)
    setNotes(json)
  }

  // Delete a note

  const deleteNote = (id) => {
    //todo api call
    console.log("Deleting the node with id:" + id)
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }

  // Edit a note

  const editNote = async (id, title, description, tag) => {
    // Api call
     // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      },
      body: JSON.stringify({title,description,tag})
    });

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes,  deleteNote, editNote , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;