import React, { useContext } from 'react';
import { showFormattedDate } from '../utils';
import { NotesContext } from '../utils/context';

const NoteItem = ({ items }) => {
    const { deleteNote, setArchive, setUnArchive } = useContext(NotesContext);

    return (
        items.map((note) => (
            <div className="note-item" key={note.title}>
                <div className="note-item__content">
                    <h3 className="note-item__title">{note.title}</h3>
                    <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                    <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                    <button className="note-item__delete-button" onClick={() => deleteNote(note.id)}>Delete</button>
                    <button className="note-item__archive-button" onClick={() => note.archived ? setUnArchive(note.id) : setArchive(note.id)}>{note.archived ? 'Pindahkan' : 'Arsipkan'}</button>
                </div>
            </div>
        ))
    );
}

export default NoteItem;