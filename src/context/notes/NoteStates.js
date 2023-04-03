import  NoteContext from './noteContext'
import React,{useState} from 'react'


const NoteState = (props)=>{

    const notesInitial =[
        {
          "_id": "642801bb4dd22e68b06b5a24",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern",
          "date": "2023-04-01T10:04:43.593Z",
          "__v": 0
        },
        {
          "_id": "642801c04dd22e68b06b5a28",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern",
          "date": "2023-04-01T10:04:48.652Z",
          "__v": 0
        },
        {
          "_id": "642804874dd22e68b06b5a2a",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern googogoogo",
          "date": "2023-04-01T10:16:39.932Z",
          "__v": 0
        },
        {
          "_id": "642804884dd22e68b06b5a2c",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern googogoogo",
          "date": "2023-04-01T10:16:40.517Z",
          "__v": 0
        },
        {
          "_id": "642804894dd22e68b06b5a2e",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern googogoogo",
          "date": "2023-04-01T10:16:41.086Z",
          "__v": 0
        },
        {
          "_id": "642804894dd22e68b06b5a30",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern googogoogo",
          "date": "2023-04-01T10:16:41.591Z",
          "__v": 0
        },
        {
          "_id": "6429134ef41807a1ed61e9e0",
          "user": "642726bfad4dec32429cc529",
          "title": "Taimoor",
          "description": "Life is awsom",
          "tag": "Mern googogoogo",
          "date": "2023-04-02T05:31:58.478Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;