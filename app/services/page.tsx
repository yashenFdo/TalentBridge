import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Specialized Solutions for Employers & Candidates",
  description:
    "Explore Talent Bridge's recruitment solutions: Executive Headhunting, Talent Sourcing, Candidate Screening, Bulk Hiring, Contract Recruitment, and Career Advisory.",
};

export default function ServicesPage() {
  const employerServices = [
    {
      badge: "Core Service",
      title: "Recruitment & Talent Sourcing",
      desc: "End-to-end talent discovery across diverse industries and functional areas to pinpoint top-tier candidates.",
      serviceName: "Recruitment & Talent Sourcing",
    },
    {
      badge: "Precision",
      title: "Candidate Screening",
      desc: "Thorough multi-stage qualification, technical checks, behavioral assessment, and background verification.",
      serviceName: "Candidate Screening",
    },
    {
      badge: "Leadership",
      title: "Executive / Specialist Recruitment",
      desc: "Discreet, high-impact headhunting for C-suite leaders, senior directors, and niche technical specialists.",
      serviceName: "Executive / Specialist Recruitment",
    },
    {
      badge: "Scale",
      title: "Bulk Recruitment",
      desc: "High-volume hiring campaigns for business expansion, seasonal surges, and project scale-ups without quality loss.",
      serviceName: "Bulk Recruitment",
    },
    {
      badge: "Flexibility",
      title: "Temporary / Contract Recruitment",
      desc: "Agile, flexible staffing solutions for interim projects, specialized assignments, and fixed-term support.",
      serviceName: "Temporary / Contract Recruitment",
    },
    {
      badge: "Partnership",
      title: "Recruitment Support",
      desc: "Advisory, compensation benchmarking, interview structuring, and onboarding alignment for HR teams.",
      serviceName: "Recruitment Support",
    },
  ];

  const candidateServices = [
    {
      badge: "Opportunities",
      title: "Career Opportunities",
      desc: "Access curated job openings across reputable organizations aligned with your skills and long-term ambitions.",
      serviceName: "Career Opportunities",
    },
    {
      badge: "Fast Track",
      title: "Candidate Registration",
      desc: "Join our exclusive talent pool to receive proactive job alerts matching your unique profile and expertise.",
      serviceName: "Candidate Registration",
    },
    {
      badge: "Precision",
      title: "Job Matching",
      desc: "Personalized matching considering technical fit, corporate culture, compensation, and career growth potential.",
      serviceName: "Job Matching",
    },
    {
      badge: "Mentorship",
      title: "Career Guidance",
      desc: "Practical insights on resume enhancement, interview preparation, market expectations, and career progression.",
      serviceName: "Career Guidance",
    },
  ];

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-16">
        {/* Title */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Our Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            Specialized Solutions for Employers &amp; Candidates
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            Whether you require confidential executive search, full-scale team recruitment, or targeted career elevation,
            we tailor our solutions to your precise objectives.
          </p>
        </div>

        {/* Section Jump Anchors */}
        <div className="flex justify-center gap-4">
          <a
            href="#employers"
            className="btn-outline !py-2.5 !px-6 !text-[11px] !tracking-[2px]"
          >
            <span className="relative z-10 flex items-center gap-2">For Employers</span>
          </a>
          <a
            href="#jobseekers"
            className="btn-outline !py-2.5 !px-6 !text-[11px] !tracking-[2px]"
          >
            <span className="relative z-10 flex items-center gap-2">For Candidates</span>
          </a>
        </div>
      </div>

      {/* 1. EMPLOYERS SECTION */}
      <section id="employers" className="bg-white py-[80px] border-y border-[#E2ECF2] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
              For Organizations &amp; Leadership Teams
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-4">
              End-to-End Talent Acquisition
            </h2>
            <div className="w-[50px] h-[1px] bg-[#2E6F95] mb-4" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              We act as an agile extension of your human capital team, sourcing top-quartile talent with speed,
              confidentiality, and cultural alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95]">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E2ECF2]/70 flex items-center justify-between">
                  <Link
                    href={`/contact?type=employer&service=${encodeURIComponent(service.serviceName)}`}
                    className="text-link-cta"
                  >
                    <span>Inquire for role</span>
                    <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 sm:p-10 bg-[#FAF9F6] border border-[#E2ECF2] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[#4A4A4A] font-light text-sm text-center sm:text-left max-w-xl">
              Have a confidential or custom hiring brief? Speak directly with our executive recruitment partners.
            </p>
            <Link
              href="/contact?type=employer"
              className="btn-primary !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">Submit Hiring Brief</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. JOBSEEKERS SECTION */}
      <section id="jobseekers" className="bg-[#FAF9F6] py-[80px] border-b border-[#E2ECF2] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
              For Ambitious Professionals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] mb-4">
              Career Elevation &amp; Advisory
            </h2>
            <div className="w-[50px] h-[1px] bg-[#2E6F95] mb-4" />
            <p className="text-[#4A4A4A] font-light text-base leading-relaxed">
              We connect qualified candidates with reputable organizations where their skills are valued, offering
              confidential advocacy and career guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candidateServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-400 ease-in-out flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95]">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] font-light text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E2ECF2]/70 flex items-center justify-between">
                  <Link
                    href={`/contact?type=jobseeker&service=${encodeURIComponent(service.serviceName)}`}
                    className="text-link-cta"
                  >
                    <span>Explore opportunities</span>
                    <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 sm:p-10 bg-white border border-[#E2ECF2] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[#4A4A4A] font-light text-sm text-center sm:text-left max-w-xl">
              Ready to explore active vacancies or register your credentials with our candidate network?
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/careers"
                className="btn-primary !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
              >
                <span className="relative z-10 flex items-center gap-2">View Open Vacancies</span>
              </Link>
              <Link
                href="/contact?type=jobseeker"
                className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
              >
                <span className="relative z-10 flex items-center gap-2">Register Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESPOKE TALENT STRATEGY CTA */}
      <div className="max-w-[1200px] mx-auto px-5 pt-16">
        <div className="bg-[#1A1A1A] text-white p-10 sm:p-14 text-center max-w-[900px] mx-auto shadow-soft">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
            Need a Bespoke Talent Strategy?
          </h3>
          <div className="w-[40px] h-[1px] bg-[#2E6F95] mx-auto mb-4" />
          <p className="text-slate-300 font-light text-sm sm:text-base max-w-xl mx-auto mb-8">
            Our senior recruitment directors are available for confidential consultations to structure custom staffing campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge!%20I%20would%20like%20to%20schedule%20a%20consultation%20regarding%20your%20recruitment%20services."
              className="btn-accent !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">Consult via WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px] !border-white/40 !text-white hover:!bg-white hover:!text-[#1A1A1A] hover:!border-white"
            >
              <span className="relative z-10 flex items-center gap-2">Inquiry Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
