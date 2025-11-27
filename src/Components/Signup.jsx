import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaShoppingBag } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    console.log("Signup Data:", form);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        <div className="auth-icon">
          <FaShoppingBag size={30} color="white" />
        </div>

        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Start managing your products today</p>

        {/* Name */}
        <label>Full Name</label>
        <div className="input-box">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <label>Email Address</label>
        <div className="input-box">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="admin@example.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <label>Password</label>
        <div className="input-box">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button className="auth-btn" onClick={handleSubmit}>
          Create Account
        </button>

        <p className="auth-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
