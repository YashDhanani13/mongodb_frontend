import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
      <img className="log" src="../public/pexels-optical-chemist-340351297-31419910.jpg" alt="thisb is animal " />
      <li>
        <a href="#">home</a>
        <a href="#">product</a>
        <a href="#">about</a>
        <a href="#">services</a>
      </li>
    </div>
  );
};

export default Navbar;
