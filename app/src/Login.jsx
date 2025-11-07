
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found! Please signup first.");
      navigate("/signup");
      return;
    }

    if (
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
       localStorage.setItem("loginDone", "yes");
      alert("Login successful!");
      navigate("/home");
    } 
    else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 h-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="email" placeholder="Email" value={loginData.email}
            onChange={handleChange} className="border p-2 w-full rounded" />
          <input type="password" name="password" placeholder="Password" value={loginData.password}
            onChange={handleChange} className="border p-2 w-full rounded" />
          <button className="bg-blue-500 text-white w-full py-2 rounded">
            Login
          </button>
          <p className="text-center text-sm mt-3">
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/signup")}
    className="text-blue-600 font-semibold cursor-pointer hover:underline"
  >
    Signup
  </span>
</p>
        
        </form>
      </div>
    </div>
  );
}

























