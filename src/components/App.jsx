import React from "react";

// Import Components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

// Import Constants
import notes from "../notes";

const createNotes = notes.map(note =>
   <Note
       key={note.key}
       title={note.title}
       content={note.content}
   />
);

const App = () => (
    <div>
        <Header />
        {createNotes}
        <Footer />
    </div>
);

export default App;