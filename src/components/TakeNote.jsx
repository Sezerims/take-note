import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const TakeNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const keepNote = (event) => {
        const {name, value} = event.target;
        setNote(prevNote =>
            name === "noteTitle" ? {
                title: value,
                content: prevNote.content
            } : {
                title: prevNote.title,
                content: value
            }
        );
    }

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div className="take-note">
            <form onSubmit={submitNote} className="new-note">
                <div className="note-header">
                    <input onChange={keepNote} name="noteTitle" value={note.title} className="new-note-title" type="text" placeholder="New Note Title" autoComplete="off" />
                    <Zoom in={true} >
                        <button type="submit" className="add-button" tabIndex="-1" >
                            <AddCircleOutlineIcon />
                        </button>
                    </Zoom>
                </div>
                <textarea onChange={keepNote} name="noteContent" value={note.content} className="new-note-content" cols="30" rows="5" placeholder="New Note Content" />
            </form>
        </div>
    );
};

export default TakeNote;