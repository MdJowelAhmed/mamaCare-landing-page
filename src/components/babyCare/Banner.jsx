"use client";
import React from "react";

const Banner = ({ scrollToSection }) => {
  return (
    <section id="home" className=" mt-16 h-96 lg:h-[702px] flex items-center bg-white relative">
      <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: "url('/assets/banner.png')" }} />
      
      <div className="container px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-12 items-center relative z-10 max-w-[1441px] mx-auto">
        {/* Left Text Content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[55px] font-bold font-balsamiq text-gray-900 leading-snug mb-6 ">
            {/* Find <span className="text-orange-500">Trusted</span>{" "} <br />
            <span className="text-orange-500">Nannies</span> for Your <br />
            <span className="text-gray-800">Precious Ones</span> */}
            Because raising a child takes a village, and <br /> <strong className="text-[#CD671C]">MamaCare</strong> is your village.
          </h1>
          <p className="text-base md:text-[22px] text-[#666666] mb-8  font-nunito">
            Find trusted sitters and nannies from within the African community in the diaspora.
          </p>
          <div className="flex flex-row gap-10 mb-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#CD671C] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition duration-300"
            >
              Find a Sitter
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="flex items-center gap-2 text-[#CD671C] font-medium hover:underline"
            >
              <span className="text-white h-9 w-9 bg-[#CD671C] rounded-full flex items-center justify-center">▶</span> Become a Caregiver
            </button>
          </div>

          <p className="text-[#666666] text-[18px] font-nunito">Children are a heritage from the Lord, offspring a reward from him.” – Psalm 127:3</p>
        </div>

        {/* Right Image (background image already used) */}
        <div className="flex justify-center md:justify-end"></div>
      </div>
    </section>
  );
};

export default Banner;
