import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us | The Talent Bridge Standard & Philosophy",
  description:
    "Learn why leading enterprises partner with Talent Bridge. We focus on deeply understanding both employer and candidate, prioritizing calibrated suitability over volume.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12">
        {/* Title */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            Why Choose Talent Bridge?
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            We focus on deeply understanding both employer and candidate, prioritizing calibrated
            long-term suitability rather than simply forwarding resumes.
          </p>
        </div>

        {/* Fundamental Difference Box */}
        <div className="bg-[#FAF9F6] p-8 sm:p-14 lg:p-16 border border-[#E2ECF2] shadow-soft mb-20">
          <div className="max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-3">
              The Fundamental Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-6 leading-tight">
              Recruitment is Not a Transaction. It is a Bridge.
            </h2>
            <div className="w-[60px] h-[1px] bg-[#2E6F95] mb-6" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed mb-6">
              When an organization hires hastily, the cost of a mismatch ripples across team productivity,
              culture, and revenue. Conversely, when an executive accepts a role without cultural or
              developmental alignment, their career trajectory stalls.
            </p>
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              At Talent Bridge, we operate at the exact intersection where organizational objectives meet human
              potential. We don&#39;t just forward CVs; we calibrate character, competence, and culture.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-[#E2ECF2]">
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft">
              <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
                For the Employer
              </span>
              <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-3">
                Strategic Talent Acquisition
              </h3>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                We protect your employer brand, optimize hiring manager hours, and introduce leaders who
                accelerate your corporate roadmap.
              </p>
            </div>
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft">
              <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#2E6F95] mb-2">
                For the Candidate
              </span>
              <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-3">
                Career Direction &amp; Advocacy
              </h3>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                We believe professionals deserve respect, transparent timelines, and honest advocacy to
                join organizations where their value is celebrated.
              </p>
            </div>
          </div>
        </div>

        {/* Four Standards */}
        <div className="mb-20">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Our Commitments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              Four Standards That Set Us Apart
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              Our placement methodology is anchored in four operational principles that protect both client
              and candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <span className="font-serif text-3xl font-normal text-[#2E6F95] block mb-3">01</span>
              <h4 className="font-serif text-lg font-normal text-[#1A1A1A] mb-3">
                Thorough Vetting &amp; Calibration
              </h4>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                Multi-stage screening covering technical competency, leadership attributes, past achievements,
                and verified employment references.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <span className="font-serif text-3xl font-normal text-[#2E6F95] block mb-3">02</span>
              <h4 className="font-serif text-lg font-normal text-[#1A1A1A] mb-3">
                High-Precision Shortlists
              </h4>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                We submit only tightly curated candidates who meet or exceed the agreed benchmark, saving
                valuable executive interview hours.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <span className="font-serif text-3xl font-normal text-[#2E6F95] block mb-3">03</span>
              <h4 className="font-serif text-lg font-normal text-[#1A1A1A] mb-3">
                Absolute Discretion &amp; Trust
              </h4>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                Strict confidentiality protocols protecting both sensitive executive searches and candidate
                career transitions.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <span className="font-serif text-3xl font-normal text-[#2E6F95] block mb-3">04</span>
              <h4 className="font-serif text-lg font-normal text-[#1A1A1A] mb-3">
                Post-Placement Stewardship
              </h4>
              <p className="text-[#4A4A4A] font-light text-sm leading-relaxed">
                Scheduled follow-through during the crucial first 90 days to ensure smooth candidate onboarding
                and mutual satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-[#E2ECF2]">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="btn-primary !py-4 !px-10 !text-[13px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">Hire with Talent Bridge</span>
            </Link>
            <Link
              href="/careers"
              className="btn-outline !py-4 !px-10 !text-[13px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">Explore Opportunities</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
