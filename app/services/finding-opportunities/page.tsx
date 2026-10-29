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
  Compass
} from "lucide-react";

export default function FindingOpportunitiesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Candidate Registration Form State
  const [formData, setFormData] = useState({
    // Personal & Contact
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    location: "",

    // Qualifications
    highestQualification: "Bachelor's Degree",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",

    // Skills
    primaryIndustry: "Information Technology & Software",
    coreSkills: "",
    seniorityLevel: "Senior / Lead (5-9 years)",
    languages: "English, Sinhala",

    // Experience
    currentJobTitle: "",
    currentEmployer: "",
    totalExperienceYears: "",
    noticePeriod: "1 Month",
    expectedSalary: "",
    linkedinOrCvUrl: "",
    additionalNotes: "",
  });

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const steps = [
    {
      step: "01",
      title: "Submit Candidate Profile",
      desc: "Complete the candidate registration form below with your qualifications, technical skill set, and career history. All data is encrypted and strictly confidential.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Profile Review & Mandate Mapping",
      desc: "Within 48 business hours, our Candidate Relations specialists evaluate your background against current unadvertised mandates and upcoming corporate requirements.",
      icon: Search,
    },
    {
      step: "03",
      title: "Discreet Career Consultation",
      desc: "When a strong alignment is identified, a dedicated Career Advisor arranges a confidential 1-on-1 dialogue to discuss role parameters, culture, and trajectory.",
      icon: Phone,
    },
    {
      step: "04",
      title: "Presentation to Decision-Makers",
      desc: "Only with your explicit consent, your verified profile and candidate brief are formally presented to enterprise CEOs, Board committees, or hiring executives.",
      icon: Award,
    },
    {
      step: "05",
      title: "Interview Coaching, Offer & Onboarding",
      desc: "We stand beside you through the complete interview cycle: providing briefing notes, negotiating competitive remuneration & equity, and ensuring seamless onboarding.",
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
      bio: "Oversees candidate screening, profile calibration, and confidential introductions for mid-to-senior professionals.",
    },
    {
      name: "Tharindu De Silva",
      role: "Senior Career Advisor & Candidate Advocate",
      division: "Executive Career Mentorship & Advisory",
      email: "tharindu.ds@talentbridge.lk",
      phone: "+94 77 234 5611",
      whatsapp: "94772345611",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
      bio: "Specializes in interview preparation, executive package negotiation, career pivot guidance, and leadership transitions.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>For Professionals, Specialists &amp; Executives</span>
            </div>

            {/* Bold Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              FINDING OPPORTUNITIES — <span className="text-[#059669]">CAREER ADVANCEMENT</span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              At Talent Bridge, we understand that finding the right opportunity is not about browsing generic job boards—it is about strategic alignment with organizations that value your expertise. We connect qualified candidates with exclusive, unadvertised leadership mandates and high-impact specialist roles across Sri Lanka and regional hubs, maintaining 100% discretion and zero applicant fees.
            </p>

            {/* Key Pillars */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>100% Confidential Profile Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#059669]" />
                <span>No Current Employer Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#059669]" />
                <span>Zero Fees for Candidates Always</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW WE HELP CANDIDATES: THE PROCESS & METHODOLOGY */}
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
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
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

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
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

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
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

      {/* 3. STEP-BY-STEP CANDIDATE JOURNEY */}
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
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
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
                    <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                      {st.title}
                    </h3>
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

      {/* 4. RESPONSIBLE TEAM MEMBERS WITH DIRECT WHATSAPP BUTTONS */}
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
                className="p-8 rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#059669] bg-emerald-100 px-2.5 py-0.5 rounded">
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
                      <span className="font-semibold">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#059669]" />
                      <span className="font-semibold">{member.email}</span>
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
                    className="btn-brand-green !py-2.5 !text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp {member.name.split(" ")[0]}</span>
                  </a>

                  <a
                    href={`mailto:${member.email}?subject=${encodeURIComponent(
                      "Candidate Career Inquiry — Talent Bridge"
                    )}`}
                    className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
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

      {/* 5. CANDIDATE REGISTRATION FORM */}
      <section id="registration-form" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Confidential Intake
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Candidate Registration Form
            </h2>
            <p className="text-sm text-slate-700 font-normal">
              Register your credentials confidentially with our Executive Search &amp; Placement Practice. Please provide comprehensive details regarding your qualifications, skills, and experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
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
                    onClick={() => setFormSubmitted(false)}
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
                
                {/* Section A: Name & Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2 pb-2 border-b border-slate-200">
                    <UserCheck className="w-4 h-4" />
                    <span>1. Personal &amp; Contact Details</span>
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
                </div>

                {/* Section B: Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2 pb-2 border-b border-slate-200">
                    <GraduationCap className="w-4 h-4" />
                    <span>2. Academic &amp; Professional Qualifications</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Highest Qualification *
                      </label>
                      <select
                        value={formData.highestQualification}
                        onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                      >
                        <option value="Doctorate / PhD">Doctorate / PhD</option>
                        <option value="Master's / MBA">Master&apos;s / MBA</option>
                        <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                        <option value="Chartered / Professional (CIMA/ACCA/CFA/SLIIT)">Chartered / Professional (CIMA/ACCA/CFA)</option>
                        <option value="Higher National Diploma / Diploma">Higher National Diploma / Diploma</option>
                        <option value="Other Certification">Other Certification</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Field of Study / Specialization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fieldOfStudy}
                        onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                        placeholder="e.g. Computer Science, Finance, Marketing, Law"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        University / Educational Institute *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. University of Moratuwa / Colombo / UK University"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Year of Graduation / Completion
                      </label>
                      <input
                        type="text"
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        placeholder="e.g. 2018"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Skills & Competencies */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2 pb-2 border-b border-slate-200">
                    <Sparkles className="w-4 h-4" />
                    <span>3. Core Skills &amp; Domain Expertise</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Primary Industry / Sector *
                      </label>
                      <select
                        value={formData.primaryIndustry}
                        onChange={(e) => setFormData({ ...formData, primaryIndustry: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                      >
                        <option value="Information Technology & Software">Information Technology &amp; Software</option>
                        <option value="Banking, FinTech & Capital Markets">Banking, FinTech &amp; Capital Markets</option>
                        <option value="Conglomerates & Diversified Holdings">Conglomerates &amp; Diversified Holdings</option>
                        <option value="Manufacturing, Supply Chain & Logistics">Manufacturing, Supply Chain &amp; Logistics</option>
                        <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Pharmaceuticals</option>
                        <option value="Hospitality, Leisure & Aviation">Hospitality, Leisure &amp; Aviation</option>
                        <option value="Telecommunications & Media">Telecommunications &amp; Media</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Professional Seniority Level *
                      </label>
                      <select
                        value={formData.seniorityLevel}
                        onChange={(e) => setFormData({ ...formData, seniorityLevel: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                      >
                        <option value="C-Suite (CEO, CTO, CFO, COO)">C-Suite (CEO, CTO, CFO, COO)</option>
                        <option value="Vice President / Director Level">Vice President / Director Level</option>
                        <option value="Head of Department / General Manager">Head of Department / General Manager</option>
                        <option value="Senior / Lead (5-9 years)">Senior / Lead (5-9 years)</option>
                        <option value="Mid-Level Professional (2-5 years)">Mid-Level Professional (2-5 years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Core Technical &amp; Professional Skills (Comma separated) *
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
                </div>

                {/* Section D: Experience & Compensation */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#059669] flex items-center gap-2 pb-2 border-b border-slate-200">
                    <Briefcase className="w-4 h-4" />
                    <span>4. Current Experience &amp; Career Preferences</span>
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
                        placeholder="e.g. Senior Software Architect or Finance Manager"
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
                        placeholder="e.g. Current Enterprise (Never contacted)"
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
                        Expected Monthly Salary / Band
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
                      LinkedIn Profile URL or Online CV Link
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
                      Target Role Preferences or Key Career Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Describe target industries, preferred working models (remote/hybrid), or leadership responsibilities you are pursuing..."
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
                  <span>
                    Fiduciary Promise: Your submission is never forwarded to any third party without your prior explicit agreement. Zero recruitment fees for candidates.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 disabled:opacity-60 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Encrypting & Registering..." : "Submit Candidate Registration"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
