import React from 'react';

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text"> {note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem voluptate recusandae, accusantium reiciendis sit error deserunt hic pariatur, provident eligendi eius soluta aliquam illo quibusdam nulla officia autem nisi nostrum quaerat earum iste maxime.</p>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;
