import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Users, Briefcase, Award, Sparkles, Building, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Talent Bridge — The Right Talent. The Right Direction.",
  description:
    "Learn about Talent Bridge: our identity, background, mission, objectives, and dedicated approach to connecting businesses with elite talent and empowering candidates to find career opportunities.",
};

export default function AboutPage() {
  const objectives = [
    {
      metric: "98%",
      label: "12-Month Retention Guarantee",
      desc: "Placing leaders who remain, thrive, and drive long-term institutional value.",
    },
    {
      metric: "14 Days",
      label: "Calibrated Shortlist Speed",
      desc: "Delivering thoroughly screened, high-match candidates in record time.",
    },
    {
      metric: "100%",
      label: "Fiduciary Discretion",
      desc: "Absolute non-disclosure protection for corporate strategy and candidate privacy.",
    },
    {
      metric: "0 Rs.",
      label: "Zero Candidate Fees",
      desc: "Free career advocacy, profile registration, and guidance for all candidates.",
    },
  ];

  const coreValues = [
    {
      title: "Fiduciary Integrity",
      text: "Unwavering transparency and strict ethical conduct in every candidate recommendation and executive search mandate.",
    },
    {
      title: "Executive Precision",
      text: "Setting industry-leading standards in candidate qualification, competency audits, and cultural fit verification.",
    },
    {
      title: "People-First Advocacy",
      text: "Treating organizational trajectories and individual candidate careers with equal weight, dignity, and care.",
    },
    {
      title: "Absolute Discretion",
      text: "Safeguarding company strategies and candidate identities behind rigorous bilateral non-disclosure agreements.",
    },
    {
      title: "Retention Accountability",
      text: "Staying engaged beyond placement with dedicated 30, 60, and 90-day onboarding checkpoints and replacement shields.",
    },
    {
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
      {/* 1. HERO SECTION WITH PROFESSIONAL BACKGROUND IMAGE */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200">
        {/* Suitable Background Image Reflecting Professional Identity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt="Talent Bridge Modern Corporate Headquarters"
            fill
            className="object-cover"
            priority
          />
          {/* Midnight Obsidian & Emerald Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/96 via-[#071324]/90 to-[#0A192F]/88" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-6 text-white">
            {/* Company Logo & Tagline Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white/95 px-4 py-2 rounded-xl backdrop-blur-md shadow-md inline-flex items-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Talent Bridge Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                <span>The Right Talent. The Right Direction.</span>
              </div>
            </div>

            {/* Main Heading (Bold Text) */}
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

      {/* 2. DEDICATED MISSION & BILATERAL APPROACH SECTION */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Dual-Perspective Mandate</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              OUR MISSION &amp; <span className="text-[#059669]">BILATERAL APPROACH</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              True recruitment success only occurs when both sides of the bridge flourish: organizations secure leadership that generates exponential value, and candidates take steps that elevate their professional trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Column A: Connecting Businesses with Talent */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-1">
                    For Businesses &amp; Organizations
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Connecting Ambitious Businesses With Qualified Talent
                  </h3>
                </div>
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
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200">
                <Link
                  href="/services/hiring-talent"
                  className="btn-brand-green !py-3 !px-6 !text-xs font-bold inline-flex items-center gap-2 group"
                >
                  <span>Explore Hiring Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Column B: Helping Candidates Find Opportunities */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D97706] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] block mb-1">
                    For Professionals &amp; Candidates
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Empowering Candidates To Find Defining Opportunities
                  </h3>
                </div>
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
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200">
                <Link
                  href="/services/finding-opportunities"
                  className="btn-brand-navy !py-3 !px-6 !text-xs font-bold inline-flex items-center gap-2 group"
                >
                  <span>Explore Candidate Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEASURABLE STRATEGIC OBJECTIVES */}
      <section className="py-20 bg-[#071324] text-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>Accountability &amp; Standards</span>
            </div>
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
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

      {/* 4. CORE VALUES SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Foundational Values</span>
            </div>
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
                className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <span className="font-display text-lg font-extrabold text-[#059669] block mb-2">
                  0{idx + 1}
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

      {/* 5. MILESTONES OF EVOLUTION */}
      <section className="py-20 bg-[#FFFFFF] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span>Our Trajectory</span>
            </div>
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
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs"
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

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Ready to Partner With Talent Bridge?
          </h2>
          <p className="text-sm text-slate-700 mb-8 font-normal">
            Whether you are looking to hire transformative leadership or navigate your next career breakthrough, our partners are here to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-xs"
            >
              WhatsApp Partner Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
