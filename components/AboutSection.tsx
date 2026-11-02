"use client";

import React from "react";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Description, Vision & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Signature Gold Accent Line */}
            <div className="w-12 h-1 bg-[#E5A83B] rounded-full" />

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E36] tracking-tight">
              About Talent Bridge
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Talent Bridge is a recruitment and talent sourcing company focused on connecting businesses with suitable talent and individuals with meaningful career opportunities.
            </p>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Our Vision Card */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-teal-50 border border-[#008080]/30 flex items-center justify-center text-[#008080] shrink-0 mt-0.5">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1E36]">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    To bridge talent and opportunity through meaningful connections.
                  </p>
                </div>
              </div>

              {/* Our Mission Card */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-teal-50 border border-[#008080]/30 flex items-center justify-center text-[#008080] shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1E36]">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    To simplify recruitment by connecting businesses with the right people and individuals with the right opportunities.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Office Imagery with Curved Edge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[300px] sm:h-[360px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="/images/about-office.jpg"
                alt="Talent Bridge modern professional office environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

