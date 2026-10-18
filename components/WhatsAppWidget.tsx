"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "94770000000";
  const defaultMessage = encodeURIComponent(
    "Hello Talent Bridge! I would like to make an inquiry."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      {/* Tooltip */}
      <div className="mb-2 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.5px] py-2 px-3.5 shadow-soft border border-white/10 transition-all duration-300 pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        <span>WhatsApp Inquiries</span>
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Talent Bridge"
        className="flex items-center justify-center w-12 h-12 bg-[#1A1A1A] hover:bg-[#2E6F95] text-white border border-white/20 hover:border-[#2E6F95] shadow-soft hover:shadow-[0_4px_20px_rgba(46,111,149,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F95]"
      >
        <MessageCircle className="w-5 h-5 text-white stroke-[2]" />
      </a>
    </div>
  );
}
