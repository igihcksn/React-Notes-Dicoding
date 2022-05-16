import React, { useContext } from 'react';
import { NotesContext } from '../utils/context';

const NoteHeader = () => {
    const { searchTitle, handleSearchNotes } = useContext(NotesContext);

    return (
        <div className="note-app__header">
            <h1>Personal Notes</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan ..." onChange={handleSearchNotes} value={searchTitle} />
            </div>
        </div>
    );
}

export default NoteHeader;