"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Award,
  ChevronRight,
  TrendingUp,
  Lock
} from "lucide-react";

export function HeroSection() {
  const [activePerspective, setActivePerspective] = useState<"employer" | "candidate">("employer");

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#FFFFFF] overflow-hidden">
      {/* Ambient Luxury Lighting Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Luxury Frame */}
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_25px_70px_rgba(7,19,36,0.22)] min-h-[640px] lg:min-h-[700px] flex items-center p-6 sm:p-10 lg:p-16 text-white border border-slate-800/60">
          
          {/* Authentic Executive Boardroom Photography Background */}
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop"
            alt="Talent Bridge executive boardroom recruitment and leadership advisory in Colombo"
            fill
            className="object-cover scale-[1.02] transition-transform duration-1000 opacity-60"
            priority
            sizes="100vw"
          />

          {/* Luxury Obsidian Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#071324]/96 to-[#0A192F]/88" />
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

          {/* Grid: Headline, Tagline & CTAs on Left, Interactive Dual-Track Console on Right */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Readable Tagline (No Tag Badge) */}
              <div>
                <p className="text-emerald-400 font-semibold tracking-wide text-sm sm:text-base">
                  The Right Talent. The Right Direction.
                </p>
              </div>

              {/* Main Heading (Bold, Handcrafted Typography) */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.05] text-white">
                  Connecting Defining Talent With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#059669]">
                    Visionary Organizations.
                  </span>
                </h1>
                
                {/* Short Introduction */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
                  Talent Bridge is Sri Lanka&apos;s disciplined executive recruitment advisory. We connect enterprise boardrooms, high-growth tech innovators, and conglomerates with transformative leadership, while empowering top-tier candidates to access career-defining opportunities through bilateral advocacy and absolute confidentiality.
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                {/* 1. Hiring Talent CTA Button */}
                <Link
                  href="/services/hiring-talent"
                  className="btn-brand-green !py-3.5 !px-6 !text-xs sm:!text-sm font-bold flex items-center gap-2.5 group shadow-xl shadow-emerald-950/40"
                >
                  <Users className="w-4 h-4 text-emerald-100" />
                  <span>Hiring Talent</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* 2. Finding Opportunities CTA Button */}
                <Link
                  href="/services/finding-opportunities"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 hover:border-white/50 shadow-lg"
                >
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>Finding Opportunities</span>
                </Link>

                {/* 3. WhatsApp Direct Button */}
                <a
                  href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Advisory!%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 backdrop-blur-md px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Bottom Quick-Info Bar */}
              <div className="pt-5 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-700/60">
                {/* Hotline Contact */}
                <a
                  href="tel:+94772345678"
                  className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#059669] text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider leading-none">
                      Executive Helpline
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors mt-0.5 block">
                      +94 77 234 5678
                    </span>
                  </div>
                </a>

                {/* Headquarters Location */}
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl">
                  <div className="w-7 h-7 rounded-lg bg-[#0A192F] text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider leading-none">
                      Headquarters
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      Colombo 01, WTC Tower
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Dual-Pathway Executive Console (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-7 space-y-6 text-white relative">
                
                {/* Glowing Top Pill Switcher */}
                <div className="flex items-center p-1 bg-slate-950/80 rounded-2xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActivePerspective("employer")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activePerspective === "employer"
                        ? "bg-[#059669] text-white shadow-md shadow-emerald-950/50"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>For Organizations</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePerspective("candidate")}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activePerspective === "candidate"
                        ? "bg-[#059669] text-white shadow-md shadow-emerald-950/50"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>For Candidates</span>
                  </button>
                </div>

                {/* Dynamic Content Based on Perspective */}
                {activePerspective === "employer" ? (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Executive Search &amp; Staffing Gateway</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Appoint Mission-Critical Leadership
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        Retain our practice leads for Board, C-Suite, Tech &amp; Engineering search with calibrated shortlists delivered in 14 business days.
                      </p>
                    </div>

                    {/* Telemetry Micro-List */}
                    <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Shortlist Turnaround:</span>
                        <span className="font-bold text-white">14 Business Days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Retention Warranty:</span>
                        <span className="font-bold text-emerald-400">365-Day Replacement</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Search Protocol:</span>
                        <span className="font-bold text-white">100% Confidential Fiduciary</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2.5 pt-1">
                      <Link
                        href="/services/hiring-talent"
                        className="btn-brand-green w-full !py-3 !text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <span>Explore Hiring Talent Practices</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="https://wa.me/94772345678?text=Hello%20Dinesh,%20I%20would%20like%20to%20discuss%20an%20Executive%20Search%20mandate."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp Managing Partner Directly</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-1">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Confidential Career Gateway</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Access Unadvertised Mandates
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        Register your credentials in our Confidential Executive Talent Vault. Get direct introductions to elite companies with 100% discretion and zero applicant fees.
                      </p>
                    </div>

                    {/* Telemetry Micro-List */}
                    <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Candidate Placement Fee:</span>
                        <span className="font-bold text-emerald-400">0 Rs. (100% Free)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Profile Discretion:</span>
                        <span className="font-bold text-white">Encrypted / No Employer Alerts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Candidate Relations Leads:</span>
                        <span className="font-bold text-amber-300">Sachini &amp; Tharindu</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2.5 pt-1">
                      <Link
                        href="/services/finding-opportunities"
                        className="btn-brand-green w-full !py-3 !text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <span>Open Candidate Registration Form</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="https://wa.me/94772345678?text=Hello%20Sachini,%20I%20am%20a%20candidate%20and%20would%20like%20career%20guidance."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Chat on WhatsApp With Career Lead</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Footer Security Badge */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fiduciary NDA Protocol</span>
                  </span>
                  <span>Colombo 01 Headquarters</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
