import React, { useEffect, useState } from 'react';
import { getInitialData } from '.';
import { v4 as uuid } from 'uuid';

const NotesContext = React.createContext({});

const NotesProvider = (props) => {
    const [notesList, setNotesList] = useState({});
    const [filterList, setFilterList] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const [characterLimit, setCharacterLimit] = useState(50);

    useEffect(() => {
        setTimeout(() => {
            setNotesList(getInitialData());
            setIsloading(false);
        }, 1000);
    }, []);

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
        setCharacterLimit((previousState) => previousState-1);
    };

    const handleDescriptionChange = (e) => {
        setNoteDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = [
            ...notesList,
            {
                id: uuid(),
                title: noteTitle,
                body: noteDescription,
                archived: false,
                createdAt: +new Date(),
            }
        ];
        
        setNotesList(newData);
        setNoteTitle('');
        setNoteDescription('');
    };

    const handleSearchNotes = (e) => {
        const search = notesList.filter(note => note.title.search(e.target.value) !== -1);
        setFilterList(search);
        setSearchTitle(e.target.value);
    };

    const setArchive = (noteId) => {
        const notesIndex = notesList.findIndex(note => note.id === noteId);
        notesList[notesIndex].archived = true;
        setNotesList([...notesList]);
    };

    const setUnArchive = (noteId) => {
        const notesIndex = notesList.findIndex(note => note.id === noteId);
        notesList[notesIndex].archived = false;
        setNotesList([...notesList]);
    };

    const deleteNote = (noteId) => {
        const notes = notesList.filter(note => note.id !== noteId);
        setNotesList(notes);
    };

    return (
        <NotesContext.Provider value={{
            notesList,
            filterList,
            characterLimit,
            noteTitle,
            noteDescription,
            searchTitle,
            isLoading,
            setArchive,
            setUnArchive,
            deleteNote,
            handleTitleChange,
            handleDescriptionChange,
            handleSubmit,
            handleSearchNotes,
        }}>
            {props.children}
        </NotesContext.Provider>
    );
};

export {
    NotesContext,
    NotesProvider,
};
