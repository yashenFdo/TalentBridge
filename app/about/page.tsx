"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Award, 
  Sparkles, 
  Building, 
  Compass, 
  Phone, 
  MessageCircle, 
  Lock, 
  ChevronRight,
  TrendingUp,
  Target
} from "lucide-react";

export default function AboutPage() {
  const [activeApproachTab, setActiveApproachTab] = useState<"organizations" | "candidates">("organizations");

  const objectives = [
    {
      metric: "98%",
      label: "12-Month Retention Shield",
      desc: "Appointing leaders who remain, integrate, and drive long-term enterprise value.",
    },
    {
      metric: "14 Days",
      label: "Calibrated Shortlist SLA",
      desc: "Delivering thoroughly screened, high-match executive slates in record time.",
    },
    {
      metric: "100%",
      label: "Fiduciary Discretion",
      desc: "Absolute non-disclosure protection for corporate strategy and candidate privacy.",
    },
    {
      metric: "0 Rs.",
      label: "Zero Candidate Fees",
      desc: "Completely free career advocacy, profile registration, and guidance for candidates.",
    },
  ];

  const coreValues = [
    {
      num: "01",
      title: "Fiduciary Integrity",
      text: "Unwavering transparency and strict ethical conduct in every candidate recommendation and executive search mandate.",
    },
    {
      num: "02",
      title: "Executive Precision",
      text: "Setting industry-leading standards in candidate qualification, competency audits, and cultural fit verification.",
    },
    {
      num: "03",
      title: "People-First Advocacy",
      text: "Treating organizational trajectories and individual candidate careers with equal weight, dignity, and care.",
    },
    {
      num: "04",
      title: "Absolute Discretion",
      text: "Safeguarding company strategies and candidate identities behind rigorous bilateral non-disclosure agreements.",
    },
    {
      num: "05",
      title: "Retention Accountability",
      text: "Staying engaged beyond placement with dedicated 30, 60, and 90-day onboarding checkpoints and replacement shields.",
    },
    {
      num: "06",
      title: "Bilateral Growth",
      text: "Empowering businesses to achieve strategic dominance while propelling talented professionals to new career horizons.",
    },
  ];

  const milestones = [
    {
      phase: "01",
      badge: "Inception",
      title: "Foundation & Fiduciary Vision",
      text: "Established Talent Bridge in Colombo with a single mission: eradicate resume spam and bring executive search rigor and integrity to Sri Lanka.",
    },
    {
      phase: "02",
      badge: "Expansion",
      title: "Multi-Practice Architecture",
      text: "Built specialized recruitment practices across Banking, FinTech, Enterprise Software, Engineering, Conglomerates, and Healthcare.",
    },
    {
      phase: "03",
      badge: "Methodology",
      title: "Proprietary 360° Search Engine",
      text: "Formalized our rigorous competency audit protocol, behavioral assessments, and 12-month retention assurance.",
    },
    {
      phase: "04",
      badge: "Global Reach",
      title: "Diaspora & Cross-Border Hubs",
      text: "Connecting premier international enterprises with top-tier Sri Lankan leadership talent across APAC, EMEA, and the US.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. CINEMATIC HERO SECTION WITH PROFESSIONAL BACKGROUND IMAGE */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200">
        {/* Suitable Background Image Reflecting Professional Identity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt="Talent Bridge Modern Corporate Headquarters"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Midnight Obsidian & Emerald Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#071324]/96 to-[#0A192F]/88" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-6 text-white">
            
            {/* Company Logo & Tagline */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white/95 px-4 py-2 rounded-2xl backdrop-blur-md shadow-md inline-flex items-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Talent Bridge Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-emerald-400 font-semibold tracking-wide text-xs sm:text-sm">
                The Right Talent. The Right Direction.
              </p>
            </div>

            {/* Bold Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Building Trusted Bridges Between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#059669]">
                Visionary Businesses
              </span>{" "}
              &amp; Exceptional Talent.
            </h1>

            {/* About Us Paragraph Describing Company, Purpose, & Services */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Talent Bridge is an executive recruitment and strategic human capital consultancy established in Colombo, Sri Lanka. Our foundational purpose is to replace transactional, impersonal recruitment with high-retention, disciplined talent partnerships. We deliver tailored talent solutions spanning Executive &amp; Board Search, Tech &amp; AI Leadership Sourcing, 360° Candidate Audits, Enterprise Project Staffing, and Global Diaspora Recruitment—ensuring businesses appoint leaders who propel long-term success while candidates access transformative career opportunities.
            </p>

            {/* Fast Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/services/hiring-talent"
                className="btn-brand-green !py-3 !px-6 !text-xs sm:!text-sm font-bold flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Hiring Talent Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/finding-opportunities"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Finding Career Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL MANIFESTO SECTION */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
                Our Founding Conviction
              </p>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Recruitment Redefined Around <span className="text-[#059669]">People, Purpose, &amp; Precision</span>.
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Traditional recruitment too often treats human potential as a high-volume resume game: forwarding unvetted profiles, matching basic keywords, and ignoring the nuanced dynamics of leadership and culture. When placements fail, organizations lose critical momentum, and executives suffer career disruption.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Talent Bridge was engineered as an antidote. We operate with the discretion of an executive search firm, the agility of a modern talent partner, and the accountability of a fiduciary advisor. We do not rest until every mandate results in durable mutual growth.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#071324] to-[#0A192F] text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                    Our North Star
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    &ldquo;The Right Talent. The Right Direction.&rdquo;
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    Every executive search mandate we undertake is guided by a singular conviction: placement is only successful when the candidate thrives, adds measurable enterprise value, and achieves enduring career fulfillment.
                  </p>

                  <div className="pt-6 border-t border-slate-700/80 grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-display text-3xl font-extrabold text-[#34D399] block">98%</span>
                      <span className="text-xs text-slate-300 font-medium">12-Month Retention</span>
                    </div>
                    <div>
                      <span className="font-display text-3xl font-extrabold text-amber-400 block">365 Days</span>
                      <span className="text-xs text-slate-300 font-medium">Replacement Shield</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEDICATED MISSION & BILATERAL APPROACH (INTERACTIVE TABS) */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
              Bilateral Mandate
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              OUR MISSION &amp; <span className="text-[#059669]">APPROACH</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Explore how our methodology simultaneously serves business growth and candidate advancement.
            </p>

            {/* Interactive Switcher */}
            <div className="pt-4 inline-flex items-center p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveApproachTab("organizations")}
                className={`py-2.5 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeApproachTab === "organizations"
                    ? "bg-[#059669] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Connecting Businesses with Talent</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveApproachTab("candidates")}
                className={`py-2.5 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeApproachTab === "candidates"
                    ? "bg-[#059669] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Helping Candidates Find Opportunities</span>
              </button>
            </div>
          </div>

          {/* Dynamic Tab Card */}
          {activeApproachTab === "organizations" ? (
            <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 sm:p-14 shadow-lg shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] block">
                  For Organizations &amp; Boards
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Connecting Ambitious Businesses With Qualified Leadership
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  We partner with enterprise boards, multinational conglomerates, and fast-scaling innovators to fill mission-critical vacancies. Rather than circulating unsolicited resumes, we conduct exhaustive market intelligence, calibrated headhunting, and multi-stage 360° competency evaluations.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Passive candidate mapping accessing 80%+ unadvertised industry talent.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Rigorous reference audits and credential validation under strict NDA.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Guaranteed 12-month retention and replacement warranty.
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/hiring-talent"
                    className="btn-brand-green !py-3.5 !px-8 !text-xs font-bold inline-flex items-center gap-2 group"
                  >
                    <span>Explore Hiring Talent Practices</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 space-y-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                  Enterprise Client Guarantees
                </span>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">14-Day Delivery SLA</span>
                    <span className="text-[11px] text-slate-600">Calibrated first shortlist delivered within 14 business days.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">365-Day Replacement Shield</span>
                    <span className="text-[11px] text-slate-600">Complimentary replacement search if candidate leaves within 12 months.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">100% Strict NDA Protection</span>
                    <span className="text-[11px] text-slate-600">Total institutional discretion for confidential C-suite mandates.</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 sm:p-14 shadow-lg shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706] block">
                  For Professionals &amp; Candidates
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Empowering Candidates To Find Defining Opportunities
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  We empower candidates to take deliberate, rewarding steps in their professional careers. Through our confidential candidate registry, jobseekers and senior executives receive direct visibility to exclusive, unadvertised mandates across top regional and international employers.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Confidential profile registration with 100% data protection.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Executive trajectory coaching, interview preparation, and offer advisory.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                      Completely free candidate service with zero placement cuts or fees.
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/services/finding-opportunities"
                    className="btn-brand-navy !py-3.5 !px-8 !text-xs font-bold inline-flex items-center gap-2 group"
                  >
                    <span>Explore Candidate Opportunities</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 space-y-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                  Candidate Advocacy Promises
                </span>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">Zero Candidate Fees</span>
                    <span className="text-[11px] text-slate-600">All advisory, screening, and placement services are 100% free.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">Zero Employer Alerts</span>
                    <span className="text-[11px] text-slate-600">Your current organization is never alerted or contacted.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">Direct Decision-Maker Advocacy</span>
                    <span className="text-[11px] text-slate-600">Introductions presented directly to CEOs and Board Committees.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. MEASURABLE STRATEGIC OBJECTIVES */}
      <section className="py-20 bg-[#071324] text-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400">
              Accountability &amp; Standards
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              OUR STRATEGIC <span className="text-[#34D399]">OBJECTIVES</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Clear institutional commitments we hold ourselves accountable to every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all shadow-lg"
              >
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#10B981] mb-2 tracking-tight">
                  {obj.metric}
                </div>
                <div className="text-sm font-bold text-white mb-2">{obj.label}</div>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
              Foundational Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              INSTITUTIONAL <span className="text-[#059669]">PRINCIPLES</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Non-negotiable ethical standards that govern every candidate vetting session, salary calibration, and executive placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <span className="font-display text-xl font-extrabold text-[#059669] block mb-2">
                  {val.num}
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MILESTONES OF EVOLUTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#059669]">
              Our Trajectory
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              MILESTONES OF <span className="text-[#059669]">GROWTH</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              Our continuous progression from Colombo inception to regional executive authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.phase}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-extrabold text-[#059669]">{m.phase}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{m.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-[#071324] text-white text-center">
        <div className="max-w-2xl mx-auto px-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
            Direct Access
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
            Ready to Partner With Talent Bridge?
          </h2>
          <p className="text-sm text-slate-300 font-normal">
            Whether you are looking to hire transformative leadership or navigate your next career breakthrough, our partners are here to assist.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-brand-green !py-3.5 !px-8 !text-sm font-bold inline-flex items-center gap-2"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!%20I%20would%20like%20to%20learn%20more%20about%20your%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl text-sm font-bold transition-all"
            >
              WhatsApp Partner Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
