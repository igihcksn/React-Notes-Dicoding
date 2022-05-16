import React, { useContext } from 'react';
import { NotesContext } from '../utils/context';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NotFound from './NotFound';

const NoteBody = () => {
    const { filterList, notesList, isLoading } = useContext(NotesContext);
    const notes = filterList ?? notesList;

    return (
        <div className="note-app__body">
            <NoteInput />
            <h2>Catatan Aktif</h2>
            {isLoading && <NotFound message="Memuat data ..." />}
            {!isLoading && <NoteList items={notes} />}
            <h2>Arsip</h2>
            {isLoading && <NotFound message="Memuat data ..." />}
            {!isLoading && <NoteList items={notes} archived />}
        </div>
    );
}

export default NoteBody;