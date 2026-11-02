"use client";

import React from "react";
import Link from "next/link";
import { Users, Briefcase, Check, ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const hiringBulletsLeft = [
    "Vacancy Consultation",
    "Talent Sourcing",
    "Candidate Screening",
  ];

  const hiringBulletsRight = [
    "Shortlisting",
    "Interview Coordination",
    "Candidate Profile Submission",
  ];

  const candidateBulletsLeft = [
    "Candidate Registration",
    "CV/Profile Submission",
    "Opportunity Matching",
  ];

  const candidateBulletsRight = [
    "Career Opportunity Guidance",
    "Interview Coordination",
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="w-12 h-1 bg-[#E5A83B] rounded-full" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E36] tracking-tight">
            SOLUTIONS WE PROVIDE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Tailored recruitment solutions designed to solve critical organizational talent needs and empower career progression.
          </p>
        </div>

        {/* Two Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Hiring Talent */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md border border-slate-200/90 flex flex-col justify-between transition-all">
            <div className="space-y-5">
              
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-4 pb-2">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-[#008080]/30 flex items-center justify-center text-[#008080] shrink-0 shadow-xs">
                  <Users className="w-7 h-7" />
                </div>
                <div className="h-10 w-[1.5px] bg-slate-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E36]">
                    Hiring Talent
                  </h3>
                  <span className="text-xs text-[#008080] font-semibold">For Organizations &amp; Businesses</span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p className="font-medium text-slate-900">
                  Looking for the right candidate for your organisation? We help businesses identify, source and connect with suitable professionals.
                </p>
                <p className="text-slate-600">
                  Connecting businesses with the right people and opportunities together to build stronger teams and drive success.
                </p>
              </div>

              {/* 2-Column Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                <div className="space-y-2">
                  {hiringBulletsLeft.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                      <Check className="w-4 h-4 text-[#008080] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {hiringBulletsRight.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                      <Check className="w-4 h-4 text-[#008080] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-6 sm:pt-8">
              <Link
                href="/hiring-talent"
                className="bg-[#008080] hover:bg-[#006e6e] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition-all shadow-sm hover:shadow inline-flex items-center gap-2 group"
              >
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Finding Opportunities */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md border border-slate-200/90 flex flex-col justify-between transition-all">
            <div className="space-y-5">
              
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-4 pb-2">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-[#008080]/30 flex items-center justify-center text-[#008080] shrink-0 shadow-xs">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="h-10 w-[1.5px] bg-slate-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1E36]">
                    Finding Opportunities
                  </h3>
                  <span className="text-xs text-[#008080] font-semibold">For Candidates &amp; Professionals</span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p className="font-medium text-slate-900">
                  Looking for your next career opportunity? We help individuals connect with suitable employment opportunities.
                </p>
                <p className="text-slate-600">
                  Connecting talented individuals with the right career opportunities, creating pathways to a brighter professional future.
                </p>
              </div>

              {/* 2-Column Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                <div className="space-y-2">
                  {candidateBulletsLeft.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                      <Check className="w-4 h-4 text-[#008080] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {candidateBulletsRight.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                      <Check className="w-4 h-4 text-[#008080] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-6 sm:pt-8">
              <Link
                href="/opportunities"
                className="bg-[#008080] hover:bg-[#006e6e] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition-all shadow-sm hover:shadow inline-flex items-center gap-2 group"
              >
                <span>Find Opportunities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

