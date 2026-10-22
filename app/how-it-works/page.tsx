import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SearchMethodologyInteractive } from "@/components/SearchMethodologyInteractive";

export const metadata: Metadata = {
  title: "Methodology | The 4-Stage Search Protocol | Talent Bridge",
  description:
    "Explore Talent Bridge's disciplined 4-stage placement protocol engineered for high velocity, cultural resonance, and 12-month executive retention.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
            How Talent Bridge Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            We eliminate hiring friction and guesswork through a disciplined, four-stage framework
            engineered for high velocity and sustained 12-month retention.
          </p>
        </div>

        {/* Interactive Search Protocol */}
        <div className="mb-20">
          <SearchMethodologyInteractive />
        </div>

        {/* Bottom CTA Banner */}
        <div className="editorial-card-dark p-8 sm:p-14 text-center max-w-4xl mx-auto rounded-xl">
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
            Ready to Experience Precision Recruitment?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Brief our managing partners today to initiate your calibrated search protocol.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="btn-human-gold !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <span>Retain Search Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/careers"
              className="btn-human-outline !py-3.5 !px-8 !text-xs !bg-transparent !text-white !border-white/30 hover:!bg-white hover:!text-[#0F172A]"
            >
              <span>Explore Active Opportunities</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
