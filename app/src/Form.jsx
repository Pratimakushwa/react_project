import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
     navigate("/Form");
  
  const [formData, setFormData] = useState({
    bname: "",
    bemail: "",
    bphone: "",
    baddress: "",
    bcity: "",
    bstate: "",
    bzip: "",
    bcountry: "",
    bcheckin: "",
    bcheckout: "",
    bno: "",
    bgender: "",
    badults: "",
    bkids: "",
  });

 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await axios.post("http://localhost:8000/appoiments", formData);

      alert("✅ Appointment submitted successfully!");

      
      setFormData({
        bname: "",
        bemail: "",
        bphone: "",
        baddress: "",
        bcity: "",
        bstate: "",
        bzip: "",
        bcountry: "",
        bcheckin: "",
        bcheckout: "",
        bno: "",
        bgender: "",
        badults: "",
        bkids: "",
      });
    } catch (error) {
      console.error(" Error submitting form:", error);
      alert("Failed to submit appointment");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 pt-24">
        Book <span className="text-amber-500">Appointment</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl space-y-6"
      >
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="bname"
            value={formData.bname}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="bemail"
              value={formData.bemail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              id="bphone"
              value={formData.bphone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Address</label>
          <input
            type="text"
            id="baddress"
            value={formData.baddress}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            id="bcity"
            value={formData.bcity}
            onChange={handleChange}
            placeholder="City"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            id="bstate"
            value={formData.bstate}
            onChange={handleChange}
            placeholder="State"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            id="bzip"
            value={formData.bzip}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            id="bcountry"
            value={formData.bcountry}
            onChange={handleChange}
            placeholder="Country"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="date"
            id="bcheckin"
            value={formData.bcheckin}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="date"
            id="bcheckout"
            value={formData.bcheckout}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="number"
            id="bno"
            value={formData.bno}
            onChange={handleChange}
            placeholder="No. of Persons"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <select
            id="bgender"
            value={formData.bgender}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <select
            id="badults"
            value={formData.badults}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Adults</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>

          <select
            id="bkids" 
            value={formData.bkids}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Kids</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-amber-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-amber-600 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
