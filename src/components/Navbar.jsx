import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white w-full shadow-md fixed top-0 z-10">
      <div className="md:container navbar mx-auto flex flex-wrap items-center justify-between py-4 px-6">
     // Left Section: Logo and Name
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

        // Center Section: Navigation Links
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="https://www.youtube.com/" className="hover:text-purple-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-500">
              Projects
            </a>
          </li>
        </ul>

        <button >
          <lord-icon
            src="https://cdn.lordicon.com/jectmwqf.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
