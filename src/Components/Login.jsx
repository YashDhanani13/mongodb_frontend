import { useState } from "react";
import { FaEnvelope, FaLock, FaShoppingBag } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        {/* Top Logo Icon */}
        <div className="auth-icon">
          <FaShoppingBag size={30} color="white" />
        </div>

        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Enter your details to access inventory</p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <label>Email Address</label>
          <div className="input-box">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="admin@example.com"
              value={form.email}
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="auth-btn">Sign In</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
