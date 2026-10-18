import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B0F19] text-white border-t border-slate-800">
      
      {/* SLA Commitment Guarantee Top Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Guaranteed SLA: 24-Hour Business Response</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Every executive search inquiry and confidential profile receives personalized partner attention.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                {SITE_CONFIG.contact.hours}
              </span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold gap-1 group"
              >
                Direct Client Intake
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Tier Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1 & 2: Brand Identity, Mission & Coordinates */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/30">
                <span className="text-white text-base">TB</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Talent<span className="text-slate-400 font-semibold">Bridge</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-500 ml-0.5 inline-block" />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An executive-grade recruitment and human capital advisory firm bridging elite enterprises and high-impact leaders. High-touch, calibrated vetting over automated volume.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-slate-400">
                  {SITE_CONFIG.contact.address.line1}, {SITE_CONFIG.contact.address.line2}, {SITE_CONFIG.contact.address.country}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`mailto:${SITE_CONFIG.contact.email}`} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={SITE_CONFIG.contact.whatsappLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.phone} (WhatsApp Concierge)
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Talent Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-5">
              Talent Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#recruitment-sourcing" className="text-slate-400 hover:text-white transition-colors">
                  Recruitment Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services#candidate-screening" className="text-slate-400 hover:text-white transition-colors">
                  Candidate Screening
                </Link>
              </li>
              <li>
                <Link href="/services#executive-recruitment" className="text-slate-400 hover:text-white transition-colors">
                  Executive Headhunting
                </Link>
              </li>
              <li>
                <Link href="/services#strategic-matching" className="text-slate-400 hover:text-white transition-colors">
                  Strategic Role Matching
                </Link>
              </li>
              <li>
                <Link href="/contact?type=employer" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Submit Role Brief →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: For Candidates & Leaders */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-5">
              For Professionals
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Executive Openings
                </Link>
              </li>
              <li>
                <Link href="/careers#talent-pool" className="text-slate-400 hover:text-white transition-colors">
                  Private Talent Network
                </Link>
              </li>
              <li>
                <Link href="/services#candidate-registration" className="text-slate-400 hover:text-white transition-colors">
                  Confidential Advisory
                </Link>
              </li>
              <li>
                <Link href="/contact?type=candidate" className="text-slate-400 hover:text-white transition-colors">
                  Register Career Profile
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  100% Free for Candidates
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-5">
              The Standard
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Talent Bridge
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="text-slate-400 hover:text-white transition-colors">
                  4-Stage Methodology
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="text-slate-400 hover:text-white transition-colors">
                  Why Leading Firms Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Direct Contact & Coordinates
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & SLA Guarantee Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Talent Bridge Human Capital Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Non-Disclosure Protected</span>
            <span>Bilateral Retention Guarantee</span>
            <span>Zero Candidate Placement Fees</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
