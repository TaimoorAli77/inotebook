import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes}=context; 
  return (
<React.Fragment>
<AddNote />
    <div className="row m-3">
     <h2 >Your Notes</h2>
     {notes.map((note)=>{
        return <NoteItem key={note._id} note={note}/>
     })}
    </div>
    </React.Fragment>
  );
}

export default Notes;
