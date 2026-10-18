import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Talent Bridge Recruitment Methodology",
  description:
    "Explore Talent Bridge's disciplined, 4-phase placement methodology engineered for precision, cultural calibration, and high-retention executive placements.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-16">
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Our Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            How Talent Bridge Works
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            We eliminate guesswork and recruitment friction through a disciplined, four-phase placement
            framework engineered for precision and long-term organizational success.
          </p>
        </div>

        <div className="mb-20">
          <div className="space-y-10 max-w-[1000px] mx-auto">
            {/* Stage 01 */}
            <div className="bg-white p-8 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#E2ECF2]/70">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#2E6F95] select-none">
                    01
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-1">
                      Discovery &amp; Calibration
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                      Understand the Requirement
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[#4A4A4A] font-light text-[15px] leading-relaxed max-w-[850px]">
                We dive deep into the specific role criteria, team dynamics, business goals, culture,
                and candidate expectations to establish a clear search profile.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2ECF2]/50">
                <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2]/70">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
                    For Employers
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    In-depth role briefing, skill matrix mapping, and hiring timeline planning.
                  </p>
                </div>
                <div className="bg-[#EEF4F8]/40 p-6 border border-[#DCEAF2]/50">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1F4E6B] mb-2">
                    For Candidates
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Understanding your career history, strengths, aspirations, and workplace preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-white p-8 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#E2ECF2]/70">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#2E6F95] select-none">
                    02
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-1">
                      Talent Discovery &amp; Rigorous Vetting
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                      Source &amp; Screen Suitable Candidates
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[#4A4A4A] font-light text-[15px] leading-relaxed max-w-[850px]">
                Leveraging proprietary talent networks and multi-stage screening, we evaluate competence,
                cultural alignment, and career track records.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2ECF2]/50">
                <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2]/70">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
                    For Employers
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Targeted sourcing, structured interviews, and verified candidate profiles.
                  </p>
                </div>
                <div className="bg-[#EEF4F8]/40 p-6 border border-[#DCEAF2]/50">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1F4E6B] mb-2">
                    For Candidates
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Thorough profile assessment, role match check, and confidential preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-white p-8 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#E2ECF2]/70">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#2E6F95] select-none">
                    03
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-1">
                      Strategic Presentation &amp; Interviews
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                      Connect the Right Candidates with Employers
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[#4A4A4A] font-light text-[15px] leading-relaxed max-w-[850px]">
                We facilitate seamless introductions, coordinated interview rounds, constructive feedback
                loops, and aligned expectations.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2ECF2]/50">
                <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2]/70">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
                    For Employers
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Shortlist presentation with comprehensive candidate insights and interview coordination.
                  </p>
                </div>
                <div className="bg-[#EEF4F8]/40 p-6 border border-[#DCEAF2]/50">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1F4E6B] mb-2">
                    For Candidates
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Direct introductions to hiring decision-makers with comprehensive interview briefing.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-white p-8 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#E2ECF2]/70">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#2E6F95] select-none">
                    04
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-1">
                      Offer Negotiation &amp; Onboarding
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                      Support the Hiring Process
                    </h3>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[#4A4A4A] font-light text-[15px] leading-relaxed max-w-[850px]">
                From offer alignment and contract guidance to post-placement check-ins, we ensure a smooth
                transition and lasting relationship.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2ECF2]/50">
                <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2]/70">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
                    For Employers
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Offer facilitation, reference confirmations, and post-joining retention check-ins.
                  </p>
                </div>
                <div className="bg-[#EEF4F8]/40 p-6 border border-[#DCEAF2]/50">
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1F4E6B] mb-2">
                    For Candidates
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4A4A4A] font-light leading-relaxed">
                    Offer negotiation guidance, transition advisory, and onboarding support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Inquiries Section */}
        <section className="py-[100px] bg-[#FAF9F6] border-b border-[#E2ECF2]">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="bg-[#1A1A1A] text-white p-10 sm:p-16 lg:p-20 shadow-soft relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="block text-[11px] font-semibold uppercase tracking-[4px] text-[#DCEAF2] mb-4">
                  Direct Inquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] text-white mb-6">
                  Let&#39;s Build the Right Bridge for Your Future.
                </h2>
                <div className="w-[60px] h-[1px] bg-[#2E6F95] mb-6" aria-hidden="true" />
                <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
                  Whether you need to brief an executive search or discuss your professional career trajectory,
                  our senior team is here to guide you.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-accent !py-4 !px-10 !text-[13px] !tracking-[3px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">Submit an Inquiry</span>
                  </Link>
                  <a
                    href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge!%20I%20would%20like%20to%20make%20an%20inquiry."
                    className="btn-outline !py-4 !px-10 !text-[13px] !tracking-[3px] !border-white/40 !text-white hover:!bg-white hover:!text-[#1A1A1A] hover:!border-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Chat on WhatsApp (+94 77 000 0000)
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
