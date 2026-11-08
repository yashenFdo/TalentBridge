"use client";

import React, { useState } from "react";
import { X, ShieldCheck, ArrowUpRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

const WHATSAPP_NUMBER = "94761229757"; // Talent Bridge main line: +94 76 122 9757

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const defaultMessage = encodeURIComponent(
    "Hello Talent Bridge! I would like to make an inquiry."
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end no-print">
      {/* Chat Card */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2.5rem)] max-w-[22rem] rounded-2xl bg-white shadow-[0_24px_60px_-12px_rgba(9,29,52,0.35)] ring-1 ring-slate-900/5 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="relative bg-[#091D34] px-5 py-4 text-white">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#25D366]/60 to-transparent" />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_6px_16px_rgba(37,211,102,0.35)]">
                    <WhatsappIcon className="w-[22px] h-[22px] text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#091D34]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">Talent Bridge</h4>
                  <p className="text-[11px] text-slate-300">Typically replies within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body: chat bubble */}
          <div className="px-5 py-5 bg-[#F4F7F9]">
            <div className="relative max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-slate-900/5">
              <p className="text-[13px] text-slate-700 leading-relaxed">
                Hi there 👋 Welcome to Talent Bridge. Whether you&apos;re hiring or looking for your next role, message us and our team will get back to you.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#128C7E]" />
              <span>Your conversation is kept confidential</span>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4 bg-white border-t border-slate-100">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#1DAA57] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.6)] hover:shadow-[0_12px_28px_-6px_rgba(37,211,102,0.7)] hover:brightness-105 transition-all"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>Start Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      )}

      {/* Launcher */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-[#091D34] text-white text-xs font-semibold tracking-wide shadow-[0_10px_25px_-8px_rgba(9,29,52,0.6)] ring-1 ring-white/10 hover:bg-[#0F2D52] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Chat with us</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp chat" : "Chat with Talent Bridge on WhatsApp"}
          aria-expanded={isOpen}
          className="relative group flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white ring-4 ring-white shadow-[0_14px_30px_-8px_rgba(18,140,126,0.65)] hover:shadow-[0_18px_38px_-8px_rgba(18,140,126,0.75)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-[#25D366]/40"
        >
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping [animation-duration:2.5s] pointer-events-none" />
          )}
          {isOpen ? (
            <X className="relative w-6 h-6 stroke-[2.5]" />
          ) : (
            <WhatsappIcon className="relative w-7 h-7 sm:w-[30px] sm:h-[30px] transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>
    </div>
  );
}
