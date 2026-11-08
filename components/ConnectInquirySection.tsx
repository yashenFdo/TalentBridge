"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export function ConnectInquirySection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    inquiryType: "Hiring Talent",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        
        {/* Soft Tinted Banner Container */}
        <div className="bg-[#ECF5F8] rounded-[2.5rem] p-7 sm:p-12 lg:p-16 border border-[#D5E8EE] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description & Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-1 bg-[#E5A83B] rounded-full" />

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E36] tracking-tight">
                Let&apos;s Connect
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Let&apos;s make the right connections. Reach out to us and take the next step with Talent Bridge.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Whether you&apos;re looking to hire the right talent or searching for your next career opportunity, we&apos;d love to hear from you.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3.5 pt-4">
                <a
                  href="mailto:hello@talentbridge.lk"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#008080] transition-colors text-sm font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-100/60 flex items-center justify-center text-[#008080] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@talentbridge.lk</span>
                </a>

                <a
                  href="tel:+94761229757"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#008080] transition-colors text-sm font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-100/60 flex items-center justify-center text-[#008080] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+94 76 122 9757</span>
                </a>

                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-teal-100/60 flex items-center justify-center text-[#008080] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form with Vertical Separator */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#CBDCE2] lg:pl-10">
              {formSubmitted ? (
                <div className="bg-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-teal-100 shadow-sm animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#008080] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1E36]">
                    Thank You for Connecting!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your inquiry has been delivered directly to our team. A dedicated Talent Bridge specialist will get in touch with you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#008080] hover:bg-[#006e6e] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Row 2: Email Address & Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number *"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Row 3: Inquiry Type */}
                  <div>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-white text-slate-800 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all cursor-pointer"
                    >
                      <option value="Hiring Talent">Hiring Talent (For Employers)</option>
                      <option value="Finding Opportunities">Finding Opportunities (For Candidates)</option>
                      <option value="General Inquiries">General Inquiries</option>
                    </select>
                  </div>

                  {/* Row 4: Your Message */}
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Your Message... *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008080] focus:ring-1 focus:ring-[#008080] outline-none shadow-xs transition-all"
                    />
                  </div>

                  {/* Row 5: Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#008080] hover:bg-[#006e6e] text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

