import React from "react";
import Navbar from "./Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Alldoctor from "./Alldoctor.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Homepage from "./Homepage.jsx";

import Login from "./Login.jsx";

function Project() {
  return (
    <>

      
    
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <Navbar 
         logo="HOME"
        link1="ALL DOCTORS"
        link2="ABOUT"
        link3="CONTACT"
        link4="Prescripto"
        />
        
      </div>
    
        

 <Routes>
 
  <Route path="/Home" element={<Home/>} />
  <Route path="/Alldoctor" element={<Alldoctor/>} />
  {/* <Route index element={<Homepage/>} /> */}
  
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Homepage" element={<Homepage />} />
  
  
  
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes> 
     
        
     


    </>
  );
}

export default Project;
