import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Lock,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Building2,
  Compass,
  Check,
} from "lucide-react";

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
      icon: Award,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      number: "02",
      title: "Bilateral Alignment Doctrine",
      desc: "A placement only succeeds if both sides flourish. We evaluate candidates for long-term cultural and trajectory resonance, not just keyword checklists.",
      highlight: "Dual-Sided Success",
      icon: HeartHandshake,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      number: "03",
      title: "Institutional Fiduciary Discretion",
      desc: "Strict confidentiality protocols and non-disclosure agreements protecting both sensitive executive searches and confidential candidate transitions.",
      highlight: "Strict NDAs",
      icon: Lock,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      number: "04",
      title: "12-Month Retention Stewardship",
      desc: "Scheduled follow-through during the crucial 30, 60, and 90-day onboarding periods backed by our comprehensive candidate replacement guarantee.",
      highlight: "365-Day Shield",
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-pill mb-3">Our Strategic Philosophy</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Partner with Talent Bridge?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We operate on a simple, uncompromising doctrine: recruitment is not a volume-based transaction.
            It is a high-stakes advisory discipline requiring bilateral accountability and calibrated vetting.
          </p>
        </div>

        {/* Fundamental Difference Bento */}
        <div className="rounded-3xl glass-card p-8 sm:p-14 border border-slate-200/90 mb-20 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
              The Fundamental Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Recruitment is Not a Transaction. It is a Fiduciary Bridge.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-normal mb-4">
              When an organization hires in haste or relies on resume spam services, the cost of a mis-hire ripples across leadership morale, team velocity, and enterprise valuation. Conversely, when an executive accepts a role without cultural or strategic calibration, their career trajectory stalls.
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              At Talent Bridge, we operate at the precise intersection where corporate vision meets human ambition. We calibrate character, competence, and culture before any introduction takes place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
            {/* For Employers */}
            <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  For Organizations &amp; Boards
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Strategic Talent Acquisition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                We protect your employer brand, optimize executive interview hours, and introduce top-tier leaders who accelerate your corporate roadmap with a 12-month retention shield.
              </p>
            </div>

            {/* For Candidates */}
            <div className="bg-emerald-50/40 p-8 rounded-2xl border border-emerald-200/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  For Professionals &amp; Leaders
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Confidential Career Direction
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                We believe executives deserve respect, transparent timelines, and honest advocacy to join organizations where their value is recognized and rewarded.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Standards */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill mb-3">The Quality Shield</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Four Standards That Set Us Apart
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Our placement framework is anchored in four operational principles that protect both client and candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std) => {
              const Icon = std.icon;
              return (
                <div
                  key={std.number}
                  className="glass-card p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${std.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-slate-400">
                        {std.number}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60 mb-3 inline-block">
                      {std.highlight}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {std.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {std.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Experience the Talent Bridge Standard
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            Brief our managing partners today to initiate your calibrated search protocol.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="btn-executive-primary !py-3.5 !px-8 !text-xs flex items-center gap-2 group"
            >
              <span>Retain Talent Bridge</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/careers"
              className="btn-executive-glass !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <span>Explore Opportunities</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
