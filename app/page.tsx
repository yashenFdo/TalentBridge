"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";

export default function HomePage() {
  return (
    <div className="relative bg-white text-[#0B1E36]">
      {/* 1. HOME PAGE (HERO SECTION) */}
      <HeroSection />

      {/* 2. ABOUT TALENT BRIDGE (VISION & MISSION) */}
      <AboutSection />

      {/* 3. SOLUTIONS WE PROVIDE (HIRING TALENT & FINDING OPPORTUNITIES) */}
      <SolutionsSection />

      {/* 4. LET'S CONNECT (INQUIRY SECTION) */}
      <ConnectInquirySection />
    </div>
  );
}
