"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  HelpCircle,
  Building2,
  CheckCircle2
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/site-config";

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const initialType = typeParam === "candidate" ? "candidate" : "employer";

  return <ContactForm initialType={initialType} />;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="pt-36 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Direct Partner Intake
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              Let&apos;s build the right bridge for your future.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Whether you need to brief an executive search or discuss your professional career trajectory, our senior advisory team is here to guide you with complete discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Corporate Coordinates Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center text-slate-500">
                  Loading intake form...
                </div>
              }>
                <ContactFormWrapper />
              </Suspense>
            </div>

            {/* Coordinates & Advisory Info Column */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* SLA Response Guarantee Box */}
              <div className="bg-[#0B0F19] text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">24-Hour Business SLA</h3>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Guaranteed Partner Review
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every inquiry receives personalized assessment from a practice partner. We never route executive mandates to offshore bots or automated call centers.
                </p>
              </div>

              {/* Corporate Coordinates Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-950 border-b border-slate-100 pb-4">
                  Corporate Coordinates
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Office Location
                      </span>
                      <p className="text-slate-600">
                        {SITE_CONFIG.contact.address.line1}<br />
                        {SITE_CONFIG.contact.address.line2}<br />
                        {SITE_CONFIG.contact.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Inquiry Email
                      </span>
                      <a 
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Operating Hours
                      </span>
                      <p className="text-slate-600">{SITE_CONFIG.contact.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">
                        Direct WhatsApp
                      </span>
                      <a 
                        href={SITE_CONFIG.contact.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 hover:underline font-medium"
                      >
                        {SITE_CONFIG.contact.phone} (Instant Advisory)
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Strict Discretion Guarantee */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Strict Non-Disclosure Protocol
                </span>
                <p>
                  All discussions, hiring briefs, candidate resumes, and strategic organization plans are protected under bilateral non-disclosure terms.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Frequently Answered Inquiries */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Clear Answers
            </span>
            <h2 className="text-3xl font-bold text-slate-950 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is your typical turnaround time for an executive shortlist?",
                a: "Our average time to present a calibrated, pre-vetted shortlist of 3–5 finalists is 14 days from mandate ratification.",
              },
              {
                q: "Are there any fees or costs for individual job candidates?",
                a: "None. Candidate representation is 100% free. We never charge candidates for advisory, interview preparation, or placement services.",
              },
              {
                q: "How does Talent Bridge safeguard confidentiality for sensitive searches?",
                a: "For sensitive mandates (such as confidential replacements or stealth expansions), we execute strict NDAs, redact identifying details, and only disclose corporate context with mutual consent.",
              },
              {
                q: "What does the 90-day retention guarantee entail?",
                a: "If an executive placement departs or proves unsuitable within the first 90 days, we conduct a prioritized replacement search at no additional advisory fee.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
