import React from "react";

const Note = (props) => (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
);

export default Note;