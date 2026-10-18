"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Why Us", href: "/why-us" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out border-b border-[#E2ECF2]/80 h-[80px] bg-white/90 backdrop-blur-[10px]">
      <div className="max-w-[1200px] mx-auto h-full px-5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F95] py-1"
            aria-label="Talent Bridge — The Right Talent. The Right Direction."
          >
            <span className="font-serif font-bold uppercase transition-colors text-2xl sm:text-[24px] tracking-[2px] text-[#1A1A1A]">
              Talent Bridge<span className="text-[#2E6F95] font-black">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link-item ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact?type=employer" className="btn-nav">
            <span className="relative z-10 flex items-center gap-2">Hire Talent</span>
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F95] p-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Open Navigation Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2ECF2] shadow-xl py-6 px-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-wider font-medium py-1 transition-colors ${
                  isActive(link.href) ? "text-[#1F4E6B] font-bold" : "text-[#1A1A1A] hover:text-[#2E6F95]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E2ECF2]">
              <Link
                href="/contact?type=employer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center py-3 text-xs"
              >
                Hire Talent
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
