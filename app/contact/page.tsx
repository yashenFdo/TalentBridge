"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Users, 
  Briefcase, 
  Globe, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Employer Hiring Inquiry",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const departmentDesks = [
    {
      title: "Employer Hiring Desk",
      target: "For Organizations & Boards",
      description: "Direct assistance for corporate executive search, technical recruitment, and team staffing mandates.",
      lead: "Dinesh Perera",
      role: "Senior Managing Partner",
      email: "hiring@talentbridge.lk",
      phone: "+94 77 234 5601",
      whatsapp: "94772345601",
      icon: Building2,
    },
    {
      title: "Candidate Careers Desk",
      target: "For Professionals & Jobseekers",
      description: "Assistance with confidential candidate registration, profile evaluation, and unadvertised career mandates.",
      lead: "Sachini Alwis",
      role: "Head of Candidate Relations",
      email: "careers@talentbridge.lk",
      phone: "+94 77 234 5610",
      whatsapp: "94772345610",
      icon: Briefcase,
    },
    {
      title: "General Inquiries Desk",
      target: "Corporate Operations & Media",
      description: "For partnership inquiries, administrative coordination, media requests, and general office questions.",
      lead: "Corporate Desk",
      role: "Operations Secretariat",
      email: "info@talentbridge.lk",
      phone: "+94 11 234 5678",
      whatsapp: "94772345678",
      icon: Users,
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      handle: "talentbridge-lk",
      url: "https://linkedin.com/company/talentbridge-lk",
      color: "hover:text-[#0077B5]",
    },
    {
      platform: "WhatsApp Business",
      handle: "+94 77 234 5678",
      url: "https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!",
      color: "hover:text-[#25D366]",
    },
    {
      platform: "Facebook",
      handle: "@talentbridgelk",
      url: "https://facebook.com/talentbridgelk",
      color: "hover:text-[#1877F2]",
    },
    {
      platform: "X (Twitter)",
      handle: "@talentbridgelk",
      url: "https://x.com/talentbridgelk",
      color: "hover:text-[#000000]",
    },
    {
      platform: "YouTube",
      handle: "Talent Bridge Leadership",
      url: "https://youtube.com/@talentbridgelk",
      color: "hover:text-[#FF0000]",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Direct Communication Channels</span>
            </div>

            {/* Bold Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              CONNECT WITH <span className="text-[#059669]">TALENT BRIDGE</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Whether you are an organization seeking mission-critical talent, an ambitious professional exploring new horizons, or a prospective partner, our advisory teams are accessible through direct phone lines, WhatsApp channels, email, or our formal inquiry intake below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL CONTACT DETAILS & DIRECT WHATSAPP BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          
          {/* Main 3 Official Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Official Email Addresses */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#059669] block mb-1">
                  Official Email Addresses
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Direct Inboxes
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">General Inquiries:</span>
                  <a href="mailto:info@talentbridge.lk" className="font-bold text-[#0F172A] hover:text-[#059669]">
                    info@talentbridge.lk
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Employer Hiring Desk:</span>
                  <a href="mailto:hiring@talentbridge.lk" className="font-bold text-[#0F172A] hover:text-[#059669]">
                    hiring@talentbridge.lk
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Candidate Careers Desk:</span>
                  <a href="mailto:careers@talentbridge.lk" className="font-bold text-[#0F172A] hover:text-[#059669]">
                    careers@talentbridge.lk
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Official Telephones & WhatsApp */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#059669] block mb-1">
                  Telephone &amp; WhatsApp
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Direct Voice &amp; Chat Lines
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Headquarters Landline:</span>
                  <a href="tel:+94112345678" className="font-bold text-[#0F172A] hover:text-[#059669]">
                    +94 11 234 5678
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Official WhatsApp Helpline:</span>
                  <a href="https://wa.me/94772345678" target="_blank" rel="noopener noreferrer" className="font-bold text-[#059669] hover:underline flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>+94 77 234 5678</span>
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Partner Desk Mobile:</span>
                  <a href="tel:+94772345678" className="font-bold text-[#0F172A] hover:text-[#059669]">
                    +94 77 234 5678
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Business Address & Operating Hours */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#059669] block mb-1">
                  Business Address
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  Colombo Headquarters
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="font-medium text-slate-800 leading-relaxed">
                  Level 12, West Tower, World Trade Center, Echelon Square, Colombo 01, Sri Lanka.
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Mon – Fri: 8:30 AM – 6:00 PM (IST)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Dedicated WhatsApp Direct Contact Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#064E3B] via-[#059669] to-[#047857] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider uppercase">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Immediate WhatsApp Channel</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                Connect Directly on WhatsApp With Our Advisory Team
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
                Skip waiting times. Connect with our Managing Partners or Candidate Relations team for time-sensitive hiring mandates or discreet career questions. Average response time: under 15 minutes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-emerald-50 text-[#064E3B] font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#059669]" />
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. APPROPRIATE TEAM DESKS SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
              Department Routing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Contact the Appropriate Team or Service
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              Direct your inquiry to the specialized team member responsible for your specific requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departmentDesks.map((desk, idx) => {
              const IconComp = desk.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        {desk.target}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[#0F172A] mt-0.5">
                        {desk.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {desk.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-800">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Focal Lead:</span>
                        <span className="font-bold text-slate-900">{desk.lead}</span>{" "}
                        <span className="text-slate-500">({desk.role})</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Phone:</span>
                        <a href={`tel:${desk.phone}`} className="font-semibold text-slate-900 hover:text-[#059669]">
                          {desk.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Email:</span>
                        <a href={`mailto:${desk.email}`} className="font-semibold text-[#059669] hover:underline">
                          {desk.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={`https://wa.me/${desk.whatsapp}?text=${encodeURIComponent(
                        `Hello ${desk.lead}, I am contacting the ${desk.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brand-green w-full !py-2.5 !text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp {desk.lead.split(" ")[0]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GENERAL INQUIRIES CONTACT FORM & SOCIAL MEDIA LINKS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: General Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
                  Write to Us
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Contact Form for General Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Fill out the form below. We will route your inquiry to the relevant practice lead and reply within 24 business hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{contactData.fullName}</span>. Your inquiry regarding <span className="font-bold text-slate-900">{contactData.inquiryType}</span> has been dispatched to our operations team. We guarantee a response within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactData({
                        fullName: "",
                        email: "",
                        phone: "",
                        inquiryType: "Employer Hiring Inquiry",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="btn-brand-green !py-2.5 !px-6 !text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactData.fullName}
                        onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                        placeholder="e.g. Ruwan Weerakkody"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="ruwan@example.com"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="+94 77 123 4567"
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Inquiry Category *
                      </label>
                      <select
                        value={contactData.inquiryType}
                        onChange={(e) => setContactData({ ...contactData, inquiryType: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] outline-none bg-white font-medium"
                      >
                        <option value="Employer Hiring Inquiry">Employer Hiring Inquiry</option>
                        <option value="Candidate Career Inquiry">Candidate Career Inquiry</option>
                        <option value="General Corporate Partnership">General Corporate Partnership</option>
                        <option value="Media & Press">Media &amp; Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      placeholder="Brief summary of your inquiry..."
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Please provide specifics regarding your query, requirements, or timeframe..."
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    <span>Your details are stored strictly in accordance with our bilateral privacy policy.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Send General Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Social Media Links & Office Presence (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Social Media Links Card */}
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block mb-1">
                    Digital Channels
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-[#0F172A]">
                    Follow &amp; Connect On Social Media
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-normal">
                    Stay connected with market telemetry, executive leadership vacancy updates, and career advice.
                  </p>
                </div>

                <div className="space-y-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-emerald-50 group-hover:text-[#059669] transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold text-slate-900 ${social.color} transition-colors`}>
                            {social.platform}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#059669] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Dedicated Quick Action Links */}
              <div className="p-8 rounded-3xl bg-[#071324] text-white space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#34D399] block">
                  Quick Routing
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Looking For a Specific Solution?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  You can jump directly to our dedicated service pages to start a hiring mandate or submit your candidate registration dossier.
                </p>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/services/hiring-talent"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold transition-all"
                  >
                    <span>Hiring Talent — For Organizations</span>
                    <ArrowRight className="w-4 h-4 text-[#34D399]" />
                  </Link>
                  <Link
                    href="/services/finding-opportunities"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold transition-all"
                  >
                    <span>Finding Opportunities — For Candidates</span>
                    <ArrowRight className="w-4 h-4 text-[#34D399]" />
                  </Link>
                  <Link
                    href="/cv-builder"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold transition-all"
                  >
                    <span>Free ATS CV Builder</span>
                    <ArrowRight className="w-4 h-4 text-[#34D399]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
