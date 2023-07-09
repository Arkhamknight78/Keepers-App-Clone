import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [notes, setnotes] = useState({ Title: "", Content: "" });
  function HandleChange(event) {
    const { name, value } = event.target;
    setnotes((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  }

  function Submit(event) {
    event.preventDefault();

    props.onAdd(notes);

    setnotes({
      Title: "",
      Content: ""
    });
  }
  const [IsExpanded, SetExpanded] = useState(false);
  function Expand() {
    SetExpanded(true);
  }

  return (
    <div>
      <form>
        {IsExpanded && <input
            name="Title"
            placeholder="Title"
            onChange={HandleChange}
            value={notes.Title}
          />
        }

        <textarea
          name="Content"
          placeholder="Take a note..."
          rows={IsExpanded ? 3 : 1}
          value={notes.Content}
          onClick={Expand}
          onChange={HandleChange}
        />

        <Zoom in={IsExpanded}>
        <button onClick={Submit}><AddIcon /></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
