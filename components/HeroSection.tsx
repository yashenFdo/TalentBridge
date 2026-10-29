"use client";

import React from "react";
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
  CheckCircle2, 
  Clock, 
  Award
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#FFFFFF] overflow-hidden">
      {/* Ambient Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Luxury Frame */}
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_25px_70px_rgba(7,19,36,0.22)] min-h-[600px] lg:min-h-[660px] flex items-center p-6 sm:p-10 lg:p-16 text-white border border-slate-800/60">
          
          {/* Authentic Executive Boardroom Photography Background */}
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop"
            alt="Talent Bridge executive boardroom recruitment and leadership advisory in Colombo"
            fill
            className="object-cover scale-[1.02] opacity-55"
            priority
            sizes="100vw"
          />

          {/* Luxury Obsidian Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#071324]/96 to-[#0A192F]/88" />
          
          {/* Grid: Headline, Tagline & CTAs on Left, Elegant Credibility Card on Right */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Readable Tagline */}
              <div>
                <p className="text-emerald-400 font-semibold tracking-wide text-sm sm:text-base">
                  The Right Talent. The Right Direction.
                </p>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.06] text-white">
                  Connecting Defining Talent With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#059669]">
                    Visionary Organizations.
                  </span>
                </h1>
                
                {/* Short Introduction */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
                  Talent Bridge is Sri Lanka&apos;s disciplined executive recruitment advisory. We connect enterprise boardrooms, high-growth innovators, and conglomerates with transformative leadership, while empowering top-tier candidates to access career-defining opportunities with absolute confidentiality.
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
              <div className="pt-6 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-700/60">
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

            {/* Right Column: Clean, Elegant Executive Feature Card (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl bg-slate-900/85 backdrop-blur-2xl border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-7 space-y-6 text-white relative">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Executive Search Advisory
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Colombo • APAC</span>
                </div>

                {/* Visual Imagery Banner */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-700 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                    alt="Senior Executive Leadership in Colombo"
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      C-Suite &amp; Board Appointments
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-xs px-2 py-0.5 rounded border border-emerald-500/30">
                      Retained Search
                    </span>
                  </div>
                </div>

                {/* 3 Core Trust Pillars */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">14-Day Delivery SLA</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Calibrated shortlists delivered in 14 business days.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">98% 12-Month Retention Rate</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Guaranteed alignment with comprehensive replacement warranty.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">100% Strict Non-Disclosure</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Airtight institutional discretion for confidential mandates.</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Simple Action */}
                <div className="pt-2">
                  <Link
                    href="/contact?type=employer"
                    className="w-full py-3 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Search Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
