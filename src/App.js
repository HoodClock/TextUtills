// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // Making State for Showing Alert!!
  const [alert, setAlert] = useState(true);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // For dismissing the alert message we use setTimeOut inbuilt Function!!!
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }

  // Making state for Light/Dark Mode!!
  const [Mode, setMode] = useState("light"); // this is the state variable who enable dark or light mode.

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#101d2f"
      showAlert("Dark mode is enabeled.", "danger")
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#fff"
      showAlert("Light mode is enabeled.", "success")

    }
  }

  return (
    <>

      <Navbar
        title="Text-Utills"
        about="About us"
        project="Projects"
        search="Find"
        mode={Mode}
        toggleMode={toggleMode} />
      <Alert alert={alert} />


      {/* <About / */}
      <div>

        <TextForm heading="Enter Text to Analyise"
          mode={Mode}
          showAlert={showAlert} />
      </div>
    </>
  )
}

export default App;
