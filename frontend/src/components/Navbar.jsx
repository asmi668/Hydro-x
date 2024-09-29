import React from 'react'
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className=' flex flex-col sticky w-100 h-28 bg-white p-3 '>
      <div className="div   ">
      <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-2 rounded-full  relative top-2" src={logo} alt="Logo" />
           
        </div>
        <div className="navItem flex justify-end  space-x-5 text-navblue ">
          <h1 className='text-2xl font-semibold relative bottom-16'>HOME</h1>
          <h1 className='text-2xl font-semibold relative bottom-16'>ABOUT</h1> 
          <h1 className='text-2xl font-semibold relative bottom-16'>FEATURES</h1>
          <h1 className='text-2xl font-semibold relative bottom-16'>LIVE DASHBOARDS</h1>
          <h1 className='text-2xl font-semibold relative bottom-16'>RESOURCES</h1>
          <h1 className='text-2xl font-semibold relative bottom-16'>CONTACT</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

