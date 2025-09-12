"use client";
import React from "react";
import { Heart, Shield, Clock, Award, CheckCircle, Check, Download, Users, Calendar, Home } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const services = [
    {
      icon: "/assets/downloadApp.png",
      title: "Download the APP",
      description: "Create your family or caregiver profile.",
      topColor: "#f0e6f9",
      bottomColor: "#e8daf7",
    },
    {
      icon: "/assets/card2.png",
      title: "Connect",
      description: "Browse trusted sitters or families near you.",
      topColor: "#fee8eb",
      bottomColor: "#fddee3",
    },
    {
      icon: "/assets/card3.png",
      title: "Book",
      description: "Schedule, confirm, and pay securely.",
      topColor: "#e0efe6",
      bottomColor: "#d2e7db",
    },
    {
      icon: "/assets/care.png",
      title: "Care",
      description: "Experience loving, reliable childcare that feels like home.",
      topColor: "#faeed4",
      bottomColor: "#f8e6c1",
    },
  ];

  return (
    <div>
      {/* About Section */}
      <section
        id="about"
        className="bg-white max-w-[1441px] mx-auto container"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          {/* <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 font-nunito">
              🌍 MamaCare – A Family, A Community, A Village.
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-nunito">
              Serving the African community in the diaspora with safe, reliable, and culturally aligned childcare.
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <Image
                src="/assets/about.png"
                alt="MamaCare - African family with children"
                width={566}
                height={526}
                className="rounded-3xl lg:h-[550px] lg:w-[566px] w-full shadow-lg"
              />
            </div>
            <div className="animate-in lg:w-[562px] w-full slide-in-from-right duration-1000">
              <h3 className="text-4xl lg:text-3xl xl:text-5xl lg:font-bold xl:font-extrabold text-black mb-6 font-nunito">
                We believe every child deserves care that feels like love
              </h3>
              <p className="text-black mb-8 leading-relaxed font-nunito text-lg">
                MamaCare was created to serve the African community in the diaspora with safe, reliable, and culturally aligned childcare. Unlike other sitter apps, MamaCare is rooted in <strong className="text-[#76c138]">African values of community, faith, and family support</strong>.
              </p>
              <h2 className="text-2xl font-bold text-black mb-6 font-nunito">We believe:</h2>
              <div className="space-y-4 font-nunito">
                {[
                  <><strong>Family-Centered:</strong> Caregivers are more than sitters — they're aunties, uncles, brothers, and sisters</>,
                  <><strong>Community First:</strong> Together we build a trusted support system</>,
                  <><strong>Faith & Values:</strong> Guided by love, trust, and biblical principles</>,
                  <><strong>Cultural Connection:</strong> From language to lifestyle, our caregivers understand your world</>,
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

          {/* Inspirational Quote */}
          {/* <div className="text-center mt-16 py-12 bg-gradient-to-r from-[#f8f4f0] to-[#fcf6f3] rounded-3xl">
            <p className="text-2xl font-semibold text-[#76c138] mb-4 font-nunito">
              📖 "Let all that you do be done in love." – 1 Corinthians 16:14
            </p>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 font-nunito">✨ "No wahala, MamaCare get you covered."</p>
              <p className="text-lg text-gray-700 font-nunito">✨ "Family no be only blood, na community."</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage: "url('/assets/aboutBg.png')",
          backgroundColor: "#fcf6f3",
        }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-[1441px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
               How MamaCare Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-nunito">
               Childcare made simple and safe.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl h-80 lg:w-60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ backgroundColor: service.bottomColor }}
              >
                <div
                  className="h-36 relative flex items-center justify-center rounded-b-[30px]"
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

          {/* Call to Action */}
          {/* <div className="text-center">
            <p className="text-lg text-gray-700 font-nunito mb-6">✨ "We dey for you, anytime, any day."</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-nunito">
                👉 Join MamaCare Today
              </h3>
              <p className="text-gray-600 mb-6 font-nunito">
                Download APP on Google or Apple store
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#CD671C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#65a830] transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

 
    </div>
  );
};

export default AboutUs;