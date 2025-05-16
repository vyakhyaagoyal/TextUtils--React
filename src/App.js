import { useState } from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#333';

    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      
    }
  }

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<About/>}></Route>
    </Routes>
    </BrowserRouter> */}

    <Navbar title="New React" about="New About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text below to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
