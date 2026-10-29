"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  Search, 
  Sparkles, 
  UserCheck, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Send,
  Lock,
  Layers,
  GraduationCap,
  Award,
  Calendar,
  Compass,
  TrendingUp,
  MapPin,
  Clock,
  ChevronRight,
  EyeOff
} from "lucide-react";

export default function FindingOpportunitiesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  // Candidate Registration Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal & Contact
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    location: "",

    // Step 2: Qualifications
    highestQualification: "Bachelor's Degree",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",

    // Step 3: Skills & Domain
    primaryIndustry: "Information Technology & Software",
    seniorityLevel: "Senior / Lead (5-9 years)",
    coreSkills: "",
    languages: "English, Sinhala",

    // Step 4: Experience & Preferences
    currentJobTitle: "",
    currentEmployer: "",
    totalExperienceYears: "",
    noticePeriod: "1 Month",
    expectedSalary: "",
    linkedinOrCvUrl: "",
    targetRoles: "",
  });

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const confidentialMandates = [
    {
      id: "MANDATE-01",
      role: "Chief Technology Officer (CTO)",
      domain: "FinTech & Cloud Engineering",
      location: "Colombo / Hybrid",
      compensation: "Top-Quartile Executive Band + Equity",
      status: "Actively Reviewing Candidates",
    },
    {
      id: "MANDATE-02",
      role: "Head of People & Human Capital",
      domain: "Diversified Conglomerate",
      location: "Colombo 03",
      compensation: "Senior Executive Package",
      status: "Shortlisting Underway",
    },
    {
      id: "MANDATE-03",
      role: "Principal Solutions Architect",
      domain: "Digital Banking Transformation",
      location: "Colombo / Remote",
      compensation: "High-Caliber Technical Band",
      status: "Active Mandate",
    },
    {
      id: "MANDATE-04",
      role: "Vice President of Commercial Growth",
      domain: "Enterprise SaaS & APAC Expansion",
      location: "Colombo / Travel APAC",
      compensation: "Base + High-Performance LTIP",
      status: "Confidential Search",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Candidate Profile",
      sla: "Immediate / 5 Mins",
      desc: "Complete our encrypted candidate registration form. Your data is stored strictly in our Confidential Talent Vault under fiduciary non-disclosure.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Profile Review & Mandate Mapping",
      sla: "Within 48 Hours",
      desc: "Our Candidate Relations Practice evaluates your track record, credentials, and skills against active unadvertised mandates and forthcoming client searches.",
      icon: Search,
    },
    {
      step: "03",
      title: "Discreet Career Consultation",
      sla: "Confidential 1-on-1",
      desc: "When a potential alignment is identified, a Senior Career Advisor schedules a confidential consultation to explore role dynamics, package, and trajectory.",
      icon: Phone,
    },
    {
      step: "04",
      title: "Presentation to Decision-Makers",
      sla: "With Your Explicit Consent",
      desc: "Only after your formal approval, your verified profile is submitted directly to the CEO, Board Committee, or hiring executives.",
      icon: Award,
    },
    {
      step: "05",
      title: "Interview Prep, Offer & Onboarding",
      sla: "End-to-End Advocacy",
      desc: "We support you through interview briefing debriefs, offer and equity negotiations, non-compete reviews, and 90-day onboarding checkpoints.",
      icon: CheckCircle2,
    },
  ];

  const candidateTeam = [
    {
      name: "Sachini Alwis",
      role: "Head of Candidate Relations & Talent Placement",
      division: "Candidate Intake & Mandate Matchmaking",
      email: "sachini.alwis@talentbridge.lk",
      phone: "+94 77 234 5610",
      whatsapp: "94772345610",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      bio: "Oversees candidate screening, profile calibration, and confidential introductions for mid-to-senior professionals across Sri Lanka & regional markets.",
    },
    {
      name: "Tharindu De Silva",
      role: "Senior Career Advisor & Candidate Advocate",
      division: "Executive Career Mentorship & Advisory",
      email: "tharindu.ds@talentbridge.lk",
      phone: "+94 77 234 5611",
      whatsapp: "94772345611",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      bio: "Specializes in interview preparation, executive package negotiation, career pivot guidance, and leadership transitions for executives.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[#071324] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop"
            alt="Executive Career Advocacy and Leadership Search"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#071324]/96 to-[#0A192F]/88" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#34D399]">
              For Professionals, Specialists &amp; Executives
            </p>

            {/* Bold Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              FINDING OPPORTUNITIES — <span className="text-[#34D399]">CAREER ADVANCEMENT</span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              At Talent Bridge, we understand that finding the right opportunity is not about browsing generic job boards—it is about strategic alignment with organizations that value your expertise. We connect qualified candidates with exclusive, unadvertised leadership mandates and high-impact specialist roles across Sri Lanka and regional hubs, maintaining 100% discretion and zero applicant fees.
            </p>

            {/* Key Pillars */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>100% Confidential Profile Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#34D399]" />
                <span>No Current Employer Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#34D399]" />
                <span>Zero Fees for Candidates Always</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE CONFIDENTIAL MANDATES TICKER BOARD */}
      <section className="py-12 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
                <EyeOff className="w-3.5 h-3.5" />
                <span>Active Fiduciary Mandate Vault</span>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-white">
                Sample Redacted Executive Mandates In-Flight
              </h2>
            </div>
            <a
              href="#registration-wizard"
              className="btn-brand-green !py-2.5 !px-5 !text-xs font-bold shrink-0 inline-flex items-center gap-2"
            >
              <span>Register to Match</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {confidentialMandates.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{m.id}</span>
                    <span className="text-[9px] font-bold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                      {m.status}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white">{m.role}</h3>
                  <p className="text-xs text-slate-300 font-medium">{m.domain}</p>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{m.location}</span>
                  </div>
                  <div className="text-emerald-300 font-semibold">{m.compensation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE HELP CANDIDATES: METHODOLOGY */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              How Talent Bridge Connects You With Opportunities
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              More than 70% of executive and senior specialist opportunities are never advertised publicly. We serve as your direct, trusted link to decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Unadvertised Executive Mandates
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Companies retain Talent Bridge on exclusive searches. When you register, your profile is evaluated for confidential openings before they ever reach the open market.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Executive Trajectory Advocacy
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                We represent your strengths, accomplishments, and leadership style directly to Board Chairs, CEOs, and HR Heads, ensuring you are evaluated beyond simple keywords.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Offer &amp; Package Structuring
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                We advise on competitive compensation benchmarks, equity, performance bonuses, non-competes, and relocation benefits to ensure you receive true market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP CANDIDATE JOURNEY */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-14">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Step-by-Step Roadmap
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Steps to Follow: From Submission to Placement
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              Follow these simple steps to register your credentials and engage directly with our Candidate Advisory Practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-extrabold text-[#059669]">
                        {st.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {st.sla}
                      </span>
                      <h3 className="text-sm font-bold text-[#0F172A] leading-snug mt-1.5">
                        {st.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. RESPONSIBLE TEAM MEMBERS WITH DIRECT WHATSAPP BUTTONS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Direct Contact Channels
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Candidate Relations &amp; Career Advisory Team
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              Connect directly with our team members responsible for candidate registration, profile evaluation, and career mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candidateTeam.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] border border-slate-200 bg-[#F8FAFC] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#059669] block">
                        {member.division}
                      </span>
                      <h3 className="font-display text-xl font-extrabold text-[#0F172A] mt-1">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-semibold">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  <div className="space-y-2 text-xs text-slate-800 pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#059669]" />
                      <a href={`tel:${member.phone}`} className="font-bold text-slate-900 hover:text-[#059669]">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#059669]" />
                      <a href={`mailto:${member.email}`} className="font-bold text-slate-900 hover:text-[#059669]">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Contact Button & Email Button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(
                      `Hello ${member.name}, I am an interested candidate and would like to speak regarding career opportunities with Talent Bridge.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brand-green !py-3 !text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp {member.name.split(" ")[0]}</span>
                  </a>

                  <a
                    href={`mailto:${member.email}?subject=${encodeURIComponent(
                      "Candidate Career Inquiry — Talent Bridge"
                    )}`}
                    className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 py-3 px-3 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail className="w-4 h-4 text-[#059669]" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE CANDIDATE REGISTRATION WIZARD */}
      <section id="registration-wizard" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Confidential Intake
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Candidate Registration Portal
            </h2>
            <p className="text-sm text-slate-700 font-normal">
              Register your credentials confidentially with our Executive Search &amp; Placement Practice. Please provide comprehensive details regarding your qualifications, skills, and experience.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 sm:p-12 shadow-xl shadow-slate-900/5">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  Candidate Registration Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your dossier has been securely entered into our Confidential Executive Talent Vault. Our Candidate Relations Team (<span className="font-bold text-slate-900">Sachini Alwis &amp; Tharindu De Silva</span>) will review your information against active mandates and contact you directly.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setActiveStep(1);
                    }}
                    className="btn-brand-green !py-2.5 !px-6 !text-xs font-bold"
                  >
                    Edit / Register Another Profile
                  </button>
                  <Link
                    href="/cv-builder"
                    className="btn-brand-navy !py-2.5 !px-6 !text-xs font-bold"
                  >
                    Build Formatted CV
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCandidateSubmit} className="space-y-8">
                
                {/* Step Indicators */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 overflow-x-auto no-scrollbar gap-4">
                  {[
                    { num: 1, label: "Personal & Contact" },
                    { num: 2, label: "Qualifications" },
                    { num: 3, label: "Skills & Domain" },
                    { num: 4, label: "Career & Salary" },
                  ].map((s) => (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => setActiveStep(s.num)}
                      className={`flex items-center gap-2 pb-2 text-xs font-bold border-b-2 -mb-[21px] transition-all whitespace-nowrap ${
                        activeStep === s.num
                          ? "border-[#059669] text-[#059669]"
                          : "border-transparent text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold ${
                        activeStep === s.num
                          ? "bg-[#059669] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        {s.num}
                      </span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>

                {/* Step 1: Personal & Contact Details */}
                {activeStep === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2">
                      <UserCheck className="w-4 h-4" />
                      <span>Step 1 of 4: Personal &amp; Contact Details</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Kasun Bandara"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="kasun.bandara@example.com"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Telephone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+94 77 000 0000"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="+94 77 000 0000"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Current City / Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Colombo / Kandy / Overseas"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="btn-brand-green !py-3 !px-6 !text-xs font-bold flex items-center gap-2"
                      >
                        <span>Next: Qualifications</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Qualifications */}
                {activeStep === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Step 2 of 4: Academic &amp; Professional Qualifications</span>
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Highest Qualification Level *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Doctorate / PhD",
                          "Master's / MBA",
                          "Bachelor's Degree",
                          "Chartered Professional (CIMA/ACCA/CFA)",
                          "Higher National Diploma",
                        ].map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => setFormData({ ...formData, highestQualification: q })}
                            className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all ${
                              formData.highestQualification === q
                                ? "bg-[#059669] text-white shadow-xs"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Field of Study / Degree Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fieldOfStudy}
                          onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                          placeholder="e.g. Computer Science, Finance, Law, Marketing"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          University / Institution *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          placeholder="e.g. University of Moratuwa / Colombo / UK Degree"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Graduation / Completion Year
                      </label>
                      <input
                        type="text"
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        placeholder="e.g. 2018"
                        className="w-full sm:w-1/2 text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        &larr; Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="btn-brand-green !py-3 !px-6 !text-xs font-bold flex items-center gap-2"
                      >
                        <span>Next: Skills &amp; Domain</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Skills & Domain */}
                {activeStep === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Step 3 of 4: Core Skills &amp; Seniority</span>
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Professional Seniority Level *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "C-Suite (CEO, CTO, CFO, COO)",
                          "VP / Director Level",
                          "Head of Department / GM",
                          "Senior / Lead (5-9 years)",
                          "Mid-Level (2-5 years)",
                        ].map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setFormData({ ...formData, seniorityLevel: lvl })}
                            className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all ${
                              formData.seniorityLevel === lvl
                                ? "bg-[#059669] text-white shadow-xs"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Primary Industry Domain *
                        </label>
                        <select
                          value={formData.primaryIndustry}
                          onChange={(e) => setFormData({ ...formData, primaryIndustry: e.target.value })}
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                        >
                          <option value="Information Technology & Software">Information Technology &amp; Software</option>
                          <option value="Banking, FinTech & Capital Markets">Banking, FinTech &amp; Capital Markets</option>
                          <option value="Conglomerates & Diversified Holdings">Conglomerates &amp; Diversified Holdings</option>
                          <option value="Manufacturing & Supply Chain">Manufacturing &amp; Supply Chain</option>
                          <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Pharmaceuticals</option>
                          <option value="Hospitality, Leisure & Aviation">Hospitality, Leisure &amp; Aviation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Languages Spoken *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.languages}
                          onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                          placeholder="e.g. English, Sinhala, Tamil"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Core Technical &amp; Leadership Skills (Comma-separated) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.coreSkills}
                        onChange={(e) => setFormData({ ...formData, coreSkills: e.target.value })}
                        placeholder="e.g. Cloud Architecture, React, Python, Financial Modeling, Agile Transformation, P&L Ownership"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        &larr; Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(4)}
                        className="btn-brand-green !py-3 !px-6 !text-xs font-bold flex items-center gap-2"
                      >
                        <span>Next: Career &amp; Preferences</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Experience & Preferences */}
                {activeStep === 4 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Step 4 of 4: Current Experience &amp; Preferences</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Current Job Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.currentJobTitle}
                          onChange={(e) => setFormData({ ...formData, currentJobTitle: e.target.value })}
                          placeholder="e.g. Senior Software Architect"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Current Employer (Held in Strict Discretion) *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.currentEmployer}
                          onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
                          placeholder="e.g. Current Company (Never contacted)"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Total Experience (Years) *
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
                          max="50"
                          value={formData.totalExperienceYears}
                          onChange={(e) => setFormData({ ...formData, totalExperienceYears: e.target.value })}
                          placeholder="e.g. 8"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Notice Period *
                        </label>
                        <select
                          value={formData.noticePeriod}
                          onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                        >
                          <option value="Immediate Available">Immediate Available</option>
                          <option value="2 Weeks">2 Weeks</option>
                          <option value="1 Month">1 Month</option>
                          <option value="2 Months">2 Months</option>
                          <option value="3 Months">3 Months</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Expected Salary Band
                        </label>
                        <input
                          type="text"
                          value={formData.expectedSalary}
                          onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                          placeholder="e.g. LKR 450,000+ or USD"
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        LinkedIn Profile URL or Resume Link
                      </label>
                      <input
                        type="url"
                        value={formData.linkedinOrCvUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinOrCvUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/yourprofile or Google Drive / Talent Bridge link"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Target Role Ambitions or Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.targetRoles}
                        onChange={(e) => setFormData({ ...formData, targetRoles: e.target.value })}
                        placeholder="Describe preferred roles, remote/hybrid flexibility, or leadership aspirations..."
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
                      <span>
                        Fiduciary Promise: Your credentials are held under strict non-disclosure. No presentation without prior approval. 100% free candidate service.
                      </span>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        &larr; Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-brand-green !py-4 !px-8 !text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Encrypting & Transmitting..." : "Submit Candidate Registration"}</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
