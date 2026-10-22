import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  Users2,
  Lock,
  HeartHandshake,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Talent Bridge Executive Recruitment & Advisory",
  description:
    "We elevate recruitment from a transactional numbers game into a disciplined, high-retention human capital partnership.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Fiduciary Integrity",
      color: "text-blue-600 bg-blue-50 border-blue-200",
      text: "Unwavering transparency and strict ethical conduct in every candidate calibration and executive search mandate.",
    },
    {
      icon: Award,
      title: "Executive Precision",
      color: "text-sky-600 bg-sky-50 border-sky-200",
      text: "Setting industry-leading standards in candidate qualification, background validation, and cultural fit.",
    },
    {
      icon: HeartHandshake,
      title: "People-First Advocacy",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      text: "Treating organizational trajectories and individual executive careers with equal weight and respect.",
    },
    {
      icon: Lock,
      title: "Absolute Discretion",
      color: "text-amber-600 bg-amber-50 border-amber-200",
      text: "Safeguarding company strategies and candidate identities behind rigorous non-disclosure agreements.",
    },
    {
      icon: Target,
      title: "Retention Accountability",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      text: "Staying engaged through 30, 60, and 90 days with our 12-month candidate replacement shield.",
    },
    {
      icon: TrendingUp,
      title: "Bilateral Growth",
      color: "text-teal-600 bg-teal-50 border-teal-200",
      text: "Empowering enterprises to dominate their markets while propelling senior leaders to new career heights.",
    },
  ];

  const milestones = [
    {
      phase: "01",
      badge: "Inception",
      title: "Foundation & Fiduciary Vision",
      text: "Established Talent Bridge in Colombo with a single mission: eradicate resume spam and bring executive-grade search rigor to Sri Lanka and regional markets.",
    },
    {
      phase: "02",
      badge: "Expansion",
      title: "Cross-Industry Practice Architecture",
      text: "Expanded specialized practices across FinTech, Enterprise Software, Banking, Conglomerates, and Healthcare.",
    },
    {
      phase: "03",
      badge: "Innovation",
      title: "Proprietary 4-Stage Search Engine",
      text: "Formalized our rigorous 360° candidate assessment protocol and 12-month retention guarantee.",
    },
    {
      phase: "04",
      badge: "Present",
      title: "Global Diaspora & Cross-Border Hubs",
      text: "Connecting premier international enterprises with top-tier Sri Lankan leadership talent across APAC, EMEA, and the US.",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-pill mb-3">Our Origin &amp; Doctrine</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Building Trusted Bridges Between Talent &amp; Opportunity
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We founded Talent Bridge to transform executive recruitment from a transactional numbers game into a disciplined, high-retention human capital partnership.
          </p>
        </div>

        {/* Origin & Doctrine Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          <div className="lg:col-span-7 glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                The Founding Thesis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Recruitment Redefined Around People, Purpose, and Precision.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Traditional recruitment too often treats hiring as a high-volume spam game: forwarding unvetted resumes, matching basic keywords, and ignoring cultural dynamics. When placements fail, companies lose critical momentum and leaders suffer career disruption.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Talent Bridge was engineered as an antidote. We operate with the discretion of an executive search firm, the agility of a modern talent partner, and the accountability of a fiduciary advisor.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-600">
                <Sparkles className="w-4 h-4" /> Colombo HQ
              </span>
              <span>•</span>
              <span>Serving Enterprises &amp; Leaders Globally</span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-12 border border-slate-800 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Our North Star</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                &ldquo;The Right Talent. The Right Direction.&rdquo;
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Every executive search mandate we undertake is guided by a singular conviction: placement is only successful when the candidate thrives, adds measurable enterprise value, and achieves enduring career fulfillment.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-white">98%</div>
                <div className="text-xs text-slate-400">12-Mo. Retention</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-sky-400">100%</div>
                <div className="text-xs text-slate-400">Fiduciary Vetted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Strategic Trajectory
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              &ldquo;To stand as the definitive human capital bridge connecting high-growth enterprises with elite leadership, establishing Sri Lanka as a premier executive talent hub for global enterprise.&rdquo;
            </p>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              Daily Execution
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              &ldquo;To pair ambitious organizations with high-impact professionals through transparent, calibrated headhunting, comprehensive leadership vetting, and lasting bilateral advocacy.&rdquo;
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill mb-3">Institutional Principles</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The 6 Core Values
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Non-negotiable ethical guidelines that govern every recommendation, interview debrief, and candidate interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${val.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {val.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones of Evolution */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill mb-3">Evolution Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Milestones of Growth
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Our continuous trajectory from founding conviction to trusted executive search advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.phase}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-blue-600">{m.phase}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center pt-8 border-t border-slate-200/80">
          <Link
            href="/contact"
            className="btn-executive-primary !py-4 !px-10 !text-sm inline-flex items-center gap-2 group"
          >
            <span>Start a Confidential Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
