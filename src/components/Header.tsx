// app/Components/Header.tsx

'use client';

import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaYoutube,
  // FaTwitter,
  FaInstagram,
  // FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-cyan-900 text-white font-sans">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-yellow-800">
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
            <FaMapMarkerAlt />
            <span>A-43, Noida Sector 63, Uttar Pradesh, 201301</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
            <FaClock />
            <span>Office Hours 10:00 am to 06:00 pm</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>Visit our social pages</span>

        
             <a
            href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
        <FaWhatsapp className="cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/dreamskyairwayspvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <FaFacebookF className="cursor-pointer" />
          </a>
          <a
            href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <FaYoutube className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <FaInstagram className="cursor-pointer" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
           
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/sky.jpg"
            alt="Dream Sky Tech Logo"
            width={60}
            height={30}
           className="rounded-full"

          />
          <span className="text-xl font-bold">DreamSkyTech</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">About Us</a>
          <a href="#" className="hover:text-yellow-300">Services</a>
          <a href="#" className="hover:text-yellow-300">Pages</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>
        </nav>

        {/* CTA Button */}
        {/* <button className="hover:text-yellow-300 bg-cyan-500 hover:bg-white-500 text-yellow-100 py-2 px-4 rounded-full text-sm font-semibold cursor-pointer"> */}
          
        {/* </button>    */}
        {/* <button className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-white hover:bg-white hover:text-cyan-600 border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out py-3 px-6 rounded-full text-sm font-semibold cursor-pointer transform hover:scale-110 hover:-translate-y-1">
</button> */}

      </div>
    </header>
  );
};

export default Header;
