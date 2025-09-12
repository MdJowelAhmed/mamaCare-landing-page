"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-20   text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-bold mb-6 font-nunito">
            Contact Information
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-nunito">
           We’d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#EFE5F9] backdrop-blur-sm rounded-3xl hover:bg-[#EFE5F0] transition-all duration-300">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/email 3.png"
                alt="phone"
                width={50}
                height={50}
              />
            </div>
           
            <p className="font-nunito text-black">
              Potomac Highland Circle Triangle, Virginia
            </p>
          </div>

          <div className="text-center p-8 bg-[#DEEDE4] backdrop-blur-sm rounded-3xl hover:bg-[#DEEDE9] transition-all duration-300">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/email 3 (1).png"
                alt="phone"
                width={50}
                height={50}
              />
            </div>
            <p className="font-nunito text-black">
           support@mamacaresitters.com <br />
            {/* Info@mamcare.com */}
            </p>
            </div>

          <div className="text-center p-8 bg-[#FEEED2] backdrop-blur-sm rounded-3xl hover:bg-[#FEEED7] transition-all duration-300">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/email 3 (2).png"
                alt="phone"
                width={50}
                height={50}
              />
            </div>
            <p className="font-nunito text-black">
            +7038846202 <br />
           
            </p>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default ContactUs;
