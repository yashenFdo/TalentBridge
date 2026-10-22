"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck, Clock, TrendingUp, DollarSign } from "lucide-react";

interface SectorData {
  name: string;
  scarcity: string;
  timeToShortlist: string;
  retentionRate: string;
  compensationBand: string;
  keyCompetencies: string[];
  recentMandate: string;
}

const INTELLIGENCE_DATA: Record<string, Record<string, SectorData>> = {
  fintech: {
    ceo: {
      name: "FinTech & Digital Banking",
      scarcity: "Very High (89% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "99.2%",
      compensationBand: "LKR 18M – 32M+ / USD 80k – 140k + Equity",
      keyCompetencies: ["Regulatory Compliance (CBSL)", "Cross-border Payments", "Venture Capital Structuring"],
      recentMandate: "Group CEO for regional digital payments platform (Placed in 19 days)",
    },
    cto: {
      name: "FinTech & Digital Banking",
      scarcity: "Extreme (94% Passive)",
      timeToShortlist: "12 Days",
      retentionRate: "98.8%",
      compensationBand: "LKR 14M – 26M / USD 65k – 110k + Equity",
      keyCompetencies: ["Cloud Architecture (AWS/GCP)", "Core Banking Integration", "Zero-Trust Security"],
      recentMandate: "CTO for digital neo-bank (Repatriated from Singapore)",
    },
    cfo: {
      name: "FinTech & Digital Banking",
      scarcity: "High (82% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.5%",
      compensationBand: "LKR 12M – 22M / USD 55k – 90k",
      keyCompetencies: ["Audit & IFRS Standards", "Series B/C Fundraising", "Treasury & FX Management"],
      recentMandate: "CFO for payment gateway institution (CBSL Approved)",
    },
  },
  enterprise: {
    ceo: {
      name: "Diversified Conglomerates",
      scarcity: "High (86% Passive)",
      timeToShortlist: "16 Days",
      retentionRate: "99.0%",
      compensationBand: "LKR 20M – 38M+ / Executive Package",
      keyCompetencies: ["P&L Ownership (> $50M)", "Board Governance", "Capital Allocation"],
      recentMandate: "Managing Director for listed export manufacturing group",
    },
    cto: {
      name: "Diversified Conglomerates",
      scarcity: "Very High (91% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.0%",
      compensationBand: "LKR 12M – 24M / High Performance Bonus",
      keyCompetencies: ["Enterprise ERP (SAP S/4)", "Cybersecurity Governance", "Data Platforms"],
      recentMandate: "Chief Information Officer for multinational conglomerate",
    },
    cfo: {
      name: "Diversified Conglomerates",
      scarcity: "High (84% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.9%",
      compensationBand: "LKR 15M – 28M / Executive Bonus",
      keyCompetencies: ["Cross-Border Tax", "Syndicated Debt Financing", "M&A Integration"],
      recentMandate: "Group Finance Director for retail & FMCG conglomerate",
    },
  },
  tech_ai: {
    ceo: {
      name: "Software & AI Scaleups",
      scarcity: "Very High (88% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.5%",
      compensationBand: "USD 90k – 160k + Significant Equity",
      keyCompetencies: ["US/UK Go-To-Market", "Product-Led Growth", "Venture Board Management"],
      recentMandate: "CEO for enterprise AI developer (UK Diaspora Repatriated)",
    },
    cto: {
      name: "Software & AI Scaleups",
      scarcity: "Extreme (96% Passive)",
      timeToShortlist: "10 Days",
      retentionRate: "99.4%",
      compensationBand: "USD 70k – 130k + High Equity",
      keyCompetencies: ["LLM Inference Architecture", "Distributed Systems", "Principal Engineering"],
      recentMandate: "Head of AI & Engineering for B2B SaaS platform",
    },
    cfo: {
      name: "Software & AI Scaleups",
      scarcity: "High (80% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.1%",
      compensationBand: "USD 50k – 90k + Stock Options",
      keyCompetencies: ["SaaS Metrics (CAC/LTV/ARR)", "US Tax Compliance", "Cap-Table Architecture"],
      recentMandate: "VP Finance for venture-funded analytics firm",
    },
  },
};

export function MarketIntelligenceSimulator() {
  const [sector, setSector] = useState<"fintech" | "enterprise" | "tech_ai">("fintech");
  const [role, setRole] = useState<"ceo" | "cto" | "cfo">("cto");

  const current = INTELLIGENCE_DATA[sector][role];

  return (
    <div className="editorial-card p-6 sm:p-10 border border-[#E8E6DF] bg-white shadow-sm">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E6DF]">
        <div>
          <div className="editorial-kicker mb-1">
            <span>Executive Telemetry &bull; 2026 Benchmarks</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0A1118]">
            Market Intelligence &amp; Search Calibrator
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0D7A70] bg-[#0D7A70]/10 px-3 py-1.5 rounded">
          <span className="w-2 h-2 rounded-full bg-[#0D7A70]" />
          <span>Colombo &bull; Regional APAC Data</span>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2.5">
            Select Practice Sector
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "fintech", label: "FinTech & Banking" },
              { id: "enterprise", label: "Conglomerates" },
              { id: "tech_ai", label: "Software & AI" },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSector(s.id as any)}
                className={`py-2.5 px-3 rounded text-xs font-semibold text-center transition-all ${
                  sector === s.id
                    ? "bg-[#0A1118] text-white shadow-sm"
                    : "bg-[#F7F6F1] text-[#4A5568] hover:bg-[#EAE8E0] hover:text-[#0A1118]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2.5">
            Executive Mandate Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "ceo", label: "CEO / MD" },
              { id: "cto", label: "CTO / Head of Tech" },
              { id: "cfo", label: "CFO / Finance Head" },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id as any)}
                className={`py-2.5 px-3 rounded text-xs font-semibold text-center transition-all ${
                  role === r.id
                    ? "bg-[#0A1118] text-white shadow-sm"
                    : "bg-[#F7F6F1] text-[#4A5568] hover:bg-[#EAE8E0] hover:text-[#0A1118]"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calibrated Telemetry Data Grid */}
      <div className="bg-[#FAF9F6] p-6 rounded-lg border border-[#E8E6DF] mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#718096] mb-1">
              Market Scarcity
            </span>
            <span className="font-serif text-lg font-bold text-[#0A1118]">
              {current.scarcity}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#718096] mb-1">
              Shortlist Turnaround
            </span>
            <span className="font-serif text-lg font-bold text-[#0D7A70]">
              {current.timeToShortlist}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#718096] mb-1">
              Verified 12-Mo. Retention
            </span>
            <span className="font-serif text-lg font-bold text-[#C59B27]">
              {current.retentionRate}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#718096] mb-1">
              Replacement Shield
            </span>
            <span className="font-serif text-lg font-bold text-[#0A1118]">
              365 Days Guaranteed
            </span>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[#E8E6DF] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#718096] block mb-1">
              Estimated Executive Compensation Band:
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#0A1118]">
              {current.compensationBand}
            </span>
          </div>
          <div className="text-xs text-[#4A5568] italic bg-white px-3.5 py-2 rounded border border-[#E8E6DF]">
            &bull; Verified Mandate: {current.recentMandate}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs text-[#718096]">
          * All data derived from active Talent Bridge mandates and audited regional executive placements.
        </div>
        <Link
          href={`/contact?type=employer&sector=${sector}&role=${role}`}
          className="btn-human-primary !py-3.5 !px-7 !text-xs self-start sm:self-auto"
        >
          <span>Retain Search for this Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
