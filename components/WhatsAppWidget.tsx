"use client";

import React, { useState } from "react";
import { MessageCircle, X, Shield, ArrowUpRight } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "94770000000";
  const defaultMessage = encodeURIComponent(
    "Hello Talent Bridge Executive Advisory! I would like to make a confidential recruitment inquiry."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end no-print">
      {/* Interactive Concierge Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#071324] via-[#0b1f3b] to-[#071324] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#071324]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Talent Bridge Concierge
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Advisory Active • Avg reply &lt; 15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none"
              aria-label="Close concierge preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-slate-50/60 border-b border-slate-100 space-y-3">
            <p className="text-xs text-slate-600 leading-relaxed">
              Welcome to Talent Bridge. Connect directly with our Senior Managing Partners for confidential executive searches or executive career advisory.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>Strict bilateral NDA confidentiality standard</span>
            </div>
          </div>

          {/* Card Footer CTA */}
          <div className="p-3 bg-white flex items-center justify-between gap-3">
            <a
              href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-executive-primary !py-2.5 !px-4 !text-xs justify-center flex items-center gap-2 !bg-emerald-600 hover:!bg-emerald-700 !shadow-emerald-600/30"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all hover:shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Executive Desk</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Talent Bridge WhatsApp Concierge"
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white" />
              </span>
              <MessageCircle className="w-6 h-6 stroke-[2.2]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
