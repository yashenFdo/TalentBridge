"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Building2, Cpu, Landmark, Globe } from "lucide-react";

export function CapabilitiesBento() {
  const cards = [
    {
      title: "BOARD & C-SUITE ADVISORY",
      description: "Managing Directors, CEOs, and Independent Board Directors appointed for public PLC and sovereign boards.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      href: "/services#executive-search",
      icon: Building2,
    },
    {
      title: "BANKING, FINTECH & PE",
      description: "Chief Risk Officers, Investment Directors, and FinTech product heads in Colombo & regional hubs.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      href: "/services#banking",
      icon: Landmark,
    },
    {
      title: "ENTERPRISE TECH & AI",
      description: "Chief Technology Officers, VP of Engineering, AI architects, and cloud leaders scaling Tier-1 platforms.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      href: "/services#technical-leadership",
      icon: Cpu,
    },
    {
      title: "GLOBAL SHARED SERVICES",
      description: "Operations Directors, Global Capability Center (GCC) heads, and offshore center architects.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      href: "/services#shared-services",
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F5] border-y border-slate-200">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Heading matching reference typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1118] tracking-tight leading-tight">
            WE&#39;RE READY TO SHOW YOU WHY HIRING WITH US{" "}
            <span className="text-[#0D9488]">SUCCEEDS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Specialized search practices led by seasoned practice directors who understand the exact domain realities and compensation bands of high-impact leadership.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Practice Cards */}
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group relative h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-white">
                  <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#2DD4BF] group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Highlight Card 5: SOLID BRAND GREEN CARD (Like the orange Estimate card in reference) */}
          <div className="bg-[#0D9488] text-white p-7 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Executive Self-Service Suite</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                BUILD &amp; SHARE YOUR VERIFIED EXECUTIVE CV ANYWHERE
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
                Create a high-impact, Harvard/McKinsey-standard executive dossier in under 3 minutes. Share instantly via custom link, 1-click WhatsApp, LinkedIn, or print-ready PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/cv-builder"
                className="px-6 py-3.5 bg-white text-[#0D9488] hover:bg-emerald-50 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Launch Free CV Builder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-emerald-100">
                100% Free • No Sign-up Required • Instant Sharing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
