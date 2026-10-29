import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
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
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Talent Bridge — The Right Talent. The Right Direction.",
  description:
    "Explore Talent Bridge's two core recruitment categories: Hiring Talent (executive search & recruitment for organizations) and Finding Opportunities (career matchmaking & advisory for candidates).",
};

export default function ServicesPage() {
  const hiringServicesList = [
    {
      name: "Executive & Board Search",
      desc: "Discreet headhunting for C-Suite executives, Managing Directors, and Board Members.",
      icon: Building2,
    },
    {
      name: "Tech & AI Leadership Sourcing",
      desc: "Targeted sourcing for CTOs, AI/ML engineers, and principal tech architects.",
      icon: Cpu,
    },
    {
      name: "360° Candidate Audits & Vetting",
      desc: "Comprehensive competency, credential, and cultural alignment vetting under NDA.",
      icon: FileCheck,
    },
    {
      name: "Enterprise Project & Cohort Staffing",
      desc: "Coordinated recruitment campaigns for multi-hire division building and rapid scale.",
      icon: Users,
    },
    {
      name: "Cross-Border & Diaspora Headhunting",
      desc: "Repatriating overseas Sri Lankan leaders and building regional executive hubs.",
      icon: Globe2,
    },
    {
      name: "Compensation Benchmarking & Org Mapping",
      desc: "Real-time market salary telemetry and competitive organizational mapping.",
      icon: BarChart3,
    },
  ];

  const opportunityServicesList = [
    {
      name: "Unadvertised Executive Mandates",
      desc: "Direct introductions to exclusive, confidential leadership roles not posted publicly.",
      icon: Search,
    },
    {
      name: "Confidential Talent Network",
      desc: "Private registry matching your specific trajectory with premier enterprises.",
      icon: UserCheck,
    },
    {
      name: "Executive Career Coaching",
      desc: "Unbiased counsel on package structuring, career pivots, and leadership branding.",
      icon: Sparkles,
    },
    {
      name: "Free Interactive CV Builder",
      desc: "Create, format, and share modern ATS-compliant resumes completely free.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200">
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

      {/* 2. THE TWO MAIN OPTIONS SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* OPTION 1: HIRING TALENT */}
            <div className="group rounded-[2rem] border-2 border-emerald-500/30 hover:border-emerald-500 bg-gradient-to-b from-white to-[#F0FDF4] p-8 sm:p-12 flex flex-col justify-between shadow-lg shadow-emerald-950/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#059669] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
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

                {/* Service Highlights List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    What We Offer Under Hiring Talent:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Executive &amp; Board Search</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Tech &amp; AI Leadership</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>360° Candidate Audits</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Enterprise Cohort Staffing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Global Diaspora Sourcing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Compensation Benchmarks</span>
                    </div>
                  </div>
                </div>

                {/* Responsible Team Snapshot */}
                <div className="p-4 rounded-xl bg-white/80 border border-emerald-200 text-xs text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    <span>Dedicated Practice Leads with WhatsApp &amp; Direct Email</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Button Navigating to Hiring Talent Page */}
              <div className="pt-8 mt-6 border-t border-emerald-200">
                <Link
                  href="/services/hiring-talent"
                  className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 group"
                >
                  <span>Explore Hiring Talent</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* OPTION 2: FINDING OPPORTUNITIES */}
            <div className="group rounded-[2rem] border-2 border-slate-300 hover:border-[#071324] bg-gradient-to-b from-white to-[#F8FAFC] p-8 sm:p-12 flex flex-col justify-between shadow-lg shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#071324] text-white flex items-center justify-center shadow-md shadow-slate-900/20">
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

                {/* Service Highlights List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    What We Offer Under Finding Opportunities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Unadvertised Mandates</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confidential Talent Network</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Candidate Registration Form</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Interview Coaching &amp; Prep</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Offer &amp; Equity Structuring</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Free Candidate Service</span>
                    </div>
                  </div>
                </div>

                {/* Responsible Team Snapshot */}
                <div className="p-4 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Candidate Relations Leads with WhatsApp &amp; Direct Email</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Button Navigating to Finding Opportunities Page */}
              <div className="pt-8 mt-6 border-t border-slate-200">
                <Link
                  href="/services/finding-opportunities"
                  className="btn-brand-navy w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-slate-900/20 group"
                >
                  <span>Explore Finding Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DETAILED PRACTICE BREAKDOWN SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Full Practice Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              EXPLORE OUR <span className="text-[#059669]">DETAILED CAPABILITIES</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Browse each individual service below, or visit the dedicated sub-pages for direct team contact details, WhatsApp connections, and intake forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringServicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
                      Hiring Talent Practice
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">{srv.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{srv.desc}</p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href="/services/hiring-talent"
                      className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1.5"
                    >
                      <span>View details &amp; team contact</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
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
