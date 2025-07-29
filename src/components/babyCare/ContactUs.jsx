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
            We're here to help – reach out anytime!
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
              No. 15, Ikenna Street, Off Nnamdi <br /> Azikiwe Road, Fegge,
              Onitsha, Anambra
            </p>
          </div>

          <div className="text-center p-8 bg-[#DEEDE4] backdrop-blur-sm rounded-3xl hover:bg-[#DEEDE9] transition-all duration-300">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/email 3.png"
                alt="phone"
                width={50}
                height={50}
              />
            </div>
            <p className="font-nunito text-black">
            contact@mamcare.com <br />
            Info@mamcare.com
            </p>
            </div>

          <div className="text-center p-8 bg-[#FEEED2] backdrop-blur-sm rounded-3xl hover:bg-[#FEEED7] transition-all duration-300">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/assets/email 3.png"
                alt="phone"
                width={50}
                height={50}
              />
            </div>
            <p className="font-nunito text-black">
            +234 803 123 4567 <br />
            +234 701 987 6543
            </p>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default ContactUs;
