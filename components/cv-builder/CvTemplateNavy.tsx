"use client";

import React from "react";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import Image from "next/image";

interface Props {
  cv: CvData;
}

export function CvTemplateNavy({ cv }: Props) {
  const { personal, summary, skills, experience, education, certifications, languages } = cv;

  return (
    <div className="cv-document-container bg-white text-[#0F172A] p-8 sm:p-12 shadow-md rounded-xl max-w-[850px] mx-auto border border-slate-200 print:border-none print:shadow-none print:p-0">
      {/* Top Navy Banner Header */}
      <div className="border-b-4 border-[#193A58] pb-6 mb-8 flex flex-col sm:flex-row items-start justify-between gap-6">
        <div className="space-y-1.5 flex-1">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#193A58] tracking-tight">
            {personal.fullName || "Your Full Name"}
          </h1>
          <p className="text-base font-semibold text-slate-700 tracking-wide uppercase text-sm">
            {personal.title || "Your Executive Title"}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-3 text-xs text-slate-600">
            {personal.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#193A58]" />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#193A58]" />
                {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#193A58]" />
                {personal.location}
              </span>
            )}
            {personal.linkedin && (
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#193A58]" />
                {personal.linkedin}
              </span>
            )}
            {personal.website && (
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#193A58]" />
                {personal.website}
              </span>
            )}
          </div>
        </div>

        {personal.avatarUrl && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-slate-300 flex-shrink-0">
            <Image
              src={personal.avatarUrl}
              alt={personal.fullName}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-[#193A58] border-b border-slate-300 pb-1 mb-2">
            Executive Profile
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
            {summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-[#193A58] border-b border-slate-300 pb-1 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-[#193A58]">{exp.role}</h3>
                  <span className="text-xs font-semibold text-slate-600">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-xs font-semibold italic text-slate-600">
                  {exp.company} {exp.location && `— ${exp.location}`}
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1 pt-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-[#193A58] border-b border-slate-300 pb-1 mb-2.5">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s, i) => (
              <span key={i} className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded border border-slate-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education & Credentials */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-[#193A58] border-b border-slate-300 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-slate-900">{edu.degree}</span>
                  <span className="text-slate-600"> — {edu.institution} {edu.details && `(${edu.details})`}</span>
                </div>
                <span className="font-medium text-slate-500">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
        <span>Curated Executive Dossier • Talent Bridge</span>
        <span>Confidential</span>
      </div>
    </div>
  );
}
