import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Building Trusted Bridges Between Talent & Opportunity",
  description:
    "We were founded to elevate recruitment from a transactional numbers game into a disciplined, people-centered partnership.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Integrity",
      text: "Unwavering honesty, transparency, and ethical conduct in every candidate recommendation and business partnership.",
    },
    {
      title: "Professionalism",
      text: "Setting high standards of precision, confidentiality, timeliness, and excellence in all our talent engagements.",
    },
    {
      title: "People First",
      text: "Recognizing that behind every resume and vacancy are human aspirations, livelihoods, and corporate futures.",
    },
    {
      title: "Trust",
      text: "Building long-term, dependable relationships anchored in consistency, clarity, and dependable delivery.",
    },
    {
      title: "Commitment",
      text: "Dedicated persistence until the ideal match is made, supporting both parties through onboarding and beyond.",
    },
    {
      title: "Growth",
      text: "Empowering businesses to expand their competitive edge and enabling professionals to achieve new career heights.",
    },
  ];

  const milestones = [
    {
      phase: "Phase 1",
      badge: "Established",
      title: "Foundation & Vision",
      text: "Established Talent Bridge with a dedicated mission to transform recruitment into a transparent, people-centric partnership.",
    },
    {
      phase: "Phase 2",
      badge: "Growth",
      title: "Cross-Industry Expansion",
      text: "Broadened talent networks across Technology, Finance, Engineering, Healthcare, and Executive Management sectors.",
    },
    {
      phase: "Phase 3",
      badge: "Innovation",
      title: "Precision Matching Platform",
      text: "Refined our proprietary candidate screening methodology combining human insight with structured skill verification.",
    },
    {
      phase: "Present & Future",
      badge: "Ongoing",
      title: "Empowering Next-Gen Workforce",
      text: "Continuing to bridge aspirations and opportunities with expanded regional reach and specialized executive search.",
    },
  ];

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12">
        {/* Title */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Our Story &amp; Purpose
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            Building Trusted Bridges Between Talent &amp; Opportunity
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            We were founded to elevate recruitment from a transactional numbers game into a disciplined,
            people-centered partnership.
          </p>
        </div>

        {/* Origin & Tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95]">
              Our Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] leading-tight">
              Recruitment Redefined Around People, Purpose, and Precision.
            </h2>
            <div className="w-[50px] h-[1px] bg-[#2E6F95]" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              Talent Bridge was founded on a simple yet profound realization: traditional recruitment too often treats
              hiring as a transactional numbers game. Resumes are forwarded without context, cultural alignment is
              overlooked, and long-term retention suffers.
            </p>
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              We established Talent Bridge to serve as an authentic bridge—an active, empathetic connector that takes the
              time to comprehend the strategic trajectory of growing organizations while nurturing the career milestones
              of ambitious professionals.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#1A1A1A] text-white p-10 sm:p-12 shadow-soft relative">
              <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#DCEAF2] mb-4">
                Our Anchor Tagline
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug mb-6">
                &ldquo;The Right Talent. The Right Direction.&rdquo;
              </p>
              <div className="w-[40px] h-[1px] bg-[#2E6F95] mb-6" />
              <p className="text-slate-300 font-light text-sm leading-relaxed">
                Every placement we facilitate is guided by one north star: making sure the talent is qualified,
                motivated, and pointed in the right direction.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#FAF9F6] p-10 sm:p-12 border border-[#E2ECF2] shadow-soft">
            <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-3">
              Where We Are Headed
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
              Our Vision
            </h3>
            <div className="w-[40px] h-[1px] bg-[#2E6F95]/40 mb-4" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              &ldquo;To become a trusted bridge between talent and opportunity, helping businesses grow and individuals
              build meaningful careers.&rdquo;
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-10 sm:p-12 border border-[#E2ECF2] shadow-soft">
            <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-3">
              What We Do Daily
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
              Our Mission
            </h3>
            <div className="w-[40px] h-[1px] bg-[#2E6F95]/40 mb-4" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              &ldquo;To connect the right talent with the right opportunities through a professional, transparent and
              people-focused recruitment process.&rdquo;
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              Core Values
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              The non-negotiable principles that govern every candidate interaction, client recommendation, and recruitment decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between"
              >
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                    Guiding Principle
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-3">
                    {val.title}
                  </h3>
                  <div className="w-[30px] h-[1px] bg-[#2E6F95]/40 mb-4" />
                  <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones of Growth */}
        <div className="mb-20">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              Milestones of Growth
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              Our steady evolution from ambitious vision to dependable recruitment and talent solutions partner.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto">
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 border border-[#E2ECF2] shadow-soft flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-6"
                >
                  <div className="sm:w-1/4">
                    <span className="font-serif text-2xl font-normal text-[#2E6F95] block">
                      {m.phase}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#999] block mt-1">
                      {m.badge}
                    </span>
                  </div>
                  <div className="sm:w-3/4 sm:pl-8 sm:border-l sm:border-[#E2ECF2]/70">
                    <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start a Conversation CTA */}
        <div className="text-center pt-8 border-t border-[#E2ECF2]">
          <Link
            href="/contact"
            className="btn-primary !py-4 !px-10 !text-[13px] !tracking-[3px]"
          >
            <span className="relative z-10 flex items-center gap-2">Start a Conversation with Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
