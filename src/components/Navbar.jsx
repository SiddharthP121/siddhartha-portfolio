import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent text-black w-full shadow-md fixed top-0 z-10">
      <div className="md:container navbar mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full">
            <img
              src="https://github.com/SiddharthP121/siddhartha-portfolio/blob/main/public/assets/logoImg.jpg?raw=true"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="text-lg font-bold">{" <Siddharth /> "}</div>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-purple-500">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500">
              PROJECT
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-500">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jectmwqf.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-md rounded-md p-4 z-20 md:hidden">
            <ul className="space-y-4">
              <li>
                <a href="#home" className="hover:text-purple-500 block">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-500 block">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-500 block">
                  PROJECT
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-500 block">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;