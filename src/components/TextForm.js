import React, {useState} from 'react'

export default function TexthtmlForm(props) {
    const UpClick=()=>{
        console.log("uppercase clicked");
        let upcase=text.toUpperCase();
        setText(upcase)
    }

    const handleonchange=(e)=>{
        console.log("onchange handled");
        setText(e.target.value)
    }


    const [text, setText] = useState('Enter text here');
    //setText("New text");
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="example" className="htmlFormlabel">Email address</label>
            <input type="email" className="htmlhtmlFormcontrol" id="example" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="example1" className="htmlFormlabel">enter text here</label>
            <textarea className="htmlFormcontrol" id="example1" rows="10" cols="70" style={{resize: "none"}} value={text} onChange={handleonchange}/>
        </div>
        <button className="btn btn-primary" onClick={UpClick} style={{margin:'10px'}}>Convert to uppercase</button>
        <button className="btn btn-primary">Convert to lowercase</button>
    </div>
    )
}
