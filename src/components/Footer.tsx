"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="relative w-full"
    >
      {/* Navy masked section — kertas.svg on TOP portion only, not copyright bar */}
      <div
        className="navy-texture text-white relative w-full overflow-hidden pt-48 pb-0"
      >
        {/* Logo — full width top row */}
        <div className="max-w-7xl mx-auto px-6 pt-2 pb-8 relative z-10">
          <Image src="/assets/logo/logo_putih.svg" alt="Logo Swarakarya" width={200} height={200} style={{ width: "150px", height: "auto" }} />
        </div>

        {/* 4-column content row */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 relative z-10">

          {/* Description & CTA */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-300 text-xs leading-relaxed">
              Siap mewujudkan ide kreatif Anda? Hubungi kami untuk konsultasi dan temukan solusi terbaik sesuai kebutuhan Anda.
            </p>
            <div className="mt-2">
              <a
                href="#kontak"
                className="relative inline-flex items-center justify-center w-[180px] h-[52px] text-navy font-bold hover:scale-105 transition-transform"
              >
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    backgroundImage: "url('/assets/279_hand_drawn_ink__brush_strokes.svg')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    filter: "invert(1) brightness(1.5)"
                  }}
                />
                <span className="flex items-center gap-2 text-navy text-sm font-bold">
                  Hubungi Kami <span className="text-brand-gold text-base">📞</span>
                </span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-accent text-xl font-semibold tracking-wide text-white pb-1">
              Kontak
            </h4>
            <div className="flex flex-col gap-3 text-gray-300 text-xs leading-relaxed">
              <p className="font-semibold text-white">+62 222 444 570</p>
              <p>Jl. Pramuka No.89, Jalakala, Wakanda,</p>
              <p>Indonesia 55901</p>
              <a
                href="#"
                className="text-white hover:text-brand-gold underline text-xs flex items-center gap-1 mt-2 transition-colors"
              >
                Lihat di Google Maps <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-accent text-xl font-semibold tracking-wide text-white pb-1">
              Jam Operasional
            </h4>
            <div className="flex flex-col gap-3 text-gray-300 text-xs leading-relaxed">
              <p>Senin-Jumat: 08:00-17:00</p>
              <p>Sabtu: On Call</p>
              <p>Minggu: On Call</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-accent text-xl font-semibold tracking-wide text-white pb-1">
              Ikuti Kami
            </h4>
            <div className="grid grid-cols-4 gap-y-4 gap-x-2 max-w-[160px] text-white">
              {/* Row 1 */}
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 12h5" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Gmail">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </a>

              {/* Row 2 */}
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="4" ry="4" />
                  <polygon points="10 9 15 12 10 15" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Line — plain rectangle, outside mask */}
      <div className="w-full bg-white py-5 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy font-bold">
          <div>
            © {new Date().getFullYear()} Swarakarya. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="/privacy-policy" className="hover:text-brand-gold hover:underline transition-colors">Kebijakan Privasi</a>
            <span className="text-[10px] text-gray-300">•</span>
            <a href="/terms-of-service" className="hover:text-brand-gold hover:underline transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
