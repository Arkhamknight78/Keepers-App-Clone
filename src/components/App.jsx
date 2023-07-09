import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [NotesList, SetNotesList] = useState([]);

  function Additem(items) {
    SetNotesList((prevValues) => {
      return [...prevValues, items];
    });
  }

  function Delete(id) {
    SetNotesList((prevItems) =>
      prevItems.filter((item, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={Additem} />

      {NotesList.map((Notes, index) => (
        <Note
          key={index}
          id={index}
          title={Notes.Title}
          content={Notes.Content}
          onDel={Delete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
