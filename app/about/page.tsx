"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Target, ArrowRight, CheckCircle2, ShieldCheck, Users, Briefcase } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";

export default function AboutPage() {
  const pillars = [
    {
      title: "Meaningful Connections",
      desc: "We look beyond resume keywords to assess character, cultural alignment, and shared vision.",
    },
    {
      title: "Disciplined Discretion",
      desc: "All client mandates and candidate career inquiries are handled with strict institutional confidentiality.",
    },
    {
      title: "Bilateral Success",
      desc: "We prioritize long-term retention and mutual growth for both organizations and candidates.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36">
      {/* 1. Core About Section (Vision, Mission, Office Image) */}
      <AboutSection />

      {/* 2. Institutional Values & Principles */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-1 bg-[#E5A83B] rounded-full mx-auto" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
              OUR FOUNDATIONAL PRINCIPLES
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Guiding how we build bridges between exceptional talent and ambitious businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#008080] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0B1E36]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Let's Connect Inquiry Section */}
      <ConnectInquirySection />
    </div>
  );
}
