import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Users, Clock, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-200 bg-white">
      {/* Subtle Ambient Background Gradients & Architectural Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-50/70 via-blue-50/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-slate-100/80 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle decorative architectural lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Recruitment & Talent Solutions
          </div>

          {/* Display Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-6">
            The Right Talent. <br />
            <span className="text-blue-600">The Right Direction.</span>
          </h1>

          {/* Body Description */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-normal">
            Talent Bridge connects forward-thinking organizations with exceptional professionals. 
            We make recruitment simple, reliable, and people-focused through calibrated matching 
            and authentic relationships.
          </p>

          {/* Split Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <Link
              href="/contact?type=employer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              Hire Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm hover:border-slate-400"
            >
              Find Opportunities
            </Link>
          </div>

          {/* Value Badges Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Strict Non-Disclosure Protected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>90-Day Bilateral Retention Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Zero Applicant Fees</span>
            </div>
          </div>
        </div>

        {/* Social Proof / Metrics Bar (Beneath Hero) */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {SITE_CONFIG.metrics.slice(0, 3).map((metric, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-blue-200 hover:bg-white transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-2">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
