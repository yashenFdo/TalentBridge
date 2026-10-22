"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { MessageSquare, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const serviceParam = searchParams.get("service") || "";
  const roleParam = searchParams.get("role") || "";

  const initialType: "employer" | "candidate" =
    typeParam === "candidate" || typeParam === "jobseeker"
      ? "candidate"
      : "employer";

  return (
    <ContactForm
      initialType={initialType}
      initialService={serviceParam}
      initialRole={roleParam}
    />
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FAFBFD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill mb-3">Direct Executive Desk</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Connect with Talent Bridge
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have a critical talent hiring requirement or exploring your next confidential executive mandate?
            Our Senior Managing Partners are ready to calibrate your solution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Immediate Response WhatsApp Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#0b1f3b] to-[#040914] text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Immediate Response</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  Fastest Advisory via WhatsApp
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  Connect directly with our Managing Partners on WhatsApp for time-sensitive C-suite mandates or discrete career inquiries.
                </p>

                <div className="pt-3">
                  <a
                    href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Executive%20Desk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-executive-primary !py-3.5 !px-6 !text-xs justify-center flex items-center gap-2 !bg-emerald-600 hover:!bg-emerald-700 !rounded-xl"
                  >
                    <span>Launch WhatsApp Concierge</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Office & Direct Lines Card */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Colombo Headquarters
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  GMT +5:30
                </span>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Direct Telephone Desk
                    </span>
                    <a
                      href="tel:+94770000000"
                      className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      +94 77 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Partner Inquiries
                    </span>
                    <a
                      href="mailto:contact@talentbridge.lk"
                      className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      contact@talentbridge.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Executive Office
                    </span>
                    <p className="font-bold text-slate-900">Level 4, Business Tower</p>
                    <p className="text-xs text-slate-500">
                      Galle Road, Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Advisory Desk Hours
                    </span>
                    <p className="font-bold text-slate-900">
                      Monday – Friday: 8:30 AM – 5:30 PM (IST)
                    </p>
                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                      Guaranteed SLA: Response within 24 business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-16 text-center text-sm font-semibold text-slate-400 glass-card rounded-3xl">
                  Loading executive inquiry interface...
                </div>
              }
            >
              <ContactFormWithParams />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
