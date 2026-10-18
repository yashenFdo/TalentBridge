"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

interface Vacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Hybrid / Remote";
  level: string;
  description: string;
}

const verifiedVacancies: Vacancy[] = [
  {
    id: "tb-01",
    title: "Chief Technology Officer (CTO)",
    department: "Engineering & Technology",
    location: "Colombo / Hybrid",
    type: "Full-time",
    level: "C-Suite",
    description:
      "Lead enterprise cloud architecture and distributed engineering teams for a premier regional FinTech enterprise.",
  },
  {
    id: "tb-02",
    title: "Head of People & Human Capital",
    department: "Human Resources",
    location: "Colombo 03",
    type: "Full-time",
    level: "Director",
    description:
      "Drive organizational design, leadership succession planning, and executive retention strategy across South Asia.",
  },
  {
    id: "tb-03",
    title: "Lead Cloud Solutions Architect",
    department: "Enterprise Solutions",
    location: "Colombo / Hybrid",
    type: "Hybrid / Remote",
    level: "Lead",
    description:
      "Architect multi-region AWS/GCP infrastructure and microservices frameworks for top-tier digital transformation initiatives.",
  },
  {
    id: "tb-04",
    title: "Finance Director / CFO Advisory",
    department: "Corporate Finance",
    location: "Colombo 03",
    type: "Full-time",
    level: "Executive",
    description:
      "Direct capital allocation, financial compliance, and investor relations for a diversified conglomerate.",
  },
  {
    id: "tb-05",
    title: "Interim ERP Project Consultant",
    department: "Operations & Consulting",
    location: "Remote / Sri Lanka",
    type: "Contract",
    level: "Senior Consultant",
    description:
      "9-month interim assignment orchestrating SAP S/4HANA migration and workflow integration across supply chain units.",
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredVacancies = verifiedVacancies.filter((job) => {
    const matchesFilter =
      selectedFilter === "All" || job.type === selectedFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12">
        {/* Title */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Curated Opportunities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            Find the Right Direction for Your Career
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            Discover verified openings with reputable employers across technology, corporate finance,
            executive management, and operations.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2] shadow-soft text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
              Advocacy
            </span>
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A] mb-1">
              Direct Introductions
            </h3>
            <p className="text-xs text-[#4A4A4A] font-light">
              Direct interviews with hiring decision-makers.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2] shadow-soft text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
              Privacy
            </span>
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A] mb-1">
              100% Confidential
            </h3>
            <p className="text-xs text-[#4A4A4A] font-light">
              Your credentials are kept secure and confidential.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-6 border border-[#E2ECF2] shadow-soft text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
              Fairness
            </span>
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A] mb-1">
              Zero Candidate Fees
            </h3>
            <p className="text-xs text-[#4A4A4A] font-light">
              Our placement advisory is completely free for job seekers.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div>
          <div className="bg-[#FAF9F6] p-6 sm:p-8 border border-[#E2ECF2] mb-12 shadow-soft">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by job title, skill, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-[#E2ECF2] pl-11 pr-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["All", "Full-time", "Contract", "Hybrid / Remote"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFilter(f)}
                    className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] transition-colors border ${
                      selectedFilter === f
                        ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                        : "bg-white text-[#4A4A4A] border-[#E2ECF2] hover:border-[#2E6F95]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vacancies List */}
          <div className="space-y-6">
            {filteredVacancies.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-[#1A1A1A]">
                  No vacancies found matching your criteria.
                </p>
              </div>
            ) : (
              filteredVacancies.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-8 border border-[#E2ECF2] shadow-soft hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[2px] px-2.5 py-1 bg-[#EEF4F8] text-[#2E6F95]">
                        {job.department}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[2px] px-2.5 py-1 bg-[#FAF9F6] text-[#1A1A1A] border border-[#E2ECF2]">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A]">
                      {job.title}
                    </h3>
                    <p className="text-sm font-light text-[#4A4A4A] max-w-2xl">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#999] pt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.level}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/contact?type=jobseeker&role=${encodeURIComponent(job.title)}`}
                      className="btn-primary !py-3 !px-7 !text-[11px] !tracking-[2px]"
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        Apply Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* General Candidate Submissions Banner */}
          <div className="mt-16 p-8 sm:p-12 bg-white border border-[#E2ECF2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
                General Candidate Submissions
              </span>
              <h4 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                Don&#39;t See Your Specific Discipline Listed?
              </h4>
              <p className="text-[#4A4A4A] font-light text-sm mt-1 max-w-xl">
                Submit your credentials directly to our executive recruiters for upcoming domestic and regional opportunities.
              </p>
            </div>
            <Link
              href="/contact?type=jobseeker"
              className="btn-outline !py-[15px] !px-[35px] !text-[12px] !tracking-[3px]"
            >
              <span className="relative z-10 flex items-center gap-2">Submit Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
