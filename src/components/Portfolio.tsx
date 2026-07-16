"use client";

import React, { useState } from "react";
import Image from "next/image";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Web Management Design",
    category: "Design",
    image: "/extracted/417_32879086_7971339_1.jpg",
    description: "Pengembangan dan pengelolaan website yang responsif, modern, dan mudah digunakan untuk mendukung kebutuhan bisnis, organisasi, maupun instansi."
  },
  {
    id: 2,
    title: "Sistem Informasi Manajemen Kemen",
    category: "Development",
    image: "/extracted/420_bg_1_1.png",
    description: "Integrasi platform sistem informasi internal untuk memfasilitasi koordinasi antar unit kerja secara efisien."
  },
  {
    id: 3,
    title: "UI/UX Redesign Portal Finansial",
    category: "UI/UX Design",
    image: "/extracted/316_bg_2.png",
    description: "Transformasi visual dan peningkatan alur transaksi pengguna pada portal manajemen keuangan digital."
  }
];

export default function Portfolio() {
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const handlePrev = () => {
    setPortfolioIndex((prev) => (prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPortfolioIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  };

  return (
    <div>
      <div
        className="absolute inset-0 portfolio-bg-stroke"
        style={{
          backgroundColor: "#B8B8B8",
          transform: "scale(var(--stroke-scale))",
          transformOrigin: "center",
          maskImage: "url('/assets/kertas.svg')",
          WebkitMaskImage: "url('/assets/kertas.svg')",
          maskSize: "max(100%, 1920px) 100%",
          WebkitMaskSize: "max(100%, 1920px) 100%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
      <section
        id="portofolio"
        className="navy-texture text-white py-36 px-6 pt-50 md:pt-50 relative w-full overflow-hidden"
        style={{
          maskImage: "url('/assets/kertas.svg')",
          WebkitMaskImage: "url('/assets/kertas.svg')",
          maskSize: "max(100%, 1920px) 100%",
          WebkitMaskSize: "max(100%, 1920px) 100%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat"
        }}
      >
        {/* Splash backings */}
        <div className="absolute left-[-100px] top-[10%] opacity-10 w-[400px] h-[400px] pointer-events-none select-none">
          <Image src="/assets/103_hand_drawn_ink__brush_strokes.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute right-[-100px] bottom-[10%] opacity-15 w-[400px] h-[400px] pointer-events-none select-none">
          <Image src="/assets/125_hand_drawn_ink__brush_strokes.svg" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 p-12 relative z-10">

          {/* Left Column (Content & CTA) */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start max-w-xl">
            {/* Section Title with Underline */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h2 className="font-accent text-3xl md:text-4xl font-extrabold tracking-tight">
                Portofolio Kami
              </h2>
              <div
                className="w-28 h-3.5 bg-brand-gold"
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

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Jelajahi portofolio kami dan temukan berbagai proyek kreatif yang telah kami wujudkan.
            </p>

            <div className="mt-4 flex flex-col items-center lg:items-start gap-4">
              <span className="font-accent text-xl font-bold text-white tracking-wide">
                Tertarik?
              </span>
              <a
                href="#kontak"
                className="relative inline-flex items-center justify-center w-[180px] h-[52px] text-navy font-bold hover:scale-105 transition-transform duration-200"
              >
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    backgroundImage: "url('/assets/166_hand_drawn_ink__brush_strokes.svg')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    filter: "invert(1) brightness(1.5)"
                  }}
                />
                <span className="flex items-center gap-2 text-navy text-sm font-accent font-bold">
                  Hubungi Kami <span className="text-brand-gold text-base">→</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column (3D Stacked Cards Slider) */}
          <div className="flex-1 w-full max-w-md md:max-w-lg relative flex items-center justify-center py-6">

            {/* Slide Arrow Controls */}
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-navy shadow-xl z-20 transition-all focus:outline-none"
              aria-label="Previous Project"
            >
              <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-navy shadow-xl z-20 transition-all focus:outline-none"
              aria-label="Next Project"
            >
              <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Card Stack Wrapper */}
            <div className="relative w-full h-[460px] md:h-[480px]">
              {/* Background Tilted Card 1 (tilted left) */}
              <div className="absolute inset-0 bg-white/90 shadow-lg transform rotate-[-2.5deg] translate-y-2 z-0 border border-gray-100/50" />

              {/* Background Tilted Card 2 (tilted right) */}
              <div className="absolute inset-0 bg-white/95 shadow-xl transform rotate-[2deg] translate-y-1 z-0 border border-gray-100/30" />

              {/* Foreground Main Card (straight) */}
              <div className="relative w-full h-full bg-white text-navy p-6 shadow-2xl z-10 flex flex-col gap-5 border border-gray-100/10">

                {/* Cover Photo */}
                <div className="w-full h-56 relative overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src={PORTFOLIO_ITEMS[portfolioIndex].image}
                    alt={PORTFOLIO_ITEMS[portfolioIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Tag & Meta */}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-brand-purple text-xs font-bold uppercase tracking-wider">
                    {PORTFOLIO_ITEMS[portfolioIndex].category}
                  </span>
                </div>

                {/* Title & Arrow Link */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-accent text-xl font-bold leading-snug text-navy">
                    {PORTFOLIO_ITEMS[portfolioIndex].title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {PORTFOLIO_ITEMS[portfolioIndex].description}
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
