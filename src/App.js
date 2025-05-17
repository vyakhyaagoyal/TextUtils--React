import { useState } from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);    //alert is an object
  const showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#333';
      showAlert("success","dark mode has been enabled");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("success","light mode has been enabled");
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
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
