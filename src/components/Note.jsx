import React from "react";

const Note = (props) => (
    <div className="note">
        <div className="note-header">
            <h1>{props.title}</h1>
            <button onClick={() => props.onDelete(props.id)} className="delete-button"><i className="bi bi-x-lg" /></button>
        </div>
        <p>{props.content}</p>
    </div>
);

export default Note;