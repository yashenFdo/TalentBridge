"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";

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
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-950/20 border border-slate-200/80 max-w-md w-full relative z-20 text-[#0F172A]">
      {/* Top Segmented Tab Switcher */}
      <div className="flex items-center p-1 bg-slate-100 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => {
            setActiveTab("client");
            setSubmitted(false);
          }}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all text-center ${
            activeTab === "client"
              ? "bg-[#059669] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Hire Executive Talent
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("candidate");
            setSubmitted(false);
          }}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all text-center ${
            activeTab === "candidate"
              ? "bg-[#059669] text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Executive Network
        </button>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-50 border-2 border-[#059669] text-[#059669] rounded-full mx-auto flex items-center justify-center shadow-xs">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              {activeTab === "client" ? "Consultation Request Received" : "Profile Transmitted"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              {activeTab === "client"
                ? "A Senior Search Partner will initiate contact within 24 business hours under strict non-disclosure."
                : "Your dossier has been securely routed to our private Executive Search Practice."}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs font-bold text-[#059669] hover:underline"
            >
              Submit another request
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
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
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
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
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
              placeholder="nimal.silva@enterprise.lk"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
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
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Practice Area
            </label>
            <select
              value={clientForm.practice}
              onChange={(e) => setClientForm({ ...clientForm, practice: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none bg-white transition-colors"
            >
              <option value="Board & C-Suite Search">Board &amp; C-Suite Search (CEO, CTO, CFO, COO)</option>
              <option value="FinTech, Banking & PE">FinTech, Banking &amp; Private Equity</option>
              <option value="Enterprise Tech & AI">Enterprise Tech &amp; Engineering Leadership</option>
              <option value="Global Shared Services">Global Shared Services &amp; Capability Centers</option>
              <option value="Manufacturing & Export">Manufacturing, Logistics &amp; Export</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-brand-green w-full mt-2 !py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "Transmitting Mandate..." : "Request Talent Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-center text-slate-400 pt-1">
            Protected by Bilateral Non-Disclosure &bull; 24h Response SLA
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
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
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
              placeholder="e.g. Senior Director of Engineering / CFO"
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-colors"
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
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] outline-none"
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
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#059669] outline-none"
              />
            </div>
          </div>

          {/* CV Builder Callout Banner */}
          <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                Build &amp; Share Your Verified CV
              </span>
              <span className="text-[11px] text-emerald-700">Free, instant, shareable anywhere via link or WhatsApp.</span>
            </div>
            <Link
              href="/cv-builder"
              className="text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] px-3 py-1.5 rounded-lg flex-shrink-0 transition-colors shadow-xs"
            >
              Open &rarr;
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-brand-green w-full mt-2 !py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "Encrypting Profile..." : "Submit Confidential Profile"}</span>
            <Shield className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
