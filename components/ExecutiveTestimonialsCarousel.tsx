"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react";

export function ExecutiveTestimonialsCarousel() {
  const testimonials = [
    {
      id: "01",
      name: "Dharshan Wijesekera",
      title: "Group Managing Director",
      company: "Apex Lanka Conglomerate PLC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      quote:
        "Talent Bridge understood our boardroom dynamics within our first 45-minute briefing. Within 12 business days, they presented three outstanding Chief Technology Officer finalists—each fully calibrated on culture, compensation, and technical scale. The appointment has been transformative.",
      highlight: "Appointed Group CTO within 12 days",
    },
    {
      id: "02",
      name: "Sharmini Senanayake",
      title: "Chief Human Resources Officer",
      company: "South Asia FinTech Holdings",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      quote:
        "What sets Talent Bridge apart is their absolute fiduciary discretion. When replacing a key executive, there can be zero leaks in the market. Their partners executed the entire mandate with airtight confidentiality and delivered our top-choice candidate.",
      highlight: "Airtight C-Suite Replacement Confidentiality",
    },
    {
      id: "03",
      name: "Malik Jayawardena",
      title: "Managing Partner",
      company: "Frontier Capital Private Equity",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      quote:
        "We have backed portfolio companies across Singapore and Sri Lanka. Talent Bridge is our exclusive partner for C-level leadership appointments because their retention rate is unprecedented. They don't just sell resumes—they advise on organizational governance.",
      highlight: "Exclusive PE Portfolio Talent Advisory",
    },
    {
      id: "04",
      name: "Anushke Pieris",
      title: "Vice President of Global Engineering",
      company: "CloudCore Global (Placed Candidate)",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
      quote:
        "As an executive candidate, Talent Bridge's advisory approach was world-class. They didn't pitch a role blindly—they walked me through the board's 3-year mandate, compensation structuring, and equity architecture. Truly a premier firm.",
      highlight: "C-Level Executive Career Advisory",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = useCallback(() => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  }, [testimonials.length]);

  const next = useCallback(() => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  }, [testimonials.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, next]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
            Verified Boardroom Endorsements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            WHAT OUR <span className="text-[#059669]">CLIENTS</span> SAY
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real feedback from enterprise boardrooms, founders, and leaders appointed by Talent Bridge.
          </p>
        </div>

        {/* Testimonial Card with Hover Pause and Auto-Advance */}
        <div 
          className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm relative transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Animated Slide Content */}
          <div key={current.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Client Image Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md border-2 border-white mb-3">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">{current.name}</h3>
              <p className="text-xs text-[#059669] font-bold">{current.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{current.company}</p>
            </div>

            {/* Quote Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-[#059669]/15 absolute -top-4 -left-2 -z-0" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic relative z-10 font-normal">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                  {current.highlight}
                </span>

                {/* Subtle Autoplay Status Indicator */}
                <span className="text-[10px] text-slate-600 font-semibold flex items-center gap-1.5 bg-slate-200/60 px-2.5 py-0.5 rounded-full">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"}`} />
                  <span>{isPaused ? "Paused" : "Auto-playing"}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Pagination & Indicator Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Direct Slide Jump Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 bg-[#059669]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to feedback slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Previous / Next & Counter Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#059669] hover:text-white border border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-bold tracking-widest text-slate-600 font-mono px-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>

              <button
                type="button"
                onClick={next}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#059669] hover:text-white border border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="ml-1 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label={isPaused ? "Resume auto-slides" : "Pause auto-slides"}
                title={isPaused ? "Resume auto-slides" : "Pause auto-slides"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
