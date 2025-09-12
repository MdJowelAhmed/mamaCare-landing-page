"use client";
import React from "react";
import { Baby } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = ({ navItems, scrollToSection }) => {
  return (
    <footer className=" text-white ">
      <div className=" mx-auto ">
        {/* <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Baby className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold">BabyCare</span>
          </div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div> */}
        <div className="bg-[#CD671C]  flex items-center justify-center py-5 text-center gap-20">
          <div className="flex items-center justify-center space-x-4">
            {" "}
            <FaFacebookF className="w-8 h-8 p-2 bg-white text-black rounded-lg" />
            <FaInstagram className="w-8 h-8 p-2 bg-white text-black rounded-lg" />
          </div>
          <p className="text-white">
            © 2025 MamaCare. All rights reserved. Made with for families
            everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
