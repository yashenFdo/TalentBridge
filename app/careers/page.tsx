"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  Shield,
  Sparkles,
  Award,
  Users2,
  Lock,
} from "lucide-react";

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
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill mb-3">Curated Executive Mandates</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Find the Right Direction for Your Career
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Direct access to unadvertised leadership mandates and strategic roles across technology,
            corporate finance, executive management, and enterprise operations.
          </p>
        </div>

        {/* 3 Candidate Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="glass-card p-6 rounded-2xl border border-slate-200/90 text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Direct Decision-Maker Access
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Direct interviews facilitated with CEOs, Founders, and Hiring Committees.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/90 text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              100% Confidential Fiduciary Care
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Your identity and resume are never shared without explicit prior briefing.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/90 text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Zero Applicant Fees, Always
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Our candidate advocacy, negotiation coaching, and placement are 100% free.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/90 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by executive role, skill, department, or level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Full-time", "Contract", "Hybrid / Remote"].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSelectedFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    selectedFilter === f
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vacancies List */}
        <div className="space-y-6 mb-16">
          {filteredVacancies.length === 0 ? (
            <div className="py-20 text-center glass-card rounded-3xl p-12">
              <p className="text-lg font-bold text-slate-900">
                No vacancies found matching your criteria.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Try adjusting your search terms or register your profile with our Private Talent Network below.
              </p>
            </div>
          ) : (
            filteredVacancies.map((job) => (
              <div
                key={job.id}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {job.level}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {job.location}
                    </span>
                    {job.compensationBand && (
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        {job.compensationBand}
                      </span>
                    )}
                  </div>
                </div>

                <div className="self-end md:self-center">
                  <Link
                    href={`/contact?type=candidate&role=${encodeURIComponent(job.title)}`}
                    className="btn-executive-primary !py-3 !px-6 !text-xs flex items-center gap-2 group/btn"
                  >
                    <span>Apply Confidentially</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Private Talent Network Registration Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Private Talent Network
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              Don&#39;t See Your Exact Mandate Listed?
            </h4>
            <p className="text-slate-300 text-sm mt-2 font-normal leading-relaxed">
              Most of our C-suite and director-level appointments are conducted confidentially without public listings. Submit your profile directly to our Senior Partners for upcoming domestic and global mandates.
            </p>
          </div>
          <Link
            href="/contact?type=candidate"
            className="btn-executive-gold !py-3.5 !px-8 !text-xs flex-shrink-0"
          >
            Join Private Talent Network
          </Link>
        </div>
      </div>
    </div>
  );
}
