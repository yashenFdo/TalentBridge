"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, MessageSquare, ChevronRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/services" },
    { label: "Methodology", href: "/how-it-works" },
    { label: "Why Us", href: "/why-us" },
    { label: "Opportunities", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(7,19,36,0.08)] border-b border-slate-200/90 py-2.5"
          : "bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-3.5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-3 select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1"
            aria-label="Talent Bridge — The Right Talent. The Right Direction."
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Talent Bridge — The Right Talent. The Right Direction."
                width={190}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1.5 p-1 rounded-full bg-slate-100/70 border border-slate-200/70 shadow-inner"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? "bg-white text-blue-700 shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Group */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 rounded-full transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Confidential Inquiry</span>
          </Link>

          <Link
            href="/contact?type=employer"
            className="btn-executive-primary !py-2.5 !px-5 !text-xs !shadow-md flex items-center gap-2 group"
          >
            <span>Retain Talent</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-3">
          <Link
            href="/contact?type=employer"
            className="hidden sm:inline-flex btn-executive-primary !py-2 !px-4 !text-xs"
          >
            Retain Search
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-6 px-6 space-y-5 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Navigation Menu
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Advisory Online
            </span>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-400"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/contact?type=employer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-executive-primary w-full text-center py-3 text-xs justify-center"
            >
              Hire Elite Talent
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-executive-outline w-full text-center py-3 text-xs justify-center"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
