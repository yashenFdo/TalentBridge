"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export function AsymmetricValueSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Asymmetric Photo Grid + Solid Brand Green Stat Card */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
              {/* Photo 1: Vertical modern recruiter/leader */}
              <div className="relative h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Senior Search Partner conducting executive interview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 350px"
                />
              </div>

              {/* Column 2: Photo 2 + Solid Green Stat Card */}
              <div className="space-y-4 sm:space-y-6">
                <div className="relative h-44 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Corporate board meeting in Colombo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 350px"
                  />
                </div>

                {/* Solid Emerald Metric Badge */}
                <div className="bg-gradient-to-br from-[#065F46] via-[#059669] to-[#047857] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl shadow-emerald-950/20 space-y-2 border border-emerald-400/20">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-display text-3xl sm:text-4xl font-black tracking-tight block text-white">
                      500+
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-100 block mt-0.5">
                      Executive Appointments Placed
                    </span>
                    <span className="text-[11px] text-emerald-200 block mt-1 font-medium">
                      98% 12-Month Retention Rate Across 18+ Sectors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Impact Editorial Copy & Two Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <span>Proven Advisory Track Record</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                A TRUSTED ADVISORY FOR{" "}
                <span className="text-[#059669]">EXECUTIVE APPOINTMENTS</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our executive search consultants work alongside enterprise boards, managing directors, and high-growth innovators across Sri Lanka and regional APAC hubs. We replace hiring friction with calibrated market intelligence, structured assessments, and cultural governance.
              </p>
            </div>

            {/* Two Rounded Feature Highlight Cards */}
            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 transition-all hover:border-[#10B981] hover:shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#059669] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Guaranteed Leadership Fit &amp; 90-Day Warranty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every executive placement is secured by our formal 90-day retention guarantee, with structured integration check-ins at 30, 60, and 90 days.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 transition-all hover:border-[#10B981] hover:shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#0A192F] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Discrete, Fiduciary &amp; Strictly Confidential
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sensitive C-suite replacements and confidential strategic shifts are executed under bilateral non-disclosure protocols, protecting corporate intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="btn-brand-green !py-3.5 !px-8 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>View Practice Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
