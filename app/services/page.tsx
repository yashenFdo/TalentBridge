"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  Search, 
  FileCheck, 
  Globe2, 
  BarChart3, 
  UserCheck, 
  Sparkles,
  PhoneCall,
  MessageCircle,
  TrendingUp,
  Clock,
  Lock,
  ChevronRight
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "hiring" | "opportunities">("all");

  const employerServices = [
    {
      name: "Executive & Board Search",
      category: "hiring",
      tag: "Flagship Practice",
      desc: "Discreet retained search for C-Suite executives, Managing Directors, and Board Members.",
      deliverable: "14-day calibrated shortlist • 12-month retention warranty",
      icon: Building2,
      link: "/services/hiring-talent#executive-search",
    },
    {
      name: "Tech & AI Leadership Sourcing",
      category: "hiring",
      tag: "High Growth",
      desc: "Targeted sourcing for CTOs, AI/ML engineering leaders, and principal software architects.",
      deliverable: "Domain technical vetting • Equity & compensation calibration",
      icon: Cpu,
      link: "/services/hiring-talent#tech-leadership",
    },
    {
      name: "360° Candidate Audits & Vetting",
      category: "hiring",
      tag: "Risk Mitigation",
      desc: "Comprehensive competency evaluations, reference audits, and cultural alignment vetting.",
      deliverable: "Supervisory & peer reference audits • Detailed risk dossier",
      icon: FileCheck,
      link: "/services/hiring-talent#candidate-audits",
    },
    {
      name: "Enterprise Project & Cohort Staffing",
      category: "hiring",
      tag: "Scale & Expansion",
      desc: "Coordinated recruitment campaigns for corporate scale-ups, GCCs, and division building.",
      deliverable: "Multi-hire pipeline architecture • Tiered economics",
      icon: Users,
      link: "/services/hiring-talent#cohort-staffing",
    },
    {
      name: "Cross-Border & Diaspora Headhunting",
      category: "hiring",
      tag: "Global Reach",
      desc: "Repatriating overseas Sri Lankan leaders and building regional executive hubs across APAC & EMEA.",
      deliverable: "Relocation advisory • Cross-border compensation structuring",
      icon: Globe2,
      link: "/services/hiring-talent#diaspora-search",
    },
    {
      name: "Compensation Benchmarking & Org Mapping",
      category: "hiring",
      tag: "Strategic Advisory",
      desc: "Real-time market salary telemetry and competitive organizational mapping.",
      deliverable: "Real-time executive salary telemetry • Retention risk diagnostics",
      icon: BarChart3,
      link: "/services/hiring-talent#benchmarking",
    },
  ];

  const candidateServices = [
    {
      name: "Unadvertised Executive Mandates",
      category: "opportunities",
      tag: "Exclusive Access",
      desc: "Direct introductions to confidential leadership roles with premier enterprises not advertised publicly.",
      deliverable: "Access to 70%+ unadvertised mandates • CEO advocacy",
      icon: Search,
      link: "/services/finding-opportunities",
    },
    {
      name: "Confidential Executive Talent Vault",
      category: "opportunities",
      tag: "Zero Risk",
      desc: "Private registry matching your specific trajectory with top regional corporations without alerting current employers.",
      deliverable: "Encrypted profile protection • 100% free candidate service",
      icon: UserCheck,
      link: "/services/finding-opportunities#registration-form",
    },
    {
      name: "Executive Career Coaching & Advisory",
      category: "opportunities",
      tag: "Advocacy",
      desc: "Unbiased counsel on executive package structuring, career pivots, and leadership transition strategy.",
      deliverable: "Offer & equity advisory • Interview briefing notes",
      icon: Sparkles,
      link: "/services/finding-opportunities",
    },
    {
      name: "Free Interactive ATS CV Builder",
      category: "opportunities",
      tag: "Free Tool",
      desc: "Build, format, and share high-caliber ATS-optimized resumes with live link and WhatsApp sharing.",
      deliverable: "3 luxury templates • Real-time PDF & link export",
      icon: Briefcase,
      link: "/cv-builder",
    },
  ];

  const allServices = [...employerServices, ...candidateServices];
  const displayedServices =
    selectedCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO HEADER WITH AMBIENT LIGHTING */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Comprehensive Recruitment Practices</span>
            </div>

            {/* Bold Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              SERVICES &amp; <span className="text-[#059669]">SOLUTIONS</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Talent Bridge operates two distinct, specialized service pillars designed to solve the human capital equation. Whether you are an organization looking to build high-impact teams, or an experienced professional seeking defining career opportunities, select your pathway below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE TWO MAIN OPTIONS: DUAL-GATEWAY ARCHITECTURAL SHOWCASE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* OPTION 1: HIRING TALENT */}
            <div className="group rounded-[2.5rem] border-2 border-emerald-500/30 hover:border-emerald-500 bg-gradient-to-b from-white via-[#F0FDF4]/50 to-[#F0FDF4] p-8 sm:p-12 flex flex-col justify-between shadow-xl shadow-emerald-950/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#059669] text-white flex items-center justify-center shadow-lg shadow-emerald-700/25">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    For Businesses &amp; Organizations
                  </span>
                </div>

                {/* Option Title */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                    Hiring Talent
                  </h2>
                  {/* Short Description */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    End-to-end recruitment and executive search solutions built for enterprises, startups, and institutions seeking qualified leadership and specialized professionals. We deliver calibrated candidate slates backed by rigorous vetting and our 12-month retention guarantee.
                  </p>
                </div>

                {/* Telemetry Micro-Pills */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-emerald-200/80 text-center">
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#059669] block">14 Days</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">Shortlist SLA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#059669] block">98%</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">12-Mo. Retention</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#059669] block">365-Day</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">Shield</span>
                  </div>
                </div>

                {/* Service Highlights List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    Specialized Practices Under Hiring Talent:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Executive &amp; Board Search</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Tech &amp; AI Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>360° Candidate Audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Enterprise Cohort Staffing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Global Diaspora Sourcing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Compensation Benchmarks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated Button Navigating to Hiring Talent Page */}
              <div className="pt-8 mt-6 border-t border-emerald-200 relative z-10">
                <Link
                  href="/services/hiring-talent"
                  className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 group"
                >
                  <span>Explore Hiring Talent</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* OPTION 2: FINDING OPPORTUNITIES */}
            <div className="group rounded-[2.5rem] border-2 border-slate-300 hover:border-[#071324] bg-gradient-to-b from-white via-[#F8FAFC]/50 to-[#F8FAFC] p-8 sm:p-12 flex flex-col justify-between shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#071324] text-white flex items-center justify-center shadow-lg shadow-slate-900/25">
                    <Briefcase className="w-7 h-7 text-emerald-400" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#071324] bg-slate-200 px-3 py-1 rounded-full border border-slate-300">
                    For Professionals &amp; Candidates
                  </span>
                </div>

                {/* Option Title */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                    Finding Opportunities
                  </h2>
                  {/* Short Description */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    Career elevation and opportunity matching for ambitious professionals and senior executives. Register your verified credentials confidentially, access exclusive unadvertised mandates, and receive dedicated assistance from our candidate career advisory team.
                  </p>
                </div>

                {/* Telemetry Micro-Pills */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-200 text-center">
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#071324] block">0 Rs.</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">Candidate Fee</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#071324] block">100%</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">Discretion</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80">
                    <span className="font-display text-lg font-extrabold text-[#071324] block">70%+</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase">Unadvertised</span>
                  </div>
                </div>

                {/* Service Highlights List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    What We Offer Under Finding Opportunities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Unadvertised Mandates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confidential Talent Vault</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Candidate Registration Form</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Interview Coaching &amp; Prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Offer &amp; Equity Structuring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Free Candidate Service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated Button Navigating to Finding Opportunities Page */}
              <div className="pt-8 mt-6 border-t border-slate-200 relative z-10">
                <Link
                  href="/services/finding-opportunities"
                  className="btn-brand-navy w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/25 group"
                >
                  <span>Explore Finding Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PRACTICE EXPLORER MATRIX */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
                Practice Portfolio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Detailed Practice Breakdown
              </h2>
              <p className="text-sm text-slate-700 font-normal">
                Filter across our specialized practices to inspect deliverables, SLAs, and direct team contacts.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Capabilities
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("hiring")}
                className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === "hiring"
                    ? "bg-[#059669] text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Hiring Practices (6)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory("opportunities")}
                className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === "opportunities"
                    ? "bg-[#071324] text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Candidate Services (4)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                        {srv.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0F172A]">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1.5">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[11px] text-slate-700 font-semibold">
                      <span className="text-slate-400 block text-[9px] uppercase font-extrabold tracking-wider">Deliverable Standard:</span>
                      {srv.deliverable}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href={srv.link}
                      className="text-xs font-bold text-[#059669] hover:underline flex items-center justify-between group"
                    >
                      <span>Explore Dedicated Practice</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. IMMEDIATE ACTION & CONTACT BANNER */}
      <section className="py-16 bg-[#071324] text-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                Direct Partner Access
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Have a Specific Requirement or Career Inquiry?
              </h2>
              <p className="text-sm text-slate-300 font-normal">
                Our Senior Managing Partners and Candidate Advisors are available via WhatsApp and phone for immediate, confidential consultation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge!%20I%20would%20like%20to%20discuss%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-green !py-3.5 !px-6 !text-xs sm:!text-sm font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +94 77 234 5678</span>
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all"
              >
                Contact Form &amp; Office Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
