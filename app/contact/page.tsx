"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
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
    inquiryType: "Employer Hiring Mandate",
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
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[#071324] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Talent Bridge World Trade Center Colombo Headquarters"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#071324]/96 to-[#0A192F]/88" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#34D399]">
              Direct Advisory Access
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              CONNECT WITH <span className="text-[#34D399]">TALENT BRIDGE</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Whether you are an organization looking to retain our executive search partners or a professional exploring leadership opportunities, reach out through our official channels or send a confidential inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CONTACT LAYOUT: FORM ON LEFT, DIRECT DETAILS ON RIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: General Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#059669] block">
                  Confidential Inquiry Form
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Our Managing Partners review all incoming communications under strict non-disclosure. We respond within 24 business hours.
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
                    Thank you, <span className="font-bold text-slate-900">{contactData.fullName}</span>. Your inquiry regarding <span className="font-bold text-slate-900">{contactData.inquiryType}</span> has been dispatched to our advisory desk.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactData({
                        fullName: "",
                        email: "",
                        phone: "",
                        inquiryType: "Employer Hiring Mandate",
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
                        Full Name *
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
                        Corporate or Personal Email *
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
                        <option value="Employer Hiring Mandate">Employer Hiring Mandate</option>
                        <option value="Candidate Career Inquiry">Candidate Career Inquiry</option>
                        <option value="General Corporate Partnership">General Corporate Partnership</option>
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
                      Message / Requirement Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Please share specific requirements, organization details, or questions..."
                      className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    <span>Your details are protected under our bilateral fiduciary non-disclosure standard.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brand-green w-full !py-4 !text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Send Confidential Message"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact Cards & Headquarters (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Partner Hotline & WhatsApp */}
              <div className="p-7 sm:p-8 rounded-[2rem] bg-gradient-to-br from-[#071324] via-[#0A192F] to-[#071324] text-white shadow-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Direct WhatsApp Desk</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
                    FASTEST RESPONSE
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                    Need Immediate Consultation?
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                    Connect directly with our Managing Partners or Candidate Relations team on WhatsApp. Average response within 15 minutes.
                  </p>
                </div>

                <a
                  href="https://wa.me/94772345678?text=Hello%20Talent%20Bridge%20Team!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand-green w-full !py-3.5 !text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp (+94 77 234 5678)</span>
                </a>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Executive Landline:</span>
                    <a href="tel:+94112345678" className="font-bold text-white hover:text-emerald-400">
                      +94 11 234 5678
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Official Email:</span>
                    <a href="mailto:info@talentbridge.lk" className="font-bold text-white hover:text-emerald-400">
                      info@talentbridge.lk
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Address & Headquarters Card */}
              <div className="p-7 sm:p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-5 overflow-hidden">
                <div className="relative h-36 -mx-8 -mt-8 mb-2 overflow-hidden border-b border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                    alt="World Trade Center Colombo Headquarters"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-4 text-[10px] font-bold text-slate-800 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded shadow-xs">
                    World Trade Center Colombo
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#059669] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Office Location</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0F172A]">
                    Talent Bridge Colombo
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Level 12, West Tower, World Trade Center, Echelon Square, Colombo 01, Sri Lanka.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#059669]" />
                    <span>Mon – Fri: 8:30 AM – 6:00 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Digital Channels */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Connect on Social Networks
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#059669] hover:border-emerald-300 transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <span>{s.platform}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
