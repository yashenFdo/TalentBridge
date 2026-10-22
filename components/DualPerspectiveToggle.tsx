"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, Compass, ArrowRight, Check, Shield, Lock, Award, Users } from "lucide-react";

interface DualPerspectiveToggleProps {
  onOpenVault: () => void;
}

export function DualPerspectiveToggle({ onOpenVault }: DualPerspectiveToggleProps) {
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">("employer");

  return (
    <div className="editorial-card p-6 sm:p-12 border border-[#E8E6DF] bg-white">
      {/* Segmented Switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E6DF] max-w-xl w-full">
          <button
            type="button"
            onClick={() => setActiveTab("employer")}
            className={`flex-1 py-3 px-4 rounded text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 ${
              activeTab === "employer"
                ? "bg-[#0A1118] text-white shadow-sm"
                : "text-[#718096] hover:text-[#0A1118]"
            }`}
          >
            <Building2 className="w-4 h-4 text-[#C59B27]" />
            <span>For Organizations &amp; Boards</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("candidate")}
            className={`flex-1 py-3 px-4 rounded text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 ${
              activeTab === "candidate"
                ? "bg-[#0A1118] text-white shadow-sm"
                : "text-[#718096] hover:text-[#0A1118]"
            }`}
          >
            <Compass className="w-4 h-4 text-[#0D7A70]" />
            <span>For Executives &amp; Leaders</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content */}
      {activeTab === "employer" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-6">
            <div className="editorial-kicker">
              <span>Enterprise Search Doctrine</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0A1118] leading-tight">
              Calibrated Executive Search Without the Resume Spam
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
              When an executive hire fails, the cost is not simply the recruiter&#39;s fee—it is 6 to 12 months of lost market momentum, strategy stalls, and cultural disruption. We conduct deep passive mapping to bring you verified, ready-to-interview finalists.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Target candidate mapping across non-advertised passive pools",
                "360° blind reference checks with former direct superiors",
                "Compensation & equity benchmarking mapped to current market",
                "Unconditional 365-day candidate replacement guarantee",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A5568]">
                  <Check className="w-3.5 h-3.5 text-[#0D7A70] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=employer"
                className="btn-human-primary !py-3.5 !px-8 !text-xs flex items-center gap-2 group"
              >
                <span>Brief an Executive Mandate</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="btn-human-outline !py-3.5 !px-6 !text-xs"
              >
                <span>Explore Enterprise Practices</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F6] p-8 rounded-lg border border-[#E8E6DF] space-y-6">
            <h4 className="font-serif text-xl font-bold text-[#0A1118]">
              Verified Institutional Metrics
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#0A1118]">14 Days</span>
                  <span className="text-xs text-[#718096]">Average Delivery of Calibrated Shortlist</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#0D7A70]/10 text-[#0D7A70] flex items-center justify-center font-bold">
                  14d
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#0D7A70]">98%</span>
                  <span className="text-xs text-[#718096]">12-Month Executive Retention Rate</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center font-bold">
                  98%
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#C59B27]">365 Days</span>
                  <span className="text-xs text-[#718096]">Full Replacement Guarantee Standard</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#0A1118]/10 text-[#0A1118] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#C59B27]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-6">
            <div className="editorial-kicker">
              <span>Executive Career Advocacy</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0A1118] leading-tight">
              Discreet Advocacy for Transformative Career Chapters
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
              Your career track record is an irreplaceable asset. We treat executive professionals as long-term advisory partners, presenting direct access to unadvertised leadership mandates with zero applicant representation fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "100% confidential representation with zero applicant fees, ever",
                "Direct introductions to C-Suite & Board decision-makers",
                "Bespoke negotiation coaching on salary, bonus, and equity",
                "Permanent indexing in the Private Executive Talent Vault",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A5568]">
                  <Check className="w-3.5 h-3.5 text-[#0D7A70] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenVault}
                className="btn-human-primary !py-3.5 !px-8 !text-xs flex items-center gap-2 group"
              >
                <Lock className="w-4 h-4 text-[#C59B27]" />
                <span>Enter Private Executive Vault</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/careers"
                className="btn-human-outline !py-3.5 !px-6 !text-xs"
              >
                <span>Browse Curated Mandates</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F6] p-8 rounded-lg border border-[#E8E6DF] space-y-6">
            <h4 className="font-serif text-xl font-bold text-[#0A1118]">
              The Candidate Fiduciary Pledge
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#0A1118]">Zero</span>
                  <span className="text-xs text-[#718096]">Representation or Placement Fees</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#0D7A70]/10 text-[#0D7A70] flex items-center justify-center font-bold">
                  $0
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#0D7A70]">100%</span>
                  <span className="text-xs text-[#718096]">Pre-Consent Disclosure Guarantee</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#0D7A70]/10 text-[#0D7A70] flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#0D7A70]" />
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-[#E8E6DF] flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#C59B27]">500+</span>
                  <span className="text-xs text-[#718096]">Leaders Placed in High-Impact Roles</span>
                </div>
                <div className="w-10 h-10 rounded bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center font-bold">
                  500+
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
