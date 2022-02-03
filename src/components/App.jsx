import React, {useState} from "react";
import Header from "./Header";
import TakeNote from "./TakeNote"
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

const App = () => {

    const [notesList, setNotesList] = useState(notes);

    const addNote = (note) => {
        setNotesList(prevNotesList => {
            if(note.title.trim() !== "" || note.content.trim() !== "") {
                return [...prevNotesList, note];
            } else {
                return prevNotesList;
            }
        });
    };

    const deleteNote = (id) => {
        setNotesList(prevNotesList => {
            return prevNotesList.filter((note, index) => {
                return index !== id;
            });
        });
    };

    const createNotes = notesList.map((note, index) =>
        <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={note.title}
            content={note.content}
        />
    );

    return (
        <div>
            <Header/>
            <section className="notes-section">
                <TakeNote onAdd={addNote}/>
                {createNotes}
            </section>
            <Footer/>
        </div>
    );
};

export default App;