"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Briefcase,
  Users2,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
  PhoneCall,
  Search,
  Check,
  Building2,
  Compass,
  Lock,
  Clock,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  // Interactive Simulator State for Hero
  const [selectedSector, setSelectedSector] = useState("technology");
  const [selectedLevel, setSelectedLevel] = useState("c-suite");

  const sectorData: Record<
    string,
    { name: string; shortlistDays: string; retentionRate: string; typicalRoles: string }
  > = {
    technology: {
      name: "Technology & AI",
      shortlistDays: "12 Days",
      retentionRate: "99.2%",
      typicalRoles: "CTO, VP Engineering, Head of AI, Chief Product Officer",
    },
    banking: {
      name: "Banking & Financial Services",
      shortlistDays: "14 Days",
      retentionRate: "98.5%",
      typicalRoles: "CFO, Head of Treasury, Chief Risk Officer, Investment Director",
    },
    enterprise: {
      name: "Conglomerate & Enterprise",
      shortlistDays: "14 Days",
      retentionRate: "98.8%",
      typicalRoles: "CEO, Managing Director, COO, Chief Commercial Officer",
    },
    healthcare: {
      name: "Healthcare & Pharmaceuticals",
      shortlistDays: "15 Days",
      retentionRate: "99.0%",
      typicalRoles: "Medical Director, VP Operations, Regulatory Affairs Head",
    },
  };

  const levelData: Record<string, { label: string; guarantee: string }> = {
    "c-suite": { label: "C-Suite & Board", guarantee: "12-Month Retention Guarantee" },
    vp: { label: "VP & Director", guarantee: "9-Month Retention Guarantee" },
    principal: { label: "Principal & Specialist", guarantee: "6-Month Retention Guarantee" },
  };

  const currentSector = sectorData[selectedSector];
  const currentLevel = levelData[selectedLevel];

  return (
    <div className="relative overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 aurora-hero-bg text-white overflow-hidden">
        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Executive Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-pill-dark">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest uppercase">
                  SRI LANKA &amp; GLOBAL EXECUTIVE SEARCH PARTNER
                </span>
              </div>

              {/* Majestic Main Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                The Right Talent.
                <br />
                <span className="text-gradient-light">The Right Direction.</span>
              </h1>

              {/* Executive Thesis Statement */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                We replace transactional recruitment and resume spam with calibrated executive search,
                360° competency vetting, and a guaranteed 12-month leadership retention standard.
              </p>

              {/* High-Conversion Primary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?type=employer"
                  className="btn-executive-primary !py-4 !px-8 !text-sm group flex items-center gap-2.5"
                >
                  <span>Retain Search Mandate</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/careers"
                  className="btn-executive-glass !py-4 !px-8 !text-sm flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Explore Private Mandates</span>
                </Link>
              </div>

              {/* Trust Metric Badges */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">98%</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    12-Mo. Retention Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">14 Days</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    Average Shortlist Speed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    360° Vetted &amp; NDA
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">500+</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    Executive Placements
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator Widget */}
            <div className="lg:col-span-5">
              <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
                {/* Decorative Aurora Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        Mandate Calibration Preview
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Interactive Executive Search Simulator
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Live Model
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Sector Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Target Sector:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(sectorData).map(([key, data]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedSector(key)}
                          className={`text-left p-2.5 rounded-xl text-xs font-medium transition-all ${
                            selectedSector === key
                              ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 border border-blue-400/50"
                              : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                          }`}
                        >
                          {data.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seniority Level */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Seniority Caliber:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(levelData).map(([key, data]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedLevel(key)}
                          className={`p-2 rounded-xl text-xs font-medium text-center transition-all ${
                            selectedLevel === key
                              ? "bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30 border border-sky-300/50"
                              : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                          }`}
                        >
                          {data.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculated Output Display */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Typical Mandates:</span>
                      <span className="text-white font-semibold text-right max-w-[200px] truncate">
                        {currentSector.typicalRoles}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Shortlist Turnaround:</span>
                      <span className="text-sky-300 font-bold">{currentSector.shortlistDays}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Historic Retention:</span>
                      <span className="text-emerald-400 font-bold">{currentSector.retentionRate}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                      <span className="text-slate-400">Fiduciary Protection:</span>
                      <span className="text-amber-300 font-semibold">{currentLevel.guarantee}</span>
                    </div>
                  </div>

                  {/* Dynamic Action Trigger */}
                  <Link
                    href={`/contact?type=employer&sector=${selectedSector}&level=${selectedLevel}`}
                    className="w-full btn-executive-primary !py-3.5 !text-xs justify-center flex items-center gap-2 !rounded-xl"
                  >
                    <span>Launch Mandate for this Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO STRATEGIC PERSPECTIVES (DUAL PATHWAYS) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill mb-3">Bilateral Architecture</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Connecting Ambition With Precision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are an enterprise founder building an unbeatable executive bench, or a
              senior leader orchestrating your next confidential career leap, Talent Bridge acts as
              your trusted strategic advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pathway 1: For Enterprises & Founders */}
            <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  For Organizations &amp; Boards
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Hire High-Impact Leadership
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Overcome the prohibitive cost of mis-hires. We conduct rigorous headhunting across
                passive talent markets, presenting only shortlisted leaders who possess proven
                execution track records and cultural resonance.
              </p>

              <div className="space-y-3.5 mb-10">
                {[
                  "Passive candidate headhunting across regional & global markets",
                  "Exhaustive 360-degree reference auditing and leadership vetting",
                  "Structured compensation benchmarking & competitive offer structuring",
                  "Unconditional 12-month candidate replacement retention guarantee",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/contact?type=employer"
                  className="btn-executive-primary !py-3 !px-6 !text-xs flex items-center gap-2 group"
                >
                  <span>Retain Executive Search</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services#employers"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  <span>Explore Enterprise Solutions</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Pathway 2: For Professionals & Leaders */}
            <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  For Executives &amp; Specialists
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Chart Your Strategic Trajectory
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Your career is an irreplaceable asset. We advocate discreetly on your behalf,
                granting you direct access to unadvertised leadership mandates with leading
                conglomerates, venture-backed scaleups, and multinational firms.
              </p>

              <div className="space-y-3.5 mb-10">
                {[
                  "100% confidential representation with zero applicant fees, ever",
                  "Direct introductions to C-Suite & Board decision-makers",
                  "Strategic interview calibration, equity advisory, and offer negotiation",
                  "Exclusive invitation into the Private Executive Talent Network",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/careers"
                  className="btn-executive-outline !py-3 !px-6 !text-xs flex items-center gap-2 group !border-emerald-500 !text-emerald-700 hover:!bg-emerald-50"
                >
                  <span>Explore Curated Mandates</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact?type=candidate"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1"
                >
                  <span>Join Private Network</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS OF PRACTICE (SOLUTIONS MATRIX) */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="badge-pill mb-3">Enterprise Practice Areas</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Comprehensive Human Capital Advisory
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Specialized recruitment practices engineered for high-retention corporate,
                technological, and executive placements.
              </p>
            </div>
            <Link
              href="/services"
              className="btn-executive-outline !py-3 !px-6 !text-xs self-start md:self-auto flex items-center gap-2"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: Award,
                color: "text-blue-600 bg-blue-50 border-blue-200",
                title: "Executive & Board Search",
                desc: "Discreet headhunting for C-suite appointments, managing directors, and independent board advisors executed with uncompromising confidentiality.",
                tags: ["CEO / Managing Director", "Board Advisory", "Confidential Mandates"],
              },
              {
                number: "02",
                icon: Sparkles,
                color: "text-sky-600 bg-sky-50 border-sky-200",
                title: "Tech & Engineering Leadership",
                desc: "Targeted search for visionary CTOs, VPs of Software, AI/ML leads, and principal architects driving enterprise digital transformation.",
                tags: ["CTO & VP Engineering", "AI / ML Leadership", "Cloud Architects"],
              },
              {
                number: "03",
                icon: TrendingUp,
                color: "text-amber-600 bg-amber-50 border-amber-200",
                title: "Banking, Finance & Capital",
                desc: "Senior appointments for CFOs, investment bankers, compliance officers, and risk leaders across commercial banks and private equity.",
                tags: ["CFO & Controllers", "Treasury & Risk", "Private Equity"],
              },
              {
                number: "04",
                icon: Shield,
                color: "text-emerald-600 bg-emerald-50 border-emerald-200",
                title: "360° Candidate Screening",
                desc: "Exhaustive multi-stage qualification assessing technical competence, leadership maturity, and verified track-record credentials.",
                tags: ["Credential Auditing", "Behavioral Calibration", "Reference Checks"],
              },
              {
                number: "05",
                icon: Users2,
                color: "text-indigo-600 bg-indigo-50 border-indigo-200",
                title: "Private Executive Network",
                desc: "Confidential profile indexing for senior professionals seeking passive, calibrated career transitions aligned with their trajectory.",
                tags: ["Zero Applicant Fees", "Passive Opportunities", "Strict NDAs"],
              },
              {
                number: "06",
                icon: Layers,
                color: "text-teal-600 bg-teal-50 border-teal-200",
                title: "Cross-Border Mobility & Remote",
                desc: "Bridging the Sri Lankan diaspora and global international enterprises with cross-border relocation and distributed executive teams.",
                tags: ["Diaspora Repatriation", "Remote Executives", "APAC / EMEA"],
              },
            ].map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div
                  key={practice.number}
                  className="glass-card p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${practice.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-slate-400">
                        {practice.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {practice.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-6">
                      {practice.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Practice Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROPRIETARY 4-STAGE PRECISION PROTOCOL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill mb-3">The Search Engine</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              The 4-Stage Search Protocol
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate hiring friction and guesswork through a calibrated four-stage methodology
              engineered for high velocity and sustained 12-month retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover & Calibrate",
                desc: "We analyze role criteria, team culture, compensation benchmarks, and executive aspirations to create a high-fidelity avatar.",
                employerBadge: "Culture & Skill Mapping",
                candidateBadge: "Career Trajectory Review",
              },
              {
                step: "02",
                title: "Source & Rigorously Screen",
                desc: "Targeted passive headhunting combined with multi-stage competency interviews, credential checks, and confidential briefings.",
                employerBadge: "Passive Talent Outreach",
                candidateBadge: "Confidential Alignment",
              },
              {
                step: "03",
                title: "Direct Connection",
                desc: "Delivery of comprehensive candidate dossiers with evaluative notes and seamless interview coordination with senior leaders.",
                employerBadge: "Calibrated Dossiers",
                candidateBadge: "Decision-Maker Access",
              },
              {
                step: "04",
                title: "Negotiation & Retention",
                desc: "Facilitating equitable offer structuring, seamless onboarding, and scheduled 30, 60, and 90-day retention reviews.",
                employerBadge: "12-Month Replacement Shield",
                candidateBadge: "Executive Transition Care",
              },
            ].map((stage, idx) => (
              <div
                key={stage.step}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {stage.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/80 p-2 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-blue-600" />
                    <span>{stage.employerBadge}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50/80 p-2 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                    <span>{stage.candidateBadge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/how-it-works"
              className="btn-executive-primary !py-3.5 !px-8 !text-xs inline-flex items-center gap-2"
            >
              <span>Explore Detailed Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY TALENT BRIDGE OUTPERFORMS (THE 4 PILLARS) */}
      <section className="py-24 aurora-section-bg text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill-dark mb-3">The Talent Bridge Standard</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Why Sri Lanka&#39;s Premier Enterprises Choose Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We reject transactional volume metrics. Our firm operates on fiduciary integrity,
              unflinching confidentiality, and long-term retention accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Precision Over Volume",
                text: "We never spam resumes. Clients receive small, hyper-calibrated candidate dossiers where every individual is verified, interested, and ready to interview.",
                highlight: "Zero Resume Spam",
              },
              {
                number: "02",
                title: "Bilateral Alignment",
                text: "A placement only succeeds when both parties flourish. We analyze candidate career goals with equal gravity to enterprise business targets.",
                highlight: "Dual-Sided Advocacy",
              },
              {
                number: "03",
                title: "Fiduciary Confidentiality",
                text: "Discreet executive transitions require total discretion. All mandates are protected by institutional-grade non-disclosure protocols.",
                highlight: "Strict NDA Guardrails",
              },
              {
                number: "04",
                title: "12-Month Retention Shield",
                text: "Our partnership endures well past the signed offer letter. We conduct 30, 60, and 90-day retention reviews with a replacement guarantee.",
                highlight: "365-Day Guarantee",
              },
            ].map((pillar) => (
              <div
                key={pillar.number}
                className="glass-card-dark p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-sky-400">{pillar.number}</span>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {pillar.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              Read our full ethical commitments, quality benchmarks, and human capital doctrine.
            </p>
            <Link
              href="/why-us"
              className="btn-executive-glass !py-3 !px-6 !text-xs flex items-center gap-2"
            >
              <span>Explore The 4 Pillars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HIGH-CONVERSION VIP MANDATE INTAKE CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-slate-800">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Confidential Client Intake &amp; Advisory
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                Let&#39;s Build the Right Bridge for Your Enterprise.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
                Whether you need to brief an executive search mandate or explore confidential career
                mobility, our senior partners are ready to calibrate your solution with a 24-hour response SLA.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-executive-primary !py-4 !px-8 !text-sm flex items-center gap-2 group"
                >
                  <span>Submit Confidential Mandate</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Managing%20Partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-executive-glass !py-4 !px-8 !text-sm flex items-center gap-2 group"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp Concierge</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sky-400" />
                  <span>Institutional Non-Disclosure Agreement Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Partner Response within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
