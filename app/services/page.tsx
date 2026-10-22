import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Search,
  ShieldCheck,
  Award,
  Users2,
  Clock,
  Sparkles,
  ArrowRight,
  Briefcase,
  Compass,
  Check,
  Building2,
  Lock,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Practices & Solutions | Talent Bridge Executive Recruitment",
  description:
    "Explore our specialized solutions: Executive Headhunting, Tech Leadership, 360° Candidate Screening, Private Talent Network, and Board Advisory.",
};

export default function ServicesPage() {
  const employerServices = [
    {
      badge: "Flagship Practice",
      title: "Executive & Board Search",
      desc: "Discreet headhunting for Chief Executives, Managing Directors, and Independent Board Members executed with total confidentiality.",
      serviceName: "Executive & Board Search",
      icon: Award,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      features: [
        "C-Suite, VP, and Director-level mandates",
        "Discreet passive mapping without public vacancy alerts",
        "12-month retention and replacement guarantee",
      ],
    },
    {
      badge: "High Growth",
      title: "Tech & AI Leadership Sourcing",
      desc: "Targeted discovery of visionary CTOs, Heads of AI/ML, and Principal Software Architects driving digital transformation.",
      serviceName: "Tech & AI Leadership Sourcing",
      icon: Sparkles,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      features: [
        "Engineering leadership and AI architect headhunting",
        "In-depth technical vetting by specialized practitioners",
        "Competitive equity and compensation calibration",
      ],
    },
    {
      badge: "Quality Shield",
      title: "360° Candidate Screening & Audits",
      desc: "Exhaustive multi-stage qualification assessing competency, emotional intelligence, leadership maturity, and track-record validity.",
      serviceName: "Candidate Screening & Audits",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      features: [
        "Multi-stage behavioral and competency interviews",
        "Confidential 360° peer and supervisory reference audits",
        "Rigorous verification of credentials and achievements",
      ],
    },
    {
      badge: "Scale & Expansion",
      title: "Enterprise Project Staffing",
      desc: "Coordinated talent acquisition campaigns for corporate scale-ups, market expansions, and division building without quality loss.",
      serviceName: "Enterprise Project Staffing",
      icon: Users2,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      features: [
        "Rapid pipeline architecture for multi-hire mandates",
        "Consistent cultural calibration across entire cohorts",
        "Streamlined interview scheduling and feedback loops",
      ],
    },
    {
      badge: "Global Reach",
      title: "Cross-Border & Diaspora Headhunting",
      desc: "Connecting international enterprises with top-tier Sri Lankan leaders globally, and repatriating diaspora executives.",
      serviceName: "Cross-Border Headhunting",
      icon: Compass,
      color: "text-teal-600 bg-teal-50 border-teal-200",
      features: [
        "Repatriation advisory for overseas Sri Lankan leaders",
        "Remote executive hub creation across APAC and EMEA",
        "Cross-border legal and compensation structuring guidance",
      ],
    },
    {
      badge: "Strategic Advisory",
      title: "Compensation & Org Benchmarking",
      desc: "Empowering HR leaders and Boards with current market compensation bands, retention diagnostics, and talent market maps.",
      serviceName: "Compensation & Org Benchmarking",
      icon: Building2,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      features: [
        "Real-time executive compensation band telemetry",
        "Competitor organizational structure mapping",
        "Retention risk audits and counter-offer mitigation",
      ],
    },
  ];

  const candidateServices = [
    {
      badge: "Exclusive Access",
      title: "Unadvertised Executive Mandates",
      desc: "Direct introductions to confidential leadership opportunities with leading corporations, fintech scaleups, and enterprise boards.",
      serviceName: "Unadvertised Executive Mandates",
      icon: Briefcase,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      badge: "Private Network",
      title: "Confidential Talent Network",
      desc: "Register your credentials confidentially with zero applicant fees. We contact you only when an exact mandate matches your trajectory.",
      serviceName: "Confidential Talent Network",
      icon: Users2,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      badge: "Career Advisory",
      title: "Executive Trajectory & Offer Coaching",
      desc: "Unbiased counsel on package structuring, equity negotiation, non-compete clauses, and executive transition strategy.",
      serviceName: "Executive Trajectory Coaching",
      icon: Compass,
      color: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      badge: "Cultural Fit",
      title: "Role & Leadership Alignment",
      desc: "Calibrating prospective team dynamics, leadership philosophy, and board expectations before you step into an interview.",
      serviceName: "Role & Leadership Alignment",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill mb-3">Enterprise Practice Areas</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Specialized Human Capital Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you require discreet C-suite headhunting, rigorous candidate vetting, or confidential career trajectory advisory, our specialized practices deliver calibrated results.
          </p>

          {/* Quick Anchor Switcher */}
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#employers"
              className="btn-executive-primary !py-2.5 !px-5 !text-xs flex items-center gap-2"
            >
              <span>For Organizations &amp; Boards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#candidates"
              className="btn-executive-outline !py-2.5 !px-5 !text-xs flex items-center gap-2"
            >
              <span>For Executives &amp; Leaders</span>
            </a>
          </div>
        </div>

        {/* 1. EMPLOYERS SECTION */}
        <section id="employers" className="scroll-mt-28 mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                Enterprise Practices
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                For Organizations, Founders &amp; Boards
              </h2>
            </div>
            <Link
              href="/contact?type=employer"
              className="btn-executive-primary !py-2.5 !px-5 !text-xs self-start sm:self-auto"
            >
              Retain Search Mandate
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/contact?type=employer&service=${encodeURIComponent(service.serviceName)}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>Brief Us on this Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. CANDIDATES SECTION */}
        <section id="candidates" className="scroll-mt-28 mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                Executive Candidate Advocacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                For Senior Leaders &amp; Specialists
              </h2>
            </div>
            <Link
              href="/careers"
              className="btn-executive-outline !py-2.5 !px-5 !text-xs self-start sm:self-auto !border-emerald-500 !text-emerald-700"
            >
              Explore Curated Openings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candidateServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/contact?type=candidate&service=${encodeURIComponent(service.serviceName)}`}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>Confidential Candidate Registration</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. BESPOKE STRATEGY BANNER */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Need a Bespoke Recruitment Strategy?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            Our Senior Managing Partners are available for confidential consultations to structure custom executive campaigns or leadership advisory.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Advisory"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-executive-primary !py-3.5 !px-8 !text-xs flex items-center gap-2 !bg-emerald-600 hover:!bg-emerald-700"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Consult via WhatsApp Concierge</span>
            </a>
            <Link
              href="/contact"
              className="btn-executive-glass !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <span>Structured Intake Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
