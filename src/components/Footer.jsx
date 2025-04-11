import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col md:flex-row justify-around items-center text-gray-400 bg-black p-6">
        {/* Left Section */}
        <div className="me text-[18px] sm:text-sm text-center md:text-left mb-6 md:mb-0">
          <span className="block text-lg font-bold">Siddharth Potphode</span>
          <p className="text-[10px] sm:text-xs">
            "Shaping Ideas Into Reality: Web Dev & Android Explorer."
          </p>
          <p className="text-[10px] sm:text-xs">
            Full stack developer creating dynamic and user-friendly websites
          </p>
        </div>

        {/* Right Section */}
        <div className="socialtext-[10px] sm:text-xs">
          <div className="socials text-gray-400">
            <h3 className="font-bold mb-4 text-[16px] sm:text-xl text-center md:text-left">
              Connect with me
            </h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
      </div>
        <div className="copyright text-center py-4 bg-black text-gray-400">
      <div className="section w-[70vw] h-0.25 bg-gray-400 my-2 mx-auto"></div>
      <br />
            © 2025 Siddharth Potphode. All rights reserved.     
            <br />
            <br />        
        </div>
    </>
  );
};

export default Footer;