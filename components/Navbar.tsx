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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "CV Builder", href: "/cv-builder", isNew: true },
    { label: "Methodology", href: "/how-it-works" },
    { label: "Why Us", href: "/why-us" },
    { label: "Opportunities", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB] py-3"
          : "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E7EB] py-4"
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

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.12em] transition-colors py-1 flex items-center gap-1.5 ${
                  active
                    ? "text-[#0D9488] font-bold border-b-2 border-[#0D9488]"
                    : "text-[#4A5568] hover:text-[#0D9488]"
                }`}
              >
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="text-[9px] font-extrabold uppercase bg-[#0D9488] text-white px-1.5 py-0.2 rounded-full tracking-wider">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Group */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+94770000000"
            className="text-xs font-semibold text-[#4A5568] hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>+94 77 000 0000</span>
          </a>

          <Link
            href="/contact?type=employer"
            className="btn-brand-green !py-2.5 !px-5 !text-xs flex items-center gap-2 group"
          >
            <span>Hire Talent</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-3">
          <Link
            href="/contact?type=employer"
            className="hidden sm:inline-flex btn-human-primary !py-2 !px-4 !text-xs"
          >
            Retain Search
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded border border-[#E8E6DF] bg-white flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#0A1118] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0A1118] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0A1118] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8E6DF] shadow-xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                    active
                      ? "bg-[#FAF9F6] text-[#0A1118] font-bold"
                      : "text-[#4A5568] hover:text-[#0A1118]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#718096]" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E8E6DF] flex flex-col gap-2.5">
            <Link
              href="/cv-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand-green w-full text-center py-3 text-xs justify-center"
            >
              Build & Share Your CV Free
            </Link>
            <Link
              href="/contact?type=employer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand-navy w-full text-center py-3 text-xs justify-center"
            >
              Hire Executive Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
