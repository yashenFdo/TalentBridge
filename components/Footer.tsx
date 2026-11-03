"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="relative bg-[#091D34] text-white py-6 sm:py-8 border-t border-[#0F2D52] no-print">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Left: Official Talent Bridge Logo on Dark */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center select-none group focus-visible:outline-none"
              aria-label="Talent Bridge — The Right Talent. The Right Direction."
            >
              <div className="relative flex items-center">
                <Image
                  src="/images/talent-bridge-logo-white.png"
                  alt="Talent Bridge — The Right Talent. The Right Direction."
                  width={1324}
                  height={698}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Vertical Separator */}
            <div className="hidden sm:block h-10 w-[1px] bg-slate-700/80" />
          </div>

          {/* Center: Email, Phone & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm text-slate-200">
            {/* Email */}
            <a
              href="mailto:info@talentbridge.com"
              className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>info@talentbridge.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+94111234567"
              className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-300" />
              <span>+94 11 123 4567</span>
            </a>

            {/* Vertical Separator */}
            <div className="hidden md:block h-5 w-[1px] bg-slate-700" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/talentbridge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talent Bridge on LinkedIn"
              className="text-white hover:text-[#38bdf8] transition-colors p-1"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs text-slate-400 text-center lg:text-right">
            &copy; 2026 Talent Bridge. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
