"use client";

import React from "react";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import Image from "next/image";

interface Props {
  cv: CvData;
}

export function CvTemplateEmerald({ cv }: Props) {
  const { personal, summary, skills, experience, education, certifications, languages } = cv;

  return (
    <div className="cv-document-container bg-white text-[#1E293B] p-8 sm:p-12 shadow-md rounded-xl max-w-[850px] mx-auto border border-slate-200 print:border-none print:shadow-none print:p-0">
      {/* Header Profile Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b-2 border-[#0D9488]/30">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0D9488] bg-[#CCFBF1] px-2.5 py-1 rounded">
              Verified Candidate
            </span>
            <span className="text-xs text-slate-400">Talent Bridge Executive Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {personal.fullName || "Your Full Name"}
          </h1>
          <p className="text-lg font-semibold text-[#0D9488]">
            {personal.title || "Your Executive / Professional Title"}
          </p>

          {/* Contact Details Grid */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-600">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-[#0D9488]">
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{personal.email}</span>
              </a>
            )}
            {personal.phone && (
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-[#0D9488]">
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{personal.phone}</span>
              </a>
            )}
            {personal.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.linkedin && (
              <div className="flex items-center gap-1.5 text-slate-600">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{personal.linkedin}</span>
              </div>
            )}
            {personal.website && (
              <div className="flex items-center gap-1.5 text-slate-600">
                <Globe className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{personal.website}</span>
              </div>
            )}
          </div>
        </div>

        {personal.avatarUrl && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#0D9488] flex-shrink-0 shadow-sm">
            <Image
              src={personal.avatarUrl}
              alt={personal.fullName}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
        )}
      </div>

      {/* Executive Summary */}
      {summary && (
        <section className="py-6 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 font-normal">
            {summary}
          </p>
        </section>
      )}

      {/* Core Competencies / Skills */}
      {skills && skills.length > 0 && (
        <section className="py-6 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-3.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            Core Competencies & Leadership Capabilities
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] px-3 py-1.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <section className="py-6 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            Professional Experience & Leadership Record
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-5 border-l-2 border-[#0D9488]/40 space-y-2">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0D9488]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-bold text-[#0F172A]">{exp.role}</h3>
                  <span className="text-xs font-semibold text-[#0D9488] bg-[#F0FDFA] px-2.5 py-0.5 rounded">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-500">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700">
                    {exp.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="py-6 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            Education & Academic Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="text-sm font-bold text-[#0F172A]">{edu.degree}</h3>
                <p className="text-xs text-slate-600 mt-1">{edu.institution} {edu.location && `(${edu.location})`}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span>Conferred: {edu.year}</span>
                </div>
                {edu.details && (
                  <p className="text-[11px] text-[#0D9488] font-medium mt-1">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Languages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {certifications && certifications.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              Executive Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-xs bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{cert.name}</span>
                  <span className="text-[11px] text-slate-500">{cert.issuer} ({cert.year})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {languages && languages.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D9488] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              Language Proficiencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, lIdx) => (
                <span
                  key={lIdx}
                  className="text-xs bg-slate-100 text-slate-800 px-3 py-1.5 rounded border border-slate-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Branding in CV */}
      <div className="mt-10 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
        <span>Verified CV • Built with Talent Bridge</span>
        <span>talentbridge.lk/cv-builder</span>
      </div>
    </div>
  );
}
