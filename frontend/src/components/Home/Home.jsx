import React from 'react'
import waterresearch from '/src/assets/waterresearch.jpg';

function Home() {
  return (
    <div className='shadow-black shadow-2xl'>
      <div className=" flex h-screen w-screen bg-white overflow-x-hidden relative  ">
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
        <img className='w-3/4 h-3/4 relative left-20 rounded-l-full bottom-10'  src={waterresearch} alt="vector" /></div>
 </div>

      <div className='m-auto flex items-center justify-center h-90 bg-gray-100 shadow-xl shadow-gray-100'>
  <div className='p-10 text-center w-full max-w-4xl bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
    <div className='text-5xl  font-bold text-cyan-600 mb-6'>
      KEY FEATURES OF HYDRO-X
    </div>
    <ol type='A' className='text-left text-black list-decimal'>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>Time Data Collection</span>
      </li>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>Machine Learning Predictions</span>
      </li>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>GIS Mapping</span>
      </li>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>Water Quality Index (WQI) Calculation</span>
      </li>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>Community Reporting</span>
      </li>
      <li className='py-3 bg-blue-50 border-l-4 border-blue-600 pl-4'>
        <span className='font-semibold'>Call to Action: A link to “Explore Live Data” or “Join Us in Rejuvenating Delhi's Water Bodies.”</span>
      </li>
    </ol>
  </div>
</div>

     


     </div>
  )
}

export default Home 

