import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link ,Outlet} from "react-router-dom";


const Navbar = (props) => {
  return (
    <>
    
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md flex items-center justify-between px-8 py-4 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        
        <h2 className="text-2xl font-semibold text-blue-600"><Link to ="/Home">{props.link4}</Link></h2>
      </div>

      {/* Links */}


            <ul className="flex gap-6">
                <li className="hover:text-blue-600 cursor-pointer"> <Link to ="/Home">{props.logo}</Link></li>
                <li className="hover:text-blue-600 cursor-pointer"> <Link to ="/Alldoctor">{props.link1}</Link></li>
                <li className="hover:text-blue-600 cursor-pointer"> <Link to ="/About">{props.link2}</Link></li>
                <li className="hover:text-blue-600 cursor-pointer"> <Link to ="/Contact">{props.link3}</Link></li>
               

            </ul>
     
      {/* User Icon */}
      

        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            signup
          </button>
        </Link>
       
      
    </nav>
   
    </>
  );
};

export default Navbar;
