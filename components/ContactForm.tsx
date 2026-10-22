"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Shield, Lock } from "lucide-react";

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
      <div className="editorial-card p-10 sm:p-14 border border-[#E8E6DF] bg-white text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1118] mb-3">
          Inquiry Successfully Transmitted
        </h3>
        <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 font-normal">
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
          className="btn-human-outline !py-3 !px-8 !text-xs"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="editorial-card p-8 sm:p-12 border border-[#E8E6DF] bg-white">
      {/* Tab Switcher */}
      <div className="flex border-b border-[#E8E6DF] mb-8">
        <button
          type="button"
          onClick={() => setInquiryType("employer")}
          className={`flex-1 pb-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 -mb-[1px] ${
            inquiryType === "employer"
              ? "border-[#0A1118] text-[#0A1118]"
              : "border-transparent text-[#718096] hover:text-[#0A1118]"
          }`}
        >
          Hire Talent (Organizations &amp; Boards)
        </button>
        <button
          type="button"
          onClick={() => setInquiryType("candidate")}
          className={`flex-1 pb-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 -mb-[1px] ${
            inquiryType === "candidate"
              ? "border-[#0A1118] text-[#0A1118]"
              : "border-transparent text-[#718096] hover:text-[#0A1118]"
          }`}
        >
          Find Roles (Executive Candidates)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
              className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded px-4 py-2.5 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
              className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded px-4 py-2.5 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
              className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded px-4 py-2.5 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
              className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded px-4 py-2.5 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
            className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded px-4 py-2.5 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1118] mb-2">
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
            className="w-full bg-[#FAF9F6] border border-[#E8E6DF] rounded p-3 text-xs sm:text-sm text-[#0A1118] placeholder:text-[#718096] focus:outline-none focus:border-[#0D7A70]"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-human-primary w-full !py-3.5 !text-xs justify-center flex items-center gap-2"
          >
            <span>
              {isSubmitting
                ? "Transmitting..."
                : inquiryType === "employer"
                ? "Transmit Confidential Hiring Brief"
                : "Submit Executive Profile"}
            </span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-[#718096] pt-1">
          <Lock className="w-3.5 h-3.5 text-[#0D7A70]" />
          <span>Guarded under institutional Non-Disclosure Agreement standards</span>
        </div>
      </form>
    </div>
  );
}
