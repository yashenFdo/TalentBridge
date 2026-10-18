"use client";

import React, { useState } from "react";
import { 
  Building2, 
  UserCheck, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Upload, 
  Sparkles 
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface ContactFormProps {
  initialType?: "employer" | "candidate";
}

export function ContactForm({ initialType = "employer" }: ContactFormProps) {
  const [roleType, setRoleType] = useState<"employer" | "candidate">(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    roleToFill: "",
    seniority: "executive",
    currentTitle: "",
    linkedinUrl: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate quick calibrated processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xl max-w-2xl mx-auto transition-all">
      
      {/* Tab Switcher */}
      <div className="flex rounded-2xl bg-slate-100 p-1.5 mb-8 border border-slate-200/80">
        <button
          type="button"
          onClick={() => {
            setRoleType("employer");
            setSubmitted(false);
          }}
          className={`flex-1 py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
            roleType === "employer"
              ? "bg-white text-slate-950 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Building2 className={`w-4 h-4 ${roleType === "employer" ? "text-blue-600" : "text-slate-500"}`} />
          <span>Hire Talent (Organizations)</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setRoleType("candidate");
            setSubmitted(false);
          }}
          className={`flex-1 py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
            roleType === "candidate"
              ? "bg-white text-slate-950 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <UserCheck className={`w-4 h-4 ${roleType === "candidate" ? "text-blue-600" : "text-slate-500"}`} />
          <span>Explore Roles (Professionals)</span>
        </button>
      </div>

      {submitted ? (
        <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-bold shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
            {roleType === "employer" ? "Executive Mandate Received" : "Career Profile Registered"}
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
            Thank you for connecting with Talent Bridge. A senior practice partner has been assigned to your brief and will reach out within <strong className="text-slate-900">24 business hours</strong> under strict confidentiality.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 mb-6">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Guaranteed 24-Hour Business SLA Active</span>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Submit another brief or profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Header descriptor */}
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-950">
              {roleType === "employer" ? "Tell Us About Your Hiring Objectives" : "Confidential Career Registration"}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {roleType === "employer" 
                ? "Discreet candidate mapping for board, executive, and specialized roles."
                : "Zero applicant fees. Complete confidentiality guaranteed prior to any introduction."}
            </p>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Conditional Fields: Employer */}
          {roleType === "employer" ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Apex Global Enterprises"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Role(s) to Fill *
                  </label>
                  <input
                    type="text"
                    name="roleToFill"
                    required
                    value={formData.roleToFill}
                    onChange={handleInputChange}
                    placeholder="Head of Engineering, CFO, VP Sales"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Target Mandate Seniority
                </label>
                <select
                  name="seniority"
                  value={formData.seniority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
                >
                  <option value="executive">C-Suite / Managing Director (CEO, CFO, CTO, COO)</option>
                  <option value="vp">Vice President / Department Head</option>
                  <option value="specialist">Principal / Niche Technical Specialist</option>
                  <option value="team">Multiple Role Buildout / Scaling Mandate</option>
                </select>
              </div>
            </div>
          ) : (
            /* Conditional Fields: Candidate */
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Current Title / Specialty *
                  </label>
                  <input
                    type="text"
                    name="currentTitle"
                    required
                    value={formData.currentTitle}
                    onChange={handleInputChange}
                    placeholder="Senior Product Director, VP Tech"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    LinkedIn Profile or Portfolio
                  </label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Resume Upload Pill */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Attach Resume / CV (Optional & Confidential)
                </label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-blue-400 transition-colors bg-slate-50/40">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Upload className="w-4 h-4 text-blue-600" />
                    <span>{fileName ? `Attached: ${fileName}` : "Click or drag your CV (PDF, DOCX up to 10MB)"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Details / Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              {roleType === "employer" ? "Role Scope, Timeline & Context" : "Career Aspirations & Target Environments"}
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={
                roleType === "employer"
                  ? "Describe seniority, mission, target start date, compensation parameters, or confidentiality requirements..."
                  : "Share your target roles, industry interests, compensation expectations, or preferred workplace cultures..."
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 hover:bg-white focus:bg-white transition-colors"
            ></textarea>
          </div>

          {/* Security & Confidentiality Notice */}
          <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Strict Confidentiality: Information is shared only with verified decision-makers following explicit bilateral mutual consent.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing Brief...
              </span>
            ) : (
              <>
                <span>{roleType === "employer" ? "Submit Hiring Brief" : "Register Career Profile"}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
