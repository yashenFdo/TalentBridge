"use client";

import React from "react";
import Link from "next/link";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";
import { ArrowRight, Users, Briefcase, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36">
      {/* 1. Core Solutions We Provide Section */}
      <SolutionsSection />

      {/* 2. Direct Practice Focus */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="bg-[#0B1E36] rounded-[2.5rem] p-8 sm:p-14 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                  Dedicated Recruitment Desk
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Connect Directly With Our Practice Leads
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  Whether you are planning workforce growth for your enterprise or actively navigating your next career advancement, our dedicated advisors are ready to connect.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  href="/hiring-talent"
                  className="bg-[#008080] hover:bg-[#006e6e] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all text-center inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <Users className="w-4 h-4" />
                  <span>Hiring Talent Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/opportunities"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-teal-400" />
                  <span>Candidate Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Let's Connect Section */}
      <ConnectInquirySection />
    </div>
  );
}
