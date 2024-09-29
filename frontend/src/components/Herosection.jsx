import React from 'react'
import vector01 from "../assets/Waterresearch.jpg";

function Herosection() {
  return (
    <div>
      <div className=" flex h-screen w-screen bg-white overflow-x-hidden relative">
        <div className=" left w-3/5 h-screen  bg-green-100  rounded-r-full" >
        <div className="hero-text p-8 relative">
            <h1 className='text-3xl font-bold relative top-32 right-4 left-2'> <span className='text-rose-400 '>HYDRO-X:</span> Real-Time Monitoring of Delhi's Water Bodies</h1>
        </div>
        <div className="hero-para relative  top-100 ">
            <h2 className='text-4xl font-medium p-8 pr-5 relative top-32 text-tealblue'>Protecting Water Bodies Through Technology</h2>
            <h2 className='text-4xl font-medium p-8 relative top-32 text-tealblue '>Monitor, Analyze, and Act on Real-Time Data from Delhi’s Lakes, Rivers, and Ponds.</h2>
        </div>
        
        <button className="button-36 relative top-32 left-8" role="button">Start Monitoring</button>


        </div>
        <div className="right w-2/5 h-screen bg-white content-center rounded-l-full relative">
        <img className='w-3/4 h-3/4 relative left-20 rounded-l-full bottom-10'  src={vector01} alt="vector" /></div>

        
       
      </div>
    </div>
  )
}

export default Herosection
