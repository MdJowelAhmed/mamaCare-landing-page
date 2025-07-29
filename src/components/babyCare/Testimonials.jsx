"use client";
import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 2",
      image: "https://i.ibb.co/7Jn24gch/684befe7696e3ebd23c7a3f7-6841287f022320ba6d4df48a-Client-Jenna-avif.png",
      rating: 5,
      text: "Finding the perfect nanny through this service was a game-changer for our family. Our nanny is not just caring but truly understands our children's needs.",
    },
    {
      name: "Michael Chen",
      role: "Father of 1",
      image: "https://i.ibb.co/8gh3mqPR/Ellipse-48-1.jpg",
      rating: 5,
      text: "The peace of mind knowing our daughter is with someone we trust completely is priceless. Highly recommend their services to any parent.",
    },
    {
      name: "Emily Rodriguez",
      role: "Working Mom",
      image: "https://i.ibb.co/qHGmP2p/Ellipse-1.png",
      rating: 5,
      text: "Professional, caring, and reliable. Our nanny has become part of our family, and we couldn't be happier with the service.",
    },
    // Duplicate entries removed for brevity
  ];

  return (
    <section id="testimonials" className="pt-16 pb-6 bg-white">
      <div className="lg:max-w-4xl w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real families and nannies who trust MamaCare every
            day.
          </p>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="swiper-horizontal-cards relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <div className="card-content flex justify-center items-center gap-6 md:gap-10 rounded-2xl">
                <div className="flex w-full items-center p-5 justify-center border-amber-600">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    className="object-cover lg:w-[400px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex mb-4 justify-center sm:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed font-nunito text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-4">
                    <h4 className="text-2xl font-bold text-gray-900 font-nunito mt-4 mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-nunito">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
