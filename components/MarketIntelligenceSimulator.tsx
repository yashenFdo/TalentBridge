"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      retentionRate: "98.6%",
      compensationBand: "LKR 15M – 25M / Executive Package",
      keyCompetencies: ["Enterprise ERP / Cloud Migration", "Cybersecurity Governance", "AI Implementation"],
      recentMandate: "Group CIO for 14-subsidiary retail & logistics PLC",
    },
    cfo: {
      name: "Diversified Conglomerates",
      scarcity: "High (84% Passive)",
      timeToShortlist: "15 Days",
      retentionRate: "99.1%",
      compensationBand: "LKR 15M – 28M / Executive Package",
      keyCompetencies: ["Debt Refinancing & Treasury", "Public Market Governance", "M&A Integration"],
      recentMandate: "Group CFO for multinational tea & export conglomerate",
    },
  },
  tech_ai: {
    ceo: {
      name: "Software Products & AI Scaling",
      scarcity: "Extreme (93% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.9%",
      compensationBand: "USD 70k – 150k + Stock Options",
      keyCompetencies: ["International GTM Execution", "Product-Led Growth", "US/EU Enterprise Sales"],
      recentMandate: "CEO for AI SaaS platform backed by Silicon Valley seed fund",
    },
    cto: {
      name: "Software Products & AI Scaling",
      scarcity: "Extreme (96% Passive)",
      timeToShortlist: "11 Days",
      retentionRate: "98.4%",
      compensationBand: "USD 55k – 120k + Equity",
      keyCompetencies: ["Distributed Systems", "Large-Language Models (LLM)", "Staff Engineering Leadership"],
      recentMandate: "VP of AI & Engineering for healthcare analytics scaleup",
    },
    cfo: {
      name: "Software Products & AI Scaling",
      scarcity: "High (85% Passive)",
      timeToShortlist: "14 Days",
      retentionRate: "98.7%",
      compensationBand: "USD 45k – 90k + Equity",
      keyCompetencies: ["SaaS Metric Governance (NDR, CAC)", "Delaware Flip & Cross-Border Tax", "Cap Table Management"],
      recentMandate: "Finance VP for B2B API infrastructure firm",
    },
  },
};

export function MarketIntelligenceSimulator() {
  const [sector, setSector] = useState<"fintech" | "enterprise" | "tech_ai">("fintech");
  const [role, setRole] = useState<"ceo" | "cto" | "cfo">("cto");

  const current = INTELLIGENCE_DATA[sector][role];

  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-sm">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
            Executive Telemetry &bull; 2026 Calibrated Benchmarks
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Market Intelligence &amp; Search Calibrator
          </h3>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
          Colombo &bull; Regional APAC Data
        </span>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                onClick={() => setSector(s.id as "fintech" | "enterprise" | "tech_ai")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                  sector === s.id
                    ? "bg-[#059669] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                onClick={() => setRole(r.id as "ceo" | "cto" | "cfo")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                  role === r.id
                    ? "bg-[#059669] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calibrated Telemetry Data Grid */}
      <div className="bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Market Scarcity
            </span>
            <span className="font-display text-xl sm:text-2xl font-black text-[#0F172A] block">
              {current.scarcity}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Shortlist Turnaround
            </span>
            <span className="font-display text-xl sm:text-2xl font-black text-[#059669] block">
              {current.timeToShortlist}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Verified 12-Mo. Retention
            </span>
            <span className="font-display text-xl sm:text-2xl font-black text-[#059669] block">
              {current.retentionRate}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Replacement Shield
            </span>
            <span className="font-display text-xl sm:text-2xl font-black text-[#0F172A] block">
              90 Days Guaranteed
            </span>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Estimated Executive Compensation Band:
            </span>
            <span className="font-display text-sm sm:text-base font-extrabold text-[#0F172A]">
              {current.compensationBand}
            </span>
          </div>
          <div className="text-xs text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 font-medium">
            &bull; Verified Mandate: {current.recentMandate}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          * Derived from active Talent Bridge search mandates and audited regional executive placements.
        </div>
        <Link
          href={`/contact?type=employer&sector=${sector}&role=${role}`}
          className="btn-brand-green !py-3 !px-7 !text-xs self-start sm:self-auto flex items-center gap-2"
        >
          <span>Retain Search for this Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
