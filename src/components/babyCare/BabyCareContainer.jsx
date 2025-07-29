"use client"
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import AboutUs from './AboutUs';
import HowWorkIt from './HowWorkIt';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

const BabyCareContainer = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-it-works', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        navItems={navItems} 
      />
      <Banner scrollToSection={scrollToSection} />
      <AboutUs />
      <HowWorkIt scrollToSection={scrollToSection} />
      <Testimonials />
      <ContactUs scrollToSection={scrollToSection} />
      <Footer navItems={navItems} scrollToSection={scrollToSection} />
    </div>
  );
};

export default BabyCareContainer;