import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
//outlet use korar mane hochhe etar bhitore we can change-Renders the child route's element, if there is one.nested components mane onekti component render kora jay
function Layout() {//outlet ta amra use kori for  rendering nested  componenets
  return (
  <>

  <Navbar/>
   <Outlet/>
   <Footer/>
   </> 
  )
}

export default Layout 
