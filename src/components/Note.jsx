import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Zoom from '@mui/material/Zoom';

const Note = (props) => (
    <div className="note">
        <div className="note-header">
            <h1 className="note-title">{props.title}</h1>
            <Zoom in={true}>
                <button onClick={() => props.onDelete(props.id)} className="delete-button" tabIndex="-1">
                    <RemoveCircleOutlineIcon />
                </button>
            </Zoom>
        </div>
        <p className="note-content">{props.content}</p>
    </div>
);

export default Note;