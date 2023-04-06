import NoteContext from './noteContext'
import React, { useState } from 'react'

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

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

    const json = await response.json();
    setNotes(json)
  }




   

  //Adding a new note
  const addNote = async (title, description, tag) => {
    // Api call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      },
      body: JSON.stringify({ title, description, tag })
    });
// eslint-disable-next-line 
    const note = await response.json();
    setNotes(notes.concat(note));
  }



  // Delete a note

  const deleteNote = async (id) => {
    // Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      }
    });
// eslint-disable-next-line 
    const json =await  response.json();
    const newNotes =notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);


  }

  // Edit a note

  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      },
      body: JSON.stringify({ title, description, tag })
    });
// eslint-disable-next-line 
    const json = await response.json();

    let newNotes= JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;