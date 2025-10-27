import React from 'react'
import picAI from './assets/ai.webp'
import picDoctor from "./assets/doctor.jpg";
import picHealthcare from './assets/healthcare.jpg'
import picOIP1 from './assets/OIP1.webp'
import picOIP from './assets/OIP.webp'

const Hero = () => {
  return (
    <>
     <div className="text-center py-8">
      <h1 className="text-2xl font-bold mb-2">Find by Speciality</h1>
      <p className="text-gray-700 font-medium mb-8">
        Simply browse through extensive, trusted doctors.<br />  
        Schedule appointments hassle-free.
      </p>

      {/* Image section */}
      <div className="flex justify-center flex-wrap gap-6">
        <div>
          <img src={picAI} alt="AI doctor" className="w-52 h-40 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            <p className="mt-3 font-semibold text-gray-800">general pysician</p>


        </div>
        <div>
          <img src={picDoctor} alt="Doctor" className="w-52 h-40 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
          <p className="mt-3 font-semibold text-gray-800">gynocologist</p>
        </div>
        <div>
          <img src={picHealthcare} alt="Healthcare" className="w-52 h-40 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
          <p className="mt-3 font-semibold text-gray-800">dermtologist</p>
        </div>
        <div>
        <img src={picOIP1} alt="Hospital 1" className="w-52 h-40 rounded-3xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
        <p className="mt-3 font-semibold text-gray-800">pediatrician</p>

        </div>
        <div>
         <img src={picOIP} alt="Hospital 2" className="w-52 h-40 rounded-3xl object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
         <p className="mt-3 font-semibold text-gray-800">neurologist</p>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Hero