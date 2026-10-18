import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111] text-slate-300 border-t border-[#1C1C1C]">
      {/* Top Banner */}
      <div className="border-b border-[#222222] bg-[#161616]">
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#DCEAF2] mb-2">
                Executive &amp; Professional Recruitment
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                The Right Talent. The Right Direction.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=employer"
                className="btn-primary !py-2.5 !px-6 !text-[11px] !tracking-[2px]"
              >
                <span className="relative z-10 flex items-center gap-2">Hire Talent</span>
              </Link>
              <Link
                href="/careers"
                className="btn-outline !py-2.5 !px-6 !text-[11px] !tracking-[2px] !border-white/40 !text-white hover:!bg-white hover:!text-[#1A1A1A] hover:!border-white"
              >
                <span className="relative z-10 flex items-center gap-2">Find Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F95] py-1"
              aria-label="Talent Bridge — The Right Talent. The Right Direction."
            >
              <span className="font-serif font-bold uppercase transition-colors text-2xl sm:text-[24px] tracking-[2px] text-white">
                Talent Bridge<span className="text-[#2E6F95] font-black">.</span>
              </span>
            </Link>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm pt-2">
              Talent Bridge is a recruitment and talent solutions company focused on connecting businesses with the right talent and individuals with the right career opportunities. We aim to make recruitment simple, reliable and people-focused by creating meaningful connections between employers and candidates.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-white">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-light text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-white">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-sm font-light text-slate-400">
              <li>
                <Link href="/services#employers" className="hover:text-white transition-colors">
                  Talent Sourcing &amp; Screening
                </Link>
              </li>
              <li>
                <Link href="/services#employers" className="hover:text-white transition-colors">
                  Executive Search Mandates
                </Link>
              </li>
              <li>
                <Link href="/services#employers" className="hover:text-white transition-colors">
                  Project &amp; Bulk Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services#jobseekers" className="hover:text-white transition-colors">
                  Candidate Advisory &amp; Matching
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-white">
              Direct Inquiries
            </span>
            <div className="space-y-3 text-sm font-light text-slate-400">
              <p>
                <a href="tel:+94770000000" className="hover:text-white transition-colors">
                  +94 77 000 0000
                </a>
              </p>
              <p>
                <a href="mailto:contact@talentbridge.lk" className="hover:text-white transition-colors">
                  contact@talentbridge.lk
                </a>
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Level 4, Business Tower, Galle Road, Colombo 03, Sri Lanka
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/94770000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-[#DCEAF2] hover:text-white transition-colors underline"
                >
                  WhatsApp Support Desk &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Talent Bridge. All rights reserved.</p>
          <p className="font-serif italic text-slate-400">The Right Talent. The Right Direction.</p>
        </div>
      </div>
    </footer>
  );
}
