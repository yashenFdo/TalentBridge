"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, Lock, Shield, X, FileText } from "lucide-react";

interface ExecutiveVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExecutiveVaultModal({ isOpen, onClose }: ExecutiveVaultModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [privacyLevel, setPrivacyLevel] = useState<"passive" | "active">("passive");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E8E6DF] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E6DF] bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#059669]/10 text-[#059669] flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                Confidential Executive Vault
              </h3>
              <p className="text-xs text-[#718096]">
                Institutional Non-Disclosure &amp; Career Trajectory Index
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#718096] hover:text-[#0F172A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-display text-2xl font-bold text-[#0F172A]">
              Credentials Successfully Encrypted &amp; Vaulted
            </h4>
            <p className="text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
              Your profile has been indexed into our Private Executive Network. A Senior Partner will review your trajectory and reach out under strict discretion when a calibrated mandate matches your caliber.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-human-primary !py-2.5 !px-6 !text-xs"
              >
                Close Vault
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Privacy Level Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                Discretion Level:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPrivacyLevel("passive")}
                  className={`p-3 text-left rounded border text-xs transition-all ${
                    privacyLevel === "passive"
                      ? "border-[#059669] bg-[#059669]/5"
                      : "border-[#E8E6DF] bg-white hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span className="font-bold text-[#0F172A] block mb-0.5">
                    1. Strict Passive Discretion
                  </span>
                  <span className="text-[11px] text-[#718096] block leading-tight">
                    Identity locked. We contact you for consent before releasing any details.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPrivacyLevel("active")}
                  className={`p-3 text-left rounded border text-xs transition-all ${
                    privacyLevel === "active"
                      ? "border-[#059669] bg-[#059669]/5"
                      : "border-[#E8E6DF] bg-white hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span className="font-bold text-[#0F172A] block mb-0.5">
                    2. Active Mandates Priority
                  </span>
                  <span className="text-[11px] text-[#718096] block leading-tight">
                    Immediate presentation for active verified C-Suite and board openings.
                  </span>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sanjeewa Wickramasinghe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded px-3 py-2 text-xs text-[#0F172A] focus:outline-none focus:border-[#059669]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Confidential Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. s.wickrama@personal.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded px-3 py-2 text-xs text-[#0F172A] focus:outline-none focus:border-[#059669]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Direct Mobile *</label>
                <input
                  type="tel"
                  required
                  placeholder="+94 77 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded px-3 py-2 text-xs text-[#0F172A] focus:outline-none focus:border-[#059669]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Current Executive Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Operating Officer"
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded px-3 py-2 text-xs text-[#0F172A] focus:outline-none focus:border-[#059669]"
                />
              </div>
            </div>

            {/* Drag & Drop Resume */}
            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-1">
                Executive Resume / Bio Dossier (PDF or Word)
              </label>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                className="border-2 border-dashed border-[#D1CDC4] hover:border-[#059669] rounded-lg p-6 text-center bg-[#F8FAFC] transition-colors cursor-pointer"
                onClick={() => document.getElementById("resume-upload-input")?.click()}
              >
                <input
                  id="resume-upload-input"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                {file ? (
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#059669]">
                    <FileText className="w-5 h-5" />
                    <span>{file.name}</span>
                    <span className="text-[11px] text-[#718096]">({(file.size / 1024).toFixed(0)} KB)</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <UploadCloud className="w-7 h-7 text-[#718096] mx-auto" />
                    <p className="text-xs font-semibold text-[#0F172A]">
                      Click to upload or drag &amp; drop executive CV
                    </p>
                    <p className="text-[11px] text-[#718096]">
                      PDF, DOCX up to 10MB &bull; 100% confidential under NDA
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-human-primary w-full !py-3 !text-xs justify-center flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-[#D97706]" />
                <span>Submit into Private Executive Vault</span>
              </button>
            </div>

            <p className="text-center text-[11px] text-[#718096]">
              By submitting, your profile is protected under Talent Bridge&#39;s Fiduciary Non-Disclosure Standard. Zero representation fees, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
