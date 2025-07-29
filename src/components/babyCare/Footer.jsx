"use client"
import React from 'react';
import { Baby } from 'lucide-react';

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
        <div className="bg-[#CD671C]   py-5 text-center">
          <p className="text-white">© 2025 MamaCare. All rights reserved. Made with for families everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
