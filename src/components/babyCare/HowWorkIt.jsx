"use client";
import React from "react";
import { Heart, Shield, Clock, Award, CheckCircle, Check } from "lucide-react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HowWorkIt = () => {
  return (
    <div id="how-it-works">
      <section  className="bg-white mt-16 max-w-[1441px] mx-auto h-[860px] lg:h-[600px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-96  lg:h-[300px]">
          <div className="grid lg:grid-cols-2 lg:gap-48 gap-10 items-center">
            <div className="animate-in lg:w-[560px]  w-full slide-in-from-right duration-1000">
              <h3 className="text-4xl lg:text-3xl xl:text-4xl lg:font-bold xl:font-extrabold text-black mb-6 font-nunito">
                Why Choose MamaCare?
              </h3>
              <p className="text-black mb-8 leading-relaxed font-nunito">
                Trusted by parents. Loved by nannies. Built for real-life needs.
                Helping families find safe, flexible care — and empowering
                nannies with meaningful, rewarding work.
              </p>
              <div className="space-y-4">
                {[
                  "Verified & background-checked nannies",
                  "Hourly & full-day booking options",
                  "Easy for families with multiple children",
                  "Real parent reviews you can trust",
                  "Emergency support & flexible cancellations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#76c138] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>

                    <span className="text-black text-sm sm:text-base font-nunito">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in slide-in-from-left duration-1000">
              <Image
                src="/assets/howWork.png"
                alt="Nanny with children"
                width={566}
                height={526}
                className="rounded-3xl lg:h-[526px]  lg:w-[500px]  w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat  relative py-8"
        style={{
          backgroundImage: "url('/assets/aboutBg.png')",
          backgroundColor: "#fcf6f3",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative gap-10 max-w-[1441px]">
          {/* Left Text Content */}
          <div className="text-start lg:w-[526px]  w-full text-gray-900 z-10">
            <h2 className="text-4xl font-bold mb-4 font-nunito">
              Childcare is always within reach with MamaCare
            </h2>
            <p className="text-lg mb-8 font-nunito">
              Quickly find trusted nannies or babysitting jobs in your area —
              anytime, right from the app!
            </p>
            <div className="flex justify-start gap-6 font-nunito">
              <button className="bg-[#CD671C] text-white py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 flex items-center gap-2">
                <FaGooglePlay className="text-xl" />
                <span>Google Play</span>
              </button>
              <button className="bg-[#CD671C] text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 flex items-center gap-2">
                <FaApple className="text-xl" />
                <span>App Store</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className=" w-full flex justify-center items-center z-10">
            <Image
              src="/assets/mobile2.png" // Replace with the phone image
              alt="Phone"
              width={608}
              height={526}
              className=" lg:w-[608px] lg:h-[525px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWorkIt;
