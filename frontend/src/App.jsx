import './App.css' ;
import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import { BrowserRouter, Route, Routes , Link} from "react-router-dom";

function App() {
  

  return (
<BrowserRouter>
<Navbar></Navbar>
<Home></Home>
<Features></Features>
</BrowserRouter>

    

  )
}

export default App;
