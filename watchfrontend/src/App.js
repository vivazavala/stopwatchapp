import {React, useContext, useState} from 'react';
import NavBar from './Components/NavBar';
import Timer from './Components/Timer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
function App() {



  return (

    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
            <Route exact path="/" element={<Timer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
