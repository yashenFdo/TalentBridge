"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Send, Sparkles, Shield, ArrowRight } from "lucide-react";

export function HeroInteractiveForm() {
  const [activeTab, setActiveTab] = useState<"client" | "candidate">("client");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [clientForm, setClientForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "Board & C-Suite Search",
  });

  const [candidateForm, setCandidateForm] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    functionalArea: "Technology & Engineering",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-w-md w-full relative z-20">
      {/* Top Segmented Tab Switcher */}
      <div className="flex items-center p-1 bg-slate-100 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => {
            setActiveTab("client");
            setSubmitted(false);
          }}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
            activeTab === "client"
              ? "bg-[#0D9488] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Hire Talent
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("candidate");
            setSubmitted(false);
          }}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
            activeTab === "candidate"
              ? "bg-[#0D9488] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Candidate Profile
        </button>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-[#F0FDFA] border-2 border-[#0D9488] text-[#0D9488] rounded-full mx-auto flex items-center justify-center">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              {activeTab === "client" ? "Consultation Request Received" : "Profile Submitted"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              {activeTab === "client"
                ? "Our Senior Search Partner will reach out within 24 business hours under strict non-disclosure."
                : "Your dossier has been routed to our confidential executive search desk."}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs font-bold text-[#0D9488] hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : activeTab === "client" ? (
        /* HIRE TALENT FORM */
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                First Name
              </label>
              <input
                type="text"
                required
                value={clientForm.firstName}
                onChange={(e) => setClientForm({ ...clientForm, firstName: e.target.value })}
                placeholder="Nimal"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Last Name
              </label>
              <input
                type="text"
                required
                value={clientForm.lastName}
                onChange={(e) => setClientForm({ ...clientForm, lastName: e.target.value })}
                placeholder="Silva"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Work Email Address
            </label>
            <input
              type="email"
              required
              value={clientForm.email}
              onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
              placeholder="nimal.silva@company.lk"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Mobile / Direct Phone
            </label>
            <input
              type="tel"
              required
              value={clientForm.phone}
              onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
              placeholder="+94 77 123 4567"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Practice Area / Role Level
            </label>
            <select
              value={clientForm.practice}
              onChange={(e) => setClientForm({ ...clientForm, practice: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none bg-white transition-colors"
            >
              <option value="Board & C-Suite Search">Board &amp; C-Suite Search (CEO, CTO, CFO, COO)</option>
              <option value="FinTech, Banking & PE">FinTech, Banking &amp; Private Equity</option>
              <option value="Enterprise Tech & AI">Enterprise Tech &amp; Engineering Leadership</option>
              <option value="Global Shared Services">Global Shared Services &amp; BPO</option>
              <option value="Manufacturing & Export">Manufacturing, Logistics &amp; Export</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-4 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "Submitting Inquiry..." : "Request Free Consultation"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <p className="text-[10px] text-center text-slate-400 pt-1">
            Protected by 100% Strict Non-Disclosure &bull; 24-Hour Response SLA
          </p>
        </form>
      ) : (
        /* CANDIDATE PROFILE FORM */
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Full Legal Name
            </label>
            <input
              type="text"
              required
              value={candidateForm.fullName}
              onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
              placeholder="e.g. Ruwan Fernando"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Current Executive Title
            </label>
            <input
              type="text"
              required
              value={candidateForm.title}
              onChange={(e) => setCandidateForm({ ...candidateForm, title: e.target.value })}
              placeholder="e.g. Senior Director of Engineering"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                value={candidateForm.email}
                onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                placeholder="ruwan@gmail.com"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Mobile
              </label>
              <input
                type="tel"
                required
                value={candidateForm.phone}
                onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                placeholder="+94 77 ..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] outline-none"
              />
            </div>
          </div>

          {/* CV Builder Callout Banner */}
          <div className="p-3 bg-[#F0FDFA] rounded-xl border border-[#99F6E4] flex items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-[#0F766E] block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#0D9488]" />
                Build &amp; Share Verified CV
              </span>
              <span className="text-[10px] text-slate-500">Free, fast, shareable anywhere via link or WhatsApp.</span>
            </div>
            <Link
              href="/cv-builder"
              className="text-[11px] font-bold text-white bg-[#0D9488] hover:bg-[#0F766E] px-2.5 py-1.5 rounded-lg flex-shrink-0"
            >
              Open Builder &rarr;
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-4 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "Encrypting & Submitting..." : "Submit Confidential Profile"}</span>
            <Shield className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
