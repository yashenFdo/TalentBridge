"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px] sm:min-h-[500px]">
          
          {/* Left Column: Headline, Description & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 pt-4 sm:pt-6">
            
            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-[#0B1E36] tracking-tight leading-[1.08]">
              THE RIGHT TALENT.{" "}
              <span className="text-[#008080] block sm:inline">
                THE RIGHT DIRECTION.
              </span>
            </h1>

            {/* Signature Gold Accent Line */}
            <div className="w-14 h-1 bg-[#E5A83B] rounded-full" />

            {/* Description */}
            <div className="space-y-1.5 text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              <p>Helping businesses find the people who move them forward.</p>
              <p>Helping individuals discover where their potential can take them.</p>
            </div>

            {/* Hero CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              {/* Hire Talent Button */}
              <Link
                href="/hiring-talent"
                className="bg-[#008080] hover:bg-[#006e6e] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Find Opportunities Button */}
              <Link
                href="/opportunities"
                className="border-2 border-[#008080] text-[#008080] hover:bg-[#008080]/10 font-bold text-sm sm:text-base px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 group"
              >
                <span>Find Opportunities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: Handshake Graphic with Signature Curve */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/hero-handshake.jpg"
                alt="Talent Bridge handshake connecting businesses with the right talent"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              {/* Soft overlay gradient on the edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
