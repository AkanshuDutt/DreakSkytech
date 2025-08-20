'use client';

import React, { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 text-white font-sans shadow-md"
  style={{ backgroundColor: '#101828' }}>
        {/* Top Info Bar */}
        <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-b-blue-200">
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
          <div className="hidden md:flex items-center space-x-4">
            <span>Visit our social pages</span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/dreamskyairwayspvtltd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-6 py-2 md:py-0">
          {/* Logo */}
          <div className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain">
            <Image
              src="/sky.png"
              alt="Dream Sky Tech Logo"
              width={160}
              height={28}
              className="rounded-full sm-"
            />
          </div>

          {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
  <a href="\" className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">Home</a>
  <a href="/About" className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">About Us</a>
  <a href="/Service" className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">Services</a>
  <a href="/Project" className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">Our Project</a>
  <a href="/Contact" className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">Contact Us</a>
  <a href="/AdminDiseboad " className="relative pb-1  hover:border-cyan-200 border-b-2 border-transparent transition-all duration-300">Admin</a>
</nav>


          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-md px-6 pb-4 space-y-2 text-sm font-medium">
            <a href="\" className="block py-2 border-b border-gray-700 hover:text-yellow-300">Home</a>
            <a href="/About" className="block py-2 border-b border-gray-700 hover:text-yellow-300">About Us</a>

            {/* Services Dropdown Toggle */}
            <div className="block py-2 border-b border-gray-700">
              <button
                onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center justify-between w-full hover:text-yellow-300"
              >
                <span>Services</span>
                <FaChevronDown className={`ml-2 transform transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Items */}
              {isServicesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 text-gray-300">
                  <a href="#" className="block hover:text-yellow-300">Web Development</a>
                  <a href="#" className="block hover:text-yellow-300">Software Development</a>
                  <a href="#"  className="block hover:text-yellow-300"> Web/soft. Maintenance</a>
                  <a href="#"  className="block hover:text-yellow-300">Testing & QA</a>
                  <a href="#"  className="block hover:text-yellow-300">Digital Marketing</a>
                  <a href="#"  className="block hover:text-yellow-300">UI/UX & Graphic Designing</a>
                  <a href="#" className="block hover:text-yellow-300">IT Consulting</a>
                  <a href="#"  className="block hover:text-yellow-300">Corporate Training</a>
                  <a href="#" className="block hover:text-yellow-300">Technical Support</a>
                </div>

              )}
            </div>

            <a href="/Project" className="block py-2 border-b border-gray-700 hover:text-yellow-300">Our Project</a>
            <a href="/Contact" className="block py-2 hover:text-yellow-300">Contact Us</a>
          </div>
        )}
      </header>

     
    </>
  );
};

export default Header;
