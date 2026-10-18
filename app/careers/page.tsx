"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  X,
  Send,
  Upload
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  seniority: string;
  compensation: string;
  confidential: boolean;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const sampleJobs: JobOpening[] = [
  {
    id: "tb-mandate-01",
    title: "Chief Technology Officer (CTO)",
    department: "Engineering & Technology",
    location: "Colombo, Sri Lanka / Hybrid",
    type: "Full-Time Executive",
    seniority: "C-Suite",
    compensation: "Competitive + Executive Equity",
    confidential: true,
    description:
      "Leading technical transformation and architecture for a rapidly scaling regional FinTech powerhouse backed by premier Southeast Asian venture capital.",
    responsibilities: [
      "Define and scale enterprise distributed systems supporting millions of transactions daily.",
      "Lead and mentor a high-performing engineering organization of 60+ across Colombo and Singapore.",
      "Partner with the CEO and Board on technology strategy, product roadmap, and regulatory compliance.",
    ],
    qualifications: [
      "12+ years of progressive engineering leadership with proven C-level or VP-level tenure.",
      "Deep expertise in cloud-native microservices, FinTech security, and compliance frameworks.",
      "Demonstrated track record of scaling teams from growth stage to regional market leader.",
    ],
  },
  {
    id: "tb-mandate-02",
    title: "Head of People & Human Capital",
    department: "People & Talent",
    location: "Colombo 03, Sri Lanka",
    type: "Full-Time Executive",
    seniority: "Department Head",
    compensation: "Executive Package",
    confidential: false,
    description:
      "Directing people strategy, executive talent acquisition, culture architecture, and performance frameworks for a multinational corporate enterprise.",
    responsibilities: [
      "Design and execute full-spectrum talent acquisition and retention programs.",
      "Build leadership development and succession planning pipelines.",
      "Drive organizational design initiatives aligning with international expansion goals.",
    ],
    qualifications: [
      "10+ years leading human resources in multinational or prominent corporate environments.",
      "Strong background in executive compensation modeling and organizational psychology.",
      "Exceptional bilateral stakeholder management and executive presence.",
    ],
  },
  {
    id: "tb-mandate-03",
    title: "Vice President of Enterprise Sales",
    department: "Commercial & Revenue",
    location: "Colombo / Regional APAC Travel",
    type: "Full-Time Executive",
    seniority: "VP Level",
    compensation: "Executive Base + Performance Bonus",
    confidential: true,
    description:
      "Spearheading enterprise B2B sales cycles, strategic partnerships, and commercial revenue generation across enterprise accounts.",
    responsibilities: [
      "Own regional revenue target of $15M+ across Tier-1 enterprise clients.",
      "Architect key client acquisition strategies and manage strategic enterprise RFPs.",
      "Build and lead high-performing commercial sales directors and account teams.",
    ],
    qualifications: [
      "Proven track record of exceeding multi-million dollar enterprise software or services quotas.",
      "Established C-level relationships across corporate and banking sectors.",
      "High-caliber negotiation and executive presentation capabilities.",
    ],
  },
  {
    id: "tb-mandate-04",
    title: "Principal Cloud & Security Architect",
    department: "Engineering & Technology",
    location: "Remote / Sri Lanka Based",
    type: "Full-Time Specialist",
    seniority: "Principal / Lead",
    compensation: "USD Benchmarked Package",
    confidential: false,
    description:
      "Architecting zero-trust cloud security and multi-region infrastructure for global enterprise SaaS platforms.",
    responsibilities: [
      "Formulate zero-trust architecture blueprints across AWS and Azure cloud environments.",
      "Conduct rigorous threat modeling, penetration audits, and SOC2 / ISO compliance.",
      "Serve as the foremost technical authority on cloud security and infrastructure resiliency.",
    ],
    qualifications: [
      "8+ years architecting enterprise cloud environments (AWS/Azure Certified Solutions Architect).",
      "Hands-on expertise with Kubernetes, Terraform, DevSecOps, and distributed reliability.",
      "Strong communication skills for presenting security posture to executive boards.",
    ],
  },
  {
    id: "tb-mandate-05",
    title: "Chief Financial Officer (CFO)",
    department: "Finance & Governance",
    location: "Colombo, Sri Lanka",
    type: "Full-Time Executive",
    seniority: "C-Suite",
    compensation: "Executive Mandate",
    confidential: true,
    description:
      "Confidential search mandate for an experienced CFO to lead corporate finance, capital raising, and cross-border treasury management.",
    responsibilities: [
      "Direct capital allocation, financial forecasting, and multi-currency treasury operations.",
      "Lead investor relations and audit committees through strategic fundraising rounds.",
      "Oversee tax optimization, regulatory compliance, and governance frameworks.",
    ],
    qualifications: [
      "FCA / ACCA / CFA with 15+ years of strategic finance leadership in listed or growth-stage firms.",
      "Prior experience leading M&A, debt structuring, or institutional equity rounds.",
      "Uncompromising integrity and authoritative executive leadership.",
    ],
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);

  // Talent Pool quick registration state
  const [registered, setRegistered] = useState(false);

  const departments = ["All", "Engineering & Technology", "People & Talent", "Commercial & Revenue", "Finance & Governance"];

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="pt-36 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Executive Openings & Talent Network
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              Curated leadership opportunities. Uncompromising discretion.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Browse actively calibrated mandates or join our private executive network. We provide senior professionals with confidential advocacy, direct C-level access, and zero representation fees.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Job Board */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, keyword, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
              />
            </div>

            {/* Department Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedDept === dept
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

          </div>

          {/* Results List */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <p className="text-slate-600 text-base">No active mandates found matching your search criteria.</p>
                <button
                  type="button"
                  onClick={() => { setSelectedDept("All"); setSearchQuery(""); }}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                        {job.department}
                      </span>
                      {job.confidential && (
                        <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-xs font-semibold rounded-md border border-amber-200/60">
                          Discreet Mandate
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono">
                        {job.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {job.seniority}
                      </span>
                      <span className="font-medium text-slate-900">
                        {job.compensation}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveJob(job)}
                      className="w-full md:w-auto px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors text-center"
                    >
                      View Mandate Details
                    </button>
                    <Link
                      href={`/contact?type=candidate&role=${encodeURIComponent(job.title)}`}
                      className="w-full md:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* Detail Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl space-y-6">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {activeJob.department}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                  {activeJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {activeJob.location}
                  </span>
                  <span>•</span>
                  <span>{activeJob.seniority}</span>
                  <span>•</span>
                  <span className="font-semibold text-slate-900">{activeJob.compensation}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveJob(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Mandate Overview</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{activeJob.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Core Responsibilities</h4>
              <ul className="space-y-2">
                {activeJob.responsibilities.map((r, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Target Candidate Profile</h4>
              <ul className="space-y-2">
                {activeJob.qualifications.map((q, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Mandate ID: {activeJob.id.toUpperCase()} • 100% Confidential Representation
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveJob(null)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 flex-1 sm:flex-initial"
                >
                  Close
                </button>
                <Link
                  href={`/contact?type=candidate&role=${encodeURIComponent(activeJob.title)}`}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md flex-1 sm:flex-initial text-center"
                >
                  Submit Confidential Profile
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Private Talent Network Intake Section */}
      <section id="talent-pool" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0F19] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-500/30">
                Passive Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Join our Private Executive Talent Network
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                The most transformative leadership roles are rarely advertised publicly. By registering your profile in our confidential network, you receive discrete, partner-led inquiries only when verified opportunities directly fit your trajectory.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA Discretion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Zero Fees for Candidates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Direct Partner Representation</span>
                </div>
              </div>

              <Link
                href="/contact?type=candidate"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30"
              >
                Register Your Career Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
