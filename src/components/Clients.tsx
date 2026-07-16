"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { id: 1, name: "Perpustakaan Nasional", src: "/assets/logo/logo 1 1.svg" },
  { id: 2, name: "Kemenpkp", src: "/assets/logo/logo 2 1.svg" },
  { id: 3, name: "Badan Industri Mineral", src: "/assets/logo/logo 3 1.svg" },
  { id: 4, name: "Bank Indonesia", src: "/assets/logo/logo 4 1.svg" }
];

export default function Clients() {
  const [clientIndex, setClientIndex] = useState(0);

  // Auto-scrolling for client logos
  useEffect(() => {
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setClientIndex((prev) => (prev === 0 ? CLIENT_LOGOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setClientIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
  };

  return (
    <section className="py-16  relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Title with Brush Underline */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-center font-accent text-navy text-xl sm:text-2xl font-bold">
            Dipercaya oleh berbagai instansi & perusahaan
          </p>
          <div 
            className="w-48 h-3.5 bg-brand-gold"
            style={{
              maskImage: "url('/assets/31_vector.svg')",
              WebkitMaskImage: "url('/assets/31_vector.svg')",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat"
            }}
          />
        </div>
        
        {/* Slider Controls and Carousel */}
        <div className="w-full flex items-center justify-between gap-4 max-w-5xl">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white transition-all shadow-md focus:outline-none flex-shrink-0"
            aria-label="Previous Clients"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div className="flex-1 overflow-hidden h-24 relative flex items-center justify-center">
            {/* Desktop: Show all 4 logos in a row side-by-side */}
            <div className="hidden md:flex items-center justify-center gap-12 w-full">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div 
                  key={logo.id} 
                  className={`w-44 h-16 relative flex-shrink-0 transition-all duration-500 ${
                    clientIndex === idx ? "scale-105 opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              ))}
            </div>

            {/* Mobile/Tablet: Slide one or two logos at a time */}
            <div className="flex md:hidden items-center justify-center w-full">
              <div className="w-48 h-16 relative transition-all duration-500 transform scale-100">
                <Image 
                  src={CLIENT_LOGOS[clientIndex].src} 
                  alt={CLIENT_LOGOS[clientIndex].name} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white transition-all shadow-md focus:outline-none flex-shrink-0"
            aria-label="Next Clients"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-2">
          {CLIENT_LOGOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setClientIndex(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                clientIndex === idx ? "bg-brand-gold scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
