"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ExecutiveVaultModal } from "@/components/ExecutiveVaultModal";

interface Vacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Hybrid / Remote";
  level: string;
  compensationBand?: string;
  description: string;
}

const verifiedVacancies: Vacancy[] = [
  {
    id: "tb-01",
    title: "Chief Technology Officer (CTO)",
    department: "Engineering & AI",
    location: "Colombo / Hybrid",
    type: "Full-time",
    level: "C-Suite",
    compensationBand: "Top-Quartile Executive Band + Equity",
    description:
      "Direct enterprise cloud architecture, AI engineering pipelines, and distributed engineering squads for a premier regional FinTech scaleup.",
  },
  {
    id: "tb-02",
    title: "Head of People & Human Capital",
    department: "Human Resources",
    location: "Colombo 03",
    type: "Full-time",
    level: "Director",
    compensationBand: "Executive Package",
    description:
      "Drive organizational design, leadership succession architecture, and strategic retention frameworks across South Asia & APAC hubs.",
  },
  {
    id: "tb-03",
    title: "Lead Cloud Solutions Architect",
    department: "Enterprise Solutions",
    location: "Colombo / Remote",
    type: "Hybrid / Remote",
    level: "Principal Lead",
    compensationBand: "High-Caliber Technical Band",
    description:
      "Architect resilient multi-region AWS/GCP infrastructure and microservices frameworks for major digital banking transformation initiatives.",
  },
  {
    id: "tb-04",
    title: "Chief Financial Officer (CFO Advisory)",
    department: "Corporate Finance & Capital",
    location: "Colombo 03",
    type: "Full-time",
    level: "C-Suite",
    compensationBand: "Senior Executive Compensation",
    description:
      "Direct capital allocation, financial compliance, cross-border M&A modeling, and institutional investor relations for a diversified conglomerate.",
  },
  {
    id: "tb-05",
    title: "Interim SAP / ERP Transformation Consultant",
    department: "Operations & Consulting",
    location: "Remote / Colombo",
    type: "Contract",
    level: "Senior Consultant",
    compensationBand: "Competitive Day-Rate / Retainer",
    description:
      "9-month interim assignment orchestrating SAP S/4HANA migration, operational workflow integration, and governance across manufacturing units.",
  },
  {
    id: "tb-06",
    title: "Vice President of Global Commercial Growth",
    department: "Commercial & Strategy",
    location: "Colombo / Travel APAC",
    type: "Full-time",
    level: "VP / Executive",
    compensationBand: "Base + High-Performance Bonus",
    description:
      "Architect market penetration strategies, enterprise partnership channels, and revenue operations across regional APAC enterprise accounts.",
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  const filteredVacancies = verifiedVacancies.filter((job) => {
    const matchesFilter =
      selectedFilter === "All" || job.type === selectedFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.level.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
            Curated Executive Mandates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            Direct access to unadvertised leadership mandates and strategic roles across technology,
            corporate finance, executive management, and enterprise operations.
          </p>
        </div>

        {/* 3 Candidate Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-5xl">
          <div className="editorial-card p-6 border border-[#E8E6DF] bg-white">
            <h3 className="font-display text-lg font-bold text-[#0F172A] mb-1">
              Direct Decision-Maker Access
            </h3>
            <p className="text-xs text-[#4A5568] font-normal leading-relaxed">
              Direct interviews facilitated with CEOs, Founders, and Board Hiring Committees.
            </p>
          </div>

          <div className="editorial-card p-6 border border-[#E8E6DF] bg-white">
            <h3 className="font-display text-lg font-bold text-[#0F172A] mb-1">
              100% Confidential Fiduciary Care
            </h3>
            <p className="text-xs text-[#4A5568] font-normal leading-relaxed">
              Your identity and resume are never shared without explicit prior briefing and consent.
            </p>
          </div>

          <div className="editorial-card p-6 border border-[#E8E6DF] bg-white">
            <h3 className="font-display text-lg font-bold text-[#0F172A] mb-1">
              Zero Applicant Fees, Always
            </h3>
            <p className="text-xs text-[#4A5568] font-normal leading-relaxed">
              Our candidate advocacy, negotiation coaching, and placement are 100% free for applicants.
            </p>
          </div>
        </div>

        {/* Executive CV Builder Spotlight Banner */}
        <div className="mb-10 bg-gradient-to-r from-[#F0FDFA] via-white to-[#F0FDFA] border-2 border-[#99F6E4] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Self-Service Candidate Advantage</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Create a Verified Executive CV &amp; Share It Anywhere
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Build an international-standard Harvard/McKinsey executive resume in under 3 minutes. Share your unique public link directly on WhatsApp, LinkedIn, or print clean PDFs.
            </p>
          </div>
          <Link
            href="/cv-builder"
            className="btn-brand-green !py-3.5 !px-6 text-xs font-bold flex-shrink-0 flex items-center gap-2"
          >
            <span>Launch Free CV Builder</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Search & Filter Controls */}
        <div className="editorial-card p-4 sm:p-5 border border-[#E8E6DF] bg-white mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
              <input
                type="text"
                placeholder="Search by executive role, skill, department, or level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded-md pl-11 pr-4 py-2.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#718096] focus:outline-none focus:border-[#059669]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Full-time", "Contract", "Hybrid / Remote"].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSelectedFilter(f)}
                  className={`px-3.5 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                    selectedFilter === f
                      ? "bg-[#0F172A] text-white shadow-sm font-bold"
                      : "bg-[#F8FAFC] text-[#4A5568] hover:bg-[#EAE8E0] hover:text-[#0F172A]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vacancies List */}
        <div className="space-y-4 mb-16">
          {filteredVacancies.length === 0 ? (
            <div className="py-16 text-center editorial-card p-8 bg-white">
              <p className="font-display text-lg font-bold text-[#0F172A]">
                No active public mandates matching your search criteria.
              </p>
              <p className="text-xs sm:text-sm text-[#718096] mt-2">
                Most senior executive mandates are kept strictly confidential. Register your credentials in our Private Vault.
              </p>
            </div>
          ) : (
            filteredVacancies.map((job) => (
              <div
                key={job.id}
                className="editorial-card p-6 sm:p-8 border border-[#E8E6DF] bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="px-2 py-0.5 rounded bg-[#F8FAFC] text-[#059669] border border-[#E8E6DF]">
                      {job.department}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F8FAFC] text-[#718096] border border-[#E8E6DF]">
                      {job.type}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F8FAFC] text-[#D97706] border border-[#E8E6DF]">
                      {job.level}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5568] font-normal leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#718096] pt-1">
                    <span className="flex items-center gap-1 font-medium text-[#0F172A]">
                      <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                      {job.location}
                    </span>
                    {job.compensationBand && (
                      <span className="flex items-center gap-1 font-medium text-[#0F172A]">
                        &bull; {job.compensationBand}
                      </span>
                    )}
                  </div>
                </div>

                <div className="self-end md:self-center">
                  <Link
                    href={`/contact?type=candidate&role=${encodeURIComponent(job.title)}`}
                    className="btn-human-primary !py-2.5 !px-5 !text-xs flex items-center gap-2"
                  >
                    <span>Apply Confidentially</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Private Talent Vault Registration Banner */}
        <div className="editorial-card-stone p-8 sm:p-12 border border-[#E8E6DF] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-1">
              Private Executive Vault
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Don&#39;t See Your Exact Mandate Listed?
            </h4>
            <p className="text-[#4A5568] text-xs sm:text-sm mt-2 font-normal leading-relaxed">
              Over 70% of our C-suite and director-level appointments are unadvertised mandates conducted discreetly under non-disclosure. Submit your credentials directly to our Senior Partners.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVaultOpen(true)}
            className="btn-human-primary !py-3.5 !px-8 !text-xs flex-shrink-0"
          >
            Enter Confidential Vault
          </button>
        </div>
      </div>

      {/* Vault Modal */}
      <ExecutiveVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </div>
  );
}
