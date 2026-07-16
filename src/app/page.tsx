import React from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

/** Shared style for yellow torn-paper accents */
const yellowMask = {
  maskImage: "url('/assets/kertas.svg')",
  WebkitMaskImage: "url('/assets/kertas.svg')",
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
} as const;

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF6] paper-texture relative min-h-screen text-navy overflow-x-hidden">

      {/* 1. Navbar */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Client Logos Carousel */}
      <Clients />

      {/* 4. Services Section */}
      <div className="relative z-10">
        <Services />
      </div>

      {/* 5. Portfolio Section + Yellow Top-Left Accent
            The accent is INSIDE this wrapper (z-0), so it naturally sits BEHIND
            Portfolio's masked content (z-[1]) but is revealed below Portfolio's
            torn bottom edge, peeking into the WhyChooseUs zone below. */}
      <div className="-mt-44 relative z-0 overflow-visible">

        <div
          className="absolute bottom-[-120px] left-[-340px] w-[800px] h-[600px] bg-white pointer-events-none select-none"
          style={{ ...yellowMask, zIndex: -2, transform: "rotate(-45deg) scale(1.03)" }}
        />

        {/* Yellow accent: below Portfolio content, extends downward */}
        <div
          className="absolute bottom-[-120px] left-[-340px] w-[800px] h-[600px] bg-[#EAA924] pointer-events-none select-none"
          style={{ ...yellowMask, zIndex: -1, transform: "rotate(-45deg)" }}
        />

        <Portfolio />
      </div>

      {/* 6. Why Choose Us — fully transparent, no accents, z-10 sits above Portfolio z-0 */}
      <div className="relative z-10">
        <WhyChooseUs />
      </div>

      <div className="-mt-20 relative z-0"> {/* hapus overflow-hidden */}

        <div
          className="absolute top-[-270px] right-[-740px] w-[1820px] h-[1200px] bg-white pointer-events-none select-none"
          style={{ ...yellowMask, zIndex: -2, transform: "rotate(130deg) scale(1.016)" }}
        />

        <div
          className="absolute top-[-270px] right-[-740px] w-[1820px] h-[1200px] bg-[#EAA924] pointer-events-none select-none"
          style={{ ...yellowMask, zIndex: -1, transform: "rotate(130deg)" }}
        />
      </div>
      <div className="relative z-[1]">
        <Blog />
      </div>

      {/* 8. Footer Section — z-30 to render ABOVE Blog (z-20), kertas.svg mask connects the torn edges */}
      <div className="-mt-40 relative z-0">
        <Footer />
      </div>

    </div>
  );
}
