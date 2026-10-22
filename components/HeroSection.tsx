"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { HeroInteractiveForm } from "@/components/HeroInteractiveForm";

export function HeroSection() {
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 bg-[#FAF9F5]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curved Hero Frame matching reference layout */}
        <div className="relative rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl min-h-[600px] lg:min-h-[660px] flex items-center p-6 sm:p-10 lg:p-14 text-white">
          {/* Background Team Photography */}
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Executive leadership team collaborating"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Atmospheric Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#0A192F]/85 to-[#071324]/90" />

          {/* Grid: Headline & Subtitle on Left, Floating Form on Right */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase">
                  STRESS-FREE <br />
                  <span className="text-[#10B981] drop-shadow-sm">RECRUITMENT</span> <br />
                  HERE
                </h1>
              </div>

              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-light max-w-xl">
                Talent Bridge is Sri Lanka&#39;s premier executive recruitment and human capital advisory partner. We connect high-growth enterprises with verified C-suite, engineering, and board leaders with guaranteed 12-month retention.
              </p>

              {/* Bottom Quick-Info Pills (Matching reference screenshot bottom bar) */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Hotline Pill */}
                <a
                  href="tel:+94770000000"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#0D9488] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                      Hotline Number
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#2DD4BF] transition-colors">
                      +94 77 000 0000
                    </span>
                  </div>
                </a>

                {/* Location Pill */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#193A58] text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                      Headquarters
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Colombo 03, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column (Anchored floating booking/intake card) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroInteractiveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
