import React, { useState } from 'react'
import pic1 from "./assets/doc1.webp";
import { useNavigate } from "react-router-dom";

const Doc1 = () => {
  const navigate = useNavigate();

  const handlebutton = () => {
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    // if (isLoggedIn) {
      navigate("/Form"); 
    // } 
  };

  const [selectedDay, setSelectedDay] = useState("WED");
  const [selectedTime, setSelectedTime] = useState("");

  const days = [
    { day: "WED", date: 4 },
    { day: "THU", date: 5 },
    { day: "FRI", date: 6 },
    { day: "SAT", date: 7 },
    { day: "SUN", date: 8 },
    { day: "MON", date: 9 },
    { day: "TUE", date: 10 },
  ];

  const times = ["05:00 pm", "06:00 pm", "06:30 pm", "07:00 pm", "07:30 pm", "08:00 pm", "08:30 pm"];

  return (
    <> 
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-evenly mt-10 max-w-3xl mx-auto">

       
        <div className="flex gap-8">
          <img src={pic1} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <div>
            <p className="text-2xl font-black">Dr. Rechad James</p>
            <p className="mb-3">General Physician</p>
            <p className='text-amber-500'>
              Dr. Rechad James is an experienced General Physician dedicated to providing <br/>
              comprehensive healthcare for patients of all ages. With a strong focus on preventive <br/>
              care, he ensures personalized treatment plans for each individual.<br/>
              His areas of expertise include managing chronic illnesses, routine checkups,<br/>
              and promoting overall wellness through modern and evidence-based practices.
            </p>
          </div>
        </div>

       
        <div className="px-5 mt-10">
          <h2 className="text-2xl font-bold mb-3">Booking Slots</h2>

          <div className="flex gap-3">
            {days.map((d) => (
              <div
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`w-13 h-20 flex flex-col items-center justify-center rounded-lg cursor-pointer border 
                  ${selectedDay === d.day ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                <p className="text-sm">{d.day}</p>
                <p className="text-2xl font-bold">{d.date}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-5 flex-wrap">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-full border 
                ${selectedTime === time ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                {time}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedTime}
            className={`mt-6 bg-amber-500 text-white px-6 py-2 rounded-xl text-lg 
            ${!selectedTime && "opacity-50 cursor-not-allowed"}`}
            onClick={handlebutton}
          >
            Book appointment
          </button>
        </div>
      </div>
    </>
  )
}

export default Doc1;

























