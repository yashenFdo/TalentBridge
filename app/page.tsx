"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";
import { Phone, Mail, ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative bg-white text-[#0B1E36]">
      {/* 1. HOME PAGE (HERO SECTION) */}
      <HeroSection />

      {/* 2. ABOUT TALENT BRIDGE (VISION & MISSION) */}
      <AboutSection />

      {/* 3. SOLUTIONS WE PROVIDE (HIRING TALENT & FINDING OPPORTUNITIES) */}
      <SolutionsSection />

      {/* 4. PRACTICE LEADERS (YAZID KHADIR & AMAN SIDDIK) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-1 bg-[#E5A83B] rounded-full mx-auto" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E36] tracking-tight">
              CONNECT WITH OUR RECRUITMENT TEAM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Direct, confidential access to dedicated specialists for enterprise talent sourcing and career navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Yazid Khadir Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center w-full">
                <div className="relative w-44 aspect-[4/4.5] rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-4">
                  <Image
                    src="/images/yazid-khadir.jpg"
                    alt="Yazid Khadir - Business Development Manager"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0B1E36]">Yazid Khadir</h3>
                <p className="text-xs sm:text-sm font-semibold text-[#008080] mt-0.5">
                  Business Development Manager
                </p>
                <div className="w-12 h-0.5 bg-[#008080] rounded-full my-3" />
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <a
                    href="tel:+94771234567"
                    className="flex items-center justify-center gap-2 hover:text-[#008080] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#008080]" />
                    <span>+94 77 123 4567</span>
                  </a>
                  <a
                    href="mailto:yazid@talentbridge.lk"
                    className="flex items-center justify-center gap-2 hover:text-[#008080] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#008080]" />
                    <span>yazid@talentbridge.lk</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 w-full">
                <Link
                  href="/hiring-talent"
                  className="w-full bg-[#008080] hover:bg-[#006e6e] text-white text-xs font-bold py-2.5 px-4 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Connect for Hiring Talent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Aman Siddik Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center w-full">
                <div className="relative w-44 aspect-[4/4.5] rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-4">
                  <Image
                    src="/images/aman-siddik.jpg"
                    alt="Aman Siddik - Headhunter"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0B1E36]">Aman Siddik</h3>
                <p className="text-xs sm:text-sm font-semibold text-[#008080] mt-0.5">
                  Headhunter
                </p>
                <div className="w-12 h-0.5 bg-[#008080] rounded-full my-3" />
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <a
                    href="tel:+94771234567"
                    className="flex items-center justify-center gap-2 hover:text-[#008080] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#008080]" />
                    <span>+94 77 123 4567</span>
                  </a>
                  <a
                    href="mailto:aman.siddik@talentbridge.lk"
                    className="flex items-center justify-center gap-2 hover:text-[#008080] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#008080]" />
                    <span>aman.siddik@talentbridge.lk</span>
                  </a>
                </div>
                <div className="mt-3 text-xs italic text-slate-500 font-medium">
                  &ldquo;Let&apos;s find the right opportunity, together.&rdquo;
                </div>
              </div>

              <div className="pt-6 w-full">
                <Link
                  href="/opportunities"
                  className="w-full bg-[#0B1E36] hover:bg-[#008080] text-white text-xs font-bold py-2.5 px-4 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Connect for Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LET'S CONNECT (INQUIRY SECTION) */}
      <ConnectInquirySection />
    </div>
  );
}
