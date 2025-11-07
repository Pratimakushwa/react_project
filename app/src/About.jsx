import React from 'react'
import pica from './assets/about.webp'

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center py-10 text-indigo-600 drop-shadow-md pt-24">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-6 md:px-20 pb-16  ">
        
        {/* Image Section */}
        <div className="shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
          <img 
            src={pica} 
            alt="About" 
            className="w-96 h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:w-1/2 hover:shadow-2xl transition-shadow duration-500 leading-relaxed">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-indigo-600">
              Doctor Appointment System
            </span>{" "}
            ka main purpose patients aur doctors ke beech ek easy aur fast
            connection banana hai. Is system ke through patients apne convenient
            time par online appointment book kar sakte hain. Doctor appointment
            website se patients ko waiting line me khade hone ki zarurat nahi
            hoti — wo ghar baithe hi doctor ka schedule dekh kar slot select kar
            sakte hain.
          </p>

          <p className="mt-4 text-gray-700 text-lg">
            This system ensures faster and more organized healthcare services by
            providing features like appointment scheduling, reminders, and
            online consultations. It helps both doctors and patients save time
            and manage appointments efficiently.
          </p>

          <p className="mt-4 text-gray-700 text-lg">
            With the Doctor Appointment System, healthcare becomes more
            accessible, convenient, and reliable — bringing quality medical
            services just a click away.
          </p>

          <p className="mt-6 italic text-indigo-700 font-semibold text-center">
            “Your health, our priority — book your doctor anytime, anywhere.”
          </p>
        </div>
      </div>
    </>
  )
}

export default About
