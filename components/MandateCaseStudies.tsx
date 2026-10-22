"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Building2, Quote } from "lucide-react";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  client: string;
  daysToOffer: string;
  retentionOutcome: string;
  context: string;
  challenge: string;
  solution: string;
  quote: string;
  author: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    tag: "FinTech & Digital Banking",
    title: "Group Chief Technology Officer (CTO) Appointment",
    client: "Tier-1 Regional Digital Financial Services Conglomerate",
    daysToOffer: "18 Days",
    retentionOutcome: "100% (24 Months Active)",
    context:
      "A fast-scaling regional financial technology group required an experienced CTO to direct core banking cloud migration and oversee a 140+ person distributed engineering department.",
    challenge:
      "Candidates on public job boards lacked the requisite depth in Central Bank regulatory frameworks and microservices scalability. The search required absolute discretion to prevent market speculation.",
    solution:
      "Talent Bridge deployed our proprietary passive mapping protocol, confidentially identifying 38 diaspora and domestic technology leaders. Within 14 days, a calibrated shortlist of three executives was presented.",
    quote:
      "Talent Bridge operates unlike any agency we have encountered in Asia. They delivered a transformative technology leader in three weeks where previous headhunters failed for nine months.",
    author: "Chairman of the Board & Nominations Committee",
  },
  {
    id: "cs-2",
    tag: "Conglomerate Succession",
    title: "Managing Director & CEO Board Appointment",
    client: "Publicly Listed Export & Industrial Manufacturing Enterprise",
    daysToOffer: "26 Days",
    retentionOutcome: "100% (36 Months Active)",
    context:
      "A venerable listed industrial group with $80M annual turnover required an executive successor to take over corporate leadership from the retiring founder.",
    challenge:
      "The successor needed to combine international ESG export familiarity with empathetic respect for long-tenured organizational culture and complex family board dynamics.",
    solution:
      "We executed an institutional board search mandate under strict non-disclosure. We calibrated candidates on psychological adaptability and strategic vision, presenting two validated candidates with comprehensive dossiers.",
    quote:
      "The cultural alignment was uncanny. Talent Bridge understood our founder's legacy and board sensitivities with exceptional maturity.",
    author: "Senior Independent Non-Executive Director",
  },
  {
    id: "cs-3",
    tag: "Commercial Banking & Risk",
    title: "Chief Risk Officer (CRO) Regulatory Search",
    client: "Licensed Commercial Banking Institution",
    daysToOffer: "22 Days",
    retentionOutcome: "100% (18 Months Active)",
    context:
      "A commercial bank undergoing balance-sheet restructuring required a seasoned Chief Risk Officer approved under Central Bank fit-and-proper guidelines.",
    challenge:
      "Extremely small candidate universe with zero tolerance for compliance oversights. Potential candidates were passive and heavily compensated with deferred equity.",
    solution:
      "Our Financial Services Practice conducted blind soundings across domestic and GCC banking networks, securing an accomplished CRO repatriated from a top UAE retail bank.",
    quote:
      "Discretion, speed, and regulatory credibility. Talent Bridge exceeded our board expectations at every phase of the mandate.",
    author: "Managing Director & CEO",
  },
  {
    id: "cs-4",
    tag: "AI & Global Engineering",
    title: "VP of Enterprise AI Architecture",
    client: "US-Backed Enterprise Analytics Scaleup",
    daysToOffer: "15 Days",
    retentionOutcome: "100% (12 Months Active)",
    context:
      "A Silicon Valley scaleup launching a 200-engineer Colombo engineering center needed a high-caliber technical leader to direct distributed LLM development.",
    challenge:
      "Intense competition from global capability centers for top-tier software architects capable of interfacing directly with US enterprise clients.",
    solution:
      "We engaged our private Engineering Leadership Network, conducting rigorous systems architecture assessments and culture calibrations.",
    quote:
      "Talent Bridge understands software engineering at an architectural level. Their shortlist was spotless.",
    author: "Chief Product Officer, California HQ",
  },
];

export function MandateCaseStudies() {
  const [selectedId, setSelectedId] = useState<string>("cs-1");
  const current = CASE_STUDIES.find((c) => c.id === selectedId) || CASE_STUDIES[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-sm">
      {/* Category Pills Switcher */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-slate-200">
        {CASE_STUDIES.map((cs) => {
          const isSelected = cs.id === current.id;
          return (
            <button
              key={cs.id}
              type="button"
              onClick={() => setSelectedId(cs.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#059669] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>{cs.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-8 items-start">
        {/* Left Case Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
              {current.client}
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {current.title}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 px-5 bg-[#F8FAFC] rounded-2xl border border-slate-200">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                Search Protocol
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0F172A]">Retained Search</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                Time to Signed Offer
              </span>
              <span className="text-xs sm:text-sm font-black text-[#059669]">{current.daysToOffer}</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                Audited Retention
              </span>
              <span className="text-xs sm:text-sm font-black text-[#059669]">{current.retentionOutcome}</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
            <div>
              <strong className="text-slate-900 block text-xs font-bold uppercase tracking-wider mb-1">
                The Mandate Context:
              </strong>
              <p>{current.context}</p>
            </div>
            <div>
              <strong className="text-slate-900 block text-xs font-bold uppercase tracking-wider mb-1">
                The Strategic Challenge:
              </strong>
              <p>{current.challenge}</p>
            </div>
            <div>
              <strong className="text-slate-900 block text-xs font-bold uppercase tracking-wider mb-1">
                The Talent Bridge Execution:
              </strong>
              <p>{current.solution}</p>
            </div>
          </div>
        </div>

        {/* Right Quote Card (Luxury Midnight Navy Box) */}
        <div className="lg:col-span-4 flex flex-col justify-between p-7 rounded-2xl bg-[#0A192F] text-white shadow-lg border border-slate-800">
          <div className="space-y-4">
            <Quote className="w-8 h-8 text-[#10B981]" />
            <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-light">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>
          <div className="pt-5 mt-6 border-t border-slate-800">
            <span className="block text-xs font-bold text-white uppercase tracking-wider">
              {current.author}
            </span>
            <span className="block text-[11px] text-emerald-400 font-medium mt-0.5">
              Verified Client Reference
            </span>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs text-slate-500 font-normal">
          Interested in learning how we would calibrate an executive search for your organization?
        </span>
        <Link
          href="/contact?type=employer"
          className="text-xs font-bold text-[#059669] hover:text-[#047857] transition-colors flex items-center gap-1.5"
        >
          <span>Request Confidential Search Assessment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
