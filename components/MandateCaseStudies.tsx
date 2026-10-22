"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Building2 } from "lucide-react";

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
    daysToOffer: "15 Days",
    retentionOutcome: "100% (18 Months Active)",
    context:
      "A licensed banking institution required an authoritative CRO with Central Bank of Sri Lanka (CBSL) standing to restructure enterprise risk, credit underwriting, and treasury compliance.",
    challenge:
      "Qualified individuals in this niche are extremely well-compensated and rarely explore vacancies. The search required confidential peer referencing and bespoke package restructuring.",
    solution:
      "Through our Private Executive Network, we quietly engaged a seasoned risk leader who was not on the open market, facilitating confidential discussions that concluded in a seamless transition.",
    quote:
      "Direct, transparent, and completely free of resume spam. Talent Bridge is the gold standard for executive search in Colombo.",
    author: "Chief Executive Officer & Board Member",
  },
];

export function MandateCaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  return (
    <div className="editorial-card p-6 sm:p-12 border border-[#E8E6DF] bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E6DF]">
        <div>
          <div className="editorial-kicker mb-2">
            <span>Verified Track Record &bull; Client Case Files</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#0A1118]">
            Executive Mandates Delivered with Precision
          </h3>
        </div>
        <div className="text-xs text-[#718096] italic">
          * Mandate identities anonymized under institutional NDA protocols.
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pt-6 pb-8 border-b border-[#E8E6DF]">
        {CASE_STUDIES.map((cs, idx) => (
          <button
            key={cs.id}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2.5 rounded text-xs font-bold tracking-wide transition-all ${
              activeTab === idx
                ? "bg-[#0A1118] text-white shadow-sm"
                : "bg-[#F7F6F1] text-[#4A5568] hover:bg-[#EAE8E0] hover:text-[#0A1118]"
            }`}
          >
            {cs.tag}
          </button>
        ))}
      </div>

      {/* Active Case Study Detail */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7A70] block mb-1">
              {current.client}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#0A1118]">
              {current.title}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 px-5 bg-[#FAF9F6] rounded-lg border border-[#E8E6DF]">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                Search Protocol
              </span>
              <span className="text-sm font-bold text-[#0A1118]">Retained Executive Mandate</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                Time to Signed Offer
              </span>
              <span className="text-sm font-bold text-[#0D7A70]">{current.daysToOffer}</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                Audited Retention
              </span>
              <span className="text-sm font-bold text-[#C59B27]">{current.retentionOutcome}</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#4A5568] leading-relaxed">
            <div>
              <strong className="text-[#0A1118] block text-xs uppercase tracking-wider mb-1">
                The Mandate Context:
              </strong>
              <p>{current.context}</p>
            </div>
            <div>
              <strong className="text-[#0A1118] block text-xs uppercase tracking-wider mb-1">
                The Strategic Challenge:
              </strong>
              <p>{current.challenge}</p>
            </div>
            <div>
              <strong className="text-[#0A1118] block text-xs uppercase tracking-wider mb-1">
                The Talent Bridge Execution:
              </strong>
              <p>{current.solution}</p>
            </div>
          </div>
        </div>

        {/* Right Quote Card */}
        <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#F5F4EF] rounded-lg border border-[#E8E6DF]">
          <div>
            <span className="font-serif text-5xl text-[#C59B27] block leading-none mb-3">
              &ldquo;
            </span>
            <blockquote className="font-serif italic text-base sm:text-lg text-[#0A1118] leading-snug mb-6">
              {current.quote}
            </blockquote>
          </div>
          <div className="pt-4 border-t border-[#E8E6DF]">
            <span className="block text-xs font-bold text-[#0A1118] uppercase tracking-wider">
              {current.author}
            </span>
            <span className="block text-[11px] text-[#718096]">Verified Client Reference</span>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-6 border-t border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs text-[#718096]">
          Interested in learning how we would calibrate an executive search for your organization?
        </span>
        <Link
          href="/contact?type=employer"
          className="text-xs font-bold text-[#0D7A70] hover:text-[#095952] transition-colors flex items-center gap-1.5"
        >
          <span>Request Confidential Search Assessment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
