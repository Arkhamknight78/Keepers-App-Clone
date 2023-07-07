import React from "react";


function Note(props){
    return(
        <div className="note">
            <h1 contentEditable>{props.title}</h1>
            <p contentEditable><b>{props.content}</b></p>
        </div>
    );
}

export default Note;