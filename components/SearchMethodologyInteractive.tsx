"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Clock, ShieldCheck, ArrowRight, FileCheck, Users, Target, Lock } from "lucide-react";

interface PhaseData {
  number: string;
  name: string;
  timeframe: string;
  focus: string;
  description: string;
  employerDeliverables: string[];
  candidateAdvocacy: string[];
  artifactName: string;
  artifactDesc: string;
}

const PHASES: PhaseData[] = [
  {
    number: "01",
    name: "Discover & Calibrate",
    timeframe: "Days 1 – 3",
    focus: "Avatar Synthesis & Role Calibration",
    description:
      "We immerse ourselves in your corporate strategy, board expectations, team chemistry, and compensation benchmarks to synthesize a calibrated executive avatar.",
    employerDeliverables: [
      "Board & C-Suite hiring committee alignment session",
      "Executive Avatar Specification (Hard skills + Cultural resonance)",
      "Market compensation telemetry across Sri Lanka & Regional diaspora",
      "Confidential search timeline and milestone agreement",
    ],
    candidateAdvocacy: [
      "In-depth career discovery and leadership aspirations analysis",
      "Confidential trajectory planning without public exposure",
      "Mutual confirmation of target compensation & equity parameters",
    ],
    artifactName: "Executive Mandate Calibration Dossier",
    artifactDesc: "A 12-page strategic document defining exact search criteria, cultural non-negotiables, and benchmarked compensation bands.",
  },
  {
    number: "02",
    name: "Passive Headhunting & 360° Auditing",
    timeframe: "Days 4 – 14",
    focus: "Deep Market Mapping & Peer Auditing",
    description:
      "We bypass public job boards entirely. Our partners map and discreetly approach top-performing passive leaders across competing organizations and the global diaspora.",
    employerDeliverables: [
      "Confidential mapping of 30–50 qualified market leaders",
      "Multi-stage behavioral and competency qualification interviews",
      "360-degree blind reference checks with former CEOs and board members",
      "Verification of degrees, directorships, and employment records",
    ],
    candidateAdvocacy: [
      "Complete, transparent opportunity briefing under mutual NDA",
      "Direct answers regarding company financials, runway, and board culture",
      "Zero identity disclosure until explicit candidate authorization is granted",
    ],
    artifactName: "360° Calibrated Candidate Dossier",
    artifactDesc: "Comprehensive profiles containing leadership interview transcripts, blind reference summaries, and psychological agility scores.",
  },
  {
    number: "03",
    name: "Strategic Presentation & Interview Facilitation",
    timeframe: "Days 15 – 21",
    focus: "Frictionless Evaluation & Chemistry",
    description:
      "We present a curated shortlist of 3 to 5 fully vetted, motivated finalists, coordinating strategic interviews and structured debriefing sessions.",
    employerDeliverables: [
      "Curated presentation of shortlisted candidates with comparative scoring",
      "Interview coordination with senior stakeholders and board members",
      "Post-interview debriefs and objective candidate sentiment analysis",
    ],
    candidateAdvocacy: [
      "Direct interview scheduling with executive decision-makers",
      "Bespoke preparation briefings on stakeholder personalities and priorities",
      "Transparent, constructive feedback delivered within 24 business hours",
    ],
    artifactName: "Comparative Evaluation Matrix",
    artifactDesc: "Standardized evaluation scorecards ensuring objective board assessment across technical execution and strategic vision.",
  },
  {
    number: "04",
    name: "Offer Structuring & 365-Day Retention Shield",
    timeframe: "Day 22 – 365",
    focus: "Bilateral Alignment & Retention Stewardship",
    description:
      "We orchestrate win-win compensation structuring, counter-offer mitigation, and maintain milestone stewardship throughout the executive's first full year.",
    employerDeliverables: [
      "Equitable offer formulation, bonus benchmarks, and equity alignment",
      "Resignation risk management and counter-offer neutralization",
      "30, 60, 90-day and 1-year retention reviews with replacement guarantee",
    ],
    candidateAdvocacy: [
      "Confidential package negotiation ensuring fair market value",
      "Executive resignation advisory and smooth transition guidance",
      "Ongoing executive transition coaching and onboarding check-ins",
    ],
    artifactName: "365-Day Fiduciary Retention Guarantee",
    artifactDesc: "Our binding institutional pledge to replace the executive at zero additional search fee should alignment falter within 12 months.",
  },
];

export function SearchMethodologyInteractive() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = PHASES[activePhase];

  return (
    <div className="editorial-card p-6 sm:p-12 border border-[#E8E6DF] bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E6DF]">
        <div>
          <div className="editorial-kicker mb-2">
            <span>Methodology &bull; The 4-Stage Search Protocol</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-[#0F172A]">
            Surgical Precision From Intake to 365-Day Retention
          </h3>
        </div>
        <div className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-3.5 py-1.5 rounded">
          Average Shortlist Delivery: 14 Business Days
        </div>
      </div>

      {/* Stepper Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-8">
        {PHASES.map((p, idx) => (
          <button
            key={p.number}
            type="button"
            onClick={() => setActivePhase(idx)}
            className={`p-4 rounded-lg text-left transition-all border ${
              activePhase === idx
                ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                : "bg-[#F8FAFC] text-[#4A5568] border-[#E8E6DF] hover:bg-[#F0EFEA] hover:text-[#0F172A]"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`font-display text-2xl font-bold ${
                  activePhase === idx ? "text-[#D97706]" : "text-[#718096]"
                }`}
              >
                {p.number}
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  activePhase === idx ? "bg-white/10 text-white" : "bg-[#E8E6DF] text-[#718096]"
                }`}
              >
                {p.timeframe}
              </span>
            </div>
            <span className="block text-xs font-bold truncate">{p.name}</span>
          </button>
        ))}
      </div>

      {/* Active Phase Content */}
      <div className="py-6 space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
              Phase {phase.number} &bull; {phase.focus}
            </span>
          </div>
          <h4 className="font-display text-2xl sm:text-3xl text-[#0F172A] mb-3">
            {phase.name} ({phase.timeframe})
          </h4>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-3xl">
            {phase.description}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8FAFC] p-6 rounded-lg border border-[#E8E6DF]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#059669]" />
              <span>What the Organization Receives:</span>
            </span>
            <div className="space-y-3">
              {phase.employerDeliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#4A5568]">
                  <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-lg border border-[#E8E6DF]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D97706]" />
              <span>How the Candidate is Advocated For:</span>
            </span>
            <div className="space-y-3">
              {phase.candidateAdvocacy.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#4A5568]">
                  <Check className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Deliverable Artifact Box */}
        <div className="p-5 rounded-lg bg-[#F5F4EF] border border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded bg-white border border-[#E8E6DF] text-[#0F172A] flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5 text-[#059669]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096] block">
                Official Stage Deliverable
              </span>
              <span className="text-sm font-bold text-[#0F172A] block">
                {phase.artifactName}
              </span>
              <p className="text-xs text-[#4A5568] mt-0.5">{phase.artifactDesc}</p>
            </div>
          </div>
          <Link
            href="/contact?type=employer"
            className="text-xs font-bold text-[#059669] hover:text-[#095952] whitespace-nowrap self-start sm:self-auto flex items-center gap-1"
          >
            <span>Retain Protocol</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
