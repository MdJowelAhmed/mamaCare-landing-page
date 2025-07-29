"use client";
import React from "react";
import { Heart, Shield, Clock, Award, CheckCircle, Check } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const services = [
    {
      icon: "/assets/card2.png",
      title: "Browse Nannies",
      description:
        "Our carefully selected nannies have years of experience in childcare.",
      topColor: "#f0e6f9",
      bottomColor: "#e8daf7",
    },
    {
      icon: "/assets/card1.png",
      title: " Request a Booking",
      description: "All our caregivers are thoroughly background checked.",
      topColor: "#fee8eb",
      bottomColor: "#fddee3",
    },
    {
      icon: "/assets/card3.png",
      title: " Get Confirmation",
      description: "We provide round-the-clock support for your peace of mind.",
      topColor: "#e0efe6",
      bottomColor: "#d2e7db",
    },
    {
      icon: "/assets/card4.png",
      title: " Pay & Review",
      description: "Our nannies are certified in early childhood development.",
      topColor: "#faeed4",
      bottomColor: "#f8e6c1",
    },
  ];

  return (
    <div>
      <section
        id="about"
        className=" bg-white max-w-[1441px] mx-auto container "
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8   h-[860px] lg:h-[600px]">
          {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BabyCare?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every child deserves the best care possible. Our platform connects families with exceptional nannies who share our commitment to nurturing young minds.
          </p>
        </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="animate-in slide-in-from-left duration-1000">
              <Image
                src="/assets/about.png"
                alt="Nanny with children"
                width={566}
                height={526}
                className="rounded-3xl lg:h-[550px]  lg:w-[566px]  w-full"
              />
            </div>
            <div className="animate-in lg:w-[562px] w-full slide-in-from-right duration-1000">
              <h3 className="text-4xl lg:text-3xl xl:text-5xlt lg:font-bold xl:font-extrabold text-black mb-6 font-nunito">
                We believe every child deserves <br /> care that feels like love
              </h3>
              <p className="text-black mb-8 leading-relaxed font-nunito">
                MamaCare was born from real-life parenting needs — built by
                families, for families — to make finding trusted, reliable
                nannies simple, safe, and stress-free.Whether you need hourly
                help or full-day support, MamaCare connects you with verified,
                experienced nannies right in your area. Our mission is simple:
              </p>
              <div className="space-y-4 font-nunito">
                {[
                  "Rigorous background checks and verification",
                  "Continuous training and development programs",
                  "24/7 family support and guidance",
                  // "Flexible scheduling to fit your lifestyle"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#76c138] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage: "url('/assets/aboutBg.png')",
          backgroundColor: "#fcf6f3",
        }}
      >
        <div className="container  px-4 sm:px-6 lg:px-8 max-w-[1441px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-nunito">
              {" "}
              How MamaCare Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-nunito">
              Simple steps to book trusted childcare, anytime.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl h-80 lg:w-60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group "
                style={{ backgroundColor: service.bottomColor }}
              >
                <div
                  className="h-36 relative flex items-center justify-center  rounded-b-[30px]"
                  style={{ backgroundColor: service.topColor }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={60}
                    className="flex items-bottom justify-center absolute bottom-4"
                  />
                </div>
                <div
                  className="h-36 px-6 py-4 text-center"
                  style={{ backgroundColor: service.bottomColor }}
                >
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 font-nunito">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm font-nunito">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
