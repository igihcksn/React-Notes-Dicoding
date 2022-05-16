import React from 'react';
import NoteItem from './NoteItem';
import NotFound from './NotFound';

const NoteList = ({ items, archived = false }) => {
    const notes = archived ? items.filter(note => note.archived === true) : items.filter(note => note.archived !== true);

    return (
        <>
            {!notes.length && <NotFound />}
            {notes.length > 0 && 
                <div className="notes-list">
                    <NoteItem items={notes} />
                </div>
            }
        </>
    );
}

export default NoteList;