"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, ChevronRight, Phone, MessageCircle, Briefcase, Users, FileText } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/hiring-talent") ||
    pathname.startsWith("/finding-opportunities");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3.5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-3 select-none group focus-visible:outline-none"
            aria-label="Talent Bridge — The Right Talent. The Right Direction."
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Talent Bridge — The Right Talent. The Right Direction."
                width={190}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links: Home, About, Services, Contact */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {/* Home Link */}
          <Link
            href="/"
            className={`relative text-xs font-bold uppercase tracking-[0.14em] transition-colors py-1 flex items-center ${
              isActive("/") && pathname === "/"
                ? "text-[#059669] border-b-2 border-[#059669]"
                : "text-slate-800 hover:text-[#059669]"
            }`}
          >
            Home
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className={`relative text-xs font-bold uppercase tracking-[0.14em] transition-colors py-1 flex items-center ${
              isActive("/about")
                ? "text-[#059669] border-b-2 border-[#059669]"
                : "text-slate-800 hover:text-[#059669]"
            }`}
          >
            About
          </Link>

          {/* Services Link with Interactive Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`relative text-xs font-bold uppercase tracking-[0.14em] transition-colors py-1 flex items-center gap-1.5 ${
                isServicesActive
                  ? "text-[#059669] border-b-2 border-[#059669]"
                  : "text-slate-800 hover:text-[#059669]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#059669]" : "text-slate-500"
                }`}
              />
            </Link>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                  <Link
                    href="/services"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                        All Services Overview
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                        Explore our comprehensive recruitment categories
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/hiring-talent"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                        Hiring Talent
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                        Recruitment solutions for businesses &amp; boards
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/finding-opportunities"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                        Finding Opportunities
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                        Career pathways &amp; registration for candidates
                      </div>
                    </div>
                  </Link>

                  <div className="pt-1 border-t border-slate-100">
                    <Link
                      href="/cv-builder"
                      className="flex items-center justify-between p-2 rounded-lg text-slate-600 hover:text-[#059669] hover:bg-slate-50 text-[11px] font-semibold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-[#059669]" />
                        <span>Free Interactive CV Builder</span>
                      </span>
                      <span className="text-[9px] font-extrabold uppercase bg-emerald-100 text-[#065F46] px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={`relative text-xs font-bold uppercase tracking-[0.14em] transition-colors py-1 flex items-center ${
              isActive("/contact")
                ? "text-[#059669] border-b-2 border-[#059669]"
                : "text-slate-800 hover:text-[#059669]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Action Group */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-700 hover:text-[#059669] transition-colors flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-300 px-3 py-2 rounded-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
            <span>+94 77 234 5678</span>
          </a>

          <Link
            href="/services/hiring-talent"
            className="btn-brand-green !py-2.5 !px-5 !text-xs flex items-center gap-2 group shadow-sm hover:shadow"
          >
            <span>Hiring Talent</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-50 text-[#059669] border border-emerald-200"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/"
                  ? "bg-emerald-50 text-[#059669]"
                  : "text-slate-800 hover:text-[#059669]"
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname.startsWith("/about")
                  ? "bg-emerald-50 text-[#059669]"
                  : "text-slate-800 hover:text-[#059669]"
              }`}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="py-1">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  pathname === "/services"
                    ? "bg-emerald-50 text-[#059669]"
                    : "text-slate-800 hover:text-[#059669]"
                }`}
              >
                <span>Services (Overview)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <div className="pl-4 mt-1 space-y-1 border-l-2 border-emerald-100 ml-3">
                <Link
                  href="/services/hiring-talent"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    pathname.startsWith("/services/hiring-talent")
                      ? "text-[#059669] font-bold"
                      : "text-slate-600 hover:text-[#059669]"
                  }`}
                >
                  <span>• Hiring Talent (For Employers)</span>
                </Link>
                <Link
                  href="/services/finding-opportunities"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    pathname.startsWith("/services/finding-opportunities")
                      ? "text-[#059669] font-bold"
                      : "text-slate-600 hover:text-[#059669]"
                  }`}
                >
                  <span>• Finding Opportunities (For Candidates)</span>
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname.startsWith("/contact")
                  ? "bg-emerald-50 text-[#059669]"
                  : "text-slate-800 hover:text-[#059669]"
              }`}
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              href="/services/hiring-talent"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand-green w-full text-center py-3 text-xs justify-center font-bold"
            >
              Hiring Talent — For Employers
            </Link>
            <Link
              href="/services/finding-opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand-navy w-full text-center py-3 text-xs justify-center font-bold"
            >
              Finding Opportunities — For Candidates
            </Link>
            <a
              href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg border border-emerald-300 text-[#065F46] bg-emerald-50 font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>WhatsApp: +94 77 234 5678</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
