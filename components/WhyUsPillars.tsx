import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Target, HeartHandshake, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const pillarIcons = [Target, HeartHandshake, ShieldCheck, Award];

export function WhyUsPillars() {
  return (
    <section id="why-us" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            The Talent Bridge Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-4 tracking-tight">
            Engineered for Outcomes, Not Resumes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Why leading enterprises and high-impact leaders choose our human capital advisory over transactional recruiters.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONFIG.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i] || ShieldCheck;
            return (
              <div 
                key={i} 
                className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>The Talent Bridge Quality Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
