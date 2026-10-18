"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";

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
    <div className="pt-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 pt-12">
        {/* Title */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[4px] mb-3 text-[#2E6F95]">
            Direct Line
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] font-normal leading-[1.2] tracking-normal text-[#1A1A1A]">
            Connect with Talent Bridge
          </h2>
          <div className="w-[60px] h-[1px] my-5 bg-[#2E6F95] mx-auto" aria-hidden="true" />
          <p className="text-base font-light leading-relaxed max-w-[700px] mx-auto text-[#4A4A4A]">
            Have a talent hiring requirement or seeking your next executive opportunity? Our senior
            recruitment team is here to guide you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Immediate Response WhatsApp Card */}
            <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 shadow-soft">
              <span className="block text-[10px] font-semibold uppercase tracking-[3px] text-[#DCEAF2] mb-3">
                Immediate Response
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-4">
                Fastest Response via WhatsApp
              </h3>
              <div className="w-[40px] h-[1px] bg-[#2E6F95] mb-4" />
              <p className="text-slate-300 font-light text-sm leading-relaxed mb-8">
                Chat directly with our talent acquisition team on WhatsApp for quick inquiries or urgent
                candidate mandates.
              </p>
              <a
                href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge!%20I%20would%20like%20to%20make%20an%20inquiry."
                className="btn-accent !py-[15px] !px-[35px] !text-[12px] !tracking-[3px] w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  WhatsApp: +94 77 000 0000
                </span>
              </a>
            </div>

            {/* Office & Direct Lines Card */}
            <div className="bg-white p-8 sm:p-10 border border-[#E2ECF2] shadow-soft space-y-6">
              <h3 className="font-serif text-xl font-normal text-[#1A1A1A] pb-4 border-b border-[#E2ECF2]">
                Office &amp; Direct Lines
              </h3>
              <div className="space-y-6 text-sm">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-[#999] mb-1">
                    Telephone
                  </span>
                  <a
                    href="tel:+94770000000"
                    className="font-medium text-[#1A1A1A] hover:text-[#2E6F95] transition-colors"
                  >
                    +94 77 000 0000
                  </a>
                  <p className="text-xs text-[#999] mt-0.5">Direct recruitment desk</p>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-[#999] mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:contact@talentbridge.lk"
                    className="font-medium text-[#1A1A1A] hover:text-[#2E6F95] transition-colors"
                  >
                    contact@talentbridge.lk
                  </a>
                  <p className="text-xs text-[#999] mt-0.5">Typical response within 24h</p>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-[#999] mb-1">
                    Office Address
                  </span>
                  <p className="font-medium text-[#1A1A1A]">Level 4, Business Tower</p>
                  <p className="text-xs text-[#4A4A4A] font-light">
                    Galle Road, Colombo 03, Sri Lanka
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-[#999] mb-1">
                    Operating Hours
                  </span>
                  <p className="font-medium text-[#1A1A1A]">
                    Monday – Friday: 8:30 AM – 5:30 PM
                  </p>
                  <p className="text-xs text-[#999] mt-0.5">Closed on weekends &amp; holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center text-sm font-light text-[#999]">
                  Loading inquiry form...
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
