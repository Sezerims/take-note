import React, {useState} from "react";

const TakeNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const keepNote = (event) => {
        const {name, value} = event.target;
        setNote(prevState => {
            if(name === "noteTitle") {
                return (
                    {
                        title: value,
                        content: prevState.content
                    }
                );
            } else {
                return (
                    {
                        title: prevState.title,
                        content: value
                    }
                );
            }
        });
    }

    return (
        <div className="take-note">
            <form onSubmit={(event) => {
                props.onAdd(note);
                setNote({
                    title: "",
                    content: ""
                });
                event.preventDefault();
            }} className="new-note">
                <div className="note-header">
                    <input onChange={keepNote} name="noteTitle" value={note.title} className="new-note-title" type="text" placeholder="New Note Title" autoComplete="off" />
                    <button type="submit" className="add-button" tabIndex="-1" ><i className="bi bi-x-lg" /></button>
                </div>
                <textarea onChange={keepNote} name="noteContent" value={note.content} className="new-note-content" cols="30" rows="5" placeholder="New Note Content" />
            </form>
        </div>
    );
};

export default TakeNote;