"use client";

import React from "react";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { CvFooter } from "./CvFooter";

interface Props {
  cv: CvData;
  accentColor?: string;
  fontFamily?: "sans" | "serif";
  spacingDensity?: "compact" | "normal" | "comfortable";
}

export function CvTemplateExecutive({
  cv,
  fontFamily = "sans",
  spacingDensity = "normal",
}: Props) {
  const { personal, summary, skills, technicalSkills, softSkills, experience, education, certifications, languages, projects, awards } = cv;

  const fontClass = fontFamily === "serif" ? "font-serif" : "font-sans";
  const paddingClass =
    spacingDensity === "compact"
      ? "p-6 sm:p-8 space-y-4"
      : spacingDensity === "comfortable"
      ? "p-10 sm:p-14 space-y-7"
      : "p-8 sm:p-12 space-y-6";

  return (
    <div
      className={`cv-document-container cv-a4-sheet bg-white text-[#0F172A] shadow-md rounded-none max-w-[850px] mx-auto border border-slate-200 ${fontClass} ${paddingClass} flex flex-col justify-between print:!block print:!border-none print:!shadow-none print:!p-0 print:!max-w-none print:!w-full print:!m-0 print:!min-h-0 print:!h-auto print:!visible print:!opacity-100`}
    >
      <div className="space-y-6">
      {/* Executive Header Banner */}
      <header className="border-b-2 border-[#0F172A] pb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            {personal.showPhoto && personal.avatarUrl && (
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden border-2 border-[#0F172A] shrink-0 shadow-sm">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.fullName || "Candidate Photo"}
                  fill
                  className="object-cover"
                  sizes="88px"
                  unoptimized
                />
              </div>
            )}
            <div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#059669] mb-1">
                Executive Dossier
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                {personal.fullName || "Your Full Name"}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#059669] mt-0.5">
                {personal.title || "Target Executive Role"}
              </p>
            </div>
          </div>
          <div className="text-left sm:text-right text-xs text-slate-600 space-y-1">
            {personal.location && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#059669] no-print" />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.email && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#059669] no-print" />
                <a href={`mailto:${personal.email}`} className="hover:text-[#059669]">{personal.email}</a>
              </div>
            )}
            {personal.phone && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#059669] no-print" />
                <a href={`tel:${personal.phone}`} className="hover:text-[#059669]">{personal.phone}</a>
              </div>
            )}
            <div className="flex flex-wrap sm:justify-end gap-3 pt-1">
              {personal.linkedin && (
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <LinkedinIcon className="w-3 h-3 text-[#059669] no-print" />
                  <span>{personal.linkedin}</span>
                </span>
              )}
              {personal.website && (
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Globe className="w-3 h-3 text-[#059669] no-print" />
                  <span>{personal.website}</span>
                </span>
              )}
              {personal.github && (
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <GithubIcon className="w-3 h-3 text-[#059669] no-print" />
                  <span>{personal.github}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      {summary && (
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Executive Value Proposition
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
            {summary}
          </p>
        </section>
      )}

      {/* Core Competencies & Board-Level Capabilities */}
      {((skills && skills.length > 0) || (technicalSkills && technicalSkills.length > 0)) && (
        <section className="space-y-2.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Areas of Core Competency
          </h2>

          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {technicalSkills && technicalSkills.length > 0 && (
            <div className="text-xs text-slate-700 pt-1">
              <strong className="font-bold text-slate-900">Enterprise Stack & Frameworks: </strong>
              <span>{technicalSkills.join(" • ")}</span>
            </div>
          )}

          {softSkills && softSkills.length > 0 && (
            <div className="text-xs text-slate-700">
              <strong className="font-bold text-slate-900">Governance & Board Reporting: </strong>
              <span>{softSkills.join(" • ")}</span>
            </div>
          )}
        </section>
      )}

      {/* Professional Track Record */}
      {experience && experience.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Executive Career History
          </h2>

          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1.5 break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-bold text-[#059669] whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-slate-600 font-semibold">
                  <span className="text-slate-800">{exp.company}</span>
                  {exp.location && <span>{exp.location}</span>}
                </div>

                {exp.description && (
                  <p className="text-xs text-slate-600 pt-0.5 leading-relaxed italic">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="pl-1">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Projects */}
      {projects && projects.length > 0 && (
        <section className="space-y-2.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Selected Strategic Initiatives & Transformations
          </h2>
          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-0.5">
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">{proj.name} {proj.role && <span className="font-normal text-slate-600">({proj.role})</span>}</span>
                  {proj.year && <span className="text-slate-500">{proj.year}</span>}
                </div>
                <p className="text-slate-700 leading-relaxed">{proj.description}</p>
                {proj.url && <p className="text-[11px] text-emerald-700 font-mono">{proj.url}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Executive Credentials */}
      {education && education.length > 0 && (
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Academic Credentials
          </h2>
          <div className="space-y-2 text-xs sm:text-[13px]">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-x-2">
                <div>
                  <span className="font-bold text-slate-900">{edu.degree}</span>
                  <span className="text-slate-700"> — {edu.institution}</span>
                  {edu.location && <span className="text-slate-500"> ({edu.location})</span>}
                  {edu.details && <p className="text-xs text-slate-600 italic mt-0.5">{edu.details}</p>}
                </div>
                {edu.year && <span className="font-semibold text-slate-700 whitespace-nowrap">{edu.year}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Fellowships */}
      {certifications && certifications.length > 0 && (
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Board Certifications & Professional Licenses
          </h2>
          <div className="space-y-1.5 text-xs sm:text-[13px]">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-wrap items-baseline justify-between gap-x-2">
                <div>
                  <span className="font-bold text-slate-900">{cert.name}</span>
                  <span className="text-slate-700"> — {cert.issuer}</span>
                  {cert.credentialId && (
                    <span className="text-[11px] text-slate-500 ml-2 font-mono">
                      (Ref: {cert.credentialId})
                    </span>
                  )}
                </div>
                {cert.year && <span className="font-semibold text-slate-700 whitespace-nowrap">{cert.year}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="space-y-1.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Honors & Industry Recognitions
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
            {awards.map((award, i) => (
              <li key={i} className="pl-1">{award}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section className="space-y-1 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.16em] text-[#0F172A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#059669]" />
            Languages
          </h2>
          <p className="text-xs text-slate-700">
            {languages.join(" • ")}
          </p>
        </section>
      )}
      </div>

      {/* A4 Verified Dossier Footer with Copyright, Devcity Partner & QR Code */}
      <CvFooter cv={cv} />
    </div>
  );
}
