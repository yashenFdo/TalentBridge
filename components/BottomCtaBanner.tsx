"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";

export function BottomCtaBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[380px] flex items-center p-8 sm:p-14 lg:p-20 text-white border border-slate-800/40">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt="Modern corporate boardroom in Colombo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/98 via-[#0A192F]/92 to-[#071324]/85" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Managing Partner Advisory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Appoint Your Next Defining Leader.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Whether you need to brief a confidential C-suite search mandate or benchmark executive compensation, our Senior Managing Partners are ready to consult under strict non-disclosure.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Inquiry received. A Senior Search Partner will reach out within 24 business hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address..."
                  className="w-full sm:w-80 px-4 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#059669]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                >
                  <span>Request Talent Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Partner Hotline: +94 77 000 0000</span>
              </div>
              <span className="hidden sm:inline">&bull;</span>
              <span>100% Strict Non-Disclosure Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
