import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  Users2,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Methodology | The 4-Stage Search Engine | Talent Bridge",
  description:
    "Explore Talent Bridge's disciplined 4-stage placement protocol engineered for high velocity, cultural resonance, and 12-month executive retention.",
};

export default function HowItWorksPage() {
  const stages = [
    {
      step: "01",
      name: "Discovery & Calibration",
      subtitle: "Avatar Synthesis & Role Calibration",
      summary:
        "We dissect role criteria, organizational dynamics, compensation benchmarks, and executive aspirations to create a high-fidelity candidate avatar.",
      employerPoints: [
        "In-depth briefing with hiring committee & executive leadership",
        "Comprehensive competency matrix & behavioral trait mapping",
        "Compensation benchmarking against current APAC/Global market data",
        "Timeline definition with SLA commitment for shortlist delivery",
      ],
      candidatePoints: [
        "Confidential career discovery and trajectory analysis",
        "Evaluation of leadership style and workplace cultural preferences",
        "Clarification of compensation requirements and equity expectations",
      ],
      sla: "Completed in Days 1–3",
    },
    {
      step: "02",
      name: "Deep Sourcing & 360° Auditing",
      subtitle: "Passive Market Headhunting",
      summary:
        "Proactive candidate outreach combined with multi-stage competency interviews, reference audits, and confidential opportunity briefings.",
      employerPoints: [
        "Target candidate mapping across non-advertised passive talent pools",
        "Multi-stage behavioral and competency evaluations",
        "Confidential 360° reference checks and credential certification",
        "Cultural resonance scoring against team dynamics",
      ],
      candidatePoints: [
        "Confidential opportunity review with complete transparency",
        "Executive expectations briefing prior to client introduction",
        "Explicit candidate consent confirmation before dossier release",
      ],
      sla: "Shortlist Delivered in 10–14 Days",
    },
    {
      step: "03",
      name: "Direct Facilitation & Evaluation",
      subtitle: "Calibrated Dossier Presentation",
      summary:
        "Delivery of detailed candidate dossiers with evaluative notes, interview facilitation with senior decision-makers, and prompt debriefs.",
      employerPoints: [
        "Presentation of calibrated candidate dossiers with interview notes",
        "Seamless interview coordination and scheduling logistics",
        "Structured interview scorecards and post-round stakeholder debriefs",
      ],
      candidatePoints: [
        "Direct interview facilitation with key C-Suite decision-makers",
        "Comprehensive preparation debriefs before each interview stage",
        "Timely, transparent feedback after every stakeholder conversation",
      ],
      sla: "Iterative Feedback within 24 Hours",
    },
    {
      step: "04",
      name: "Offer Structuring & Retention",
      subtitle: "Bilateral Closing & 12-Month Shield",
      summary:
        "Facilitating fair compensation structuring, transition guidance, and milestone-based 30, 60, and 90-day retention reviews with a replacement guarantee.",
      employerPoints: [
        "Offer package negotiation and counter-offer risk mitigation",
        "Formal reference and background documentation finalization",
        "Scheduled 30, 60, and 90-day onboarding reviews with our 12-month guarantee",
      ],
      candidatePoints: [
        "Executive compensation and equity package negotiation advocacy",
        "Resignation guidance and counter-offer mitigation advisory",
        "Ongoing milestone support during executive onboarding",
      ],
      sla: "12-Month Replacement Retention Shield",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-pill mb-3">Proprietary Search Engine</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            How Talent Bridge Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We eliminate hiring friction and guesswork through a disciplined, four-stage methodology
            engineered for high velocity and sustained 12-month retention.
          </p>
        </div>

        {/* 4 Stages Detailed Stack */}
        <div className="space-y-12 max-w-5xl mx-auto mb-24">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                    {stage.step}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                      Phase {idx + 1} • {stage.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {stage.name}
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{stage.sla}</span>
                </div>
              </div>

              <p className="mt-6 text-slate-600 text-base leading-relaxed font-normal max-w-3xl">
                {stage.summary}
              </p>

              {/* Bilateral Deliverables Grid */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                {/* For Employers */}
                <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-3">
                    What Organizations Receive
                  </span>
                  <div className="space-y-2.5">
                    {stage.employerPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* For Candidates */}
                <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-200/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-3">
                    How Candidates Are Advocated For
                  </span>
                  <div className="space-y-2.5">
                    {stage.candidatePoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Experience Precision Recruitment?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            Brief our managing partners today to initiate your calibrated search protocol.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="btn-executive-primary !py-3.5 !px-8 !text-xs flex items-center gap-2 group"
            >
              <span>Retain Search Mandate</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/careers"
              className="btn-executive-glass !py-3.5 !px-8 !text-xs flex items-center gap-2"
            >
              <span>Explore Active Roles</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
