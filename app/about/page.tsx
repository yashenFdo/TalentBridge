import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Users2, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "About Us | Talent Bridge Human Capital Advisory",
  description:
    "Learn about Talent Bridge's founding vision, leadership team, ethical standard, and commitment to high-touch bilateral recruitment.",
};

const leadershipTeam = [
  {
    name: "Dinesh Samarawickrama",
    title: "Managing Partner & Head of Executive Search",
    bio: "Over 18 years in executive headhunting and human capital advisory across APAC and South Asia. Formerly led regional leadership mandates for global financial and enterprise tech firms.",
    focus: "C-Suite Search & Board Advisory",
  },
  {
    name: "Anoushka Perera",
    title: "Partner — Technology & High-Growth Practices",
    bio: "Specializes in placing engineering leaders, product visionaries, and growth architects into venture-backed tech companies and enterprise transformations.",
    focus: "Technical Leadership & Product",
  },
  {
    name: "Kavinda Fernando",
    title: "Principal — Organizational Culture & Calibration",
    bio: "Pioneered Talent Bridge's bilateral culture-calibration methodology. Focused on retention analytics, organizational design, and psychometric alignment.",
    focus: "Culture Calibration & Assessment",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              About Talent Bridge
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              Bridging organizational vision with exceptional leadership.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Talent Bridge was established on a single uncompromising thesis: recruitment is not a numbers game or a resume distribution service. It is a strategic advisory discipline requiring deep bilateral advocacy, calibrated vetting, and mutual accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles & Founding Vision */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Founding Vision
              </span>
              <h2 className="text-3xl font-bold text-slate-950 mt-3 tracking-tight">
                Why We Exist
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                In an era where automated platforms flood hiring managers with hundreds of generic resumes, finding real leaders has never been harder. 
              </p>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Talent Bridge cuts through this noise by restoring craft, discretion, and human calibration to executive search.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Calibrated Precision",
                  desc: "We accept only a limited number of concurrent mandates, ensuring each client receives deep partner focus and rigorous candidate vetting."
                },
                {
                  icon: ShieldCheck,
                  title: "Absolute Discretion",
                  desc: "Strict non-disclosure protocols protect organizational plans, sensitive replacement searches, and executive career privacy at all times."
                },
                {
                  icon: Users2,
                  title: "Bilateral Alignment",
                  desc: "We represent both enterprise goals and candidate trajectories with equal weight. High retention happens only when both parties succeed."
                },
                {
                  icon: Award,
                  title: "The 90-Day Guarantee",
                  desc: "Every executive placement is backed by our continuous check-in protocol at 30, 60, and 90 days to guarantee mutual long-term alignment."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Senior Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-3 tracking-tight">
              Advisors Driven by Outcomes
            </h2>
            <p className="text-slate-600 text-base mt-4">
              Our partners bring decades of combined human capital, executive search, and enterprise leadership experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white font-bold flex items-center justify-center text-xl mb-6 shadow-sm">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-2">
                    {leader.focus}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-4">
                    {leader.title}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Talent Bridge Partner</span>
                  <span className="font-semibold text-slate-900">Colombo, LK</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Experience calibrated recruitment.
              </h2>
              <p className="text-slate-400 text-base">
                Connect directly with a managing partner to discuss leadership requirements or explore confidential mandates.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                Schedule an Advisory Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
