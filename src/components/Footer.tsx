// app/Components/Footer.tsx

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-half after:h-[3px] after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 after:rounded-full after:transition-all after:duration-500 hover:after:from-white hover:after:to-white transition-transform hover:-translate-y-1">
  Dream Sky Tech
</h3>
         
          <p className="text-sm">
            We are a modern IT solutions company delivering reliable services.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
              <a href="#" className="hover:text-yellow-300">
              <FaWhatsapp />
            </a>
             <a href="#" className="hover:text-yellow-300">
              <FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-half after:h-[3px] after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 after:rounded-full after:transition-all after:duration-500 hover:after:from-white hover:after:to-white transition-transform hover:-translate-y-1">
  Quick Links   
</h3>
    
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-half after:h-[3px] after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 after:rounded-full after:transition-all after:duration-500 hover:after:from-white hover:after:to-white transition-transform hover:-translate-y-1">
  Services
</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Web Development</a></li>
            <li><a href="#" className="hover:text-yellow-300">UI/UX Design</a></li>
            {/* <li><a href="#" className="hover:text-white">Cloud Solutions</a></li> */}
            {/* <li><a href="#" className="hover:text-white">Tech Consulting</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
         <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-half after:h-[3px] after:bg-gradient-to-r after:from-cyan-100 after:to-blue-400 after:rounded-full after:transition-all after:duration-500 hover:after:from-white hover:after:to-white transition-transform hover:-translate-y-1">
Contact Us
</h3>

                 <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer">Email: info@dreamskytech.com</li>
            <li className="hover:text-yellow-300 cursor-pointer">Mobile Number: 8750610304</li>
            <li className="hover:text-yellow-300 cursor-pointer">Address: A-43, Noida Sector 63, Uttar Pradesh, 201301</li>
          </ul>
        </div>
      </div>
<a href="https://wa.me/8750610304" target="_blank" rel="noopener noreferrer"
   className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex-2/5">

  <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.379.758 4.574 2.031 6.398L5 28l6.711-1.75C13.092 27.133 14.514 27.5 16 27.5c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.305 0-2.563-.254-3.723-.75l-.27-.117-4.367 1.141 1.164-4.25-.176-.281C7.188 19.086 6.5 17.082 6.5 15c0-5.238 4.262-9.5 9.5-9.5S25.5 9.762 25.5 15 21.238 25 16 25zm5.063-7.539c-.281-.141-1.672-.832-1.93-.926-.258-.094-.446-.141-.633.141s-.727.926-.891 1.117c-.164.188-.328.207-.609.07-.281-.141-1.188-.438-2.266-1.398-.836-.746-1.398-1.672-1.562-1.953-.164-.281-.018-.434.123-.574.127-.125.281-.328.422-.492.141-.164.188-.281.281-.469.094-.188.047-.352-.023-.492-.07-.141-.633-1.523-.867-2.086-.23-.551-.465-.477-.633-.484l-.539-.012c-.188 0-.492.07-.75.352s-.984.961-.984 2.348c0 1.387 1.008 2.73 1.148 2.922.141.188 1.98 3.172 4.801 4.453.672.289 1.195.461 1.602.59.672.215 1.285.184 1.77.109.539-.082 1.672-.684 1.906-1.344.234-.66.234-1.215.164-1.332-.07-.117-.258-.188-.539-.328z"/>
  </svg>
</a>

      {/* Bottom */}
      <div className="text-center text-sm text-white mt-10 border-t border-gray-700 pt-6">
     &copy; Copyright dreamskytech  {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
