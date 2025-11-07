import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/"); 
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md px-6 py-4 z-50">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-blue-600">
            <Link to="/Home">{props.link4}</Link>
          </h2>

          <div
            className="md:hidden text-2xl text-blue-600 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className="hidden md:flex gap-8 items-center">
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/Home">{props.logo}</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/Alldoctor">{props.link1}</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/About">{props.link2}</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/Contact">{props.link3}</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/Table">{props.link5}</Link>
            </li>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link to="/signup">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Signup
                </button>
              </Link>
            )}
          </ul>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-4 py-4 flex flex-col items-center space-y-4">
            <Link
              to="/Home"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {props.logo}
            </Link>
            <Link
              to="/Alldoctor"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {props.link1}
            </Link>
            <Link
              to="/About"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {props.link2}
            </Link>
            <Link
              to="/Contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {props.link3}
            </Link>
            <Link
              to="/Table"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {props.link5}
            </Link>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Signup
              </button>
            </Link>
            {/* <li className="hover:text-blue-600 cursor-pointer">
             <Link to="/Table">{props.link5}</Link>
            </li> */}

          </div>
        )}
      </nav>

      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
