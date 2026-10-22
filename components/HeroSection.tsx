"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { HeroInteractiveForm } from "@/components/HeroInteractiveForm";

export function HeroSection() {
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curated Luxury Frame */}
        <div className="relative rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl min-h-[620px] lg:min-h-[680px] flex items-center p-6 sm:p-10 lg:p-16 text-white border border-slate-800/40">
          {/* Authentic Executive Team Photography */}
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Executive search advisory board in Colombo"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Midnight Obsidian & Emerald Atmospheric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/98 via-[#0A192F]/92 to-[#071324]/90" />

          {/* Grid: Headline & Subtitle on Left, Floating Form on Right */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Executive Search &amp; Leadership Advisory</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.06] text-white">
                  Appointing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#059669]">
                    Defining Leadership
                  </span> <br />
                  With Global Ambition.
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                  We advise enterprise boards, institutional investors, and high-growth innovators on appointing high-impact C-suite, technology, and commercial executives. Guaranteed with 90-day retention warranties and 100% fiduciary discretion.
                </p>
              </div>

              {/* Bottom Quick-Info Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Hotline Pill */}
                <a
                  href="tel:+94770000000"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                      Partner Desk
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#34D399] transition-colors">
                      +94 77 000 0000
                    </span>
                  </div>
                </a>

                {/* Location Pill */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-[#0A192F] text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
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

                {/* Retention Metric Pill */}
                <div className="hidden sm:flex items-center gap-2.5 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2.5 rounded-2xl text-xs font-semibold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>98% 12-Month Retention Rate</span>
                </div>
              </div>
            </div>

            {/* Right Form Column (Anchored floating intake card) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroInteractiveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
