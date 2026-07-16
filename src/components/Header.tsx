"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Beranda", href: "#", section: "beranda" },
  { label: "Layanan", href: "#layanan", section: "layanan" },
  { label: "Portofolio", href: "#portofolio", section: "portofolio" },
  { label: "Tentang Kami", href: "#tentang-kami", section: "tentang-kami" },
  { label: "Blog", href: "#blog", section: "blog" },
  { label: "Kontak", href: "#kontak", section: "kontak" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  /* ── Scroll: active section detection only ── */
  useEffect(() => {
    const onScroll = () => {
      const sectionIds = NAV_ITEMS.map((n) => n.section).filter((s) => s !== "beranda");
      let current = "beranda";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden py-5"
      style={{ background: "transparent" }}
    >
      {/* ── Brush-stroke background (inline SVG, truly full width) ── */}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 57"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <path
          d="M197.97 35.0674C196.29 35.6674 197.6 29.7874 195 32.0774C193.44 33.4574 190.82 43.9574 188.48 44.0474L186.49 40.0874C174.87 48.8074 163.16 45.1774 150.47 44.0774C144.33 43.5474 138.06 44.6573 131.98 43.0573L132.99 41.0774L122.99 40.0774L125.98 43.0573L112.99 42.0774L115.98 45.0573C102.16 45.2173 88.25 44.5474 74.49 46.0774C60.73 47.6074 39.25 56.3973 27.64 55.9973C16.03 55.5973 6.3 44.8773 2.5 35.0573C-0.23 28.0073 0.37 22.4374 0 15.0774L1 20.0674L3.97998 16.0774L5.97998 20.0774C5.08998 15.1574 4.78001 11.4873 7.01001 6.80734C8.84001 2.96734 12.8 6.45735 13.01 2.06735L16.49 5.04739L18 1.06735C22.41 4.20735 18.46 8.98738 25.48 9.15738C33.81 9.35738 52.31 3.39737 62.63 2.20737C84.22 -0.272634 108.81 -0.682638 130.48 1.07736C141.86 1.99736 157.6 6.51739 168.4 4.97739C171.27 4.56739 173.46 2.73739 175.72 2.29739C182.03 1.09739 186.92 2.79735 191.48 7.06735C198.03 13.1974 201.38 26.6374 197.98 35.0474L197.97 35.0674ZM176.98 39.0874C174.44 38.6874 171.54 40.8073 169.28 40.8073C166.71 40.8073 163 36.5974 160.98 41.0674L164.99 41.5774L162.98 43.0674C167.26 42.6274 174.11 42.7374 176.97 39.0874H176.98Z"
          fill="white"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Logo ── */}
        <a href="#" className="flex-shrink-0 flex flex-col items-start gap-0.5">
          <Image src="/assets/logo/logo_utama.svg" alt="Swarakarya Logo" width={300} height={300} style={{ width: "150px", height: "auto" }} />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <a
                key={item.section}
                href={item.href}
                className="relative flex flex-col items-center gap-0.5 group"
                onClick={() => setActiveSection(item.section)}
              >
                <span
                  className={`text-sm tracking-wide transition-all duration-200 ${isActive
                    ? "font-bold text-navy"
                    : "font-medium text-navy/70 hover:text-navy"
                    }`}
                >
                  {item.label}
                </span>

                {/* Gold brush-stroke underline – visible only when active */}
                <span
                  className={`w-full h-3 relative transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                >
                  <Image
                    src="/assets/280_vector.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </a>
            );
          })}
        </nav>

        {/* ── CTA Button "Konsultasi Gratis" ── */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="#kontak"
            className="relative inline-flex items-center justify-center
                       w-[200px] h-[64px]
                       text-white font-bold italic text-[15px] tracking-wide
                       hover:scale-105 transition-transform duration-200 select-none"
          >
            {/* Brush-stroke background image */}
            <span
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/assets/279_hand_drawn_ink__brush_strokes.svg')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden="true"
            />
            <span className="relative text-lg mr-4 mb-1 z-10 font-accent">Konsultasi Gratis</span>
          </a>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-navy focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-5" style={{ position: "relative", zIndex: 1 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <a
                key={item.section}
                href={item.href}
                onClick={() => { setActiveSection(item.section); setMobileMenuOpen(false); }}
                className="relative inline-flex flex-col items-start gap-0.5"
              >
                <span className={`text-lg transition-all ${isActive ? "font-bold text-navy" : "font-medium text-navy/70"}`}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-16 h-3 relative">
                    <Image src="/assets/280_vector.svg" alt="" fill className="object-contain" />
                  </span>
                )}
              </a>
            );
          })}

          {/* Mobile CTA */}
          <a
            href="#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="relative inline-flex items-center justify-center
                       w-[190px] h-[52px]
                       text-white font-bold italic text-[15px]
                       hover:scale-105 transition-transform duration-200 mt-2"
          >
            <span
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/assets/279_hand_drawn_ink__brush_strokes.svg')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10">Konsultasi Gratis</span>
          </a>
        </div>
      )}
    </header>
  );
}
