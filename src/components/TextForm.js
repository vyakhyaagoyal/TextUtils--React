import React, {useState} from 'react'

export default function TexthtmlForm(props) {
    const UpClick=()=>{
        //console.log("uppercase clicked");
        let upcase=text.toUpperCase();
        setText(upcase)
    }

    const loclick=()=>{
        let locase=text.toLowerCase();
        setText(locase);
    }

    const clearclick=()=>{
        let clearcase='';
        setText(clearcase);
    }

    const copyclick=()=>{
        var text=document.getElementById('example1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleonchange=(e)=>{
        //console.log("onchange handled");
        setText(e.target.value)
    }


    const [text, setText] = useState('Enter text here');
    //setText("New text");
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>

        <div className="mb-3">
            <label htmlFor="example" className="htmlFormlabel" style={{margin:'10px'}}>Email address</label>
            <input type="email" className="htmlhtmlFormcontrol" id="example" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="example1" className="htmlFormlabel">enter text here</label>
            <textarea className="htmlFormcontrol" id="example1" rows="10" cols="70" style={{resize: "none"}} value={text} onChange={handleonchange}/>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={loclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clearclick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={copyclick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove extra spaces</button>
    </div>

    <div className="container my-2">
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Can be read in {text.split(" ").length*0.008} minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}
