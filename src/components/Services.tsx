"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ── Reusable inline brush-stroke underline ──────────────────── */
const BrushLine = ({ color }: { color: string }) => (
  <svg width="96" height="14" viewBox="0 0 116 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M116 11.8034C115.799 12.0688 111.606 6.21577 111.5 11.1559C110.053 5.38703 104.658 8.58549 100.905 8.61786C98.4882 8.64376 96.1932 7.51718 93.7445 7.92507C93.6014 8.81209 93.93 9.47898 94.6296 9.75092C95.9282 10.2559 98.308 9.05814 99.0394 10.502L80.7325 9.82861C61.7101 11.3631 42.1736 9.9581 22.9922 11.8098C22.1919 11.8875 21.1001 12.1918 20.2997 12.4379C19.4093 12.7098 18.7521 11.7904 19.0171 13.7457L37.2709 13.0659L42.3273 13.7393L11.3053 15.6687C5.76131 19.2945 2.32148 13.1177 0 7.71142C0.339212 2.75836 10.3513 1.07495 13.4466 0.803019C37.9282 -1.32065 64.5616 1.61235 89.2552 0.123195C98.2709 2.09147 112.147 -1.3854 115.995 11.8034H116Z"
      fill={color}
    />
  </svg>
);

/* ── Services data ───────────────────────────────────────────── */
type ServiceItem = {
  id: number;
  title: string;
  color: string;
  iconSrc?: string;
  iconJsx?: React.ReactNode;
};

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Website\nDevelopment",
    color: "#3B82F6",
    iconJsx: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#3B82F6" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Mobile App\nDevelopment",
    color: "#D84444",
    iconSrc: "/assets/332_vector.svg",
  },
  {
    id: 3,
    title: "Sistem\nInformasi",
    color: "#EAA924",
    iconSrc: "/assets/328_vector.svg",
  },
  {
    id: 4,
    title: "UI/UX\nDesign",
    color: "#8A38F5",
    iconSrc: "/assets/336_vector.svg",
  },
  {
    id: 5,
    title: "Digital\nConsulting",
    color: "#9333EA",
    iconJsx: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#9333EA" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "System\nIntegration",
    color: "#F97316",
    iconJsx: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Cloud\nServices",
    color: "#0EA5E9",
    iconJsx: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#0EA5E9" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Maintenance\n& Support",
    color: "#4AA94B",
    iconSrc: "/assets/324_vector.svg",
  },
];

/* ── Service Card ────────────────────────────────────────────── */
function ServiceCard({ srv }: { srv: ServiceItem }) {
  return (
    <div
      className="bg-[#F9F7F3] rounded-3xl p-7 flex flex-col items-center text-center gap-5
                 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                 flex-shrink-0"
      style={{ border: `1.5px solid ${srv.color}33` }}
    >
      <div className="w-20 h-20 flex items-center justify-center">
        {srv.iconSrc ? (
          <Image
            src={srv.iconSrc}
            alt={srv.title.replace("\n", " ")}
            width={64}
            height={64}
            className="object-contain"
            style={{ width: "64px", height: "auto" }}
          />
        ) : (
          srv.iconJsx
        )}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-accent text-base font-bold leading-snug text-navy whitespace-pre-line">
          {srv.title}
        </h3>
        <BrushLine color={srv.color} />
      </div>
    </div>
  );
}

/* ── Main Section ────────────────────────────────────────────── */
const VISIBLE_DESKTOP = 4;
const CARD_GAP = 24; // px  (gap-6 = 1.5rem = 24px)

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);   // how many cards we've slid
  const [cardW, setCardW] = useState(0);      // single card width in px
  const [animating, setAnimating] = useState(true);
  const maxOffset = SERVICES.length - VISIBLE_DESKTOP;

  /* Measure card width on mount / resize */
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.parentElement!.clientWidth - 80; // subtract nav buttons
      const w = (containerW - CARD_GAP * (VISIBLE_DESKTOP - 1)) / VISIBLE_DESKTOP;
      setCardW(w + CARD_GAP); // slide unit = card width + one gap
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Slide helpers */
  const next = useCallback(() => {
    setAnimating(true);
    setOffset((o) => {
      if (o >= maxOffset) return 0; // wrap to start
      return o + 1;
    });
  }, [maxOffset]);

  const prev = useCallback(() => {
    setAnimating(true);
    setOffset((o) => {
      if (o <= 0) return maxOffset; // wrap to end
      return o - 1;
    });
  }, [maxOffset]);

  /* Auto-slide every 3.5 s */
  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  const translateX = -(offset * cardW);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 services-bg-stroke"
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
        id="layanan"
        className="py-32 px-6 bg-white relative w-full overflow-hidden services-sec-stroke"
        style={{
          backgroundColor: "#FFFFFF",
          transform: "scale(var(--stroke-scale))",
          maskImage: "url('/assets/kertas.svg')",
          WebkitMaskImage: "url('/assets/kertas.svg')",
          maskSize: "max(100%, 1920px) 100%",
          WebkitMaskSize: "max(100%, 1920px) 100%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {/* ── Title ── */}
        <div className="text-center flex flex-col items-center gap-4 mb-14 relative z-10">
          <h2 className="font-accent text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Layanan Kami
          </h2>
          <div
            className="w-52 h-4.5 bg-brand-gold"
            style={{
              maskImage: "url('/assets/31_vector.svg')",
              WebkitMaskImage: "url('/assets/31_vector.svg')",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          <p className="text-gray-600 max-w-xl text-center leading-relaxed text-sm md:text-base mt-1">
            Kami menyediakan berbagai layanan desain kreatif untuk membantu membangun identitas
            visual, promosi, dan komunikasi yang lebih menarik.
          </p>
        </div>

        {/* ── Slider (Desktop) ── */}
        <div className="hidden md:flex items-center gap-5 max-w-6xl mx-auto relative z-10">
          {/* Prev button */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center
                     text-white transition-all shadow-md focus:outline-none flex-shrink-0"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Sliding track */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: animating ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
              }}
            >
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  style={{ width: cardW ? `${cardW - CARD_GAP}px` : "calc(25% - 18px)", flexShrink: 0 }}
                >
                  <ServiceCard srv={srv} />
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center
                     text-white transition-all shadow-md focus:outline-none flex-shrink-0"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Slider (Mobile) ── */}
        <div className="flex md:hidden items-center gap-3 relative z-10">
          <button onClick={prev}
            className="w-9 h-9 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white shadow-md flex-shrink-0"
            aria-label="Previous">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[260px]">
              <ServiceCard srv={SERVICES[offset % SERVICES.length]} />
            </div>
          </div>
          <button onClick={next}
            className="w-9 h-9 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white shadow-md flex-shrink-0"
            aria-label="Next">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Progress dots ── */}
        <div className="flex justify-center gap-2 mt-8 relative z-10">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimating(true); setOffset(Math.min(i, maxOffset)); }}
              className={`rounded-full transition-all duration-300 ${i === offset
                  ? "w-6 h-2.5 bg-navy"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-navy/50"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex justify-center relative z-10">
          <a
            href="#"
            className="font-bold font-accent text-navy hover:text-brand-gold transition-colors text-xl flex items-center gap-1.5"
          >
            Lihat Semua Layanan <span className="text-brand-gold font-bold text-base">&gt;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
