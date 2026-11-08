"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { EMAIL_FIELD, NAME_FIELD, PHONE_FIELD } from "@/lib/validation";
import { submitInquiry } from "@/lib/submit-inquiry";
import { HoneypotField } from "@/components/HoneypotField";

export default function HiringTalentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    contactPerson: "",
    contactNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  // Hiring inquiries go to Yazid Kathir (see lib/inquiry.ts)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);
    try {
      await submitInquiry(
        {
          category: "hiring",
          source: "Hiring Talent page",
          name: formData.contactPerson,
          email: formData.email,
          phone: formData.contactNumber,
          company: formData.companyName,
          message: formData.message,
        },
        e.currentTarget
      );
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-36 pb-20 relative overflow-hidden">
      
      {/* Decorative Brand Curve Top Left */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#008080]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Modern Office Header Background */}
      <div className="absolute top-0 right-0 w-full max-w-xl h-96 opacity-10 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
          alt="Office background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* 1. Header Centered Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          
          {/* Eyebrow with horizontal line flanking */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#008080] uppercase">
              HIRING TALENT
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E36] tracking-tight leading-tight">
            Hiring Talent with{" "}
            <span className="text-[#008080]">Talent Bridge</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Planning to grow your team? Let us help you find the right people. Connect with our recruitment team and take the next step towards building your workforce.
          </p>
        </div>

        {/* 2. Main Content Grid: Left Contact Card & Right Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-[1100px] mx-auto">
          
          {/* Left Card: Contact Person Section (Yazid Kathir) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center justify-between">
            <div className="w-full flex flex-col items-center">
              
              {/* Professional Photograph of Yazid Kathir */}
              <div className="relative w-full max-w-[280px] aspect-[4/4.5] rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-5">
                <Image
                  src="/images/yazid-kathir.jpg"
                  alt="Yazid Kathir - Growth and Partnerships Lead at Talent Bridge"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 280px, 320px"
                />
              </div>

              {/* Name & Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E36]">
                Yazid Kathir
              </h2>
              <p className="text-sm font-semibold text-[#008080] mt-0.5">
                Growth and Partnerships Lead
              </p>

              {/* Teal Accent Divider */}
              <div className="w-14 h-0.5 bg-[#008080] rounded-full my-4" />

              {/* Contact Links */}
              <div className="w-full space-y-3 pt-1">
                {/* Phone */}
                <a
                  href="tel:+94769915939"
                  className="flex items-center justify-center gap-3 text-sm font-semibold text-slate-700 hover:text-[#008080] transition-colors py-1 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+94 76 991 5939</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:yazid@talentbridge.lk"
                  className="flex items-center justify-center gap-3 text-sm font-semibold text-slate-700 hover:text-[#008080] transition-colors py-1 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>yazid@talentbridge.lk</span>
                </a>
              </div>

            </div>

            {/* Bottom Support Badge */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Dedicated Executive Search &amp; Enterprise Staffing Desk
            </div>
          </div>

          {/* Right Card: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-teal-50 text-[#008080] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1E36]">
                  Inquiry Received
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your hiring requirements. Yazid Kathir and our recruitment team will review your mandate and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        contactPerson: "",
                        contactNumber: "",
                        email: "",
                        companyName: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0B1E36] hover:bg-[#008080] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Heading */}
                <div className="mb-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B1E36] tracking-tight">
                    Tell Us What You&apos;re Looking For
                  </h2>
                  <div className="w-14 h-1 bg-[#008080] rounded-full my-3" />
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Share your company details and requirements, and our team will get back to you shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <HoneypotField />
                  {/* Row 1: Contact Person & Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Contact Person&apos;s Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...NAME_FIELD}
                        required
                        placeholder="e.g. John Doe"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        {...PHONE_FIELD}
                        required
                        placeholder="e.g. +94 77 123 4567"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...EMAIL_FIELD}
                        required
                        placeholder="e.g. you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ABC Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your hiring needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8FAFC] text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:bg-white focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none transition-all"
                    />
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  {/* Row 4: Submit Button (Right aligned) */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0B1E36] hover:bg-[#008080] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
