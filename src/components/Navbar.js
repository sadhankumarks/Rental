import React, { useState } from 'react';
import { BsXLg, BsMenuButton } from 'react-icons/bs';
import jeep from '../IMG/jeep.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src={jeep} alt="jeep logo" />
      </a>
      <div className={`bx bx-menu ${isOpen ? 'active' : ''}`} id="menu-icon" onClick={toggleMenu}>
        {isOpen ? <BsXLg /> : <BsMenuButton />}
      </div>
      <ul className={`navbar ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#ride">Ride</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>
      <div className="header-btn">
        <a href="#" className="sign-up">Sign Up</a>
        <a href="#" className="sign-in">Sign In</a>
      </div>
    </header>
  );
};

export default Navbar;

