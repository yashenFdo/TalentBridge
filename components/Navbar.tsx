"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/services") {
      return (
        pathname.startsWith("/services") ||
        pathname.startsWith("/hiring-talent") ||
        pathname === "/opportunities" ||
        pathname.startsWith("/finding-opportunities")
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 bg-white ${
        scrolled
          ? "shadow-sm border-b border-slate-200/90 py-2 sm:py-2.5"
          : "border-b border-slate-200/80 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Official Brand Logo with increased size */}
        <Link
          href="/"
          className="inline-flex items-center select-none group focus-visible:outline-none py-0.5"
          aria-label="Talent Bridge — The Right Talent. The Right Direction."
        >
          <div className="relative flex items-center">
            <Image
              src="/images/talent-bridge-logo.png"
              alt="Talent Bridge — The Right Talent. The Right Direction."
              width={1324}
              height={698}
              className="h-14 sm:h-16 lg:h-[76px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links: Home | About Us | Our Services | Contact Us */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs sm:text-[14px] font-semibold transition-colors py-1.5 flex items-center ${
                  active
                    ? "text-[#008080] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#008080] after:rounded-full"
                    : "text-slate-700 hover:text-[#008080]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Direct Contact / CTA */}
        <div className="hidden lg:flex items-center gap-3.5">
          <a
            href="tel:+94111234567"
            className="text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#008080] transition-colors flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 hover:border-[#008080]/40 bg-slate-50"
          >
            <Phone className="w-3.5 h-3.5 text-[#008080]" />
            <span>+94 11 123 4567</span>
          </a>

          <Link
            href="/hiring-talent"
            className="bg-[#008080] hover:bg-[#006e6e] text-white text-xs sm:text-[13px] font-bold px-5 py-2.5 rounded-full transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Hire Talent</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+94111234567"
            className="p-2 rounded-full bg-slate-100 text-[#008080]"
            aria-label="Call Talent Bridge"
          >
            <Phone className="w-4 h-4" />
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl py-5 px-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition-colors ${
                    active
                      ? "bg-teal-50 text-[#008080]"
                      : "text-slate-800 hover:text-[#008080]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/hiring-talent"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#008080] hover:bg-[#006e6e] text-white text-xs font-bold shadow-xs"
            >
              Hire Talent &rarr;
            </Link>
            <Link
              href="/opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-[#008080] text-[#008080] text-xs font-bold hover:bg-teal-50"
            >
              Find Opportunities &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
