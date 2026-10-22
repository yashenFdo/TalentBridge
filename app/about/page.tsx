import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Talent Bridge Executive Recruitment & Advisory",
  description:
    "We elevate recruitment from a transactional numbers game into a disciplined, high-retention human capital partnership.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Fiduciary Integrity",
      text: "Unwavering transparency and strict ethical conduct in every candidate recommendation and executive search mandate.",
    },
    {
      title: "Executive Precision",
      text: "Setting industry-leading standards in candidate qualification, background validation, and cultural fit.",
    },
    {
      title: "People-First Advocacy",
      text: "Treating organizational trajectories and individual executive careers with equal weight and respect.",
    },
    {
      title: "Absolute Discretion",
      text: "Safeguarding company strategies and candidate identities behind rigorous non-disclosure agreements.",
    },
    {
      title: "Retention Accountability",
      text: "Staying engaged through 30, 60, and 90 days with our 365-day candidate replacement guarantee.",
    },
    {
      title: "Bilateral Growth",
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
    <div className="pt-32 pb-24 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
            Building Trusted Bridges Between Talent &amp; Opportunity
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            We founded Talent Bridge to transform executive recruitment from a transactional numbers game into a disciplined, high-retention human capital partnership.
          </p>
        </div>

        {/* Origin & Doctrine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-7 editorial-card p-8 sm:p-12 border border-[#E8E6DF] bg-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
                The Founding Conviction
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F172A] leading-snug">
                Recruitment Redefined Around People, Purpose, and Precision.
              </h2>
              <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal">
                Traditional recruitment too often treats hiring as a high-volume spam game: forwarding unvetted resumes, matching basic keywords, and ignoring cultural dynamics. When placements fail, companies lose critical momentum and leaders suffer career disruption.
              </p>
              <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal">
                Talent Bridge was engineered as an antidote. We operate with the discretion of an executive search firm, the agility of a modern talent partner, and the accountability of a fiduciary advisor.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E8E6DF] text-xs font-semibold text-[#718096]">
              Colombo Headquarters &bull; Operating Across APAC, EMEA &amp; US
            </div>
          </div>

          <div className="lg:col-span-5 editorial-card-stone p-8 sm:p-12 border border-[#E8E6DF] flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] block">
                Our North Star
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#0F172A] leading-snug">
                &ldquo;The Right Talent. The Right Direction.&rdquo;
              </h3>
              <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed font-normal">
                Every executive search mandate we undertake is guided by a singular conviction: placement is only successful when the candidate thrives, adds measurable enterprise value, and achieves enduring career fulfillment.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E8E6DF] grid grid-cols-2 gap-4">
              <div>
                <span className="font-display text-2xl font-bold text-[#0F172A] block">98%</span>
                <span className="text-xs text-[#718096]">12-Mo. Retention</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-[#059669] block">365 Days</span>
                <span className="text-xs text-[#718096]">Replacement Shield</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="editorial-card p-8 sm:p-12 border border-[#E8E6DF] bg-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-2 block">
              Strategic Trajectory
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#0F172A] mb-3">Our Vision</h3>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal">
              &ldquo;To stand as the definitive human capital bridge connecting high-growth enterprises with elite leadership, establishing Sri Lanka as a premier executive talent hub for global enterprise.&rdquo;
            </p>
          </div>

          <div className="editorial-card p-8 sm:p-12 border border-[#E8E6DF] bg-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-2 block">
              Daily Execution
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#0F172A] mb-3">Our Mission</h3>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed font-normal">
              &ldquo;To pair ambitious organizations with high-impact professionals through transparent, calibrated headhunting, comprehensive leadership vetting, and lasting bilateral advocacy.&rdquo;
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F172A]">
              Institutional Principles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4A5568]">
              Non-negotiable ethical guidelines that govern every recommendation, interview debrief, and candidate interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="editorial-card p-8 border border-[#E8E6DF] bg-white"
              >
                <span className="font-display text-xl font-bold text-[#D97706] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones of Evolution */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F172A]">
              Milestones of Growth
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4A5568]">
              Our continuous trajectory from founding conviction to trusted executive search advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.phase}
                className="editorial-card p-6 sm:p-8 border border-[#E8E6DF] bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-[#059669]">{m.phase}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E8E6DF]">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{m.title}</h3>
                <p className="text-xs text-[#4A5568] leading-relaxed font-normal">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center pt-8 border-t border-[#E8E6DF]">
          <Link
            href="/contact"
            className="btn-human-primary !py-4 !px-10 !text-sm inline-flex items-center gap-2 group"
          >
            <span>Start a Confidential Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
