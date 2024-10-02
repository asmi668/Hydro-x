import React from 'react';

function Features() {
  return (
    <div className=' bg-slate-100'>
      <div className='mt-auto m-20 p-20 w-auto h-auto bg-white '>
      <div className='text-center text-4xl text-cyan-700 font-bold pb-5'>
        HYDRO-X: Real-Time Water Quality Monitoring
      </div>
      <ol className="list-decimal ml-6 text-2xl">
        <li>Data Collection with IoT Sensors: HYDRO-X is a cutting-edge system that gathers live data through Internet of Things (IoT) sensors. These sensors are strategically placed in water bodies—rivers, lakes, reservoirs, and more—to continuously measure various parameters. Imagine tiny digital detectives floating in the water, keeping an eye on its health! These parameters typically include:
          <ol className="list-disc ml-6">
            <li>pH (Acidity/Alkalinity): Indicates whether the water is acidic or basic.</li>
            <li>Turbidity: Measures water clarity by assessing suspended particles.</li>
            <li>Dissolved Oxygen (DO): Vital for aquatic life; low DO can harm fish and other organisms.</li>
          </ol>
        </li>
        <li>
          Real-Time Data Display: The collected data is transmitted to a central controller. This controller processes the information and makes it accessible via a user-friendly platform. Imagine a dashboard where you can visualize water quality metrics in real time.
        </li>
        <li>Water Quality Index (WQI): The CCME-WQI (Canadian Council of Ministers of the Environment Water Quality Index) combines three critical elements:
          <ol className="list-disc ml-6">
            <li>Scope: How many parameters fail to meet water quality guidelines?</li>
            <li>Frequency: How often do these guidelines get violated?</li>
            <li>Amplitude: By how much do the parameters deviate from the guidelines?</li>
          </ol>
          The CCME-WQI generates a score between 0 (worst water quality) and 100 (best water quality). It’s like a report card for water!
        </li>
        <li>Other WQI Methods: Besides CCME-WQI, there’s the Weighted Arithmetic WQI (WAWQI) and the Oregon WQI (OWQI). Each method offers a different approach to classify water bodies based on quality.</li>
        <li>Predictive Analytics & AI: Machine learning algorithms—like Decision Trees, Multi-Layer Perceptrons (MLP), and K-Nearest Neighbors (KNN)—analyze historical data and make forecasts to predict future water quality.</li>
        <li>GIS and Mapping: An interactive map lets users zoom in on specific water bodies to spot encroachments, understand catchment areas, and explore aquatic landscapes.</li>
        <li>Community Engagement: HYDRO-X empowers communities to report illegal dumping or waste using mobile apps. Together, we can keep our water bodies pristine!</li>
      </ol>
      </div>
    </div>
  );
}

export default Features;
