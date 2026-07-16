"use client";

import React, { useState } from "react";
import Image from "next/image";

const BLOG_POSTS = [
  {
    id: 1,
    title: "UX review presentations",
    category: "Design",
    date: "20 Jan 2026",
    author: "Olivia Ryhe",
    avatar: "/assets/317_ellipse_37.svg",
    image: "/assets/blog/blog1.svg",
    description: "How do you create compelling presentations that work your colleagues and impress your managers?"
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    category: "Product",
    date: "19 Jan 2026",
    author: "Phoenix Baker",
    avatar: "/assets/319_ellipse_36.svg",
    image: "/assets/blog/blog2.svg",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started."
  },
  {
    id: 3,
    title: "Building your API Stack",
    category: "Software Engineering",
    date: "18 Jan 2026",
    author: "Lana Steiner",
    avatar: "/assets/338_ellipse_37.svg",
    image: "/assets/blog/blog3.svg",
    description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
  },
  {
    id: 4,
    title: "Bill Walsh leadership lessons",
    category: "Management",
    date: "17 Jan 2026",
    author: "Alec Whitten",
    avatar: "/assets/319_ellipse_36.svg",
    image: "/assets/blog/blog4.svg",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
  },
  {
    id: 5,
    title: "PM mental models",
    category: "Product",
    date: "16 Jan 2026",
    author: "Demi Wilkinson",
    avatar: "/assets/340_ellipse_36.svg",
    image: "/assets/blog/blog5.svg",
    description: "Mental models are simple expressions of complex processes or relationships."
  },
  {
    id: 6,
    title: "What is Wireframing?",
    category: "Design",
    date: "15 Jan 2026",
    author: "Candice Wu",
    avatar: "/assets/317_ellipse_37.svg",
    image: "/assets/blog/blog6.svg",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const filteredBlogs = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeIndex = Math.min(currentMobileIndex, Math.max(0, filteredBlogs.length - 1));

  return (
    <div>
      <div
        className="absolute inset-0 blog-bg-stroke"
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
        id="blog"
        className="py-32 md:pb-48 pb-80 pt-70 md:pt-50 px-6 bg-white relative w-full overflow-hidden"
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
        {/* Title */}
        <div className="text-center flex flex-col items-center gap-4 mb-12 relative z-10">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-accent text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Blog Kami
            </h2>
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
          <p className="text-navy max-w-2xl text-center leading-relaxed text-sm md:text-base mt-2">
            Kami menghadirkan berbagai artikel, tips, dan informasi seputar desain, branding, media digital, teknologi, serta inspirasi kreatif untuk membantu Anda terus berkembang di era digital.
          </p>
        </div>

        {/* Dynamic Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative z-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pencarian"
            className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 bg-white/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold text-sm transition-all"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Blog Post Grid & Slider */}
        {filteredBlogs.length > 0 ? (
          <>
            {/* Desktop view: Grid */}
            <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 px-6">
              {filteredBlogs.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Image Cover */}
                  <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-brand-purple text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Title & Arrow Link */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-accent text-lg font-bold text-navy leading-snug group-hover:text-brand-gold transition-colors">
                        {post.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">
                      {post.description}
                    </p>

                    {/* Author Line */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                      <div className="w-8 h-8 rounded-full relative overflow-hidden border border-gray-100">
                        <Image src={post.avatar} alt={post.author} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-navy">{post.author}</span>
                        <span className="text-[10px] text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile view: Slider */}
            <div className="flex md:hidden items-center gap-3 relative z-10 w-full justify-center px-4">
              {/* Prev button */}
              <button
                onClick={() => setCurrentMobileIndex((prev) => (prev === 0 ? filteredBlogs.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white transition-all shadow-md focus:outline-none flex-shrink-0"
                aria-label="Sebelumnya"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Card Container */}
              <div className="flex-1 flex justify-center max-w-[280px]">
                <article
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group w-full"
                >
                  {/* Image Cover */}
                  <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={filteredBlogs[activeIndex].image}
                      alt={filteredBlogs[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-brand-purple text-xs font-bold uppercase tracking-wider">
                        {filteredBlogs[activeIndex].category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-accent text-lg font-bold text-navy leading-snug">
                        {filteredBlogs[activeIndex].title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">
                      {filteredBlogs[activeIndex].description}
                    </p>

                    {/* Author Line */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                      <div className="w-8 h-8 rounded-full relative overflow-hidden border border-gray-100">
                        <Image src={filteredBlogs[activeIndex].avatar} alt={filteredBlogs[activeIndex].author} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-navy">{filteredBlogs[activeIndex].author}</span>
                        <span className="text-[10px] text-gray-400">{filteredBlogs[activeIndex].date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Next button */}
              <button
                onClick={() => setCurrentMobileIndex((prev) => (prev === filteredBlogs.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full bg-navy hover:bg-brand-gold flex items-center justify-center text-white transition-all shadow-md focus:outline-none flex-shrink-0"
                aria-label="Selanjutnya"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile slide indicator dots */}
            <div className="flex md:hidden justify-center gap-2 mt-6 relative z-10">
              {filteredBlogs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentMobileIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-2.5 bg-navy"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-navy/50"
                  }`}
                  aria-label={`Ke slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 flex flex-col items-center relative z-10">
            <span className="text-4xl">✏️</span>
            <p className="mt-4 text-gray-500 font-bold text-base">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
          </div>
        )}

        {/* Pagination Controls (Desktop Only) */}
        <div className="hidden md:flex items-center justify-center gap-2.5 mt-16 text-xs text-navy/70 relative z-10">
          <button className="p-2 hover:text-navy hover:scale-105 transition-transform" aria-label="Previous Page">
            &lt;
          </button>
          <button className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold">
            1
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-semibold">
            2
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-semibold">
            3
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-semibold">
            4
          </button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center font-semibold">
            12
          </button>
          <button className="p-2 hover:text-navy hover:scale-105 transition-transform" aria-label="Next Page">
            &gt;
          </button>
        </div>

      </section>
    </div>
  );
}
