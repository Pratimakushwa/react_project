import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import Alldoctor from "./Alldoctor";
import Contact from "./Contact";
import About from "./About";
// import Appointments from "./Appointments";
import Home from "./Home";
import Hero from "./Hero";
import Doc1 from "./Doc1";
import Doc2 from "./Doc2";
import Doc3 from "./Doc3";
import Doc4 from "./Doc4";
import Doc5 from "./Doc5";
import Doc6 from "./Doc6";
import Form from "./Form";
import Table from "./Table";



function Project() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbarFooter && (
        <Navbar
          logo="HOME"
          link1="ALL DOCTORS"
          link2="ABOUT"
          link3="CONTACT"
          link4="Prescripto"
          link5="appoiment"
        />
      )}

      <Routes>
      
        <Route
          path="*"
          element={
            <>
              <Home />
              <Hero />
              <Alldoctor />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/Alldoctor" element={<Alldoctor />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Table" element={<Table/>} />
        <Route path="/Doc1" element={<Doc1 />} />
        <Route path="/Doc2" element={<Doc2 />} />
        <Route path="/Doc3" element={<Doc3 />} />
        <Route path="/Doc4" element={<Doc4 />} />
        <Route path="/Doc5" element={<Doc5 />} />
        <Route path="/Doc6" element={<Doc6 />} />
        <Route path="/Form" element={<Form />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default Project;
