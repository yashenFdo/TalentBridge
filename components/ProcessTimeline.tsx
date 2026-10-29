import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function ProcessTimeline() {
  return (
    <section id="methodology" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
            Our Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-4 tracking-tight">
            A Disciplined Four-Stage Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            We mitigate hiring risk through a structured, predictable process built on rigorous calibration and constant communication.
          </p>
        </div>

        {/* 4-Stage Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_CONFIG.methodology.map((phase, idx) => (
            <div 
              key={idx}
              className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Stage Counter and Step Connector */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-blue-600/20 group-hover:text-blue-600 font-mono transition-colors">
                    {phase.step}
                  </span>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                    Stage {phase.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {phase.name}
                </h3>
                <div className="text-xs font-semibold text-blue-600 mb-4">
                  {phase.subtitle}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {phase.summary}
                </p>

                {/* Dual Focus Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">For Organizations:</span>
                    <p className="text-slate-600 leading-normal">{phase.employerFocus}</p>
                  </div>
                  <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/60">
                    <span className="font-bold text-blue-900 block mb-1">For Professionals:</span>
                    <p className="text-blue-800 leading-normal">{phase.candidateFocus}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Bottom Anchor */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-950">
                Need a Custom Search Mandate or Succession Timeline?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We calibrate our sprints to match your executive board and hiring deadlines.
              </p>
            </div>
          </div>
          <Link
            href="/contact?type=employer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-950 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            Schedule Calibration Call
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
