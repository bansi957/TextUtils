import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const newalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  const handlemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      newalert("dark mode has been  enabled!","success");
      document.title="TextUtils - Darkmode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      newalert("light mode has been enabled!","success");
      document.title="TextUtils - Lightmode";
    }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar/> */}
      {/* <Navbar title="textUtils" /> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} handlemode={handlemode} />
      <Alert alert={alert} mode={mode}    />
      <Textform head="Enter the text below" mode={mode} newalert={newalert} />
      {/* <Routes> */}
        {/* Define your routes */}
        {/* <Route exact path="/" element={ <Textform head="Enter the text below" mode={mode} newalert={newalert} />} />
        <Route exact path="/about" element={<About />} />
       
      </Routes>
    </Router> */}

    </>
  );  
}

export default App;
