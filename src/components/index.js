import React from 'react';
import { NotesProvider } from '../utils/context';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

const MainComponent = () => {
    return (
        <NotesProvider>
            <NoteHeader />
            <NoteBody />
        </NotesProvider>
    );
}

export default MainComponent;