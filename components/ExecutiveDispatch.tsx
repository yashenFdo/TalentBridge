"use client";

import React, { useState } from "react";
import { Download, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export function ExecutiveDispatch() {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
    }
  };

  return (
    <div className="editorial-card-stone p-8 sm:p-12 border border-[#E8E6DF] rounded-xl my-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="editorial-kicker">
            <span>Executive Intelligence Report &bull; Q4 2026 Edition</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-[#0F172A]">
            The 2026 Sri Lanka Executive Compensation &amp; Diaspora Repatriation Study
          </h3>
          <p className="text-sm text-[#4A5568] leading-relaxed max-w-2xl font-normal">
            An audited 32-page analysis of C-suite salary benchmarks, equity structures, counter-offer dynamics, and executive retention trends across technology, financial institutions, and conglomerates.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#0F172A] pt-2">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#059669]" /> 32-Page Audited PDF
            </span>
            <span>&bull;</span>
            <span>CBSL Compliance Benchmarks</span>
            <span>&bull;</span>
            <span>Repatriation Incentive Maps</span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-[#E8E6DF]">
          {downloaded ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#059669] mx-auto" />
              <h5 className="font-display text-lg font-bold text-[#0F172A]">
                Report Dispatched
              </h5>
              <p className="text-xs text-[#718096]">
                The executive compensation dossier has been transmitted to {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                Request Executive Copy:
              </label>
              <input
                type="email"
                required
                placeholder="work.email@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E8E6DF] rounded px-3 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#059669]"
              />
              <button
                type="submit"
                className="btn-human-primary w-full !py-2.5 !text-xs justify-center flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Instant Access PDF</span>
              </button>
              <span className="block text-[10px] text-[#718096] text-center">
                Discreet distribution &bull; Zero marketing spam guaranteed.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
