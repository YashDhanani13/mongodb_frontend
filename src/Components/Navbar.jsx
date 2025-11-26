import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <img className="log" src="../public/pexels-optical-chemist-340351297-31419910.jpg" alt="thisb is animal " />


      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>

      </nav>
    </div>
  );
};

export default Navbar;
