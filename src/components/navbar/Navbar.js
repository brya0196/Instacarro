import React from 'react';
import './Navbar.css';

import logo from "../../assets/images/logo.png";
import phone from "../../assets/svg/phone.svg"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="brand">
        <img src={logo} />
      </div>

      <div className="bar"></div>
        
      <div className="phone">
        <img src={phone} />
        <span>(11) 3569-3465</span>
      </div>
    </nav>
  );
};

export default Navbar;
