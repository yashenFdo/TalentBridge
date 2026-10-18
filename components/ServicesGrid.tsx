import React from "react";
import Link from "next/link";
import { 
  Search, 
  ShieldCheck, 
  Target, 
  Briefcase, 
  Users2, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldCheck,
  Target,
  Briefcase,
  Users2,
  Sparkles,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Areas of Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 mt-4 tracking-tight">
              Comprehensive Talent Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Disciplined recruitment capabilities engineered to solve complex hiring needs and accelerate career progression.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 gap-1.5 group"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-400 font-mono">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4 tracking-wide">
                    {service.subtitle}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {service.category === "employer" ? "For Enterprise" : service.category === "candidate" ? "For Leaders" : "Bilateral"}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
