import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Ensure you have the CSS file for styles
import cv from './images/resume/cv.pdf';
import mbdev from './images/mbdev.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const [animate, setAnimate] = useState(false);

  const handleHomeClick = () => {
    setAnimate(true);

    // Reset the animation state after it's completed
    setTimeout(() => {
      setAnimate(false);
    }, 1500); // 1.5 seconds matches the duration of your animation
  };
  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* <!-- Logo --> */}
          <div>
            <a href="#" className="flex items-center text-black text-xl sm:text-2xl font-bold">
              <img src={mbdev} alt="Logo" className="h-8 w-auto sm:h-10 mr-2" />
            </a>
          </div>


          {/* <!-- Primary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#Home" onClick={handleHomeClick} className="text-black hover:text-blue-700 hover:underline transition duration-300">Home</a>
            <a href="#Services" className="text-black hover:text-blue-700 hover:underline transition duration-300">Services</a>
            <a href="#Skills" className="text-black hover:text-blue-700 hover:underline transition duration-300">Skills</a>
            <a href="#Experience" className="text-black hover:text-blue-700 hover:underline transition duration-300">Experience</a>
            <a href="#Projects" className="text-black hover:text-blue-700 hover:underline transition duration-300">Projects</a>
            <a href="#" className="text-black hover:text-blue-700 hover:underline transition duration-300">Contact</a>
          </div>

          {/* <!-- Mobile and Desktop Hire Me button --> */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="md:flex flex items-center space-x-3">
              <a
                href="mailto:your.email@example.com"
                className="py-1 px-3 flex items-center font-medium text-xs text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"></path>
                </svg>
                Hire Me!
              </a>
              <a
                href={cv}
                target="_blank"
                className="py-1 px-3 flex items-center font-medium text-xs text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0v128c0 17.7 14.3 32 32 32h128v144H96c-35.3 0-64 28.7-64 64v144H0c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48v-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16v-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64v-64z"></path>
                </svg>
                Resume
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none ">
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu --> */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white absolute top-0 right-0 w-1/3 h-100 z-50 mt-20 mr-5 shadow-lg`}>
        <ul className="text-black">
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Home</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">About</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Services</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Skills</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Experience</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Projects</a></li>
          <li><a href="#" className="block px-4 py-4 hover:bg-blue-700 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
