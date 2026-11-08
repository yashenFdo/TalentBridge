"use client";

import React from "react";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36">
      {/* 1. Main Connect Inquiry Section */}
      <ConnectInquirySection />

      {/* 2. Office Information & SLA */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008080]">
                <Mail className="w-4 h-4" />
                <span>Email Inquiries</span>
              </div>
              <p className="text-base font-bold text-[#0B1E36]">hello@talentbridge.lk</p>
              <p className="text-xs text-slate-500">Inquiries answered within 24 business hours.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008080]">
                <Phone className="w-4 h-4" />
                <span>Direct Hotline</span>
              </div>
              <p className="text-base font-bold text-[#0B1E36]">+94 76 122 9757</p>
              <p className="text-xs text-slate-500">Monday &ndash; Friday, 8:30 AM &ndash; 5:30 PM (IST).</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008080]">
                <MapPin className="w-4 h-4" />
                <span>Headquarters</span>
              </div>
              <p className="text-base font-bold text-[#0B1E36]">Colombo, Sri Lanka</p>
              <p className="text-xs text-slate-500">Central Business District Advisory Desk.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
