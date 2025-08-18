// app/Components/Header.tsx

'use client';

import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white font-sans shadow-md">
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
          <div className="flex items-center space-x-4">
            <span>Visit our social pages</span>

            <a
              href="https://wa.me/919876543210"
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
            <a href="\" className="hover:text-yellow-300">Home</a>
            <a href="/About" className="hover:text-yellow-300">About Us</a>
            <a href="/Service" className="hover:text-yellow-300">Services</a>
            <a href="/Project" className="hover:text-yellow-300">Our Project</a>
            <a href="/Contact" className="hover:text-yellow-300">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Spacer div so content is not hidden behind fixed header */}
      <div className="pt-[100px]"></div>
    </>
  );
};

export default Header;
