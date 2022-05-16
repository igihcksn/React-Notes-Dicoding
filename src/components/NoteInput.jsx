import React, { useContext } from 'react';
import { NotesContext } from '../utils/context';

const NoteInput = () => {
    const { characterLimit, noteTitle, noteDescription, handleTitleChange, handleDescriptionChange, handleSubmit } = useContext(NotesContext);
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form onSubmit={handleSubmit}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {characterLimit}
                </p>
                <input className="note-input__title" type="text" placeholder="Judul catatan ..." required maxLength="50" onChange={handleTitleChange} value={noteTitle} />
                <textarea className="note-input__textarea" type="text" rows="10" placeholder="Tuliskan detail catatanmu di sini ..." required onChange={handleDescriptionChange} value={noteDescription}></textarea>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
}

export default NoteInput;