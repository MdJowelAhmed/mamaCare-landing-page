"use client"
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = ({ activeSection, scrollToSection, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 overflow-x-hidden">
      <div className="max-w-[1441px] mx-auto container ">
        <div className="flex justify-between items-center h-16 min-w-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/assets/logo 2.png"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-nunito truncate">
              MamaCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-black border-b-2 font-black border-pink-600'
                    : 'text-black hover:text-pink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-[#CD671C] flex-shrink-0">
            <Phone className="w-5 h-5" />
            <span className="text-base lg:text-lg font-semibold font-nunito whitespace-nowrap">
              (303) 555-0105
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Phone Number */}
              <div className="flex items-center gap-2 mt-3 px-3 text-[#CD671C]">
                <Phone className="w-5 h-5" />
                <span className="text-base font-semibold font-nunito">(303) 555-0105</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;