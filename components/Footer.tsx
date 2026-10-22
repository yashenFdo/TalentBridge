"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin, Clock, ExternalLink, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#040914] text-slate-300 border-t border-slate-800/80 overflow-hidden no-print">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top High-Conversion Executive Banner */}
      <div className="relative z-10 border-b border-slate-800/80 bg-gradient-to-r from-[#071324] via-[#0E2338] to-[#071324]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/15 border border-[#059669]/30 text-[#2DD4BF] text-xs font-semibold uppercase tracking-wider mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Executive Mandates &amp; Talent Solutions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The Right Talent. The Right Direction.
              </h2>
              <p className="mt-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Connect with our senior recruitment partners today for confidential search mandates or build your verified executive profile.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact?type=employer"
                className="btn-brand-green !py-3 !px-6 !text-xs sm:!text-sm flex items-center gap-2 group"
              >
                <span>Hire Talent Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/cv-builder"
                className="btn-brand-navy !py-3 !px-6 !text-xs sm:!text-sm !border !border-slate-600 flex items-center gap-2"
              >
                <span>Create &amp; Share CV</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & 1/3 Devcity Technology Partner Showcase */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Brand & Mission (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center select-none group focus-visible:outline-none"
              aria-label="Talent Bridge"
            >
              <div className="relative h-11 w-auto flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="Talent Bridge — The Right Talent. The Right Direction."
                  width={180}
                  height={46}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed">
              Talent Bridge is an executive recruitment and human capital advisory firm bridging elite enterprises with high-impact leaders across APAC and global markets.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strict Non-Disclosure Fiduciary Standard</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Platform Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Practices & Tools
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services#executive-search" className="hover:text-sky-300 transition-colors">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link href="/services#technical-leadership" className="hover:text-sky-300 transition-colors">
                  Tech & AI Leadership
                </Link>
              </li>
              <li>
                <Link href="/services#screening" className="hover:text-sky-300 transition-colors">
                  360° Candidate Vetting
                </Link>
              </li>
              <li>
                <Link href="/cv-builder" className="hover:text-emerald-400 transition-colors font-semibold text-emerald-300 flex items-center gap-1.5">
                  <span>ATS CV Studio</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 rounded">FREE</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-sky-300 transition-colors">
                  4-Stage Search Protocol
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-sky-300 transition-colors">
                  Executive Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Advisory Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Colombo Advisory Desk
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  Level 4, Business Tower, Galle Road, Colombo 03, Sri Lanka
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href="tel:+94770000000" className="hover:text-white transition-colors">
                  +94 77 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href="mailto:contact@talentbridge.lk" className="hover:text-white transition-colors">
                  contact@talentbridge.lk
                </a>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Response SLA: Within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Column 4: DEDICATED 1/3 PROMOTION CARD FOR DEVCITY (4 Cols out of 12 = Exact 1/3) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0B1E36] via-[#09172B] to-[#040C18] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl overflow-hidden group">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-300" />
              
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Technology Partner
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  USA • Global
                </span>
              </div>

              {/* Devcity Logo */}
              <div className="mb-3">
                <a
                  href="https://devcity.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 group-hover:scale-[1.02]"
                >
                  <Image
                    src="/devcity-logo-white.png"
                    alt="Devcity.us — Technology Partner"
                    width={130}
                    height={34}
                    className="h-7 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Value Proposition Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                Devcity powers enterprise digital ecosystems, next-gen software architectures, and AI-driven platforms with world-class engineering squads.
              </p>

              {/* Service Capabilities Bullets */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Custom Software &amp; SaaS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>AI &amp; Data Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Cloud &amp; DevOps Scale</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Dedicated Tech Teams</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="flex items-center justify-between gap-3">
                <a
                  href="https://devcity.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Devcity.us</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>&copy; 2026 Talent Bridge Advisory. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400 font-medium">The Right Talent. The Right Direction.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span>Official Technology Infrastructure provided by</span>
            <a
              href="https://devcity.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-bold"
            >
              Devcity.us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
