import React from 'react'
import contact from './assets/stock.jpg'

const Contact = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center py-10 text-indigo-600 drop-shadow-md pt-24">
        Contact Us
      </h1>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 pb-16">

        {/* Image Section */}
        <div className="shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
          <img
            src={contact}
            alt="Contact Office"
            className="w-96 h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Info Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:w-1/2 hover:shadow-2xl transition-shadow duration-500 leading-relaxed">
          
          {/* Office Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Our Office
            </h2>
            <p className="text-gray-700 text-lg">
              Prescripto Headquarters<br />
              2nd Floor, Health Plaza<br />
              Bhopal, Madhya Pradesh - 462001<br />
              📞 +91 98765 43210<br />
              ✉️ contact@prescripto.com
            </p>
          </div>

          {/* Careers Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Careers at Prescripto
            </h2>
            <p className="text-gray-700 text-lg">
              Join our passionate team and help us make healthcare more accessible and efficient.
              We’re always looking for talented individuals to contribute to our mission.
            </p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
