

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields!");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === user.email) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-200">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Name" value={user.name}
            onChange={handleChange} className="border p-2 w-full rounded" />
          <input name="email" placeholder="Email" value={user.email}
            onChange={handleChange} className="border p-2 w-full rounded" />
          <input type="password" name="password" placeholder="Password" value={user.password}
            onChange={handleChange} className="border p-2 w-full rounded" />
          <button className="bg-pink-500 text-white w-full py-2 rounded">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}























