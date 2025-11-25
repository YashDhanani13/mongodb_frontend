import React, { useState } from "react";
import axios from "axios";


const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = async () => {
    const response = await axios.post("localhost:3000/users/add");
    console.log(" Response from backend :", response.data);
  };
  return (
    <div>
      <input
        placeholder="Enter the name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input 
        placeholder="Enter the email"
      onChange={(e) => setUser({ ...user, email: e.target.value })} />

      <input
        placeholder="Enter the age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />

      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
};

export default Adduser;
