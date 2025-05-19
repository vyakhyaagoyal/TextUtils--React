import React, {useState} from 'react'

export default function TexthtmlForm(props) {
    const UpClick=()=>{
        //console.log("uppercase clicked");
        let upcase=text.toUpperCase();
        setText(upcase)
        props.showAlert("success", "converted to uppercase");
    }

    const loclick=()=>{
        let locase=text.toLowerCase();
        setText(locase);
        props.showAlert("success", "converted to lowercase");
    }

    const clearclick=()=>{
        let clearcase='';
        setText(clearcase);
        props.showAlert("success", "cleared text");
    }

    const copyclick=()=>{
        var text=document.getElementById('example1');
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "copied text");
        
    }

    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "removed extra spaces"); 
    }

    const handleonchange=(e)=>{
        //console.log("onchange handled");
        setText(e.target.value)
    }


    const [text, setText] = useState('Enter text here');
    //setText("New text");
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
            <label htmlFor="example" className="form-label" style={{margin:'10px'}}>Email address</label>
            <input type="email" className="form-input" id="example" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="example1" className="form-label">enter text here</label>
            <textarea className="form-control" id="example1" rows="10" cols="70" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'rgb(36 35 35)':'white', color: props.mode === 'dark' ? 'white' : 'black', width: '900px', height: '100px'}}/>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={loclick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearclick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyclick}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove extra spaces</button>
    </div>

    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>Can be read in {text.split(" ").filter((element)=>{ return element.length!==0}).length*0.008} minutes</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
    )
}
