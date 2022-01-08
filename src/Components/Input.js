import React from "react";
import { useState } from "react";

function Input(props){

    const [text, setText] = useState('');

    

    function onSubmit(e) {
        e.preventDefault();
        setText('');
        props.onSend(text);
    }


    return(
        <div className="Input">
            <form onSubmit={e => onSubmit(e)}>
                <input onChange={e => setText(e.target.value)} value={text} placeholder="Type here..." autoFocus/>
                <button>Send</button>
            </form>
            
        </div>

    );


}

export default Input;