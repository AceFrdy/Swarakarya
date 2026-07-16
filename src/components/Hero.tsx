"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-38 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative overflow-visible w-full">
      {/* Decorative corner accent (top-right) */}

      {/* Hero Content */}
      <div className="flex-1 flex flex-col gap-6 md:max-w-xl text-center md:text-left items-center md:items-start">
        <h2 className="font-creative text-sm font-bold tracking-widest text-navy uppercase">
          KAMI MEMBANGUN
        </h2>
        <h1 className="text-4xl font-creative sm:text-5xl md:text-6xl font-accent font-black text-navy leading-[1.15] tracking-tight">
          Solusi <span className="font-creative text-brand-gold font-normal tracking-wide text-5xl sm:text-6xl md:text-6xl block sm:inline mt-2">Digital</span> yang Bermakna
        </h1>
        <p className="text-navy text-base md:text-xl leading-relaxed max-w-lg">
          Swarakarya hadir sebagai partner kreatif yang membantu bisnis Anda tumbuh lebih cepat melalui solusi digital yang menarik dan bermakna. Kami menciptakan pengalaman digital yang relevan, inovatif, dan berkesinambungan.
        </p>
        <div className="mt-4 flex items-center justify-center md:justify-start">
          <a
            href="#kontak"
            className="btn-creative-dark font-accent text-base px-8 py-6 w-[212px] h-[64px] text-white flex items-center justify-center hover:scale-105 transition-transform"
            style={{
              backgroundImage: "url('/assets/279_hand_drawn_ink__brush_strokes.svg')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}
          >
            Mulai Sekarang
          </a>
        </div>
      </div>

      {/* Hero Mockup */}
      <div className="flex-1 w-full max-w-md md:max-w-none flex items-center justify-center">
        <div className="relative w-full h-[320px] md:h-[420px]">

          {/* Layer 1 — 420 blob background (behind laptop) */}
          <div
            className="absolute pointer-events-none select-none"
            style={{ inset: "-30px", zIndex: 1, }}
          >
            <Image
              src="/assets/420_bg_1_1.svg"
              alt=""
              fill
              loading="eager"
              className="object-contain"
            />
          </div>

          {/* Layer 2 — Laptop (on top, with float animation) */}
          <div
            className="absolute inset-0 animate-float"
            style={{ zIndex: 2 }}
          >
            <Image
              src="/assets/419_bg_laptop_1.svg"
              alt="Swarakarya Digital Solution Laptop Mockup"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
