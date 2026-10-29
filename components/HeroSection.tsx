"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Users, MessageCircle, Phone, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { HeroInteractiveForm } from "@/components/HeroInteractiveForm";

export function HeroSection() {
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curated Luxury Frame */}
        <div className="relative rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl min-h-[620px] lg:min-h-[680px] flex items-center p-6 sm:p-10 lg:p-16 text-white border border-slate-800/40">
          {/* Authentic Executive Team Photography Background */}
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Talent Bridge recruitment and leadership advisory in Colombo"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Midnight Obsidian & Emerald Atmospheric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/98 via-[#0A192F]/94 to-[#071324]/90" />

          {/* Grid: Headline, Tagline & CTAs on Left, Fast Intake Form on Right */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Company Tagline & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>The Right Talent. The Right Direction.</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Executive Search &amp; Career Gateway</span>
                </div>
              </div>

              {/* Main Heading (Bold Text) */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] text-white">
                  Connecting Defining Talent With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#059669]">
                    Visionary Organizations.
                  </span>
                </h1>
                
                {/* Short Introduction */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
                  Talent Bridge connects ambitious businesses with high-caliber talent and leadership across Sri Lanka and globally, while empowering candidates to discover defining career opportunities through tailored recruitment and trusted advisory.
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                {/* 1. Hiring Talent CTA Button */}
                <Link
                  href="/services/hiring-talent"
                  className="btn-brand-green !py-3.5 !px-6 !text-xs sm:!text-sm font-bold flex items-center gap-2.5 group shadow-lg shadow-emerald-900/40"
                >
                  <Users className="w-4 h-4 text-emerald-100" />
                  <span>Hiring Talent</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* 2. Finding Opportunities CTA Button */}
                <Link
                  href="/services/finding-opportunities"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 hover:border-white/50"
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

              {/* Bottom Quick-Info Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-700/60">
                {/* Hotline Pill */}
                <a
                  href="tel:+94772345678"
                  className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#059669] text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider leading-none">
                      Helpline &amp; Desk
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors mt-0.5 block">
                      +94 77 234 5678
                    </span>
                  </div>
                </a>

                {/* Location Pill */}
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl">
                  <div className="w-7 h-7 rounded-lg bg-[#0A192F] text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider leading-none">
                      Headquarters
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      Colombo 01, Sri Lanka
                    </span>
                  </div>
                </div>

                {/* Retention Metric Pill */}
                <div className="hidden sm:flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 px-3 py-2 rounded-xl text-xs font-bold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>98% 12-Month Retention</span>
                </div>
              </div>
            </div>

            {/* Right Form Column (Interactive Quick Selection) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroInteractiveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
