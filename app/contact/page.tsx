"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

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
    <div className="pt-32 pb-24 bg-[#FBFBF9] text-[#0A1118]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A1118] tracking-tight leading-tight">
            Connect with Talent Bridge
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
            Have a critical talent hiring requirement or exploring your next confidential executive mandate?
            Our Senior Managing Partners are ready to calibrate your solution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Immediate Response WhatsApp Card */}
            <div className="editorial-card-stone p-8 border border-[#E8E6DF] rounded-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D7A70] block mb-2">
                Direct WhatsApp Channel
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#0A1118] mb-3">
                Immediate Partner Inquiries
              </h3>

              <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed font-normal mb-6">
                Connect directly with our Managing Partners on WhatsApp for time-sensitive C-suite mandates or discreet career inquiries.
              </p>

              <a
                href="https://wa.me/94770000000?text=Hello%20Talent%20Bridge%20Executive%20Desk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-human-gold w-full !py-3 !text-xs justify-center flex items-center gap-2"
              >
                <span>WhatsApp: +94 77 000 0000</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Office & Direct Lines Card */}
            <div className="editorial-card p-8 border border-[#E8E6DF] bg-white rounded-lg space-y-6">
              <div className="pb-4 border-b border-[#E8E6DF]">
                <h3 className="font-serif text-lg font-bold text-[#0A1118]">
                  Colombo Headquarters
                </h3>
                <span className="text-xs text-[#718096]">
                  Operating across Sri Lanka, APAC &amp; EMEA
                </span>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096] mb-0.5">
                    Direct Telephone
                  </span>
                  <a
                    href="tel:+94770000000"
                    className="font-bold text-[#0A1118] hover:text-[#0D7A70] transition-colors"
                  >
                    +94 77 000 0000
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096] mb-0.5">
                    Direct Email
                  </span>
                  <a
                    href="mailto:contact@talentbridge.lk"
                    className="font-bold text-[#0A1118] hover:text-[#0D7A70] transition-colors"
                  >
                    contact@talentbridge.lk
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096] mb-0.5">
                    Executive Chambers
                  </span>
                  <p className="font-bold text-[#0A1118]">Level 4, Business Tower</p>
                  <p className="text-xs text-[#718096]">
                    Galle Road, Colombo 03, Sri Lanka
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#718096] mb-0.5">
                    Partner Operating Hours
                  </span>
                  <p className="font-bold text-[#0A1118]">
                    Monday – Friday: 8:30 AM – 5:30 PM (IST)
                  </p>
                  <p className="text-xs text-[#0D7A70] font-semibold mt-0.5">
                    All inquiries answered within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-16 text-center text-xs font-semibold text-[#718096] editorial-card bg-white">
                  Loading executive intake form...
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
