import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-indigo-100 to-blue-50 shadow-inner mt-10 py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow-md">
              Prescripto
            </h1>
            <p className="pt-4 text-gray-700 leading-relaxed">
              Prescripto is a modern doctor appointment system designed to make healthcare
              fast, reliable, and accessible. Book appointments, manage consultations,
              and stay connected with doctors — anytime, anywhere.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">Company</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">About</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Services</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">Get In Touch</h2>
            <p className="text-gray-700">
              📞 +91 98765 43210 <br />
              ✉️ contact@prescripto.com <br />
              📍 Bhopal, Madhya Pradesh
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center border-t border-gray-300 mt-10 pt-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Prescripto — All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
