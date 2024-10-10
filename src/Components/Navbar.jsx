import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-20 py-5">
      <div className="max-w-7xl mx-auto flex justify-between 
      items-center font-outfit">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-24 h-auto cursor-pointer" />

        {/* Menu Icon (Hamburger or Close Icon) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white 
          focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon icon={faX} className="h-7" /> // Close icon
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-7" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`absolute top-16 left-0 w-full bg-black z-50 
            lg:hidden overflow-hidden transition-all duration-500 
            ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {/* Close Menu Icon inside the Dropdown */}
          

          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="hover:bg-gray-800 px-4 py-2 rounded"><AnchorLink className="" offset="143" href="#home">Home</AnchorLink></li>                         
            <li className="hover:bg-gray-800 px-4 py-2 rounded"><AnchorLink className="" offset="143" href="#about">About Me</AnchorLink></li>
            <li className="hover:bg-gray-800 px-4 py-2 rounded"><AnchorLink className="" offset="143" href="#services">Services</AnchorLink></li>
            <li className="hover:bg-gray-800 px-4 py-2 rounded"><AnchorLink className="" offset="143" href="#portfolio">Portfolio</AnchorLink></li>
            <li className="hover:bg-gray-800 px-4 py-2 rounded"><AnchorLink className="" offset="143" href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>

        {/* Horizontal Menu for Desktop */}
        <div className="hidden lg:flex space-x-6 items-center justify-center text-center transition-all duration-400">
        <ul className="flex space-x-8">
          <li className="hover:text-gray-300 cursor-pointer">
            <AnchorLink className="" offset="143" href="#home">Home</AnchorLink>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <AnchorLink className="" offset="143" href="#about">About Me</AnchorLink>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <AnchorLink className="" offset="143" href="#services">Services</AnchorLink>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <AnchorLink className="" offset="143" href="#portfolio">Portfolio</AnchorLink>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <AnchorLink className="" offset="143" href="#contact">Contact</AnchorLink>
          </li>
        </ul>


          {/* Call to Action Button */}
          <AnchorLink href="#contact" className="bg-linearColor px-4 py-3 rounded-full 
          transition-all duration-400 text-white hover:px-5 hover:py-3.5" offset="143">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
