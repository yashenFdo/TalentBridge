import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[640px] h-[calc(100vh-80px)] max-h-[880px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.58)), url('/images/hero-bg.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 py-20">
          <div className="max-w-[720px] text-left">
            <span className="block text-[13px] font-semibold uppercase tracking-[6px] text-[#DCEAF2] mb-4">
              Recruitment &amp; Talent Solutions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal text-white leading-[1.12] tracking-normal mb-6">
              The Right Talent.
              <br />
              The Right Direction.
            </h1>
            <p className="text-base sm:text-lg font-light text-white/85 leading-relaxed max-w-[600px] mb-10">
              Talent Bridge is a recruitment and talent solutions company focused on connecting
              businesses with the right talent and individuals with the right career opportunities.
              We aim to make recruitment simple, reliable and people-focused by creating meaningful
              connections between employers and candidates.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=employer"
                className="btn-primary !py-4 !px-10 !text-[13px] !tracking-[3px]"
              >
                <span className="relative z-10 flex items-center gap-2">Hire Talent</span>
              </Link>
              <Link
                href="/careers"
                className="btn-outline !py-4 !px-10 !text-[13px] !tracking-[3px] !border-white/80 !text-white hover:!bg-white hover:!text-[#1A1A1A] hover:!border-white"
              >
                <span className="relative z-10 flex items-center gap-2">Find Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO DISTINCT PERSPECTIVES */}
      <section className="bg-[#FAF9F6] py-[100px] border-b border-[#E2ECF2]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Two Distinct Perspectives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              Connecting Ambition with Opportunity
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              Whether you are building a leadership team or taking the next decisive step in your career,
              Talent Bridge provides structured, human-centered recruitment solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
            {/* For Employers */}
            <div className="bg-white p-10 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  For Organizations &amp; Founders
                </span>
                <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#1A1A1A] mb-4">
                  Hire Exceptional Talent
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm sm:text-[15px] leading-relaxed mb-8">
                  Build durable, high-impact teams with thoroughly screened and culturally vetted candidates
                  without draining your internal resources.
                </p>
                <div className="w-[40px] h-[1px] bg-[#2E6F95]/40 mb-6" aria-hidden="true" />
                <ul className="space-y-3.5 mb-10">
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Targeted talent sourcing mapped to your role specifications</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Rigorous multi-stage qualification and background verification</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Executive search, specialist hiring, and flexible talent advisory</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#E2ECF2]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  href="/contact?type=employer"
                  className="btn-primary !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
                >
                  <span className="relative z-10 flex items-center gap-2">Hire Talent</span>
                </Link>
                <Link href="/services#employers" className="text-link-cta">
                  <span>Employer Services</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* For Candidates */}
            <div className="bg-white p-10 sm:p-12 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  For Professionals &amp; Leaders
                </span>
                <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#1A1A1A] mb-4">
                  Find the Right Direction
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm sm:text-[15px] leading-relaxed mb-8">
                  Take the next decisive step in your career with confidential advocacy, direct employer
                  introductions, and personalized placement guidance.
                </p>
                <div className="w-[40px] h-[1px] bg-[#2E6F95]/40 mb-6" aria-hidden="true" />
                <ul className="space-y-3.5 mb-10">
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Direct introductions to hiring decision-makers across leading firms</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>100% confidential candidate representation with zero applicant fees</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4A4A] font-light">
                    <span className="w-4 h-4 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Strategic interview preparation, resume advisory, and offer guidance</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#E2ECF2]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  href="/careers"
                  className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
                >
                  <span className="relative z-10 flex items-center gap-2">Find Opportunities</span>
                </Link>
                <Link href="/services#jobseekers" className="text-link-cta">
                  <span>Candidate Services</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS OF EXPERTISE (SOLUTIONS MATRIX) */}
      <section className="bg-white py-[100px] border-b border-[#E2ECF2]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Areas of Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              Talent Solutions &amp; Advisory
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              We provide disciplined, agile recruitment capabilities designed to solve complex staffing requirements
              and elevate executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Employer Solution
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Recruitment &amp; Talent Sourcing
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  End-to-end talent discovery across diverse industries and functional areas to pinpoint top-tier candidates.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#employers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Employer Solution
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Candidate Screening
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  Thorough multi-stage qualification, technical checks, behavioral assessment, and background verification.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#employers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Employer Solution
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Executive / Specialist Recruitment
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  Discreet, high-impact headhunting for C-suite leaders, senior directors, and niche technical specialists.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#employers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF9F6] p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Candidate Advisory
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Career Opportunities
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  Access curated job openings across reputable organizations aligned with your skills and long-term ambitions.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#jobseekers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FAF9F6] p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Candidate Advisory
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Candidate Registration
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  Join our exclusive talent pool to receive proactive job alerts matching your unique profile and expertise.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#jobseekers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FAF9F6] p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                  Candidate Advisory
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-3">
                  Job Matching
                </h3>
                <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-6">
                  Personalized matching considering technical fit, corporate culture, compensation, and career growth potential.
                </p>
              </div>
              <div className="pt-5 border-t border-[#E2ECF2]/60">
                <Link href="/services#jobseekers" className="text-link-cta">
                  <span>Learn More</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">View All Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY (4-STAGE PROCESS) */}
      <section className="bg-[#FAF9F6] py-[100px] border-b border-[#E2ECF2]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
              A Disciplined Four-Stage Process
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
              We eliminate ambiguity and hiring friction through a structured recruitment framework
              engineered for precision and retention.
            </p>
          </div>

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
                We dive deep into the specific role criteria, team dynamics, business goals, culture, and candidate
                expectations to establish a clear search profile.
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

          <div className="mt-16 text-center">
            <Link
              href="/how-it-works"
              className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">Explore Full Methodology</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE TALENT BRIDGE STANDARD (WHY US) */}
      <section className="bg-[#111] text-white py-[100px] border-b border-[#E2ECF2]/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-16 text-center mx-auto max-w-3xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#DCEAF2]">
              The Talent Bridge Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-white">
              Why Leading Firms Partner with Us
            </h2>
            <div className="w-[60px] h-[1px] my-5 bg-[#DCEAF2]/60 mx-auto" aria-hidden="true" />
            <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-slate-300">
              Recruitment is not a transaction—it is an enduring bridge between business ambition and exceptional human potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-[#1C1C1C] p-8 border border-white/10 hover:border-[#2E6F95]/50 transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#DCEAF2] block mb-4">01</span>
                <h3 className="font-serif text-xl font-normal text-white mb-3">Precision Over Volume</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  We prioritize calibrated matches that align with culture, leadership style, and technical benchmarks rather than flooding inboxes with resumes.
                </p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] p-8 border border-white/10 hover:border-[#2E6F95]/50 transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#DCEAF2] block mb-4">02</span>
                <h3 className="font-serif text-xl font-normal text-white mb-3">Both Sides of the Bridge</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  We take the time to deeply understand both the organizational growth strategy and the candidate’s authentic career trajectory.
                </p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] p-8 border border-white/10 hover:border-[#2E6F95]/50 transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#DCEAF2] block mb-4">03</span>
                <h3 className="font-serif text-xl font-normal text-white mb-3">Absolute Discretion</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Confidential executive search protocols and secure candidate representation with complete transparency at every milestone.
                </p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] p-8 border border-white/10 hover:border-[#2E6F95]/50 transition-all duration-400 ease-in-out flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#DCEAF2] block mb-4">04</span>
                <h3 className="font-serif text-xl font-normal text-white mb-3">Long-Term Retention</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Our placements result in higher employee engagement, reduced turnover, and enduring organizational value.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-light text-slate-300 text-center sm:text-left">
              Discover our complete recruitment philosophy, four quality standards, and leadership vision.
            </p>
            <Link
              href="/why-us"
              className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px] !border-white/40 !text-white hover:!bg-white hover:!text-[#1A1A1A] hover:!border-white"
            >
              <span className="relative z-10 flex items-center gap-2">Read Our Philosophy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA SECTION */}
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
  );
}
