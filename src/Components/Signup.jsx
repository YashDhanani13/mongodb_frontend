import "./Signup.css";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/users/add", user);
    console.log("Response:", response.data);
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

      <input placeholder="Enter  the email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Enter  the password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <input placeholder="Enter the confirm password" onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })} />

      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};

export default Signup;
