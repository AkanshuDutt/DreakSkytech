'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full bg-cyan-900 text-white font-sans">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-2 text-sm border-b border-yellow-800">
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-start sm:items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
            <FaMapMarkerAlt />
            <span className="text-xs sm:text-sm">A-43, Noida Sector 63</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
            <FaClock />
            <span className="text-xs sm:text-sm">Office Hours 10:00 am - 6:00 pm</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-xs">Social:</span>
          <a href="#" className="hover:text-yellow-300"><FaWhatsapp /></a>
          <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
          <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/sky.jpg"
            alt="Logo"
            width={70}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/pages" className="nav-link">Pages</Link>
          <Link href="/contact" className="nav-link">Contact</Link>

        
<div
  className="relative group cursor-pointer"
  onClick={() => window.location.href = "/services"} // Click par /services page open
>
  <span className="nav-link">Services</span>
  <div className="absolute top-10 right-0 bg-white text-cyan-900 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 mt-2 z-50 min-w-[180px]">
    <Link href="/services/web" className="block px-4 py-2 hover:bg-yellow-100">Web Development</Link>
    <Link href="/services/app" className="block px-4 py-2 hover:bg-yellow-100">App Development</Link>
    <Link href="/services/uiux" className="block px-4 py-2 hover:bg-yellow-100">UI/UX Design</Link>
    <Link href="/services/marketing" className="block px-4 py-2 hover:bg-yellow-100">Digital Marketing</Link>
    <Link href="/services/software" className="block px-4 py-2 hover:bg-yellow-100">Software Development</Link>
  </div>
</div>

        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyan-800 px-4 pb-4 space-y-2 text-sm font-medium">
          <Link href="/" className="block py-2 border-b border-cyan-700 hover:text-yellow-300">Home</Link>
          <Link href="/about" className="block py-2 border-b border-cyan-700 hover:text-yellow-300">About Us</Link>
          <Link href="/pages" className="block py-2 border-b border-cyan-700 hover:text-yellow-300">Pages</Link>
          <Link href="/contact" className="block py-2 border-b border-cyan-700 hover:text-yellow-300">Contact</Link>

          {/* Toggleable Services Submenu */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left py-2 mt-2 border-b border-cyan-700 font-semibold flex items-center justify-between hover:text-yellow-300"
            >
              Services
              <span>{isServicesOpen ? "▲" : "▼"}</span>
            </button>

            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <Link href="/services/web" className="block hover:text-yellow-300">Web Development</Link>
                <Link href="/services/app" className="block hover:text-yellow-300">App Development</Link>
                <Link href="/services/uiux" className="block hover:text-yellow-300">UI/UX Design</Link>
                <Link href="/services/marketing" className="block hover:text-yellow-300">Digital Marketing</Link>
                <Link href="/services/software" className="block hover:text-yellow-300">Software Development</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
