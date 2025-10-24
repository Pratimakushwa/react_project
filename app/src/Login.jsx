import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      alert("Please fill all fields!");
      return;
    }

    if (!isLoggedIn) {
      // First login
      localStorage.setItem("userEmail", formData.email);
      alert("Login Successful!");
      setIsLoggedIn(true);
    } 
    
    else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isLoggedIn ? "Go to Signup" : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
