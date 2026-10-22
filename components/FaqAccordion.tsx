"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      number: "01",
      question: "How does an executive search mandate work with Talent Bridge?",
      answer:
        "We begin with an exhaustive Board / Leadership Calibration session to define the core mandate objectives, cultural context, and success KPIs. Our research partners map the passive market directly (without public advertising), screen candidates through structured psychometric and technical evaluations, and present a calibrated shortlist of 3 to 5 top finalists within 14 business days.",
    },
    {
      number: "02",
      question: "What is your candidate vetting, reference check, and replacement guarantee?",
      answer:
        "Every candidate undergoes 360-degree blind reference checks with former board chairs, direct reports, and peers, alongside full credential and background verification. To protect our client partners, every retained placement includes a 90-day comprehensive replacement guarantee—if a candidate departs within 90 days, we conduct a replacement search at zero additional professional advisory fee.",
    },
    {
      number: "03",
      question: "How do you maintain confidentiality for sensitive or discrete leadership appointments?",
      answer:
        "Confidentiality is our primary fiduciary standard. All sensitive searches operate under coded mandate identifiers. Candidates sign non-disclosure agreements before the company identity or proprietary roadmap is revealed, ensuring competitors and current employees remain unaware of leadership transitions until public announcement.",
    },
    {
      number: "04",
      question: "How long does a typical executive placement mandate take from briefing to offer?",
      answer:
        "Our average turnaround to deliver an initial calibrated shortlist is 14 business days. Depending on candidate notice periods and board interview rounds, the typical executive placement completes within 30 to 45 calendar days—significantly faster than the 90-day traditional industry average.",
    },
    {
      number: "05",
      question: "How can candidates and leaders create and share their CV on Talent Bridge?",
      answer:
        "Any professional or executive can use our integrated Executive CV Studio (located at /cv-builder) 100% free. You can input your leadership milestones, pick from three executive-grade templates (Emerald, Oxford Navy, or Minimalist), and generate a unique public link to share anywhere—including direct 1-click WhatsApp sharing, LinkedIn posting, or print-ready PDF export.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#065F46] text-xs font-bold uppercase tracking-wider">
            <span>Transparency &amp; Governance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            FREQUENTLY ASKED <span className="text-[#059669]">QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers regarding our executive search standards, guarantees, and tools.
          </p>
        </div>

        {/* Numbered Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs hover:border-[#10B981]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm font-black text-[#059669] font-mono">
                      {faq.number}.
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#059669] text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p className="pl-7 sm:pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
