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
    <div className="relative bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ASYMMETRIC VALUE & PROVEN STAT SECTION */}
      <AsymmetricValueSection />

      {/* 3. CAPABILITIES BENTO GRID */}
      <CapabilitiesBento />

      {/* 4. EXECUTIVE MARKET INTELLIGENCE SIMULATOR */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Real-Time Market Telemetry</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              EXECUTIVE MARKET <span className="text-[#059669]">INTELLIGENCE</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Real-time telemetry on candidate scarcity, typical compensation bands, and turnaround speeds across key industries in Sri Lanka and regional hubs.
            </p>
          </div>

          <MarketIntelligenceSimulator />
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS */}
      <ExecutiveTestimonialsCarousel />

      {/* 6. VERIFIED MANDATE CASE STUDIES */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Historical Mandate Performance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              VERIFIED TRACK <span className="text-[#059669]">RECORD</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Examine detailed placement files detailing how our calibrated headhunting solved critical leadership requirements across diverse industries.
            </p>
          </div>

          <MandateCaseStudies />
        </div>
      </section>

      {/* 7. NUMBERED FAQ ACCORDION */}
      <FaqAccordion />

      {/* 8. BOTTOM PHOTOGRAPHIC CTA BANNER */}
      <BottomCtaBanner />

      {/* Confidential Executive Vault Modal */}
      <ExecutiveVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </div>
  );
}
