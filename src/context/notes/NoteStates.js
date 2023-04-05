import NoteContext from './noteContext'
import React, { useState } from 'react'
// eslint-disable-next-line
import addNote from '../../components/AddNote';


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
    console.log(json)
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
    const json = response.json();
    // const json = await response.json();
    // console.log(json)
    // setNotes(json)
    // eslint-disable-next-line
    console.log("adding a new note")
    const note = {
      "_id": "642804874dd22e68b06b5a2a",
      "user": "642726bfad4dec32429cc529",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-01T10:16:39.932Z",
      "__v": 0
    }
    // console.log("adding a new note")
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

    const json =  response.json();
    console.log(json);
    console.log("Deleting the node with id:"+ id)
    const newNotes =notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);


  }

  // Edit a note

  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzI2YmZhZDRkZWMzMjQyOWNjNTI5In0sImlhdCI6MTY4MDMzNTk2MH0.vZdBy_SScU8Piuo3b4r_w47qVDHZh8nb-CAbMVgtVrI'
      },
      body: JSON.stringify({ title, description, tag })
    });
// eslint-disable-next-line 
    const json = response.json();
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
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;