import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import ReactDOM from "react-dom/client";

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
      // document.title="TextUtils - Dark mode";
      // setInterval(()=>{
      //   document.title="download";
      // },1500);
      // setInterval(()=>{
      //   document.title="update";
      // },2000);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("success","light mode has been enabled");
      // document.title="TextUtils - light mode";
    }
  }

  return (
    <>
    <Router basename="/TextUtils">
    <Navbar title="New React" about="New About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}/>}/>
        
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
