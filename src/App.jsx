// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textfield from './Components/Textfield';
import About from './Components/About';
import Alert from './Components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  
   const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#5A5A5A";
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  
   
  return(
    <>
    <Router>

    <Navbar mode={mode} toggleMode={toggleMode} title='React' firstpage='Home' secondpage='About' thirdpage='Contact'/>
    <Alert alert={alert}/>
    {/* <Textfield title='Text Converter' mode={mode} showAlert={showAlert} /> */}
    {/* <About /> */}
    <div className='container my-3'>

    <Routes>
          {/* use exact to || for further info, please read the notes */}
          <Route exact path="/About" element={<About mode={mode}/>} />        
         
          <Route exact path="/" element={<Textfield title='Text Converter' mode={mode} showAlert={showAlert} />} />
       
    </Routes>
        
        </div>
    </Router>
  
    </>
  );
}

export default App;
