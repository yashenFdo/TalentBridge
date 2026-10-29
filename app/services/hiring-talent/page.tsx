"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Cpu, 
  FileCheck, 
  Users, 
  Globe2, 
  BarChart3, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  Sparkles,
  Clock,
  Award
} from "lucide-react";

export default function HiringTalentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceNeeded: "Executive & Board Search",
    roleToHire: "",
    timeline: "Immediate (1-3 weeks)",
    briefDetails: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const services = [
    {
      id: "executive-search",
      title: "Executive & Board Search",
      badge: "Flagship Practice",
      icon: Building2,
      description:
        "Discreet, retained executive search and board advisory tailored for publicly listed PLCs, conglomerates, private equity firms, and high-growth organizations.",
      purpose:
        "To identify, discreetly approach, and appoint top-tier Chief Executives (CEO, COO, CFO), Managing Directors, and Independent Non-Executive Board Members who possess the strategic vision to guide institutional growth.",
      benefits: [
        "Access to 100% passive leadership talent not active on job boards or public listings.",
        "Absolute confidentiality protected under strict bilateral non-disclosure agreements.",
        "Backed by our industry-leading 12-month retention warranty and free replacement guarantee.",
        "Exhaustive 360° leadership audit verifying track record, governance, and stakeholder diplomacy.",
      ],
      leadMember: {
        name: "Dinesh Perera",
        role: "Senior Managing Partner – Executive & Board Practice",
        email: "dinesh.perera@talentbridge.lk",
        phone: "+94 77 234 5601",
        whatsapp: "94772345601",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: "tech-leadership",
      title: "Tech, Engineering & AI Leadership Sourcing",
      badge: "High Growth",
      icon: Cpu,
      description:
        "Specialized headhunting for visionary engineering leaders, AI researchers, Chief Technology Officers, and Principal Software Architects.",
      purpose:
        "To solve the acute shortage of senior technology leadership capable of directing digital transformation, multi-region cloud infrastructure, and modern AI/ML development pipelines.",
      benefits: [
        "In-depth technical vetting conducted by domain-experienced recruitment engineers.",
        "Real-time compensation calibration for equity, sign-on bonuses, and competitive market retention.",
        "Reduced time-to-hire from 90+ days down to 18-24 business days for specialized tech architects.",
        "Access to diaspora tech leaders across APAC, Europe, and North America ready for repatriation or remote leadership.",
      ],
      leadMember: {
        name: "Kavinda Wickramasinghe",
        role: "Practice Lead – Technology & AI Engineering",
        email: "kavinda.w@talentbridge.lk",
        phone: "+94 77 234 5602",
        whatsapp: "94772345602",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: "candidate-audits",
      title: "360° Candidate Audits & Vetting",
      badge: "Risk Mitigation",
      icon: FileCheck,
      description:
        "Rigorous, independent competency validation, supervisory reference verification, credential audits, and cultural compatibility assessments.",
      purpose:
        "To safeguard organizations against costly hiring mistakes, misrepresented credentials, and cultural dissonance before employment contracts are executed.",
      benefits: [
        "Multi-stage behavioral and situational competence evaluation models.",
        "Confidential 360° background audits involving direct superiors, peers, and reporting team members.",
        "Verification of academic, legal, and financial fiduciary standings.",
        "Detailed executive dossier highlighting strengths, transition risks, and management onboarding advice.",
      ],
      leadMember: {
        name: "Nadeesha Fernando",
        role: "Head of Talent Assessment & Fiduciary Audits",
        email: "nadeesha.f@talentbridge.lk",
        phone: "+94 77 234 5603",
        whatsapp: "94772345603",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: "cohort-staffing",
      title: "Enterprise Project & Cohort Staffing",
      badge: "Scale & Expansion",
      icon: Users,
      description:
        "Coordinated talent acquisition campaigns for corporate scale-ups, market expansions, Global Capability Centers (GCCs), and division builds.",
      purpose:
        "To enable enterprises to rapidly onboard cohesive cohorts of 10 to 50+ mid-to-senior professionals without sacrificing quality, culture, or timeline.",
      benefits: [
        "Dedicated recruitment taskforce deployed exclusively on your expansion mandate.",
        "Standardized candidate assessment matrices ensuring consistency across entire cohorts.",
        "Volume-optimized placement economics and tiered retainer structures.",
        "Rapid pipeline delivery with first verified shortlists delivered within 10-14 days.",
      ],
      leadMember: {
        name: "Rohan Samarasinghe",
        role: "Director of Enterprise Solutions & Scale-Up Hiring",
        email: "rohan.s@talentbridge.lk",
        phone: "+94 77 234 5604",
        whatsapp: "94772345604",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: "diaspora-search",
      title: "Cross-Border & Diaspora Headhunting",
      badge: "Global Reach",
      icon: Globe2,
      description:
        "Strategic sourcing connecting Sri Lankan and regional enterprises with high-achieving diaspora talent across Singapore, Dubai, London, Australia, and the US.",
      purpose:
        "To repatriate global leadership experience, international governance best practices, and deep overseas market knowledge into local organizations.",
      benefits: [
        "Comprehensive relocation and repatriation advisory for candidates and families.",
        "Structuring of cross-border compensation packages, tax efficiencies, and dual-currency bands.",
        "Facilitation of remote and hybrid leadership models for international advisory boards.",
        "Access to a proprietary database of 5,000+ senior Sri Lankan diaspora professionals worldwide.",
      ],
      leadMember: {
        name: "Ananya Jayawardena",
        role: "Lead Partner – Global Diaspora & Cross-Border Mandates",
        email: "ananya.j@talentbridge.lk",
        phone: "+94 77 234 5605",
        whatsapp: "94772345605",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
      },
    },
    {
      id: "benchmarking",
      title: "Compensation Benchmarking & Org Advisory",
      badge: "Strategic Advisory",
      icon: BarChart3,
      description:
        "Real-time intelligence on executive compensation bands, competitor organizational charts, incentive schemes, and retention diagnostics.",
      purpose:
        "To provide CEOs, HR Directors, and Remuneration Committees with empirical data needed to structure competitive, retention-focused executive packages.",
      benefits: [
        "Real-time market salary telemetry across South Asia and APAC corporate hubs.",
        "Competitor headcount, structure, and reporting hierarchy mapping.",
        "Counter-offer mitigation strategies and executive retention risk assessments.",
        "Customized incentive structuring including phantom equity, LTIPs, and performance bonuses.",
      ],
      leadMember: {
        name: "Malik Senanayake",
        role: "Principal Consultant – Human Capital Analytics",
        email: "malik.s@talentbridge.lk",
        phone: "+94 77 234 5606",
        whatsapp: "94772345606",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
      },
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F0FDF4] via-white to-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>For Businesses, Boards &amp; HR Leaders</span>
            </div>

            {/* Bold Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              HIRING TALENT — <span className="text-[#059669]">RECRUITMENT SOLUTIONS</span>
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Talent Bridge delivers calibrated recruitment and executive search services engineered for organizations that cannot afford a mis-hire. We advise boardrooms, multinational corporations, and high-growth enterprises on appointing top-tier leadership and mission-critical specialists across Sri Lanka and international markets. Every mandate is governed by total discretion, empirical qualification standards, and our signature 12-month candidate retention guarantee.
            </p>

            {/* Fast Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>98% 12-Month Retention Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#059669]" />
                <span>14-Day Average Shortlist Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#059669]" />
                <span>100% Fiduciary Non-Disclosure Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING WITH PURPOSE, BENEFITS & TEAM MEMBERS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Specialized Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Our Recruitment Services &amp; Dedicated Practice Leads
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              Each practice is directed by an experienced domain partner. Browse the detailed services below, along with direct contact channels for each responsible team member.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-12">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  className="rounded-3xl border border-slate-200 bg-[#FFFFFF] shadow-sm hover:shadow-md transition-all overflow-hidden scroll-mt-28"
                >
                  <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left & Middle: Service Description, Purpose & Benefits (8 cols) */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] border border-emerald-100 flex items-center justify-center shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                            {srv.badge}
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                            {idx + 1}. {srv.title}
                          </h3>
                        </div>
                      </div>

                      {/* Overview Description */}
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {srv.description}
                      </p>

                      {/* Purpose Block */}
                      <div className="p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-[#059669] space-y-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 block">
                          Purpose of this Service:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {srv.purpose}
                        </p>
                      </div>

                      {/* Benefits to Clients */}
                      <div className="space-y-3 pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                          Key Benefits to Client Organizations:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {srv.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-700 leading-relaxed font-medium">
                                {b}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Responsible Team Member Card with WhatsApp & Email Buttons (4 cols) */}
                    <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200 p-6 space-y-5">
                      <div className="text-center space-y-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#059669] bg-emerald-100 px-2.5 py-1 rounded-full">
                          Responsible Practice Lead
                        </span>
                        <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md">
                          <Image
                            src={srv.leadMember.avatar}
                            alt={srv.leadMember.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-extrabold text-[#0F172A]">
                            {srv.leadMember.name}
                          </h4>
                          <p className="text-xs text-slate-600 font-medium mt-0.5">
                            {srv.leadMember.role}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className="font-semibold">{srv.leadMember.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 truncate">
                          <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className="font-semibold truncate">{srv.leadMember.email}</span>
                        </div>
                      </div>

                      {/* Direct WhatsApp & Email Buttons */}
                      <div className="space-y-2 pt-2">
                        {/* WhatsApp Button */}
                        <a
                          href={`https://wa.me/${srv.leadMember.whatsapp}?text=${encodeURIComponent(
                            `Hello ${srv.leadMember.name}, I am contacting you regarding Talent Bridge's ${srv.title} service for our organization.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-brand-green !py-2.5 !text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp {srv.leadMember.name.split(" ")[0]}</span>
                        </a>

                        {/* Email Button */}
                        <a
                          href={`mailto:${srv.leadMember.email}?subject=${encodeURIComponent(
                            `Inquiry: ${srv.title} — Talent Bridge`
                          )}&body=${encodeURIComponent(
                            `Dear ${srv.leadMember.name},\n\nWe would like to discuss our organization's hiring requirements regarding ${srv.title}.\n\nBest regards,\n`
                          )}`}
                          className="w-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                        >
                          <Mail className="w-4 h-4 text-[#059669]" />
                          <span>Send Email Brief</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FAST HIRING MANDATE INTAKE FORM */}
      <section id="mandate-form" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Initiate Search Mandate
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Submit Your Organization&apos;s Hiring Requirements
            </h2>
            <p className="text-sm text-slate-700 font-normal">
              Transmit your hiring specifications confidentially. A Senior Practice Partner will review your requirement and connect within 24 business hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  Hiring Requirement Successfully Transmitted
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.contactPerson}</span>. The responsible Practice Lead for <span className="font-bold text-slate-900">{formData.serviceNeeded}</span> has received your mandate brief. We guarantee a personal response within 24 business hours under strict non-disclosure.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        companyName: "",
                        contactPerson: "",
                        email: "",
                        phone: "",
                        serviceNeeded: "Executive & Board Search",
                        roleToHire: "",
                        timeline: "Immediate (1-3 weeks)",
                        briefDetails: "",
                      });
                    }}
                    className="btn-brand-green !py-2.5 !px-6 !text-xs font-bold"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Holdings PLC"
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Your Name &amp; Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Priyantha Jayasuriya, Managing Director"
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="p.jayasuriya@apexholdings.lk"
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Direct Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+94 77 123 4567"
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white font-medium"
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Role / Position(s) to Fill *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.roleToHire}
                      onChange={(e) => setFormData({ ...formData, roleToHire: e.target.value })}
                      placeholder="e.g. Chief Financial Officer or Lead Cloud Architect"
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Brief Role Overview &amp; Key Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.briefDetails}
                    onChange={(e) => setFormData({ ...formData, briefDetails: e.target.value })}
                    placeholder="Provide context regarding required experience, reporting structure, salary expectations, or target start date..."
                    className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Your submission is held under strict fiduciary non-disclosure. No public posting without authorization.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 disabled:opacity-60 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Transmitting Mandate..." : "Submit Hiring Mandate Brief"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
