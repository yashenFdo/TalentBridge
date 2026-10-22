import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, UserCheck, Check } from "lucide-react";

export function SplitPerspective() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Two Distinct Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-4 tracking-tight">
            Connecting Ambition with Opportunity
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Recruitment isn&apos;t a transactional trade; it is the deliberate convergence of organizational ambition and personal potential.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Organizations & Founders */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all relative flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg tracking-wider uppercase">
                  For Organizations & Founders
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
                Hire Exceptional Talent
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Scale with certainty. We partner with founders, executives, and HR leaders to identify, vet, and secure mission-critical personnel without straining internal teams.
              </p>

              <div className="space-y-4 mb-10 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Capabilities:
                </h4>
                <ul className="space-y-3.5">
                  {[
                    "Target candidate mapping customized to your exact technical and cultural requirements.",
                    "Multi-stage screening covering technical proficiency, leadership maturity, and reference validation.",
                    "Specialized practice covering executive search, confidential mandates, and technical roles."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link 
                href="/contact?type=employer" 
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Hire Talent Now</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Professionals & Leaders */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all relative flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg tracking-wider uppercase border border-blue-100">
                  For Professionals & Leaders
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
                Find the Right Direction
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Navigate your career trajectory with complete confidentiality. We provide honest career advisory, direct introductions to executive decision-makers, and zero applicant fees.
              </p>

              <div className="space-y-4 mb-10 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Capabilities:
                </h4>
                <ul className="space-y-3.5">
                  {[
                    "Direct access to unadvertised leadership mandates and growth-stage opportunities.",
                    "Confidential representation with complete transparency prior to resume dispatch.",
                    "Comprehensive interview briefing, compensation benchmarking, and offer negotiation support."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link 
                href="/careers" 
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Find Opportunities</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
