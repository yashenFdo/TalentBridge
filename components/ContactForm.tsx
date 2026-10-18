"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

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
      <div className="bg-white p-10 sm:p-14 border border-[#E2ECF2] shadow-soft text-center">
        <div className="w-16 h-16 rounded-full bg-[#EEF4F8] text-[#2E6F95] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-[#2E6F95] mb-2">
          Inquiry Transmitted
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
          Thank You for Contacting Talent Bridge
        </h3>
        <p className="text-[#4A4A4A] font-light text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
          A dedicated talent consultant has received your brief and will review your specifications.
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
          className="btn-outline !py-3 !px-8 !text-[11px] !tracking-[2px]"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-12 border border-[#E2ECF2] shadow-soft">
      {/* Tab Switcher */}
      <div className="flex border-b border-[#E2ECF2] mb-8">
        <button
          type="button"
          onClick={() => setInquiryType("employer")}
          className={`flex-1 pb-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[2px] transition-all border-b-2 -mb-[1px] ${
            inquiryType === "employer"
              ? "border-[#2E6F95] text-[#1F4E6B] font-bold"
              : "border-transparent text-[#999] hover:text-[#1A1A1A]"
          }`}
        >
          Hire Talent (Employers)
        </button>
        <button
          type="button"
          onClick={() => setInquiryType("candidate")}
          className={`flex-1 pb-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[2px] transition-all border-b-2 -mb-[1px] ${
            inquiryType === "candidate"
              ? "border-[#2E6F95] text-[#1F4E6B] font-bold"
              : "border-transparent text-[#999] hover:text-[#1A1A1A]"
          }`}
        >
          Find Roles (Candidates)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
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
              className="w-full bg-[#FAF9F6] border border-[#E2ECF2] px-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. ruwan@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#FAF9F6] border border-[#E2ECF2] px-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+94 77 123 4567"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-[#FAF9F6] border border-[#E2ECF2] px-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
              {inquiryType === "employer"
                ? "Company / Organization *"
                : "Current Role / Discipline *"}
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
              className="w-full bg-[#FAF9F6] border border-[#E2ECF2] px-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
            {inquiryType === "employer"
              ? "Positions / Service Required"
              : "Target Role / Industry Focus"}
          </label>
          <input
            type="text"
            placeholder={
              inquiryType === "employer"
                ? "e.g. Chief Technology Officer, Head of People"
                : "e.g. FinTech, VP Engineering, Remote Leadership"
            }
            value={formData.serviceOrRole}
            onChange={(e) =>
              setFormData({ ...formData, serviceOrRole: e.target.value })
            }
            className="w-full bg-[#FAF9F6] border border-[#E2ECF2] px-4 py-3 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-[2px] text-[#1A1A1A] mb-2">
            Detailed Inquiry / Mandate Brief *
          </label>
          <textarea
            rows={5}
            required
            placeholder={
              inquiryType === "employer"
                ? "Please share role scope, desired seniority, key criteria, and your expected hiring timeline..."
                : "Share your professional career background, key achievements, and what you seek in your next chapter..."
            }
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-[#FAF9F6] border border-[#E2ECF2] p-4 text-sm text-[#4A4A4A] focus:outline-none focus:border-[#2E6F95] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full !py-4 !text-[12px] !tracking-[3px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting
                ? "Transmitting..."
                : inquiryType === "employer"
                ? "Submit Hiring Brief"
                : "Submit Career Profile"}
              <Send className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        <p className="text-center text-xs text-[#999] font-light">
          We respect your privacy. All inquiries are guarded under strict non-disclosure integrity.
        </p>
      </form>
    </div>
  );
}
