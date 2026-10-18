import React from "react";
import Link from "next/link";
import { 
  Building2, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Users2, 
  Briefcase, 
  Search, 
  Sparkles,
  MessageSquare,
  Clock,
  PhoneCall
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SplitPerspective } from "@/components/SplitPerspective";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyUsPillars } from "@/components/WhyUsPillars";
import { SITE_CONFIG } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. DUAL PERSPECTIVES SECTION */}
      <SplitPerspective />

      {/* 3. CORE SERVICES MATRIX */}
      <ServicesGrid />

      {/* 4. METHODOLOGY (4-STAGE PROCESS) */}
      <ProcessTimeline />

      {/* 5. THE TALENT BRIDGE STANDARD (WHY US) */}
      <WhyUsPillars />

      {/* 6. CONVERSION CTA SECTION */}
      <section className="py-24 bg-[#0B0F19] text-white relative overflow-hidden border-t border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Direct Executive Intake
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Let&apos;s build the right bridge for your future.
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed font-normal">
              Whether you need to brief a confidential leadership search or explore your 
              next career transition, our senior advisory team is ready to guide you.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:translate-y-[-2px] active:translate-y-[0px] text-base"
              >
                Submit an Inquiry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all border border-slate-700/80 hover:border-slate-600 text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Response Guarantee: Within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Colombo Headquarters: {SITE_CONFIG.contact.address.line1}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
