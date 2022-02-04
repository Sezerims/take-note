import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const Note = (props) => (
    <div className="note">
        <div className="note-header">
            <h1>{props.title}</h1>
            <Zoom in={true} >
            <button onClick={() => props.onDelete(props.id)} className="delete-button">
                <RemoveCircleOutlineIcon />
            </button>
            </Zoom>
        </div>
        <p>{props.content}</p>
    </div>
);

export default Note;