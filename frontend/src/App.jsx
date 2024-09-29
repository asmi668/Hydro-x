import './App.css' ;
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import { BrowserRouter, Route, Routes , Link} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>

      <Navbar></Navbar>
      <Herosection></Herosection>

    </BrowserRouter>

  )
}

export default App
