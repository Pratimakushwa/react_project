import React from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "./assets/doc1.webp";
import pic2 from "./assets/doc2.webp";
import pic3 from "./assets/doc3.jpg";
import pic4 from "./assets/doc4.webp";
import pic5 from "./assets/doc5.webp";
import pic6 from "./assets/doc6.webp";

const Alldoctor = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-2 pt-24">Top Doctors to Book</h1>
      <p className="text-center font-medium mb-8">
        Simply browse through extensive, trusted doctors.
      </p>

      <div className="py-8 flex justify-center flex-wrap gap-20">
        <div
          onClick={() => navigate("/Doc1")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic1} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Rechad James</p>
          <p className="text-center">General Physician</p>
        </div>

        <div
          onClick={() => navigate("/Doc2")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic2} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Rayan Martinez</p>
          <p className="text-center">Gynecologist</p>
        </div>

        <div
          onClick={() => navigate("/Doc3")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic3} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Emily Larson</p>
          <p className="text-center">Pediatrician</p>
        </div>

        <div
          onClick={() => navigate("/Doc4")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic4} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Amellia Hill</p>
          <p className="text-center">Dermatologist</p>
        </div>

        <div
          onClick={() => navigate("/Doc5")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic5} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Jeniffer Garcia</p>
          <p className="text-center">Neurologist</p>
        </div>

        <div
          onClick={() => navigate("/Doc6")}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <img src={pic6} alt="" className="w-64 h-64 object-cover rounded-xl" />
          <p className="text-center text-2xl font-black">Dr. Sarah Patel</p>
          <p className="text-center">Dermatologist</p>
        </div>
      </div>
    </>
  );
};

export default Alldoctor;
