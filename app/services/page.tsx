import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  Sparkles,
  ShieldCheck,
  Users2,
  Compass,
  Building2,
  Briefcase,
  Check,
  ArrowRight,
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
    },
    {
      badge: "Private Network",
      title: "Confidential Talent Vault",
      desc: "Register your credentials confidentially with zero applicant fees. We contact you only when an exact mandate matches your trajectory.",
      serviceName: "Confidential Talent Vault",
    },
    {
      badge: "Career Advisory",
      title: "Executive Trajectory & Offer Coaching",
      desc: "Unbiased counsel on package structuring, equity negotiation, non-compete clauses, and executive transition strategy.",
      serviceName: "Executive Trajectory Coaching",
    },
    {
      badge: "Cultural Fit",
      title: "Role & Leadership Alignment",
      desc: "Calibrating prospective team dynamics, leadership philosophy, and board expectations before you step into an interview.",
      serviceName: "Role & Leadership Alignment",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
            Specialized Human Capital Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            Whether you require discreet C-suite headhunting, rigorous candidate vetting, or confidential career trajectory advisory, our specialized practices deliver calibrated results.
          </p>

          {/* Quick Anchor Switcher */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#employers"
              className="btn-human-primary !py-2.5 !px-5 !text-xs flex items-center gap-2"
            >
              <span>For Organizations &amp; Boards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#candidates"
              className="btn-human-outline !py-2.5 !px-5 !text-xs flex items-center gap-2"
            >
              <span>For Executives &amp; Leaders</span>
            </a>
          </div>
        </div>

        {/* 1. EMPLOYERS SECTION */}
        <section id="employers" className="scroll-mt-32 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E8E6DF]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-1">
                Enterprise Practices
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F172A]">
                For Organizations, Founders &amp; Boards
              </h2>
            </div>
            <Link
              href="/contact?type=employer"
              className="btn-human-primary !py-2.5 !px-5 !text-xs self-start sm:self-auto"
            >
              Retain Search Mandate
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerServices.map((service, idx) => (
              <div
                key={idx}
                className="editorial-card p-8 border border-[#E8E6DF] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#D97706] font-display">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E8E6DF]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#E8E6DF] mb-6">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                        <Check className="w-3.5 h-3.5 text-[#059669] mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E6DF]">
                  <Link
                    href={`/contact?type=employer&service=${encodeURIComponent(service.serviceName)}`}
                    className="text-xs font-bold text-[#059669] hover:text-[#095952] transition-colors flex items-center gap-1.5"
                  >
                    <span>Brief Us on this Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. CANDIDATES SECTION */}
        <section id="candidates" className="scroll-mt-32 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E8E6DF]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-1">
                Executive Candidate Advocacy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F172A]">
                For Senior Leaders &amp; Specialists
              </h2>
            </div>
            <Link
              href="/careers"
              className="btn-human-outline !py-2.5 !px-5 !text-xs self-start sm:self-auto"
            >
              Explore Curated Openings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidateServices.map((service, idx) => (
              <div
                key={idx}
                className="editorial-card p-8 border border-[#E8E6DF] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#059669] font-display">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E8E6DF]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E6DF]">
                  <Link
                    href={`/contact?type=candidate&service=${encodeURIComponent(service.serviceName)}`}
                    className="text-xs font-bold text-[#059669] hover:text-[#095952] transition-colors flex items-center gap-1.5"
                  >
                    <span>Confidential Candidate Registration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BESPOKE STRATEGY BANNER */}
        <div className="editorial-card-dark p-8 sm:p-14 text-center max-w-4xl mx-auto rounded-xl">
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
            Need a Bespoke Recruitment Strategy?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Our Senior Managing Partners are available for confidential consultations to structure custom executive campaigns or leadership advisory.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Advisory"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-human-gold !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Consult via WhatsApp Partner Desk</span>
            </a>
            <Link
              href="/contact"
              className="btn-human-outline !py-3.5 !px-8 !text-xs !bg-transparent !text-white !border-white/30 hover:!bg-white hover:!text-[#0F172A]"
            >
              <span>Structured Intake Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
