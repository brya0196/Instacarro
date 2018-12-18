import React from 'react';
import './Navbar.css';

import logo from "../../assets/images/logo.png";
import phone from "../../assets/svg/phone.svg";
import user from "../../assets/svg/user.svg";
import caret from "../../assets/svg/caret.svg";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="brand">
        <img src={logo} alt="Instacarro" />
      </div>

      <div className="bar"></div>

      <div className="data">
        <div className="phone">
          <img src={phone} alt="Phone" />
          <span>(11) 3569-3465</span>
        </div>

        <div className="userData">
          <div className="userInfo">
            <img src={user} alt="User" />
            <span>USER TEST</span>
          </div>
          <div className="arrow">
            <img src={caret} alt="v" />
          </div>
        </div>
      </div>  
      
    </nav>
  );
};

export default Navbar;
