import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpclick = () => {
        // console.log("uppercase selected"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.newalert("Converted to UpperCase!","success");
    }

    const handleloclick = () => {
        setText(text.toLowerCase());
        props.newalert("Converted to LowerCase!","success");
    }

    const handleclrclick = () => {
        setText('');
        props.newalert("Text Cleared!","success");
    }
    const handlecopy = () => {
        var t = document.getElementById("floatingTextarea");
        t.select();
        navigator.clipboard.writeText(t.value);
        props.newalert("Copied to clipboard!","success");
    }
    
    const handleremovespaces=()=>{
        var newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.newalert("Extra Spaces removed!","success");
    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);

    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container my-3' style={{color: props.mode==='dark' ? 'white' :'black'}}>
                <h1 >{props.head}</h1>
                <div className="mb-3">
                    <textarea onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white',color: props.mode ==='dark'?'white':'black'}} rows="8" value={text} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}>convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclrclick}>ClearText</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleremovespaces}>Remove extra spaces</button>
            </div>
        

            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/[ ]+/).join("").length}characters and {--text.split(" ").length} words</p>
                <p>{text.split(" ").length * 0.08}min to read</p>
                <h1>Preview</h1>
                <p>{text.length > 0?text:"Enter something in the textbox above to previw it here"}</p>
            </div>
        </>
    )
}
