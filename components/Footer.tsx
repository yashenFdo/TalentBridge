"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#040914] text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top High-Conversion Executive Banner */}
      <div className="relative z-10 border-b border-slate-800/80 bg-gradient-to-r from-[#071324] via-[#0b1f3b] to-[#071324]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Executive Mandates &amp; Talent Solutions
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                The Right Talent. The Right Direction.
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect with our senior recruitment partners today for confidential search mandates or calibrated career advisory.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=employer"
                className="btn-executive-primary !py-3.5 !px-7 !text-xs sm:!text-sm flex items-center gap-2 group"
              >
                <span>Retain Search Mandate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/careers"
                className="btn-executive-glass !py-3.5 !px-7 !text-xs sm:!text-sm flex items-center gap-2"
              >
                <span>Explore Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="Talent Bridge"
            >
              <div className="relative h-12 w-auto flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="Talent Bridge — The Right Talent. The Right Direction."
                  width={200}
                  height={52}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Talent Bridge is an executive recruitment and human capital advisory firm bridging elite enterprises and high-impact leaders. We deliver calibrated search mandates with high-retention cultural alignment.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strict Non-Disclosure Fiduciary Standard</span>
              </div>
            </div>
          </div>

          {/* Solutions / Practices */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Practices &amp; Solutions
            </span>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/services#executive-search" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>Executive &amp; Board Search</span>
                </Link>
              </li>
              <li>
                <Link href="/services#technical-leadership" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>Tech &amp; AI Leadership Sourcing</span>
                </Link>
              </li>
              <li>
                <Link href="/services#screening" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>360° Candidate Screening &amp; Vetting</span>
                </Link>
              </li>
              <li>
                <Link href="/services#private-network" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>Private Executive Talent Network</span>
                </Link>
              </li>
              <li>
                <Link href="/services#strategic-matching" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>Cultural Synergy &amp; Role Calibration</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Methodology */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Architecture
            </span>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-sky-300 transition-colors">
                  4-Stage Search Protocol
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-sky-300 transition-colors">
                  The 4 Pillars of Excellence
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-sky-300 transition-colors">
                  Curated Mandates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Client Intake
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Colombo HQ */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Direct Advisory Desk
            </span>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Level 4, Business Tower, Galle Road, Colombo 03, Sri Lanka
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+94770000000" className="hover:text-white transition-colors text-xs">
                  +94 77 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:contact@talentbridge.lk" className="hover:text-white transition-colors text-xs">
                  contact@talentbridge.lk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-emerald-400 font-medium">
                  Response SLA: Within 24 Business Hours
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Executive%20Desk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-2 rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp Priority Concierge &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Talent Bridge Advisory. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">
              The Right Talent. The Right Direction.
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="hidden sm:inline text-slate-500">
              APAC • EMEA • Global Placements
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
