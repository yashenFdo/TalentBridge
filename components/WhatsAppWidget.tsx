"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "94770000000";
  const defaultMessage = encodeURIComponent(
    "Hello Talent Bridge team, I would like to inquire about your executive recruitment and talent solutions."
  );

  return (
    <aside
      aria-label="Direct Support Concierge"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 bg-slate-950 text-white text-xs font-medium rounded-xl shadow-2xl border border-slate-800 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Chat with our Advisory Team
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 ring-4 ring-emerald-500/20"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}
