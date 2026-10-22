import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Us | The Talent Bridge Standard & Doctrine",
  description:
    "Discover why leading organizations partner with Talent Bridge. We reject transactional volume metrics, focusing on deep calibration, bilateral advocacy, and 12-month retention.",
};

export default function WhyUsPage() {
  const standards = [
    {
      number: "01",
      title: "Precision Calibration Over Volume",
      desc: "Multi-stage screening covering technical competency, leadership attributes, past achievements, and verified employment references before client presentation.",
      highlight: "Zero Resume Spam",
    },
    {
      number: "02",
      title: "Bilateral Alignment Doctrine",
      desc: "A placement only succeeds if both sides flourish. We evaluate candidates for long-term cultural and trajectory resonance, not just keyword checklists.",
      highlight: "Dual-Sided Success",
    },
    {
      number: "03",
      title: "Institutional Fiduciary Discretion",
      desc: "Strict confidentiality protocols and non-disclosure agreements protecting both sensitive executive searches and confidential candidate transitions.",
      highlight: "Strict NDAs",
    },
    {
      number: "04",
      title: "12-Month Retention Stewardship",
      desc: "Scheduled follow-through during the crucial 30, 60, and 90-day onboarding periods backed by our comprehensive candidate replacement guarantee.",
      highlight: "365-Day Shield",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
            Why Partner with Talent Bridge?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            We operate on a simple, uncompromising doctrine: recruitment is not a volume-based transaction.
            It is a high-stakes advisory discipline requiring bilateral accountability and calibrated vetting.
          </p>
        </div>

        {/* Fundamental Difference Bento */}
        <div className="editorial-card p-8 sm:p-14 border border-[#E8E6DF] bg-white mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-2">
              The Fundamental Difference
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-[#0F172A] mb-4 leading-tight">
              Recruitment is Not a Transaction. It is a Fiduciary Bridge.
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal mb-4">
              When an organization hires in haste or relies on resume spam services, the cost of a mis-hire ripples across leadership morale, team velocity, and enterprise valuation. Conversely, when an executive accepts a role without cultural or strategic calibration, their career trajectory stalls.
            </p>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal">
              At Talent Bridge, we operate at the precise intersection where corporate vision meets human ambition. We calibrate character, competence, and culture before any introduction takes place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E6DF]">
            {/* For Employers */}
            <div className="bg-[#F8FAFC] p-8 rounded-lg border border-[#E8E6DF]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-2">
                For Organizations &amp; Boards
              </span>
              <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">
                Strategic Talent Acquisition
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed font-normal">
                We protect your employer brand, optimize executive interview hours, and introduce top-tier leaders who accelerate your corporate roadmap with a 12-month retention shield.
              </p>
            </div>

            {/* For Candidates */}
            <div className="bg-[#F8FAFC] p-8 rounded-lg border border-[#E8E6DF]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669] block mb-2">
                For Professionals &amp; Leaders
              </span>
              <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">
                Confidential Career Direction
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed font-normal">
                We believe executives deserve respect, transparent timelines, and honest advocacy to join organizations where their value is recognized and rewarded.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Standards */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F172A]">
              Four Standards That Set Us Apart
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4A5568]">
              Our placement framework is anchored in four operational principles that protect both client and candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std) => (
              <div
                key={std.number}
                className="editorial-card p-8 border border-[#E8E6DF] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold text-[#D97706]">
                      {std.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E8E6DF]">
                      {std.highlight}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="editorial-card-dark p-8 sm:p-14 text-center max-w-4xl mx-auto rounded-xl">
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
            Experience the Talent Bridge Standard
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Brief our managing partners today to initiate your calibrated search protocol.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="btn-human-gold !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <span>Retain Talent Bridge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/careers"
              className="btn-human-outline !py-3.5 !px-8 !text-xs !bg-transparent !text-white !border-white/30 hover:!bg-white hover:!text-[#0F172A]"
            >
              <span>Explore Opportunities</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
