import React, { useState } from 'react'

export default function About() {
    const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white',
        margin:0,
        padding:0
    })


    let darkMode=()=>{
        if(text==='Enable dark mode' && myStyle.color==='black'){
            let changeMode='Disable dark mode';
            setText(changeMode);

            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        else{
            let changeMode='Enable dark mode';
            setText(changeMode);
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
        }
        
    }

    const [text, setText] = useState('Enable dark mode');

  return (
    <div className='container' style={myStyle}>
      <div className='aboutsection'>
        <h1 className='my-3'>About</h1>
        <p>The developer of this webpage is Vyakhya Goyal</p>
      </div>

      <div className='aboutsection'>
      <button type='button' className='btn btn-primary my-2' onClick={darkMode} value={text}>{text}</button>
      </div>
      
    </div>
  )
}
