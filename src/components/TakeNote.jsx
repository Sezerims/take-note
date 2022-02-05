import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Zoom from '@mui/material/Zoom';

const TakeNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

    const expand = () => {
        setIsExpanded(true);
    }

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
                {isExpanded &&
                    <div className="note-header">
                        <input onChange={keepNote} name="noteTitle" value={note.title} className="new-note-title"
                               type="text" placeholder="New Note Title" autoComplete="off" spellCheck="false" />
                        <Zoom in={isExpanded}>
                            <button type="submit" className="add-button" tabIndex="-1">
                                <AddCircleOutlineIcon />
                            </button>
                        </Zoom>
                    </div>
                }
                <textarea onFocus={expand} onChange={keepNote} name="noteContent" value={note.content}
                          className="new-note-content" cols="30" rows={isExpanded ? 7 : 1}
                          placeholder={isExpanded ? "New Note Content" : "Take Note!"} spellCheck="false" />
            </form>
        </div>
    );
};

export default TakeNote;