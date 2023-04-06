import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes , editNote } = context;
  useEffect(() => {
    getNotes()
  }, []);

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  const ref = useRef(null);
  const refclose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  //eslint-disable-next-line
  const handleClick = (e) => {
    editNote(note.id, note.etitle,note.edescription, note.etag )
    refclose.current.click();

  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <React.Fragment>
      <AddNote />

      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' onChange={onchange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription} name='edescription' onChange={onchange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag'  minLength={5} required value={note.etag
                  } onChange={onchange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" minLength={5} required data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5}  onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row m-3">
        <h2 >Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "You have no Notes to display."}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </React.Fragment>
  );
}

export default Notes;
