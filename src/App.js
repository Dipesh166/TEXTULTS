import React from 'react'
import { useState } from 'react'




import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Texter from './components/Texter';
import Alert from './components/Alert';




function App() {
  const [mode,setmood]=useState('light')

  const[alert,setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  


  const toggleMode = () => {
if(mode === 'light'){
  setmood('dark');
  document.body.style.backgroundColor=' #121212'
  showAlert("Dark mode has been enabled", "success");
}
else{
  setmood('light');
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled", "success");
}
  }
 
  return (
  
    <>
      
       <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
       <div className="container my-3">
       
          
         
          <Texter mode={mode} showAlert={showAlert} toggleMode={toggleMode}heading="Enter To ANalyze your Text !!!"/>
          
       
       
       </div> 
       </>
   
  );
}

export default App;
