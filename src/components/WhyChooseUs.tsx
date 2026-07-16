"use client";

import React from "react";

export default function WhyChooseUs() {
  return (
    <section 
      id="tentang-kami" 
      className="py-32 px-6 relative w-full z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Area (Left) */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start max-w-xl">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className=" text-navy text-sm md:text-base font-semibold tracking-wide">
              Masih Bertanya tanya...
            </span>
            <h3 className="text-3xl font-creative sm:text-4xl md:text-6xl font-black text-navy leading-tight tracking-tight">
              Mengapa <span className="font-creative text-brand-gold text-4xl sm:text-5xl md:text-6xl font-normal block sm:inline">Memilih</span> Kami?
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Kami menghadirkan solusi kreatif yang mengutamakan kualitas, ketepatan, dan kepuasan klien. Setiap proyek dikerjakan dengan profesional untuk menghasilkan karya yang sesuai dengan kebutuhan dan tujuan Anda.
          </p>

          <div className="mt-4">
            <a
              href="#kontak"
              className="relative inline-flex items-center justify-center w-[210px] h-[56px] hover:scale-105 transition-transform duration-200"
            >
              <div
                className="absolute inset-0 -z-10"
                style={{
                  backgroundImage: "url('/assets/279_hand_drawn_ink__brush_strokes.svg')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <span className="flex items-center gap-2 font-accent text-white text-sm font-bold italic">
                Konsultasi Gratis <span className="not-italic">→</span>
              </span>
            </a>
          </div>
        </div>

        {/* Feature Grid (Right) */}
        <div className="flex-1 w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Aman & Terpercaya",
              desc: "Menjaga kualitas layanan, transparansi, dan kepercayaan dalam setiap proses kerja.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            },
            {
              title: "Tim Profesional",
              desc: "Didukung oleh tim yang berpengalaman, komunikatif, dan berkomitmen memberikan hasil terbaik.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            },
            {
              title: "Tepat Waktu",
              desc: "Menyelesaikan setiap proyek sesuai jadwal yang telah disepakati tanpa mengurangi kualitas.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            },
            {
              title: "Solusi Inovatif",
              desc: "Menghadirkan ide dan solusi kreatif yang mengikuti perkembangan tren dan kebutuhan.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            }
          ].map((card) => (
            <div key={card.title} className="bg-[#F9F7F3] border border-gray-100/50 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center mt-2">
                <svg className="w-10 h-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {card.icon}
                </svg>
              </div>
              <h4 className="font-bold text-base text-navy">{card.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
