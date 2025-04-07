import React, { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [socialCon, setCocialCon] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setCocialCon(!socialCon);
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
          <div id="name" className="text-2xl font-bold">
            {" <Siddharth /> "}
          </div>
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
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <lord-icon
            src="https://cdn.lordicon.com/jectmwqf.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </button>

        {socialCon && (
          <div className="absolute top-16 right-6 bg-white shadow-md rounded-md p-4 z-20 ">
            <div className="socials flex flex-col space-y-4">
              <h3 className="font-bold">Connect with me</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <IoLogoLinkedin />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/siddhartha-potphode"
                    className="hover:text-purple-500"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <ImGithub />
                  </span>
                  <a href="#" className="hover:text-purple-500">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <MdEmail />
                  </span>
                  <a
                    href="mailto:siddharthpotphode7@gmail.com"
                    className="hover:text-purple-500"
                  >
                    E-mail
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <BsTwitterX />
                  </span>
                  <a
                    href="https://x.com/siddharth_wd121"
                    className="hover:text-purple-500"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <MdOutlinePhoneAndroid />
                  </span>
                  <a href="tel:+918109013328" className="hover:text-purple-500">
                    Call me
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <IoLogoWhatsapp />
                  </span>
                  <a
                    href="https://wa.me/+918109013328"
                    className="hover:text-purple-500"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <FaInstagram />
                  </span>
                  <a
                    href="https://instagram.com/siddharth_wd"
                    className="hover:text-purple-500"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

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
            <div className="partition h-0.5 bg-gray-500 w-[37vw] my-3"></div>
            <div className="socials flex flex-col space-y-4">
              <h3 className="font-bold">Connect with me</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <IoLogoLinkedin />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/siddhartha-potphode"
                    className="hover:text-purple-500"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <ImGithub />
                  </span>
                  <a
                    href="https://github.com/SiddharthP121"
                    className="hover:text-purple-500"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <MdEmail />
                  </span>
                  <a
                    href="mailto:siddharthpotphode7@gmail.com"
                    className="hover:text-purple-500"
                  >
                    E-mail
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <BsTwitterX />
                  </span>
                  <a
                    href="https://x.com/siddharth_wd121"
                    className="hover:text-purple-500"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <MdOutlinePhoneAndroid />
                  </span>
                  <a href="tel:+918109013328" className="hover:text-purple-500">
                    Call me
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <IoLogoWhatsapp />
                  </span>
                  <a
                    href="https://wa.me/+918109013328"
                    className="hover:text-purple-500"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="logo-social">
                    <FaInstagram />
                  </span>
                  <a
                    href="https://instagram.com/siddharth_wd"
                    className="hover:text-purple-500"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
