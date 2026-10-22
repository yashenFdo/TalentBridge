"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Shield, Lock, Clock, Sparkles } from "lucide-react";

interface ContactFormProps {
  initialType?: "employer" | "candidate";
  initialService?: string;
  initialRole?: string;
}

export function ContactForm({
  initialType = "employer",
  initialService = "",
  initialRole = "",
}: ContactFormProps) {
  const [inquiryType, setInquiryType] = useState<"employer" | "candidate">(
    initialType
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyOrTitle: "",
    serviceOrRole: initialService || initialRole || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-200/90 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="badge-pill mb-3">Transmission Confirmed</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          Thank You for Contacting Talent Bridge
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 font-normal">
          A dedicated Senior Managing Partner has received your brief under our fiduciary NDA standard.
          We guarantee a direct response within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              companyOrTitle: "",
              serviceOrRole: "",
              message: "",
            });
          }}
          className="btn-executive-outline !py-3 !px-8 !text-xs"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-lg">
      {/* Tab Switcher */}
      <div className="flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 mb-8">
        <button
          type="button"
          onClick={() => setInquiryType("employer")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wide rounded-xl transition-all duration-200 ${
            inquiryType === "employer"
              ? "bg-white text-blue-700 shadow-md font-extrabold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Hire Talent (Organizations &amp; Boards)
        </button>
        <button
          type="button"
          onClick={() => setInquiryType("candidate")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wide rounded-xl transition-all duration-200 ${
            inquiryType === "candidate"
              ? "bg-white text-emerald-700 shadow-md font-extrabold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Find Roles (Executive Candidates)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ruwan Samarasekera"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Work / Personal Email *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. ruwan@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Direct Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+94 77 123 4567"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {inquiryType === "employer"
                ? "Company / Organization *"
                : "Current Role / Company *"}
            </label>
            <input
              type="text"
              required
              placeholder={
                inquiryType === "employer"
                  ? "e.g. Apex Global Corp"
                  : "e.g. Senior Tech Lead"
              }
              value={formData.companyOrTitle}
              onChange={(e) =>
                setFormData({ ...formData, companyOrTitle: e.target.value })
              }
              className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            {inquiryType === "employer"
              ? "Positions / Practice Area Required"
              : "Target Executive Role / Industry Focus"}
          </label>
          <input
            type="text"
            placeholder={
              inquiryType === "employer"
                ? "e.g. Chief Technology Officer, VP Finance, Board Director"
                : "e.g. FinTech, VP Engineering, Remote Leadership"
            }
            value={formData.serviceOrRole}
            onChange={(e) =>
              setFormData({ ...formData, serviceOrRole: e.target.value })
            }
            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Detailed Mandate Brief / Career Aspiration *
          </label>
          <textarea
            rows={5}
            required
            placeholder={
              inquiryType === "employer"
                ? "Please share role scope, desired seniority, key competencies, team dynamics, and target start date..."
                : "Share your leadership background, core achievements, and the type of challenges you seek in your next chapter..."
            }
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-slate-50/70 border border-slate-200 rounded-2xl p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-executive-primary w-full !py-4 !text-sm justify-center flex items-center gap-2 !rounded-2xl"
          >
            <span>
              {isSubmitting
                ? "Transmitting..."
                : inquiryType === "employer"
                ? "Transmit Confidential Hiring Brief"
                : "Submit Executive Profile"}
            </span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium pt-2">
          <Lock className="w-3.5 h-3.5 text-blue-600" />
          <span>Guarded under institutional Non-Disclosure Agreement standards</span>
        </div>
      </form>
    </div>
  );
}
