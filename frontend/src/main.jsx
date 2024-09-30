import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Features from './components/Features/Features.jsx'
import About from './components/About/About.jsx'
import Livedashboard from './components/Livedashboard/livedashboard.jsx'
import Resources from './components/Resources/Resources.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './layout.jsx'


import { RouterProvider,createBrowserRouter,Route, createRoutesFromElements } from 'react-router-dom'
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Features' element={<Features/>}/>
    <Route path='/livedashboard' element={<Livedashboard/>}/>
    <Route path='/Resources' element={<Resources/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
   
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
  



/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)*/