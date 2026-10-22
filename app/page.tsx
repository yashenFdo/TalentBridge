"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AsymmetricValueSection } from "@/components/AsymmetricValueSection";
import { CapabilitiesBento } from "@/components/CapabilitiesBento";
import { ExecutiveTestimonialsCarousel } from "@/components/ExecutiveTestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BottomCtaBanner } from "@/components/BottomCtaBanner";
import { MarketIntelligenceSimulator } from "@/components/MarketIntelligenceSimulator";
import { MandateCaseStudies } from "@/components/MandateCaseStudies";
import { ExecutiveVaultModal } from "@/components/ExecutiveVaultModal";

export default function HomePage() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  return (
    <div className="relative bg-[#FAF9F5] text-[#0A1118]">
      {/* 1. HERO SECTION (Mirroring Reference Screenshot Layout) */}
      <HeroSection />

      {/* 2. ASYMMETRIC VALUE & PROVEN STAT SECTION (Mirroring Reference Section 2) */}
      <AsymmetricValueSection />

      {/* 3. CAPABILITIES BENTO GRID (Mirroring Reference Section 3) */}
      <CapabilitiesBento />

      {/* 4. EXECUTIVE MARKET INTELLIGENCE SIMULATOR */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1118] tracking-tight">
              EXECUTIVE MARKET <span className="text-[#0D9488]">INTELLIGENCE</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-time telemetry on candidate scarcity, typical compensation bands, and turnaround speeds across key industries in Sri Lanka and regional hubs.
            </p>
          </div>

          <MarketIntelligenceSimulator />
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS (Mirroring Reference Section 4) */}
      <ExecutiveTestimonialsCarousel />

      {/* 6. VERIFIED MANDATE CASE STUDIES */}
      <section className="py-20 bg-[#FAF9F5] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1118] tracking-tight">
              VERIFIED TRACK <span className="text-[#0D9488]">RECORD</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Examine detailed placement files detailing how our calibrated headhunting solved critical leadership requirements across diverse industries.
            </p>
          </div>

          <MandateCaseStudies />
        </div>
      </section>

      {/* 7. NUMBERED FAQ ACCORDION (Mirroring Reference Section 5) */}
      <FaqAccordion />

      {/* 8. BOTTOM PHOTOGRAPHIC CTA BANNER (Mirroring Reference Section 6) */}
      <BottomCtaBanner />

      {/* Confidential Executive Vault Modal */}
      <ExecutiveVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </div>
  );
}
